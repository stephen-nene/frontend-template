# Component Architecture

This document outlines our approach to structuring React components in the project.

## Table of Contents

- [Component Organization](#component-organization)
- [Component Types](#component-types)
- [Composition Patterns](#composition-patterns)
- [Props Management](#props-management)
- [Shadcn Integration](#shadcn-integration)
- [Layouts](#layouts)
- [Performance Considerations](#performance-considerations)

## Component Organization

Our project organizes components into several categories:

```
src/components/
├── App/            # Core application components
├── modals/         # Modal dialogs
├── pages/          # Page-level components
│   ├── auth/       # Authentication pages
│   ├── dash/       # Dashboard pages
│   ├── public/     # Public-facing pages
│   └── utils/      # Utility pages (error, loading, etc.)
└── shadcn/         # Shadcn UI components
```

### Importing Components

Follow these import patterns:

```jsx
// Importing from the same directory
import { ComponentA } from './ComponentA';

// Importing from another directory
import { Button } from '../shadcn/button';

// Importing from a directory index file
import { Modal, ModalHeader } from '../modals';
```

## Component Types

### 1. Page Components

Page components represent full pages of the application. They:
- Handle routing and navigation
- Fetch data needed for the page
- Manage page-level state
- Compose multiple UI components

```jsx
// src/components/pages/dash/Dashboard.jsx
import React, { useEffect } from 'react';
import useDashboardStore from '../../../store/useDashboardStore';
import { DashboardHeader } from './DashboardHeader';
import { StatisticsPanel } from './StatisticsPanel';
import { RecentActivity } from './RecentActivity';
import { LoadingSpinner } from '../utils/LoadingSpinner';

const Dashboard = () => {
  const { 
    dashboardData, 
    isLoading, 
    error, 
    fetchDashboardData 
  } = useDashboardStore();

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="dashboard-container">
      <DashboardHeader stats={dashboardData.summary} />
      <div className="dashboard-content">
        <StatisticsPanel data={dashboardData.statistics} />
        <RecentActivity activities={dashboardData.recentActivities} />
      </div>
    </div>
  );
};

export default Dashboard;
```

### 2. Container Components

Container components manage state and data fetching for a particular feature:

```jsx
// src/components/UserProfileContainer.jsx
import React, { useEffect } from 'react';
import useUserStore from '../store/useUserStore';
import { UserProfile } from './UserProfile';
import { LoadingSpinner } from './utils/LoadingSpinner';

const UserProfileContainer = ({ userId }) => {
  const { 
    fetchUserProfile, 
    userProfile, 
    isLoading, 
    error 
  } = useUserStore();

  useEffect(() => {
    fetchUserProfile(userId);
  }, [userId, fetchUserProfile]);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div className="error-message">{error}</div>;

  return <UserProfile user={userProfile} />;
};

export default UserProfileContainer;
```

### 3. Presentational Components

Presentational components are focused on UI and styling:

```jsx
// src/components/UserProfile.jsx
import React from 'react';
import { Card, CardHeader, CardContent } from './shadcn/card';
import { Avatar } from './shadcn/avatar';
import { Button } from './shadcn/button';

const UserProfile = ({ user }) => {
  return (
    <Card>
      <CardHeader className="flex items-center">
        <Avatar src={user.avatarUrl} fallback={user.initials} />
        <div className="ml-4">
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-gray-500">{user.role}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Email:</span>
            <span>{user.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Member since:</span>
            <span>{new Date(user.createdAt).toLocaleDateString()}</span>
          </div>
          <div className="mt-4">
            <Button variant="outline">Edit Profile</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
```

### 4. Utility Components

Small, reusable components for common UI patterns:

```jsx
// src/components/utils/ErrorMessage.jsx
import React from 'react';
import { Alert, AlertTitle } from '../shadcn/alert';

const ErrorMessage = ({ title = 'Error', message, onDismiss }) => {
  return (
    <Alert variant="destructive" className="mb-4">
      <AlertTitle>{title}</AlertTitle>
      <p>{message}</p>
      {onDismiss && (
        <button 
          onClick={onDismiss} 
          className="absolute top-2 right-2 text-red-700"
        >
          ×
        </button>
      )}
    </Alert>
  );
};

export default ErrorMessage;
```

## Composition Patterns

### Composition Over Configuration

Prefer component composition over complex configuration props:

```jsx
// Instead of this:
<DataTable 
  headers={['Name', 'Email', 'Role']} 
  rows={users}
  withPagination={true}
  withSearch={true}
  withSorting={true}
  onRowClick={handleRowClick}
/>

// Prefer this:
<DataTable data={users} onRowClick={handleRowClick}>
  <DataTableSearch />
  <DataTableHeader>
    <DataTableColumn sortable>Name</DataTableColumn>
    <DataTableColumn>Email</DataTableColumn>
    <DataTableColumn>Role</DataTableColumn>
  </DataTableHeader>
  <DataTableBody />
  <DataTablePagination />
</DataTable>
```

### Component Composition Example

```jsx
// src/components/Dashboard.jsx
import React from 'react';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '../shadcn/card';
import { StatCard } from './StatCard';
import { LineChart } from './charts/LineChart';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard 
          title="Total Users" 
          value="3,721" 
          trend="+5.2%" 
          icon={<UserIcon />}
        />
        <StatCard 
          title="Revenue" 
          value="$12,428" 
          trend="+12.5%" 
          icon={<DollarIcon />}
        />
        <StatCard 
          title="Conversion" 
          value="2.4%" 
          trend="-0.8%" 
          trendDirection="down"
          icon={<ChartIcon />}
        />
      </div>
      
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Monthly Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <LineChart data={revenueData} />
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Dashboard;
```

## Props Management

### Prop Destructuring

Destructure props directly in function parameters:

```jsx
// Good
const UserCard = ({ name, email, avatarUrl, role, isActive }) => {
  // Component implementation
};

// Avoid
const UserCard = (props) => {
  const { name, email, avatarUrl, role, isActive } = props;
  // Component implementation
};
```

### Default Props

Set default values directly in the parameter destructuring:

```jsx
const Button = ({ 
  variant = 'primary',
  size = 'medium',
  isDisabled = false,
  children,
  onClick
}) => {
  // Implementation
};
```

### Prop Spreading

Use prop spreading sparingly and explicitly spread only what's needed:

```jsx
// Good - explicitly passing needed props
const CustomInput = ({ 
  label, 
  error, 
  ...inputProps 
}) => (
  <div>
    <label>{label}</label>
    <input {...inputProps} />
    {error && <span className="error">{error}</span>}
  </div>
);

// Avoid - spreading unknown props into DOM elements
const Card = (props) => (
  <div {...props}>
    {props.children}
  </div>
);
```

## Shadcn Integration

### Component Customization

Customize shadcn components using the provided variant props:

```jsx
// src/components/CustomButton.jsx
import { Button } from '../shadcn/button';

export const PrimaryButton = ({ children, ...props }) => (
  <Button variant="default" {...props}>
    {children}
  </Button>
);

export const SecondaryButton = ({ children, ...props }) => (
  <Button variant="secondary" {...props}>
    {children}
  </Button>
);

export const DangerButton = ({ children, ...props }) => (
  <Button variant="destructive" {...props}>
    {children}
  </Button>
);
```

### Form Components

Create consistent form components using shadcn elements:

```jsx
// src/components/FormField.jsx
import React from 'react';
import { Label } from '../shadcn/label';
import { Input } from '../shadcn/input';

const FormField = ({ 
  label, 
  name, 
  error, 
  type = 'text', 
  ...inputProps 
}) => {
  return (
    <div className="mb-4">
      <Label htmlFor={name} className="block mb-2">
        {label}
      </Label>
      <Input 
        id={name}
        name={name}
        type={type}
        className={error ? 'border-red-500' : ''}
        {...inputProps}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default FormField;
```

## Layouts

### Layout Components

Create reusable layout components that compose the page structure:

```jsx
// src/layouts/DashLayout.jsx
import React from 'react';
import { Navbar } from '../components/Navbar';
import { DashNav } from '../components/DashNav';
import { Footer } from '../components/Footer';

const DashLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <DashNav className="w-64 shadow-md" />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 p-6">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default DashLayout;
```

### Page-specific Layouts

Use composition to create page-specific layouts:

```jsx
// src/components/pages/dash/Profile.jsx
import React from 'react';
import DashLayout from '../../../layouts/DashLayout';
import ProfileContainer from '../../UserProfileContainer';
import { Card, CardHeader, CardContent } from '../../shadcn/card';

const Profile = () => {
  return (
    <DashLayout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Your Profile</h1>
        <Card>
          <CardHeader>
            <h2 className="text-xl">Personal Information</h2>
          </CardHeader>
          <CardContent>
            <ProfileContainer />
          </CardContent>
        </Card>
      </div>
    </DashLayout>
  );
};

export default Profile;
```

## Performance Considerations

### Memoization

Use React.memo for components that render often with the same props:

```jsx
import React from 'react';

const ExpensiveComponent = ({ value }) => {
  // Expensive rendering logic
  return <div>{value}</div>;
};

// Only re-render when props actually change
export default React.memo(ExpensiveComponent);
```

### useCallback for Event Handlers

Use useCallback for event handlers passed to child components:

```jsx
import React, { useCallback } from 'react';

const ParentComponent = () => {
  const handleClick = useCallback(() => {
    // Click handler logic
  }, [/* dependencies */]);

  return <ChildComponent onClick={handleClick} />;
};
```

### useMemo for Expensive Calculations

Use useMemo for expensive calculations:

```jsx
import React, { useMemo } from 'react';

const DataDisplay = ({ data }) => {
  const processedData = useMemo(() => {
    // Expensive data processing
    return data.map(item => complexTransformation(item));
  }, [data]);

  return (
    <div>
      {processedData.map(item => (
        <div key={item.id}>{item.value}</div>
      ))}
    </div>
  );
};
```

### Code Splitting

Use React.lazy and Suspense for code splitting:

```jsx
// src/components/App/route.jsx
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingSpinner from '../utils/LoadingSpinner';

// Lazy load page components
const Home = lazy(() => import('../pages/public/Home'));
const About = lazy(() => import('../pages/public/About'));
const Dashboard = lazy(() => import('../pages/dash/Dashboard'));
const Profile = lazy(() => import('../pages/dash/Profile'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
```