# Coding Standards

This document outlines the coding standards and best practices for our React project.

## Table of Contents

- [JavaScript/JSX](#javascriptjsx)
- [Component Structure](#component-structure)
- [State Management](#state-management)
- [Styling with Tailwind](#styling-with-tailwind)
- [Shadcn Components](#shadcn-components)
- [Testing](#testing)
- [Documentation](#documentation)

## JavaScript/JSX

### General Guidelines

- Use ES6+ features
- Prefer arrow functions for component definitions and callbacks
- Use destructuring for props and state
- Use template literals instead of string concatenation
- Use optional chaining and nullish coalescing

### Naming Conventions

- **Components**: PascalCase (e.g., `ProfileCard.jsx`)
- **Files**: PascalCase for components, camelCase for utilities
- **Functions**: camelCase
- **Variables**: camelCase
- **Constants**: UPPER_SNAKE_CASE for truly constant values
- **Custom Hooks**: start with `use` prefix (e.g., `useAuth.js`)

### Code Formatting

We use ESLint and Prettier for code formatting. Ensure your editor is configured to use these tools.

```javascript
// Good example
const ProfileCard = ({ user, isLoading }) => {
  const { name, email } = user || {};
  
  return (
    <div className="card">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <h2>{name}</h2>
          <p>{email}</p>
        </>
      )}
    </div>
  );
};
```

## Component Structure

### Functional Components

Use functional components with hooks instead of class components.

```jsx
// Preferred
const Component = ({ prop1, prop2 }) => {
  const [state, setState] = useState(initialValue);
  
  return <div>...</div>;
};

// Avoid
class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = { /* ... */ };
  }
  
  render() {
    return <div>...</div>;
  }
}
```

### Component Organization

1. Imports
2. Component definition
3. Hooks
4. Helper functions
5. Effect hooks
6. Return statement
7. Prop types/exports

```jsx
// Example organization
import React, { useState, useEffect } from 'react';
import { Button } from '../shadcn/button';

const ExampleComponent = ({ initialData }) => {
  // State hooks
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  
  // Helper functions
  const handleClick = () => {
    // Implementation
  };
  
  // Effects
  useEffect(() => {
    // Side effect
  }, [data]);
  
  // Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
};

export default ExampleComponent;
```

## State Management

### Zustand Store Guidelines

- Create small, focused stores
- Use selectors for accessing state
- Implement actions within the store
- Document store purpose and API

```javascript
// Example Zustand store
import { create } from 'zustand';

const useUserStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  
  login: async (credentials) => {
    set({ isLoading: true, error: null });
    try {
      const user = await loginService(credentials);
      set({ user, isAuthenticated: true, isLoading: false });
      return user;
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },
  
  logout: () => set({ user: null, isAuthenticated: false }),
}));

export default useUserStore;
```

### Local State

- Use `useState` for component-specific state
- Use `useReducer` for complex state logic
- Avoid prop drilling by using context or Zustand

## Styling with Tailwind

### Best Practices

- Use Tailwind's utility classes directly in JSX
- Create reusable component patterns with consistent styling
- Use the `@apply` directive in CSS files sparingly
- Follow mobile-first responsive design

```jsx
// Good example
<div className="p-4 mt-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
  <h2 className="text-xl font-bold text-gray-800">Title</h2>
  <p className="mt-2 text-gray-600">Content</p>
</div>
```

### Custom Classes

For complex, reusable styles, define them in your CSS:

```css
@layer components {
  .card-container {
    @apply p-4 mt-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow;
  }
}
```

## Shadcn Components

### Usage Guidelines

- Import components from the shadcn directory
- Maintain the component API as defined by shadcn
- Use the variant and size props for customization
- Create wrapper components for frequently used configurations

```jsx
// Good example
import { Button } from '../shadcn/button';

const SaveButton = ({ isLoading, ...props }) => (
  <Button 
    variant="primary" 
    disabled={isLoading}
    {...props}
  >
    {isLoading ? 'Saving...' : 'Save'}
  </Button>
);
```

## Testing

- Write tests for all components and utilities
- Use React Testing Library for component tests
- Test user interactions and state changes
- Mock API calls and external dependencies

```jsx
// Example test
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

test('submits form with credentials', () => {
  const mockSubmit = jest.fn();
  render(<LoginForm onSubmit={mockSubmit} />);
  
  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { value: 'test@example.com' }
  });
  
  fireEvent.change(screen.getByLabelText(/password/i), {
    target: { value: 'password123' }
  });
  
  fireEvent.click(screen.getByRole('button', { name: /login/i }));
  
  expect(mockSubmit).toHaveBeenCalledWith({
    email: 'test@example.com',
    password: 'password123'
  });
});
```

## Documentation

- Document all components with JSDoc comments
- Include propTypes or TypeScript interfaces
- Provide usage examples in comments
- Document non-obvious code with inline comments

```jsx
/**
 * ProfileCard component displays user information in a card format
 * 
 * @param {Object} props
 * @param {Object} props.user - User data object
 * @param {string} props.user.name - User's name
 * @param {string} props.user.email - User's email
 * @param {boolean} [props.isLoading=false] - Loading state flag
 * 
 * @example
 * <ProfileCard 
 *   user={{ name: 'John Doe', email: 'john@example.com' }}
 *   isLoading={false}
 * />
 */
const ProfileCard = ({ user, isLoading = false }) => {
  // Implementation
};
```