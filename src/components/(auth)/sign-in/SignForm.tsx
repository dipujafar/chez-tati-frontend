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
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

// Define form data types
interface FormData {
  email: string;
  password: string;
}

const SignForm = () => {
  const [showPassword, setShowPassword] = useState(false);

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
      <Card className="lg:w-[650px]">
        <CardHeader>
          <CardTitle className="text-4xl text-center font-semibold">
            Sign In
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

              {/* Remember me and forget password section */}
              <div className="flex flex-col md:flex-row justify-between gap-y-3 ">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label htmlFor="terms" className="text-secondary-gray">
                    Remember me
                  </label>
                </div>
                <Link href="/forget-password">
                  <p className="text-secondary-gray">Forget Password</p>
                </Link>
              </div>

              {/* Login button */}
              <Button type="submit" className="bg-primary-color rounded-full">
                Login
              </Button>
            </div>
          </form>
        </CardContent>

        {/* Footer with link to register */}
        <CardFooter className="flex justify-center gap-1">
          <p className="text-secondary-gray">Don’t have account?</p>
          <Link href={"/sign-up"}>
            <span className="text-lg font-medium"> Register </span>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignForm;
