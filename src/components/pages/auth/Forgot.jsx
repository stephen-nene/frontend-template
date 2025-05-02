import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Shield, AlertCircle, KeyRound } from "lucide-react";

import { Alert, AlertDescription } from "@/components/shadcn/alert";
import { Button } from "@/components/shadcn/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/shadcn/card";
import { Input } from "@/components/shadcn/input";
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

// Schema for email only
const forgotSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export default function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(forgotSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setErrorMsg("");

    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated request
      console.log("Password reset link sent to:", data.email);
    } catch (error) {
      setErrorMsg("Failed to send reset email. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
      {/* Left side - Illustration */}
      <div className="hidden lg:flex flex-col justify-center w-1/2 p-12 bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-800 dark:to-indigo-900 relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-indigo-400/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 space-y-6 text-white max-w-md mx-auto">
          <div className="flex items-center space-x-3 mb-8">
            <Shield className="h-8 w-8" />
            <h2 className="text-2xl font-bold">SecureLogin</h2>
          </div>

          <h1 className="text-4xl font-bold tracking-tight">Forgot your password?</h1>
          <p className="text-lg text-blue-100">
            Don’t worry — enter your email and we’ll send you a reset link.
          </p>

          <div className="mt-12 relative">
            <div className="absolute inset-0 bg-white/10 rounded-xl blur-lg"></div>
            <div className="relative p-8 rounded-xl bg-white/20 backdrop-blur-sm border border-white/20 shadow-xl">
              <div className="w-full h-48 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-400/30 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
                  <div className="absolute inset-0 bg-indigo-400/20 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
                  <KeyRound className="w-24 h-24 text-white/90 relative z-10" />
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <div className="h-2 bg-white/40 rounded-full w-full"></div>
                <div className="h-2 bg-white/40 rounded-full w-5/6"></div>
                <div className="h-2 bg-white/40 rounded-full w-4/6"></div>
              </div>
            </div>
          </div>

          <p className="text-sm text-blue-200 mt-6">
            Your credentials are safe — we’ll never share or misuse your info.
          </p>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <Card className="w-full max-w-xl border-0 shadow-xl dark:bg-gray-800/50 dark:shadow-gray-900/30">
          <CardHeader className="space-y-1">
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl font-bold">Reset password</CardTitle>
              <KeyRound className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <CardDescription className="text-gray-500 dark:text-gray-400">
              Enter your email to receive a password reset link
            </CardDescription>
          </CardHeader>

          <CardContent>
            {errorMsg && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{errorMsg}</AlertDescription>
              </Alert>
            )}

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : "Send Reset Link"}
                </Button>
              </form>
            </Form>
          </CardContent>

          <CardFooter>
            <p className="text-sm text-center w-full text-gray-600 dark:text-gray-400">
              Remembered your password?{" "}
              <Link to="/login" className="font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline">
                Login
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
