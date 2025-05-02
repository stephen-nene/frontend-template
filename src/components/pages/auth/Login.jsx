import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, LockKeyhole, Shield, AlertCircle } from "lucide-react";

import { Alert, AlertDescription } from "@/components/shadcn/alert";
import { Button } from "@/components/shadcn/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/shadcn/card";
import { Input } from "@/components/shadcn/input";
import { Checkbox } from "@/components/shadcn/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/form";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Define schema with Zod
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters"),
  rememberMe: z.boolean().default(false),
});

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  // Initialize form with react-hook-form and zod
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  // Form submission handler
  const onSubmit = async (data) => {
    setIsLoading(true);
    setLoginError("");
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Login successful with:", data);
      
      // Navigate to dashboard after successful login
      setTimeout(() => navigate("/dashboard"), 300);
    } catch (error) {
      setLoginError("Invalid email or password. Please try again.");
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
      {/* Left side - Illustration (hidden on mobile) */}
      <div className="hidden lg:flex flex-col justify-center w-1/2 p-12 bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-800 dark:to-indigo-900 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-indigo-400/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 space-y-6 text-white max-w-md mx-auto">
          <div className="flex items-center space-x-3 mb-8">
            <Shield className="h-8 w-8" />
            <h2 className="text-2xl font-bold">SecureLogin</h2>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight">Welcome back</h1>
          <p className="text-lg text-blue-100">
            Sign in to your account to access your dashboard and continue your work.
          </p>

          {/* Enhanced illustration */}
          <div className="mt-12 relative">
            <div className="absolute inset-0 bg-white/10 rounded-xl blur-lg"></div>
            <div className="relative p-8 rounded-xl bg-white/20 backdrop-blur-sm border border-white/20 shadow-xl">
              <div className="w-full h-48 flex items-center justify-center">
                <div className="relative">
                  {/* Lock icon with security rings */}
                  <div className="absolute inset-0 bg-blue-400/30 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
                  <div className="absolute inset-0 bg-indigo-400/20 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
                  <svg className="w-24 h-24 text-white/90 relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <rect x="4" y="11" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="16" r="2" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <div className="h-2 bg-white/40 rounded-full w-full"></div>
                <div className="h-2 bg-white/40 rounded-full w-5/6"></div>
                <div className="h-2 bg-white/40 rounded-full w-4/6"></div>
                <div className="h-2 bg-white/40 rounded-full w-3/4"></div>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-blue-200 mt-6">
            Secure, encrypted login with advanced authentication protection
          </p>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <Card className="w-full max-w-md border-0 shadow-xl dark:bg-gray-800/50 dark:shadow-gray-900/30">
          <CardHeader className="space-y-1">
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl font-bold">Sign in</CardTitle>
              <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <CardDescription className="text-gray-500 dark:text-gray-400">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>

          <CardContent>
            {loginError && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{loginError}</AlertDescription>
              </Alert>
            )}
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {/* Email field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-200">Email</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                          <Input
                            {...field}
                            type="email"
                            placeholder="name@example.com"
                            className="pl-10 border-gray-300 dark:border-gray-600 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400"
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                {/* Password field */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-200">Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                          <Input
                            {...field}
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="pl-10 border-gray-300 dark:border-gray-600 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                            aria-label={showPassword ? "Hide password" : "Show password"}
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                
                <div className="flex items-center justify-between">
                  {/* Remember me checkbox */}
                  <FormField
                    control={form.control}
                    name="rememberMe"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 dark:data-[state=checked]:bg-blue-500 dark:data-[state=checked]:border-blue-500"
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-medium leading-none cursor-pointer text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                          Remember me
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                  
                  <a
                    href="/forgot-password"
                    className="text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing in...
                    </>
                  ) : "Sign in"}
                </Button>
              </form>
            </Form>
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500 dark:bg-gray-800 dark:text-gray-400">Or continue with</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google
              </Button>
              <Button variant="outline" className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
                <svg className="w-5 h-5 mr-2 text-black dark:text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.1484 12.2197C22.1484 10.9197 22.0234 9.66219 21.7609 8.44219H12V12.7547H17.6484C17.4234 14.0422 16.7234 15.1922 15.6609 15.9797V18.4547H19.1859C21.2359 16.6672 22.1484 14.6922 22.1484 12.2197Z" fill="#4285F4"/>
                  <path d="M12 22.5001C14.7 22.5001 16.9625 21.6001 18.6375 20.0126L15.1125 17.5376C14.2125 18.1376 13.0875 18.5001 12 18.5001C9.3375 18.5001 7.1125 16.7376 6.2625 14.3751H2.6625V16.9126C4.3875 20.3001 7.9125 22.5001 12 22.5001Z" fill="#34A853"/>
                  <path d="M6.2625 14.3748C6.0625 13.7748 5.9625 13.1498 5.9625 12.4998C5.9625 11.8498 6.0625 11.2248 6.2625 10.6248V8.08734H2.6625C1.9875 9.42484 1.5 10.9123 1.5 12.4998C1.5 14.0873 1.9875 15.5748 2.6625 16.9123L6.2625 14.3748Z" fill="#FBBC05"/>
                  <path d="M12 6.49983C13.475 6.49983 14.7875 6.99983 15.8 7.94983L18.9 4.87483C16.9625 3.04983 14.7 1.99983 12 1.99983C7.9125 1.99983 4.3875 4.19983 2.6625 7.58733L6.2625 10.1248C7.1125 7.76233 9.3375 6.49983 12 6.49983Z" fill="#EA4335"/>
                </svg>
                GitHub
              </Button>
            </div>
          </CardContent>

          <CardFooter>
            <p className="text-sm text-center w-full text-gray-600 dark:text-gray-400">
              Don't have an account?{" "}
              <a href="/register" className="font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline">
                Sign up
              </a>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}