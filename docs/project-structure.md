# Project Structure

This document outlines the structure of our React application, explaining the purpose of each directory and how they interact.

## Overview

```
src/
├── assets/              # Static assets
├── components/          # React components
│   ├── App/             # Main App component and routing
│   ├── modals/          # Modal components
│   ├── pages/           # Page components
│   │   ├── auth/        # Authentication pages
│   │   ├── dash/        # Dashboard pages
│   │   ├── public/      # Public-facing pages
│   │   └── utils/       # Utility components
│   └── shadcn/          # shadcn/ui components
├── layouts/             # Layout components
├── lib/                 # Utility functions
├── services/            # API services
│   └── requests/        # API request modules
└── store/               # Zustand stores
```

## Directory Details

### assets/

Contains all static assets used in the application, including:
- Images
- SVG files
- Global CSS styles

### components/

All React components are organized in this directory:

#### components/App/

- `App.jsx`: Main application component that sets up routing
- `route.jsx`: React Router configuration

#### components/modals/

Modal components that can be reused throughout the application.

#### components/pages/

Page-level components organized by section:

- **auth/**: Authentication-related pages
  - `Login.jsx`: User login page
  - `Signup.jsx`: User registration page
  - `Forgot.jsx`: Password recovery
  - `Reset.jsx`: Password reset
  - `Activate.jsx`: Account activation

- **dash/**: Dashboard pages (protected)
  - `Dashboard.jsx`: Main dashboard view
  - `Profile.jsx`: User profile management

- **public/**: Publicly accessible pages
  - `Home.jsx`: Landing page
  - `About.jsx`: About page
  - `Contact.jsx`: Contact page
  - `Blogs.jsx`: Blog listing
  - `Shop.jsx`: E-commerce page

- **utils/**: Utility components
  - `Error404.jsx`: 404 page
  - `LoadingSpinner.jsx`: Loading indicator
  - `ProtectedRoute.jsx`: Route protection wrapper
  - `NotLoggedIn.jsx`: Redirect for unauthenticated users
  - `NotActivate.jsx`: Page for non-activated accounts
  - `ComminSoon.jsx`: Placeholder for upcoming features
  - `Suspended.jsx`: Account suspension page
  - `Unauthorised.jsx`: Access denied page

#### components/shadcn/

Contains shadcn/ui components that have been added to the project. These are reusable UI components built with Tailwind CSS and Radix UI primitives:

- `button.jsx`: Button component
- `input.jsx`: Input component
- `card.jsx`: Card component
- `form.jsx`: Form components
- `avatar.jsx`: Avatar component
- `alert.jsx`: Alert component
- `label.jsx`: Form label component
- `textarea.jsx`: Multiline text input component

### layouts/

Components that define the overall structure of different pages:

- `Navbar.jsx`: Main navigation bar for public pages
- `Footer.jsx`: Site footer
- `Dashlayout.jsx`: Layout for dashboard pages
- `DashNav.jsx`: Navigation for dashboard pages

### lib/

Utility functions and helper code:

- `utils.js`: General utility functions

### services/

API integration and external service connections:

- `apiClient.js`: Base API client configuration

#### services/requests/

- `auth.js`: Authentication API requests

### store/

Zustand state management:

- `useUserStore.js`: User authentication and profile state

## File Organization Best Practices

1. **Keep related files together**: Components, their styles, and tests should be co-located
2. **Use index files**: For cleaner imports
3. **Follow consistent naming conventions**:
   - PascalCase for components
   - camelCase for utility functions
   - kebab-case for assets

## Adding New Features

When adding new features:

1. Create components in the appropriate directory
2. Update routing in `components/App/route.jsx`
3. Add state management as needed in the `store/` directory
4. Implement API integrations in the `services/` directory

## Import Patterns

Use absolute imports with the `@/` prefix:

```javascript
// Good
import { Button } from "@/components/shadcn/button";
import useUserStore from "@/store/useUserStore";

// Avoid
import { Button } from "../../components/shadcn/button";
import useUserStore from "../../store/useUserStore";
```