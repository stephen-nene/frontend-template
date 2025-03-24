# API Integration

This document describes our approach to integrating with backend APIs in our React application.

## Table of Contents

- [API Client Setup](#api-client-setup)
- [Request Organization](#request-organization)
- [Error Handling](#error-handling)
- [Authentication](#authentication)
- [Data Fetching Patterns](#data-fetching-patterns)
- [Testing API Calls](#testing-api-calls)
- [Performance Optimization](#performance-optimization)

## API Client Setup

We use Axios for API requests with a centralized configuration in `src/services/apiClient.js`.

```javascript
// src/services/apiClient.js
import axios from 'axios';

// Create Axios instance with default config
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds
});

// Request interceptor for adding auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling common errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    
    // Handle token expiration
    if (response && response.status === 401) {
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    
    // Enhance error object with more details
    const enhancedError = {
      ...error,
      isApiError: true,
      status: response?.status,
      statusText: response?.statusText,
      data: response?.data,
      message: response?.data?.message || error.message,
    };
    
    return Promise.reject(enhancedError);
  }
);

export default apiClient;
```

## Request Organization

Organize API requests by domain in separate files under `src/services/requests/`.

```javascript
// src/services/requests/auth.js
import apiClient from '../apiClient';

/**
 * Login user with email and password
 * @param {Object} credentials - User credentials
 * @param {string} credentials.email - User email
 * @param {string} credentials.password - User password
 * @returns {Promise<Object>} - Response with user data and token
 */
export const loginUser = (credentials) => {
  return apiClient.post('/auth/login', credentials);
};

/**
 * Register a new user
 * @param {Object} userData - New user data
 * @returns {Promise<Object>} - Response with user data
 */
export const registerUser = (userData) => {
  return apiClient.post('/auth/register', userData);
};

/**
 * Reset user password
 * @param {Object} data - Password reset data
 * @param {string} data.token - Reset token
 * @param {string} data.password - New password
 * @returns {Promise<Object>} - Response
 */
export const resetPassword = (data) => {
  return apiClient.post('/auth/reset-password', data);
};

/**
 * Request password reset email
 * @param {Object} data - Email data
 * @param {string} data.email - User email
 * @returns {Promise<Object>} - Response
 */
export const requestPasswordReset = (data) => {
  return apiClient.post('/auth/forgot-password', data);
};

/**
 * Get current user profile
 * @returns {Promise<Object>} - Response with user data
 */
export const fetchUserProfile = () => {
  return apiClient.get('/auth/profile');
};

/**
 * Update user profile
 * @param {Object} profileData - Updated profile data
 * @returns {Promise<Object>} - Response with updated user data
 */
export const updateUserProfile = (profileData) => {
  return apiClient.put('/auth/profile', profileData);
};

/**
 * Activate user account
 * @param {Object} data - Activation data
 * @param {string} data.token - Activation token
 * @returns {Promise<Object>} - Response
 */
export const activateAccount = (data) => {
  return apiClient.post('/auth/activate', data);
};

/**
 * Logout user
 * @returns {Promise<Object>} - Response
 */
export const logoutUser = () => {
  return apiClient.post('/auth/logout');
};
```

## Error Handling

Implement consistent error handling patterns:

```javascript
// Example in a component
import React, { useState } from 'react';
import { loginUser } from '../../services/requests/auth';
import { Button } from '../shadcn/button';
import { Input } from '../shadcn/input';
import { Alert } from '../shadcn/alert';

const LoginForm = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await loginUser({ email, password });
      
      // Store token
      localStorage.setItem('authToken', response.data.token);
      
      // Call success callback with user data
      onSuccess(response.data.user);
    } catch (err) {
      // Format error message based on API response
      if (err.isApiError) {
        // Use the message from the API if available
        setError(err.message || 'Login failed. Please try again.');
      } else {
        // Fallback error message for network issues
        setError('Network error. Please check your connection.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <Alert variant="destructive" className="mb-4">
          {error}
        </Alert>
      )}
      
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2">Email</label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isLoading}
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="password" className="block mb-2">Password</label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={isLoading}
        />
      </div>
      
      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
      </Button>
    </form>
  );
};

export default LoginForm;
```

## Authentication

### Token Management

Store authentication tokens securely:

```javascript
// src/services/auth.js
export const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem('authToken', token);
  } else {
    localStorage.removeItem('authToken');
  }
};

export const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

export const isAuthenticated = () => {
  const token = getAuthToken();
  
  if (!token) return false;
  
  // If using JWT, you can also check token expiration
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const expirationTime = payload.exp * 1000; // Convert to milliseconds
    return Date.now() < expirationTime;
  } catch (error) {
    return false;
  }
};

export const clearAuth = () => {
  localStorage.removeItem('authToken');
};
```

### Protected Routes

Create a component to handle protected routes:

```jsx
// src/components/utils/ProtectedRoute.jsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isAuthenticated } from '../../services/auth';
import useUserStore from '../../store/useUserStore';

const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const location = useLocation();
  const isAuth = isAuthenticated();
  const user = useUserStore(state => state.user);
  
  // If not authenticated, redirect to login
  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  // If admin access is required, check user role
  if (requireAdmin && user?.role !== 'admin') {
    return <Navigate to="/unauthorized" replace />;
  }
  
  // If not activated, redirect to activation page
  if (!user?.isActivated) {
    return <Navigate to="/not-activated" replace />;
  }
  
  // If suspended, redirect to suspended page
  if (user?.isSuspended) {
    return <Navigate to="/suspended" replace />;
  }
  
  return children;
};

export default ProtectedRoute;
```

## Data Fetching Patterns

### Using Zustand with API Calls

Integrate API calls with Zustand stores:

```javascript
// src/store/useProductsStore.js
import { create } from 'zustand';
import { 
  fetchProducts, 
  fetchProductDetails,
  createProduct,
  updateProduct,
  deleteProduct
} from '../services/requests/products';

const useProductsStore = create((set, get) => ({
  // State
  products: [],
  currentProduct: null,
  isLoading: false,
  error: null,
  
  // Actions
  fetchAllProducts: async (filters = {}) => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetchProducts(filters);
      set({ products: response.data, isLoading: false });
      return response.data;
    } catch (error) {
      set({ 
        error: error.message || 'Failed to fetch products', 
        isLoading: false 
      });
      throw error;
    }
  },
  
  fetchProductById: async (productId) => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetchProductDetails(productId);
      set({ currentProduct: response.data, isLoading: false });
      return response.data;
    } catch (error) {
      set({ 
        error: error.message || 'Failed to fetch product details', 
        isLoading: false 
      });
      throw error;
    }
  },
  
  addProduct: async (productData) => {
    set({ isLoading: true, error: null });
    try {
      const response = await createProduct(productData);
      set(state => ({ 
        products: [...state.products, response.data],
        isLoading: false 
      }));
      return response.data;
    } catch (error) {
      set({ 
        error: error.message || 'Failed to create product', 
        isLoading: false 
      });
      throw error;
    }
  },
  
  updateProduct: async (productId, productData) => {
    set({ isLoading: true, error: null });
    try {
      const response = await updateProduct(productId, productData);
      set(state => ({ 
        products: state.products.map(p => 
          p.id === productId ? response.data : p
        ),
        currentProduct: state.currentProduct?.id === productId 
          ? response.data 
          : state.currentProduct,
        isLoading: false 
      }));
      return response.data;
    } catch (error) {
      set({ 
        error: error.message || 'Failed to update product', 
        isLoading: false 
      });
      throw error;
    }
  },
  
  removeProduct: async (productId) => {
    set({ isLoading: true, error: null });
    try {
      await deleteProduct(productId);
      set(state => ({ 
        products: state.products.filter(p => p.id !== productId),
        isLoading: false 
      }));
      return true;
    } catch (error) {
      set({ 
        error: error.message || 'Failed to delete product', 
        isLoading: false 
      });
      throw error;
    }
  },
  
  clearCurrentProduct: () => set({ currentProduct: null }),
  clearError: () => set({ error: null }),
}));

export default useProductsStore;
```

### React Query Integration (Optional)

For more complex data fetching needs, you can integrate React Query with Zustand:

```javascript
// Example of React Query setup for API calls
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

// In your App.jsx
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Your app components */}
      <ReactQueryDevtools position="bottom-right" />
    </QueryClientProvider>
  );
};
```

## Testing API Calls

### Mocking API Responses

Use Jest and testing-library to test components that make API calls:

```javascript
// Example test for a component that makes API calls
import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { loginUser } from '../../services/requests/auth';
import LoginForm from './LoginForm';

// Mock the API service
jest.mock('../../services/requests/auth', () => ({
  loginUser: jest.fn(),
}));

describe('LoginForm', () => {
  const mockOnSuccess = jest.fn();
  
  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  it('should submit the form with user credentials', async () => {
    // Mock successful API response
    loginUser.mockResolvedValueOnce({
      data: {
        user: { id: 1, name: 'Test User' },
        token: 'test-token'
      }
    });
    
    render(<LoginForm onSuccess={mockOnSuccess} />);
    
    // Fill the form
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'test@example.com' }
    });
    
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'password123' }
    });
    
    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /login/i }));
    
    // Check loading state
    expect(screen.getByRole('button', { name: /logging in/i })).toBeInTheDocument();
    
    // Wait for API call to complete
    await waitFor(() => {
      expect(loginUser).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123'
      });
    });
    
    // Check if success callback was called
    expect(mockOnSuccess).toHaveBeenCalledWith({ id: 1, name: 'Test User' });
    
    // Check that token was stored
    expect(localStorage.getItem('authToken')).toBe('test-token');
  });
  
  it('should display error message when login fails', async () => {
    // Mock failed API response
    loginUser.mockRejectedValueOnce({
      isApiError: true,
      message: 'Invalid credentials'
    });
    
    render(<LoginForm onSuccess={mockOnSuccess} />);
    
    // Fill and submit the form
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'test@example.com' }
    });
    
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'wrong-password' }
    });
    
    fireEvent.click(screen.getByRole('button', { name: /login/i }));
    
    // Wait for error message to appear
    await waitFor(() => {
      expect(screen.getByText('Invalid credentials')).toBeInTheDocument();
    });
    
    // Success callback should not be called
    expect(mockOnSuccess).not.toHaveBeenCalled();
  });
});
```

## Performance Optimization

### Caching Strategies

Implement caching for frequently accessed data:

```javascript
// Simple in-memory cache utility
// src/

