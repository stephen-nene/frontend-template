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
import { AlertTriangle, Home } from "lucide-react";

export default function Error404() {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-50 dark:bg-slate-900 px-4">
      <Card className="w-full max-w-lg border border-slate-200 dark:border-slate-700 shadow-lg">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto p-3 rounded-full bg-amber-100 dark:bg-amber-900/30 mb-4">
            <AlertTriangle className="h-10 w-10 text-amber-600 dark:text-amber-400" />
          </div>
          <CardTitle className="text-4xl font-bold text-slate-900 dark:text-slate-50">
            404 | Page Not Found
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center pb-6 pt-2">
          <Button
            asChild
            variant="default"
            className="px-6 font-medium bg-green-500 hover:bg-green-600"
          >
            <Link to="/" className="flex items-center gap-2">
              <Home className="h-4 w-4" /> Return to Home
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
