import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/shadcn/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";
import { LockKeyhole, ArrowRight } from "lucide-react";

export default function NotLoggedIn() {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-50 dark:bg-slate-900 px-4">
      <Card className="w-full max-w-md border border-slate-200 dark:border-slate-700 shadow-lg">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
            <LockKeyhole className="h-10 w-10 text-blue-600 dark:text-blue-400" />
          </div>
          <CardTitle className="text-3xl font-bold text-slate-900 dark:text-slate-50">
            Authentication Required
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            You need to be logged in to access this page. Please sign in to
            continue.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center pb-6 pt-2">
          <Button asChild className="px-6 font-medium bg-green-700">
            <Link to="/login" className="flex items-center gap-2">
              Go to Login <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
