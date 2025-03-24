import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
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
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/shadcn/select";
import { MultiSelect } from "@/components/shadcn/MultiSelect";
import { RadioGroup, RadioGroupItem } from "@/components/shadcn/radio-group";
import { Button } from "@/components/shadcn/button";
import {
  Eye,
  EyeOff,
  UserCircle,
  Mail,
  Phone,
  MapPin,
  Building,
  Key,
  KeyRound,
} from "lucide-react";
// import { serverSignup } from "../../helpers/auth";
import { handleServerRegister } from "../../../services/requests/auth";
import { SideImg } from "./Reset";
import { Link, useNavigate } from "react-router-dom";

// Define the form schema using Zod
const formSchema = z
  .object({
    user_type: z.enum(["Bidder", "Tenderer"]),
    company_name: z.string().min(1, "Please input company name"),
    email: z.string().email("Please enter a valid email"),
    contact_number: z
      .string()
      .regex(/^07|01\d{8}$/, "Phone number must be in the format 0712345678"),
    company_type: z.string().optional(),
    sector: z.string().min(1, "Please select sector type"),
    kra_pin: z
      .string()
      .optional(),
      // .regex(/^[AP]\d{9}[A-Z,a-z]$/, "Invalid KRA PIN format. e.g AP123456789A"),
    location: z.string().min(1, "Please enter your location"),
    industries: z
      .array(z.string())
      .min(1, "Please enter at least one industry"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })
  .superRefine((data, ctx) => {
      // Conditional validation for KRA PIN
      if (data.user_type === "Tenderer") {
        if (!data.kra_pin) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "KRA PIN is required for Tenderers",
            path: ["kra_pin"],
          });
        } else if (!/^[AP]\d{9}[A-Za-z]$/.test(data.kra_pin)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Invalid KRA PIN format. e.g AP123456789A",
            path: ["kra_pin"],
          });
        }
      }

      // Password match validation
      if (data.password !== data.confirmPassword) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Passwords do not match",
          path: ["confirmPassword"],
        });
      }
    });



