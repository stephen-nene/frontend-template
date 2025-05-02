import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Mail,
  LockKeyhole,
  ShieldCheck,
  ArrowRight,
  UserCircle2,
  KeyRound
} from "lucide-react";
import { toast } from "sonner";

import { Alert, AlertDescription } from "@/components/shadcn/alert";
import { Button } from "@/components/shadcn/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/shadcn/card";
import { Input } from "@/components/shadcn/input";
import { Label } from "@/components/shadcn/label";
import { Checkbox } from "@/components/shadcn/checkbox";
import { Separator } from "@/components/shadcn/separator";
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

import {useUserStore} from "@/store/useUserStore.js"

// Form validation schema
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters"),
  rememberMe: z.boolean().optional().default(false),
});

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const login = useUserStore((state)=>state.login)
  // console.log(login)

  // Initialize form with react-hook-form and zod validation
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      // Simulate API call
      // await new Promise(resolve => setTimeout(resolve, 1500));
      await login(data)

      // Success notification
      toast.success("Login successful! Redirecting to dashboard...");

      // Navigate to dashboard after successful login
      setTimeout(() => navigate("/dashboard"), 800);
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-950">
      {/* Left side - Illustration (hidden on mobile) */}
      <div className="hidden lg:flex flex-col justify-center w-1/2 px-12 bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-950">
        <div className="space-y-6 text-white">
          <h1 className="text-4xl font-bold tracking-tight">Welcome back</h1>
          <p className="text-lg text-blue-100">
            Sign in to your account to access your dashboard and continue your work.
          </p>

          {/* Enhanced decorative illustration */}
          <div className="mt-12 relative">
            <div className="absolute inset-0 bg-white/10 rounded-lg blur-xl"></div>
            <div className="relative p-8 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 shadow-xl">
              <div className="w-full h-48 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -top-16 -left-16 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-purple-400/20 rounded-full blur-lg"></div>
                  <ShieldCheck className="w-32 h-32 text-white drop-shadow-lg" strokeWidth={1.5} />
                </div>
              </div>
              <div className="mt-4 space-y-3">
                <div className="h-2 bg-white/40 rounded-full w-full"></div>
                <div className="h-2 bg-white/40 rounded-full w-5/6"></div>
                <div className="h-2 bg-white/40 rounded-full w-4/6"></div>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <div className="flex space-x-2">
                  <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center">
                    <UserCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center">
                    <KeyRound className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="bg-white/20 rounded-full px-4 py-1 text-sm text-white backdrop-blur-sm">
                  Secure Login
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6">
        <Card className="w-full max-w-xl shadow-xl border-0 dark:bg-gray-800/60 backdrop-blur-sm">
          <CardHeader className="space-y-1">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <CardTitle className="text-2xl font-bold">Sign in</CardTitle>
            </div>
            <CardDescription className="text-gray-500 dark:text-gray-400">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {/* Email field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">Email</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                          <Input
                            {...field}
                            type="email"
                            placeholder="name@example.com"
                            className="pl-10 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent"
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm" />
                    </FormItem>
                  )}
                />

                {/* Password field */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                          <Input
                            {...field}
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="pl-10 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                            aria-label={showPassword ? "Hide password" : "Show password"}
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm" />
                    </FormItem>
                  )}
                />

                <div className="flex items-center justify-between pt-1">
                  {/* Remember me checkbox */}
                  <FormField
                    control={form.control}
                    name="rememberMe"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center space-x-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="data-[state=checked]:bg-blue-600 dark:data-[state=checked]:bg-blue-500"
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-medium leading-none cursor-pointer text-gray-600 dark:text-gray-400">
                          Remember me
                        </FormLabel>
                      </FormItem>
                    )}
                  />

                  <Link
                    to="/forgot"
                    className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-700 dark:hover:bg-blue-800 transition-all duration-200 mt-4 flex items-center justify-center gap-2"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="animate-pulse">Signing in</span>
                      <span className="flex">
                        <span className="animate-bounce mx-0.5 delay-100">.</span>
                        <span className="animate-bounce mx-0.5 delay-200">.</span>
                        <span className="animate-bounce mx-0.5 delay-300">.</span>
                      </span>
                    </>
                  ) : (
                    <>
                      Sign in
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>

            <div className="relative my-6">
              <Separator className="my-4 bg-gray-200 dark:bg-gray-700" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs">
                OR
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Google
              </Button>
              <Button variant="outline" className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                GitHub
              </Button>
              {/* login iwth x */}
            
            </div>
          </CardContent>

          <CardFooter className="flex justify-center">
            <p className="text-sm text-center text-gray-600 dark:text-gray-400">
              Don't have an account?{" "}
              <Link to="/register" className="font-medium text-blue-600 hover:text-blue-800 hover:underline dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                Sign up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}