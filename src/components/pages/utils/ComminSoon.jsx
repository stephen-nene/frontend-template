import React from "react";
import { useNavigate } from "react-router-dom";
import { Hourglass, Home, ArrowLeft, Construction } from "lucide-react";
import { Button } from "@/components/shadcn/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";

export default function ComingSoon() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <Card className="w-full max-w-md border border-gray-200 dark:border-gray-800 shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <div className="mx-auto bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mb-2">
            <Hourglass
              size={36}
              className="text-blue-600 dark:text-blue-400 animate-pulse"
            />
          </div>
          <CardTitle className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Coming{" "}
            <span className="text-blue-600 dark:text-blue-400">Soon</span>!
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400 text-lg">
            We're working hard to bring something amazing your way.
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center">
          <div className="flex items-center justify-center gap-2 mb-6 text-yellow-500 dark:text-yellow-400">
            <Construction className="h-6 w-6" />
            <span className="text-lg font-medium">Under Construction</span>
            <Construction className="h-6 w-6" />
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            Check back later for updates, or return to our homepage in the
            meantime.
          </p>

          <div className="w-full mt-6 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 dark:bg-blue-600 rounded-full animate-pulse"
              style={{ width: "75%" }}
            ></div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-center space-x-4 pt-4 pb-6">
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            className="border-gray-300 dark:border-gray-700 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go Back
          </Button>

          <Button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            <Home className="h-4 w-4 mr-2" />
            Go Home
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