export default function Signup() {
  const navigate = useNavigate();

  const [userType, setUserType] = useState("Bidder");
  const [inputValue, setInputValue] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user_type: "Bidder",
      industries: [],
      company_name: "",
      email: "",
      contact_number: "",
      company_type: "",
      sector: "",
      kra_pin: "",
      location: "",
      password: "",
      confirmPassword: "",
    },
  });

  const industries = form.watch("industries") || [];

  const onSubmit = async (values) => {
      console.log("Form errors:", form.formState.errors);

      console.log(values);
    try {
      // const res = await handleServerRegister(values, navigate);
    } catch (error) {
      let errorMSG = "Server error, try again later";

      if (error.response && error.response.data) {
        const errorData = error.response.data.error || error.response.data;

        if (Array.isArray(errorData)) {
          errorMSG = errorData.join(", ");
        } else if (typeof errorData === "string") {
          errorMSG = errorData;
        } else if (errorData.email || errorData.kra_pin) {
          errorMSG = Object.values(errorData).join(", ");
        }
      }

      toast.error(errorMSG);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 items-center gap-4   rounded-md overflow-hidden  mx-auto p-5">
      {/* Right Side - Form */}
      <div className="w-full p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Create Your Account
          </h2>
          <p className="text-gray-600 mt-1">
            Already have an account?{" "}
            <Link to="/login" className="text-green-600 font-semibold">
              Login
            </Link>
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            {/* Account Type */}
            {/* <FormField
              control={form.control}
              name="user_type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Account Type</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(value) => {
                        field.onChange(value);
                        setUserType(value);
                      }}
                      defaultValue={field.value}
                      className="flex gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Bidder" id="Bidder" />
                        <label htmlFor="Bidder">Bidder/Supplier</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Tenderer" id="Tenderer" />
                        <label htmlFor="Tenderer">Tender Advertiser</label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}

            {/* Company Name */}
            <FormField
              control={form.control}
              name="company_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <UserCircle className="text-emerald-700 absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5" />
                      <Input
                        {...field}
                        placeholder="Enter your Name"
                        className="pl-10"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email Address */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="text-emerald-800 absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5" />
                      <Input
                        {...field}
                        placeholder="Enter your email address"
                        className="pl-10" // Add padding to prevent text overlap
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone Number */}
            <FormField
              control={form.control}
              name="contact_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Phone className="text-emerald-800 absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5" />
                      <Input
                        {...field}
                        placeholder="0712345678"
                        className="pl-10" // Add padding to prevent text overlap
                        maxLength={10}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Company Type */}
            {userType === "Tenderer" && (
              <FormField
                control={form.control}
                name="company_type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Type</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Company Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="private">Private</SelectItem>
                          <SelectItem value="Government">Government</SelectItem>
                          <SelectItem value="ngo">
                            Non-Governmental Organization
                          </SelectItem>
                          <SelectItem value="partnership">
                            Partnership
                          </SelectItem>
                          <SelectItem value="others">Others</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {/* Sector Type */}
            <FormField
              control={form.control}
              name="sector"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sector</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Enter your sector" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="private">Private</SelectItem>
                        <SelectItem value="Government">Government</SelectItem>
                        <SelectItem value="ngo">
                          Non-Governmental Organization
                        </SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* KRA Pin */}
            {userType === "Tenderer" && (
              <FormField
                control={form.control}
                name="kra_pin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>KRA PIN Number</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="KRA Number"
                        startIcon={<Key className="text-emerald-800 mr-2" />}
                        maxLength={11}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {/* Location */}
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <MapPin className="text-emerald-800 absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5" />
                      <Input
                        {...field}
                        placeholder="Enter your location"
                        className="pl-10" // Add padding to prevent text overlap
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Industries */}

            <FormField
              control={form.control}
              name="industries"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>
                    Industries{" "}
                    <span className="text-muted-foreground">
                      (Press Enter or comma to add)
                    </span>
                  </FormLabel>
                  <FormControl>
                    <div className="space-y-2">
                      <div className="relative">
                        <Building className="text-emerald-800 absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5" />
                        <Input
                          // {...field}
                          value={inputValue} // Separate state for current input
                          placeholder="e.g. Technology, Healthcare, Finance"
                          onChange={(e) => setInputValue(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === ",") {
                              e.preventDefault();
                              if (inputValue.trim()) {
                                const newIndustry = inputValue.trim();

                                // setIndustries(newIndustries);
                                form.setValue("industries", [
                                  ...industries,
                                  newIndustry,
                                ]);

                                setInputValue("");
                              }
                            }
                          }}
                          className={`${
                            fieldState.error ? "border-red-500" : ""
                          } pl-10`}
                        />
                      </div>

                      {/* Industries Tags */}
                      {industries.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {industries.map((industry, index) => (
                            <div
                              key={`${industry}-${index}`}
                              className="inline-flex items-center bg-emerald-100 text-emerald-800 rounded-full px-3 py-1 text-sm"
                            >
                              {industry}
                              <button
                                type="button"
                                onClick={() => {
                                  form.setValue(
                                    "industries",
                                    industries.filter((_, i) => i !== index)
                                  );
                                }}
                                className="ml-2 cursor-pointer text-rose-600 hover:text-rose-800"
                              >
                                ×
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            {/* <MultiSelect/> */}
            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Key className="text-emerald-800 absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5" />
                      <Input
                        {...field}
                        type={showPassword ? "text" : "password"}
                        placeholder="Create your password"
                        className={`${
                          fieldState.error ? "border-red-500" : ""
                        } pl-10`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-emerald-800"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirm Password */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Key className="text-emerald-800 absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5" />

                      <Input
                        {...field}
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        className={`${
                          fieldState.error ? "border-red-500" : ""
                        } pl-10`}
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-emerald-800"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-700"
            >
              Create Account
            </Button>
          </form>
        </Form>
      </div>

      <SideImg height="full" />
    </div>
  );
}
