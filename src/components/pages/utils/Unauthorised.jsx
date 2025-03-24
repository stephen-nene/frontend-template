import React from "react";
import { Link } from "react-router-dom";
import { ShieldAlert, Home, Terminal } from "lucide-react";
import { Button } from "@/components/shadcn/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";

export default function Unauthorised() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <Card className="w-full max-w-md border border-gray-200 dark:border-gray-800 shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <div className="mx-auto bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full mb-2">
            <ShieldAlert
              size={36}
              className="text-amber-600 dark:text-amber-400"
            />
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Unauthorised Access
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
            <Terminal className="h-4 w-4" />
            <span>Try SSH you cheeky lad.</span>
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col items-center">
          <div className="w-full max-w-xs rounded-md bg-gray-900 dark:bg-black p-4 font-mono text-xs text-gray-100 dark:text-gray-300 mt-2">
            <p className="text-green-400">$ ssh access-denied</p>
            <p className="mt-1 text-red-400">Permission denied (publickey).</p>
            <p className="mt-1 text-amber-400 animate-pulse">_</p>
          </div>
        </CardContent>

        <CardFooter className="flex justify-center pt-2 pb-6">
          <Button
            asChild
            className="bg-purple-600 hover:bg-purple-700 text-white dark:bg-purple-700 dark:hover:bg-purple-800"
          >
            <Link to="/">
              <Home className="h-4 w-4 mr-2" />
              Go to Home
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
