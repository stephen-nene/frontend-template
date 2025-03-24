import React from "react";
import { Link } from "react-router-dom";
import { Ban, Home, Send } from "lucide-react";
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
import { Textarea } from "@/components/shadcn/textarea";

export default function Suspended() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const reason = e.target.reason.value;
    console.log("Appeal submitted:", { email, reason });
    alert("Your appeal has been submitted. We'll review it shortly.");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <Card className="w-full max-w-md border border-gray-200 dark:border-gray-800 shadow-lg">
        <CardHeader className="space-y-1 text-center pb-2">
          <div className="mx-auto bg-red-100 dark:bg-red-900/30 p-3 rounded-full mb-2">
            <Ban size={36} className="text-red-600 dark:text-red-400" />
          </div>
          <CardTitle className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            401
          </CardTitle>
          <CardTitle className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
            Suspended Account
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Your account has been suspended, please contact your administrator.
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-4">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  className="w-full border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="reason"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Why do you think this was an error?
                </label>
                <Textarea
                  id="reason"
                  name="reason"
                  placeholder="Please explain why you believe your account was suspended in error..."
                  className="min-h-24 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              <Send className="h-4 w-4 mr-2" />
              Submit Appeal
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex justify-center pt-2 pb-6">
          <Button
            variant="outline"
            asChild
            className="border-gray-300 dark:border-gray-700 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
          >
            <Link to="/">
              <Home className="h-4 w-4 mr-2" />
              Return Home
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
