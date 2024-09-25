"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import google from "@/assets/images/google.png";
import Image from "next/image";

// Define form data types
interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);

 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

 
  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div>
      <Card className="md:w-[650px]">
        <CardHeader>
          <CardTitle className="text-4xl text-center font-semibold">
            Create Account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-4">
              {/* Input email */}
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="email"
                  placeholder="Email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Input password with eye icon to toggle visibility */}
              <div className="flex flex-col space-y-1.5 relative">
                <Input
                  id="password"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
                {/* Eye icon to toggle password visibility */}
                <div
                  className="absolute right-3 top-1/3 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff color="#1A1A1A" />
                  ) : (
                    <Eye color="#1A1A1A" />
                  )}
                </div>
              </div>

              {/* Input Confirm Password with eye icon to toggle visibility */}
              <div className="flex flex-col space-y-1.5 relative">
                <Input
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  type={showPassword ? "text" : "password"}
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                  })}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.confirmPassword.message}
                  </p>
                )}
                {/* Eye icon to toggle password visibility */}
                <div
                  className="absolute right-3 top-1/3 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => setConfirmShowPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff color="#1A1A1A" />
                  ) : (
                    <Eye color="#1A1A1A" />
                  )}
                </div>
              </div>

              {/*Accept all terms & Conditions section */}

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label htmlFor="terms" className="text-secondary-gray">
                  Accept all terms & Conditions
                </label>
              </div>

              {/* Login button */}
              <Button type="submit" className="bg-primary-color rounded-full">
                Create Account
              </Button>
            </div>
          </form>
        </CardContent>

        <CardFooter className="relative">
          <Button className="w-full" variant="outline">
            Continue with Google
          </Button>
          <Image src={google} alt="google" className="absolute left-12" />
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUpForm;
