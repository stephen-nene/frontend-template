import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Alert, AlertTitle, AlertDescription } from "@/components/shadcn/alert";
import { Button } from "@/components/shadcn/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/shadcn/card";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/shadcn/form";
import { Input } from "@/components/shadcn/input";
import {
  Mail,
  AlertCircle,
  CheckCircle,
  ArrowRight,
  Loader2,
  Clock,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useUserStore } from "@/store/useUserStore";
export default function NotActivate({ darkMode }) {
  const [error, setError] = useState("");
  const [serverMessage, setServerMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdatingEmail, setIsUpdatingEmail] = useState(false);
  const { login, userData } = useUserStore();

  const form = useForm({
    defaultValues: {
      email: userData?.email || "",
    },
  });

  const handleReactivate = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulating API call
    setTimeout(() => {
      console.log("Activation email resent to:", userData?.email);
      setServerMessage("Activation email has been resent successfully!");
      setIsLoading(false);
      toast.success("Activation email sent! Please check your inbox.", {
        description: `An email was sent to ${userData?.email}`,
        duration: 5000,
      });
    }, 1500);
  };

  const handleUpdateEmail = (values) => {
    setIsUpdatingEmail(true);
    setError("");

    // Simulating API call
    setTimeout(() => {
      console.log("Email updated from", userData?.email, "to:", values.email);
      setServerMessage("Email updated! A new activation link has been sent.");
      setIsUpdatingEmail(false);
      toast.success("Email updated successfully!", {
        description: `We've sent a new activation link to ${values.email}`,
        duration: 5000,
      });
    }, 1500);
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <Card className="max-w-lg w-full shadow-lg border-blue-100 dark:border-blue-900 bg-white dark:bg-gray-950">
        <CardHeader className="space-y-1 bg-blue-50 dark:bg-blue-950/30 rounded-t-lg border-b border-blue-100 dark:border-blue-900">
          <div className="flex items-center justify-center mb-2">
            <div className="p-3 rounded-full bg-amber-100 dark:bg-amber-900/30">
              <AlertCircle className="h-8 w-8 text-amber-500 dark:text-amber-400" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-center text-blue-950 dark:text-blue-100">
            Account Not Activated
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 pt-6">
          {serverMessage ? (
            <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800">
              <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
              <AlertTitle className="text-green-800 dark:text-green-400">
                Success
              </AlertTitle>
              <AlertDescription className="text-green-700 dark:text-green-300">
                {serverMessage}
              </AlertDescription>
              <AlertDescription className="text-s text-lime-500 dark:text-lime-300">
                Please check your inbox for the activation link.
              </AlertDescription>
            </Alert>
          ) : (
            <>
              <Alert className="bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800">
                <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                <AlertTitle className="text-amber-800 dark:text-amber-400">
                  Attention Required
                </AlertTitle>
                <AlertDescription className="flex flex-col text-amber-700 dark:text-amber-300">
                  An activation email was sent to{" "}
                  {userData?.email || "your email address"}{" "}
                  {/* <span className="font-semibold">
                    {userData?.email || "your email address"}
                  </span>{" "} */}
                  with instructions.
                </AlertDescription>
              </Alert>

              <div className="space-y-2">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  To resend the activation email, click the button below:
                </p>
                <Button
                  onClick={handleReactivate}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-700 dark:hover:bg-blue-600"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Mail className="mr-2 h-4 w-4" />
                      Resend Activation Email
                    </>
                  )}
                </Button>
              </div>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-300 dark:border-gray-700" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white dark:bg-gray-950 px-2 text-gray-500 dark:text-gray-400">
                    Or update your email
                  </span>
                </div>
              </div>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleUpdateEmail)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-300">
                          Email address
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your correct email"
                            type="email"
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:focus:border-blue-500"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    variant="outline"
                    className="w-full border-blue-300 text-blue-700 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-950/50"
                    disabled={isUpdatingEmail}
                  >
                    {isUpdatingEmail ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Updating...
                      </>
                    ) : (
                      <>
                        Update Email
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </>
          )}

          <div className="flex items-center justify-center space-x-2 text-xs text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 p-3 rounded-md border border-amber-200 dark:border-amber-800 mt-4">
            <Clock className="h-4 w-4" />
            <p>
              You have <span className="font-bold">5 days</span> to activate
              your account or it will be revoked.
            </p>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </CardContent>

        <CardFooter className="flex justify-center border-t border-gray-200 dark:border-gray-800 pt-4 pb-6 bg-gray-50 dark:bg-gray-950/50 rounded-b-lg">
          <Link
            to="/login"
            className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
          >
            Return to login
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
