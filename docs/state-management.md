# State Management with Zustand

This document explains our state management approach using Zustand and provides examples of common patterns.

## Overview

We use [Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction) for state management in our application. Zustand provides a simple yet powerful way to create global state with minimal boilerplate.

## Store Structure

All store files are located in the `src/store` directory. Each store is responsible for a specific domain of the application.

## Creating a Store

### Basic Store

```javascript
// src/store/useCounterStore.js
import { create } from 'zustand';

const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

export default useCounterStore;
```

### Persistent Store

For data that should persist between page refreshes:

```javascript
// src/store/useUserStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      setUser: (user) => set({ user, isAuthenticated: !!user }),
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: 'user-store', // unique name for localStorage
    }
  )
);

export default useUserStore;
```

## Using Stores in Components

### Consuming State

```jsx
import useCounterStore from '@/store/useCounterStore';

function Counter() {
  const { count, increment, decrement } = useCounterStore();
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
```

### Selecting Specific Parts of State

For better performance, select only the parts of state that your component needs:

```jsx
import useUserStore from '@/store/useUserStore';

function UserGreeting() {
  // Only re-renders when user.name changes
  const userName = useUserStore((state) => state.user?.name);
  
  return <h1>Hello, {userName || 'Guest'}!</h1>;
}
```

## Asynchronous Actions

Zustand can handle async operations within actions:

```javascript
// src/store/useProductsStore.js
import { create } from 'zustand';
import { fetchProducts } from '@/services/requests/products';

const useProductsStore = create((set, get) => ({
  products: [],
  isLoading: false,
  error: null,
  fetchProducts: async () => {
    try {
      set({ isLoading: true, error: null });
      const products = await fetchProducts();
      set({ products, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
}));

export default useProductsStore;
```

## Accessing Store Outside React Components

You can access the store outside of React components using `getState()`:

```javascript
// src/services/requests/auth.js
import useUserStore from '@/store/useUserStore';

export async function loginUser(credentials) {
  try {
    const response = await apiClient.post('/auth/login', credentials);
    useUserStore.getState().setUser(response.data.user);
    return response.data;
  } catch (error) {
    throw error;
  }
}
```

## Store Composition

For complex applications, you can compose multiple stores:

```javascript
// src/store/useAppStore.js
import { create } from 'zustand';
import useUserStore from './useUserStore';
import useProductsStore from './useProductsStore';

const useAppStore = create((set, get) => ({
  reset: () => {
    useUserStore.getState().logout();
    useProductsStore.getState().clearProducts();
    // Reset any other stores
  },
}));

export default useAppStore;
```

## Best Practices

1. **Keep stores focused**: Each store should manage a specific domain
2. **Minimize state**: Only store what's needed globally
3. **Use selectors**: Select only the parts of state needed by components
4. **Optimize actions**: Combine related state updates in a single action
5. **Persist wisely**: Only persist state that needs to survive page refreshes
6. **Test your stores**: Write unit tests for store logic

## Debugging

You can use the Redux DevTools Extension to debug Zustand state:

```javascript
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useCounterStore = create(
  devtools(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
    }),
    { name: 'Counter Store' }
  )
);
```

## Common Patterns

### Authentication Flow

```javascript
// src/store/useAuthStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { login, logout, verifyToken } from '@/services/requests/auth';

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
      
      login: async (credentials) => {
        try {
          set({ isLoading: true, error: null });
          const response = await login(credentials);
          set({
            user: response.data.user,
            token: response.data.token,
            isAuthenticated: true,
            isLoading: false,
          });
          return response.data;
        } catch (error) {
          set({ error: error.message, isLoading: false });
          throw error;
        }
      },
      
      logout: async () => {
        try {
          await logout();
        } finally {
          set({ user: null, token: null, isAuthenticated: false });
        }
      },
      
      verifyAuth: async () => {
        try {
          set({ isLoading: true });
          const response = await verifyToken();
          set({
            user: response.data.user,
            isAuthenticated: true,
            isLoading: false,
          });
        } catch (error) {
          set({ user: null, token: null, isAuthenticated: false, isLoading: false });
        }
      },
    }),
    {
      name: 'auth-store',
    }
  )
);

export default useAuthStore;
```



------------- 2 --------------------

