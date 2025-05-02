import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import {
  Mail,
  UserCircle2,
  Phone,
  Cake,
  MapPin,
  TextCursorInput,
  VenetianMask,
  Info,
  ShieldCheck,
  CalendarDays,
  Contact2,
  Mars,
  Venus,
} from "lucide-react";
import { useUserStore } from '@/store/useUserStore.js';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/form";
import { Button } from "@/components/shadcn/button";
import { Input } from "@/components/shadcn/input";
import { Label } from "@/components/shadcn/label";
import { Textarea } from "@/components/shadcn/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shadcn/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/shadcn/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/shadcn/avatar";
import { Switch } from "@/components/shadcn/switch";

const profileFormSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  phone_number: z.string().regex(/^\d{10}$/).optional(),
  bio: z.string().max(200).optional(),
  avatar_url: z.string().url().optional(),
  birth_date: z.string().optional(),
  address: z.string().optional(),
  gender: z.enum(["male", "female", "other"]).optional(),
  is_active: z.boolean(),
});

export default function Profile() {
  const user = useUserStore((state) => state.user);
  const logOut = useUserStore((state) => state.logOut);
  const updateUser = useUserStore((state) => state.updateUser);
  const [isEditMode, setIsEditMode] = useState(false);

  const form = useForm({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      ...user,
      birth_date: user?.birth_date?.split('T')[0], // Format date for input
    },
  });
  console.log(user)

  async function onSubmit(values) {
    try {
      // Simulate API call
      await updateUser(values);
      setIsEditMode(false);
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error("Failed to update profile");
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-4 dark:bg-gray-900 min-h-screen">
      <Card className="dark:bg-gray-800 dark:border-gray-700">
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle className="dark:text-gray-200">
            {isEditMode ? "Edit Profile" : "My Profile"}
          </CardTitle>
          <Button
            variant={isEditMode ? "outline" : "default"}
            onClick={() => setIsEditMode(!isEditMode)}
            className="dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200"
          >
            {isEditMode ? "Cancel" : "Edit Profile"}
          </Button>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Avatar Section */}
              <div className="flex flex-col items-center gap-4 mb-8">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={user?.avatar_url} />
                  <AvatarFallback className="dark:bg-gray-700">
                    <UserCircle2 className="w-12 h-12 text-gray-400" />
                  </AvatarFallback>
                </Avatar>
                {isEditMode && (
                  <FormField
                    control={form.control}
                    name="avatar_url"
                    render={({ field }) => (
                      <FormItem className="w-full max-w-xs">
                        <FormLabel className="dark:text-gray-300">Avatar URL</FormLabel>
                        <Input
                          {...field}
                          className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                          placeholder="Enter image URL"
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </div>

              {/* Personal Info Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 dark:text-gray-300">
                        <Mail className="h-4 w-4" /> Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          readOnly={!isEditMode}
                          className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 dark:text-gray-300">
                        <VenetianMask className="h-4 w-4" /> Username
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          readOnly={!isEditMode}
                          className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Add other fields following the same pattern */}
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 dark:text-gray-300">
                        <Contact2 className="h-4 w-4" /> First Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          readOnly={!isEditMode}
                          className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 dark:text-gray-300">
                        <Contact2 className="h-4 w-4" /> Last Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          readOnly={!isEditMode}
                          className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone_number"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 dark:text-gray-300">
                        <Phone className="h-4 w-4" /> Phone
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          readOnly={!isEditMode}
                          className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="birth_date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 dark:text-gray-300">
                        <Cake className="h-4 w-4" /> Birth Date
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          {...field}
                          readOnly={!isEditMode}
                          className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 dark:text-gray-300">
                        <Mars className="h-4 w-4" /> Gender
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        disabled={!isEditMode}
                      >
                        <FormControl>
                          <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200">
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="dark:bg-gray-700 dark:border-gray-600">
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 dark:text-gray-300">
                        <Contact2 className="h-4 w-4" /> User role
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          readOnly
                          disabled
                          className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem className="col-span-full">
                      <FormLabel className="flex items-center gap-2 dark:text-gray-300">
                        <MapPin className="h-4 w-4" /> Address
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          readOnly={!isEditMode}
                          className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem className="col-span-full">
                      <FormLabel className="flex items-center gap-2 dark:text-gray-300">
                        <Info className="h-4 w-4" /> Bio
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          readOnly={!isEditMode}
                          className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>


              <div className="flex justify-between items-center mt-6">


                <Button
                  variant="destructive"
                  className="w-full md:w-auto "
                  onClick={async () => {
                    await logOut();
                  }}
                >
                  Logout
                </Button>



                {isEditMode && (
                  <Button
                    type="submit"
                    className="w-full md:w-auto dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200"
                  >
                    Save Changes
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}