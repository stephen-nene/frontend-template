import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  LockKeyhole,
  User,
  Phone,
  Calendar,
  UserPlus,
  ArrowRight,
  UserCircle2,
  Check,
  AtSign,
  Rocket,
  ShieldCheck,
  LogIn,
  HeartHandshake,
  Star,
  TreeDeciduous,
  Handshake,
  Target
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/select";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Link } from "react-router-dom";

// Form validation schema based on the Django User model
const signupSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  username: z.string()
    .min(3, "Username must be at least 3 characters")
    .max(150, "Username must be at most 150 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores"),
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must be at most 20 characters"),
    // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, "Password must contain at least one uppercase letter, one lowercase letter, and one number"),
  confirm_password: z.string(),
  phone_number: z.string().optional(),
  gender: z.string().optional(),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
}).refine((data) => data.password === data.confirm_password, {
  message: "Passwords do not match",
  path: ["confirm_password"],
});

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize form with react-hook-form and zod validation
  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      username: "",
      first_name: "",
      last_name: "",
      password: "",
      confirm_password: "",
      phone_number: "",
      gender: "",
      terms: false,
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Log the data that would be sent to the server
      console.log("Form data to send:", {
        email: data.email,
        username: data.username,
        first_name: data.first_name,
        last_name: data.last_name,
        password: data.password,
        phone_number: data.phone_number || "",
        gender: data.gender || "",
        status: "pending", // Default status from model
        role: "user" // Default role from model
      });
      
      // Success notification
      toast.success("Registration successful! Please check your email for verification.");
      
      // Navigate to login or verification page
      // navigate("/login");
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-950">
      {/* Left side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6">
        <Card className="w-full max-w-2xl shadow-xl border-0 dark:bg-gray-800/60 backdrop-blur-sm">
          <CardHeader className="space-y-1">
            <div className="flex items-center space-x-2">
              <UserPlus className="h-6 w-6 text-green-600 dark:text-green-400" />
              <CardTitle className="text-2xl font-bold">Create Account</CardTitle>
            </div>
            <CardDescription className="text-gray-500 dark:text-gray-400">
              Join us today and start your journey
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
                            className="pl-10 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 dark:focus:ring-green-600 focus:border-transparent"
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm" />
                    </FormItem>
                  )}
                />

                {/* Username field */}
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">Username</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                          <Input
                            {...field}
                            type="text"
                            placeholder="johndoe123"
                            className="pl-10 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 dark:focus:ring-green-600 focus:border-transparent"
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm" />
                    </FormItem>
                  )}
                />

                {/* First and Last name fields in a grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="first_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-300">First Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                            <Input
                              {...field}
                              type="text"
                              placeholder="John"
                              className="pl-10 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 dark:focus:ring-green-600 focus:border-transparent"
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="last_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-300">Last Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="text"
                            placeholder="Doe"
                            className="border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 dark:focus:ring-green-600 focus:border-transparent"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm" />
                      </FormItem>
                    )}
                  />
                </div>

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
                            className="pl-10 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 dark:focus:ring-green-600 focus:border-transparent"
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
                
                {/* Confirm Password field */}
                <FormField
                  control={form.control}
                  name="confirm_password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">Confirm Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                          <Input
                            {...field}
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="pl-10 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 dark:focus:ring-green-600 focus:border-transparent"
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                            aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                          >
                            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm" />
                    </FormItem>
                  )}
                />

                {/* Optional fields in a grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Phone number field */}
                  <FormField
                    control={form.control}
                    name="phone_number"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-300">Phone (optional)</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                            <Input
                              {...field}
                              type="tel"
                              placeholder="+1 234 567 8900"
                              className="pl-10 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 dark:focus:ring-green-600 focus:border-transparent"
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm" />
                      </FormItem>
                    )}
                  />

                  {/* Gender select field */}
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-300">Gender (optional)</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 dark:focus:ring-green-600 focus:border-transparent">
                              <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="non_binary">Non-binary</SelectItem>
                            <SelectItem value="transgender">Transgender</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-500 text-sm" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Terms and conditions */}
                <FormField
                  control={form.control}
                  name="terms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-2 pt-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-green-600 dark:data-[state=checked]:bg-green-500"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-medium cursor-pointer text-gray-600 dark:text-gray-400">
                          I agree to the <a href="#" className="text-green-600 hover:underline dark:text-green-400">terms of service</a> and <a href="#" className="text-green-600 hover:underline dark:text-green-400">privacy policy</a>
                        </FormLabel>
                        <FormMessage className="text-red-500 text-sm" />
                      </div>
                    </FormItem>
                  )}
                />

                {/* Submit button */}
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white dark:bg-green-700 dark:hover:bg-green-800 transition-all duration-200 mt-4 flex items-center justify-center gap-2"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="animate-pulse">Creating account</span>
                      <span className="flex">
                        <span className="animate-bounce mx-0.5 delay-100">.</span>
                        <span className="animate-bounce mx-0.5 delay-200">.</span>
                        <span className="animate-bounce mx-0.5 delay-300">.</span>
                      </span>
                    </>
                  ) : (
                    <>
                      Create Account
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
                <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                GitHub
              </Button>
            </div>
          </CardContent>

          <CardFooter className="flex justify-center">
            <p className="text-sm text-center text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-green-600 hover:text-green-800 hover:underline dark:text-green-400 dark:hover:text-green-300 transition-colors">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>

      {/* Right side - Illustration (hidden on mobile) */}

      <div className="hidden lg:flex flex-col justify-center w-1/2 px-12 bg-gradient-to-br from-green-600 to-emerald-700 dark:from-green-800 dark:to-emerald-950">
        <div className="space-y-6 text-white">
          <h1 className="text-4xl font-bold tracking-tight">Join our community</h1>
          <p className="text-lg text-green-100">
            Create an account to get started and unlock all features of our platform.
          </p>

          {/* Unique decorative illustration */}
          <div className="mt-12 relative">
            <div className="absolute inset-0 bg-white/10 rounded-lg blur-xl"></div>
            <div className="relative p-8 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 shadow-xl">
              <div className="w-full h-48 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-400/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-teal-400/20 rounded-full blur-lg"></div>
                  
                  {/* User profile illustration */}
                  <div className="relative flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center">
                      <UserCircle2 className="w-24 h-24 text-white drop-shadow-lg" strokeWidth={1.5} />
                    </div>
                    <div className="mt-4 w-24 h-6 bg-white/30 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-200 mr-1" />
                      <span className="text-white text-sm">Verified</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-3">
                <div className="h-2 bg-white/40 rounded-full w-full"></div>
                <div className="h-2 bg-white/40 rounded-full w-5/6"></div>
                <div className="h-2 bg-white/40 rounded-full w-4/6"></div>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-white/40 flex items-center justify-center mb-2">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div className="h-2 bg-white/40 rounded-full w-full"></div>
                </div>
                <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-white/40 flex items-center justify-center mb-2">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div className="h-2 bg-white/40 rounded-full w-full"></div>
                </div>
                <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-white/40 flex items-center justify-center mb-2">
                    <LockKeyhole className="w-5 h-5 text-white" />
                  </div>
                  <div className="h-2 bg-white/40 rounded-full w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}