# State Management Guide

This document provides guidelines and examples for state management in our React application using Zustand.

## Table of Contents

- [Introduction to Zustand](#introduction-to-zustand)
- [Store Structure](#store-structure)
- [Creating Stores](#creating-stores)
- [Using Stores in Components](#using-stores-in-components)
- [Organizing Multiple Stores](#organizing-multiple-stores)
- [Testing Stores](#testing-stores)
- [Debugging State](#debugging-state)

## Introduction to Zustand

Zustand is a small, fast, and scalable state management solution. It uses a simplified flux principles with a minimal API. Unlike Redux, it doesn't require actions, action creators, dispatchers, or complex middleware setups.

Key benefits of Zustand:
- Minimal boilerplate
- No providers needed at the top level
- Can be used with TypeScript
- Works with React Suspense
- Supports middleware (persist, immer, etc.)

## Store Structure

A well-structured Zustand store typically contains:

1. **State**: The actual data
2. **Actions**: Functions that modify the state
3. **Selectors**: Functions to extract data from the state (used when consuming the store)

## Creating Stores

We create a separate file for each store in the `src/store` directory.

### Basic Store Pattern

```javascript
// src/store/useUserStore.js
import { create } from 'zustand';
import { loginUser, logoutUser, fetchUserProfile } from '../services/requests/auth';

const useUserStore = create((set, get) => ({
  // State
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  
  // Actions
  login: async (credentials) => {
    set({ isLoading: true, error: null });
    try {
      const response = await loginUser(credentials);
      set({ 
        user: response.data.user, 
        isAuthenticated: true, 
        isLoading: false 
      });
      return response.data;
    } catch (error) {
      set({ 
        error: error.response?.data?.message || 'Login failed', 
        isLoading: false 
      });
      throw error;
    }
  },
  
  logout: async () => {
    set({ isLoading: true });
    try {
      await logoutUser();
      set({ user: null, isAuthenticated: false, isLoading: false });
    } catch (error) {
      set({ 
        error: error.response?.data?.message || 'Logout failed', 
        isLoading: false 
      });
    }
  },
  
  fetchProfile: async () => {
    set({ isLoading: true });
    try {
      const response = await fetchUserProfile();
      set({ user: response.data, isLoading: false });
      return response.data;
    } catch (error) {
      set({ 
        error: error.response?.data?.message || 'Failed to fetch profile', 
        isLoading: false 
      });
    }
  },
  
  clearError: () => set({ error: null }),
}));

export default useUserStore;
```

### Using Middleware

For persisting state across page reloads:

```javascript
// src/store/useSettingsStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useSettingsStore = create(
  persist(
    (set) => ({
      theme: 'light',
      language: 'en',
      notifications: true,
      
      setTheme: (theme) => set({ theme }),
      setLanguage: (language) => set({ language }),
      toggleNotifications: () => set(state => ({ 
        notifications: !state.notifications 
      })),
    }),
    {
      name: 'settings-storage', // unique name for localStorage key
      getStorage: () => localStorage,
    }
  )
);

export default useSettingsStore;
```

## Using Stores in Components

### Basic Usage

```jsx
// src/components/pages/auth/Login.jsx
import React, { useState } from 'react';
import useUserStore from '../../../store/useUserStore';
import { Button } from '../../shadcn/button';
import { Input } from '../../shadcn/input';
import { Card, CardHeader, CardContent, CardFooter } from '../../shadcn/card';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Get state and actions from the store
  const { login, isLoading, error, clearError } = useUserStore();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });
      // Redirect or show success message
    } catch (err) {
      // Error is already set in the store
    }
  };
  
  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">Login</h2>
      </CardHeader>
      <CardContent>
        {error && (
          <div className="bg-red-100 p-3 mb-4 rounded text-red-700">
            {error}
            <button onClick={clearError} className="ml-2 text-xs">×</button>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
            />
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Login;
```

### Using Selectors for Performance

Use selectors to prevent unnecessary re-renders when only part of the state changes:

```jsx
const ProfileStatus = () => {
  // Only re-renders when isAuthenticated changes
  const isAuthenticated = useUserStore(state => state.isAuthenticated);
  const user = useUserStore(state => state.user);
  
  return (
    <div>
      {isAuthenticated ? (
        <span>Welcome, {user?.name}</span>
      ) : (
        <span>Not logged in</span>
      )}
    </div>
  );
};
```

## Organizing Multiple Stores

Follow these guidelines for managing multiple stores:

1. **Single Responsibility Principle**: Each store should handle one domain/feature
2. **Keep Stores Small**: Avoid giant stores that manage too many concerns
3. **Consistent Naming**: Use the `use[Feature]Store` naming convention

### Store Interaction

When stores need to interact:

```javascript
// src/store/useCartStore.js
import { create } from 'zustand';
import useUserStore from './useUserStore';
import useProductStore from './useProductStore';

const useCartStore = create((set, get) => ({
  items: [],
  
  addToCart: (productId, quantity = 1) => {
    // Get product details from another store
    const product = useProductStore.getState().getProductById(productId);
    if (!product) return;
    
    set(state => {
      const existingItem = state.items.find(item => item.id === productId);
      
      if (existingItem) {
        return {
          items: state.items.map(item =>
            item.id === productId 
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        };
      }
      
      return {
        items: [...state.items, { 
          id: productId, 
          name: product.name, 
          price: product.price,
          quantity 
        }]
      };
    });
  },
  
  // Other cart actions...
  
  checkout: async () => {
    const user = useUserStore.getState().user;
    if (!user) throw new Error('User must be logged in to checkout');
    
    // Checkout implementation...
  }
}));

export default useCartStore;
```

## Testing Stores

### Unit Testing Store Logic

```javascript
// src/store/useUserStore.test.js
import useUserStore from './useUserStore';
import { loginUser } from '../services/requests/auth';

// Mock the API service
jest.mock('../services/requests/auth', () => ({
  loginUser: jest.fn(),
}));

describe('useUserStore', () => {
  beforeEach(() => {
    // Clear the store before each test
    useUserStore.setState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    });
  });
  
  it('should set user data when login is successful', async () => {
    // Mock successful login
    const mockUser = { id: 1, name: 'Test User', email: 'test@example.com' };
    loginUser.mockResolvedValueOnce({ data: { user: mockUser } });
    
    // Call the login action
    await useUserStore.getState().login({ email: 'test@example.com', password: 'password' });
    
    // Check the state after login
    const state = useUserStore.getState();
    expect(state.user).toEqual(mockUser);
    expect(state.isAuthenticated).toBe(true);
    expect(state.isLoading).toBe(false);
    expect(state.error).toBe(null);
  });
  
  it('should set error when login fails', async () => {
    // Mock failed login
    const errorMessage = 'Invalid credentials';
    loginUser.mockRejectedValueOnce({ 
      response: { data: { message: errorMessage } } 
    });
    
    // Call the login action and expect it to throw
    await expect(
      useUserStore.getState().login({ email: 'test@example.com', password: 'wrong' })
    ).rejects.toThrow();
    
    // Check the state after failed login
    const state = useUserStore.getState();
    expect(state.user).toBe(null);
    expect(state.isAuthenticated).toBe(false);
    expect(state.isLoading).toBe(false);
    expect(state.error).toBe(errorMessage);
  });
});
```

## Debugging State

### Using Redux DevTools

Add Redux DevTools support to debug your Zustand stores:

```javascript
// src/store/useUserStore.js
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useUserStore = create(
  devtools(
    (set) => ({
      // Store implementation
    }),
    {
      name: 'User Store', // Name shown in Redux DevTools
    }
  )
);

export default useUserStore;
```

### Creating a Debug Hook

Create a custom hook for debugging store state in development:

```javascript
// src/lib/useStoreDebug.js
import { useEffect } from 'react';

export const useStoreDebug = (store, storeName = 'Store') => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      const state = store.getState();
      console.log(`[${storeName}] Current state:`, state);
      
      const unsubscribe = store.subscribe((newState, prevState) => {
        console.log(`[${storeName}] Previous state:`, prevState);
        console.log(`[${storeName}] Current state:`, newState);
        console.log(`[${storeName}] Changed keys:`, 
          Object.keys(newState).filter(key => newState[key] !== prevState[key])
        );
      });
      
      return unsubscribe;
    }
  }, [store, storeName]);
};

// Usage in a component:
// useStoreDebug(useUserStore, 'UserStore');
```