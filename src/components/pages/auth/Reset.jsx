import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  ShieldCheck,
  ArrowRight,
  Key,
  Rocket,
  Hash,
  Zap,
  Mail,
  Unlock

} from "lucide-react";
import { toast } from "sonner";

import { Alert, AlertTitle, AlertDescription } from "@/components/shadcn/alert";
import { Button } from "@/components/shadcn/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";
import { Input } from "@/components/shadcn/input";
import { Label } from "@/components/shadcn/label";
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

import { handleServerReset } from "../../../services/requests/auth";

// === Validation schema ===
const resetSchema = z
  .object({
    token: z.string().min(6, "Token must be at least 6 characters"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(20, "Password must be at most 20 characters"),
    confirm_password: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverMsg, setServerMsg] = useState({});
  const [searchParams] = useSearchParams();
  const tokenFromUrl = searchParams.get("token") || "";
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(resetSchema),
    defaultValues: {
      token: tokenFromUrl,
      password: "",
      confirm_password: "",
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    await handleServerReset(data, setServerMsg, navigate);
    setIsLoading(false);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-950">
      {/* Left side - Illustration & Info */}
      <div className="hidden lg:flex flex-col justify-center w-1/2 px-14 bg-gradient-to-br from-sky-400 to-purple-500 dark:from-sky-900 dark:to-purple-900">
        <div className="space-y-8 text-white">
          {/* New headline & subtext */}
          <h1 className="text-5xl font-extrabold tracking-tight leading-snug">
            Let’s Get You Back In
          </h1>
          <p className="text-base text-orange-100 max-w-md">
            Forgot your password? No problem—grab your reset code, choose a strong new password, and we’ll rocket you right back into your account. 🚀
          </p>

          {/* Geometric/abstract “illustration” */}
          <div className="relative w-full h-64">
            {/* background polygon */}
            <div className="absolute inset-0 transform -rotate-6">
              <div className="w-full h-full bg-white/20 clip-path-polygon-hexagon blur-lg"></div>
            </div>
            {/* foreground icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Rocket className="w-36 h-36 text-white drop-shadow-2xl" strokeWidth={2} />
            </div>
          </div>

          {/* Footer callout */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex space-x-4">
              <div className="flex flex-col items-center">
                <Key className="w-8 h-8 text-white" />
                <span className="text-xs mt-1">Secure</span>
              </div>
              <div className="flex flex-col items-center">
                <Unlock className="w-8 h-8 text-white" />
                <span className="text-xs mt-1">Verify</span>
              </div>
              <div className="flex flex-col items-center">
                <ShieldCheck className="w-8 h-8 text-white" />
                <span className="text-xs mt-1">Protect</span>
              </div>
            </div>
            <div className="bg-white/30 py-1.5 px-5 rounded-full text-sm tracking-wide backdrop-blur-sm">
              Step 2 of 2
            </div>
          </div>
        </div>
      </div>




      {/* Right side – Reset Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6">
        <Card className="w-full max-w-xl shadow-xl border-0 dark:bg-gray-800/60 backdrop-blur-sm">
          <CardHeader className="space-y-1">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <CardTitle className="text-2xl font-bold">
                Reset Your Password
              </CardTitle>
            </div>
            <CardDescription className="text-gray-500 dark:text-gray-400">
              Enter a new password, confirm it, and provide your reset token.
            </CardDescription>
          </CardHeader>

          <CardContent>
            {(serverMsg.error || serverMsg.success) && (
              <Alert
                variant={serverMsg.error ? "destructive" : "success"}
                className="mb-4"
              >
                <AlertDescription>
                  {serverMsg.error || serverMsg.success}
                </AlertDescription>
              </Alert>
            )}
            {(serverMsg?.error || serverMsg?.success) && (
              <Alert
                variant={serverMsg.error ? "destructive" : "success"}
                className="mb-4"
              >
                {serverMsg.error && <AlertTitle>
                  {serverMsg.error}
                </AlertTitle>}

                {serverMsg.success && (
                  <>

                    <AlertTitle>
                      {serverMsg.success}
                    </AlertTitle>
                    <AlertDescription>
                      Redirecting to login page...

                    </AlertDescription>
                  </>
                )}
              </Alert>
            )}

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                {/* Token */}
                <FormField
                  control={form.control}
                  name="token"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">
                        Reset Token
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Hash className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                          <Input
                            {...field}
                            type="text"
                            placeholder="Enter token"
                            disabled={!!tokenFromUrl}
                            className="pl-10 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent"
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm" />
                    </FormItem>
                  )}
                />

                {/* New Password */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">
                        New Password
                      </FormLabel>
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
                            onClick={() => setShowPassword((v) => !v)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                            aria-label={
                              showPassword ? "Hide password" : "Show password"
                            }
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm" />
                    </FormItem>
                  )}
                />

                {/* Confirm Password */}
                <FormField
                  control={form.control}
                  name="confirm_password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">
                        Confirm Password
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                          <Input
                            {...field}
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="pl-10 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              setShowConfirmPassword((v) => !v)
                            }
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                            aria-label={
                              showConfirmPassword
                                ? "Hide password"
                                : "Show password"
                            }
                          >
                            {showConfirmPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm" />
                    </FormItem>
                  )}
                />

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-700 dark:hover:bg-blue-800 transition-all duration-200 mt-4 flex items-center justify-center gap-2"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="animate-pulse">Resetting</span>
                      <span className="flex">
                        <span className="animate-bounce mx-0.5 delay-100">.</span>
                        <span className="animate-bounce mx-0.5 delay-200">.</span>
                        <span className="animate-bounce mx-0.5 delay-300">.</span>
                      </span>
                    </>
                  ) : (
                    <>
                      Reset Password
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>

          <CardFooter className="flex justify-center">
            <p className="text-sm text-center text-gray-600 dark:text-gray-400">
              Proceed to?{" "}
              <Link to="/login" className="font-medium text-blue-600 hover:text-blue-800 hover:underline dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                Login
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
