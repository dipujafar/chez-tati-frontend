"use client"
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


type TFormInput = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const ContactContainer: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormInput>();


  const onSubmit: SubmitHandler<TFormInput> = (data) => {
    console.log(data); 
  };

  return (
    <div>
      {/* page title */}
      <div className="text-center space-y-1 text-primary-black">
        <h1 className="text-6xl font-bold">Contact</h1>
        <p className="text-xl">We are available 24/7, 7 days a week.</p>
        <p className="text-xl">Phone: +8801611112222</p>
      </div>

      {/* form */}
      <div className="mt-10">
        <h1 className="text-5xl font-bold text-primary-black text-center">
          Send a Message
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-6 w-full space-y-5">
            {/* input first name and last name */}
            <div className="flex flex-col md:flex-row items-center gap-x-8 gap-y-5">
              <div className="w-full">
                <Input
                  {...register("firstName", { required: "First name is required" })}
                  id="firstName"
                  placeholder="First name"
                  className="rounded-full"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName.message}</p>
                )}
              </div>
              <div className="w-full">
                <Input
                  {...register("lastName", { required: "Last name is required" })}
                  id="lastName"
                  placeholder="Last name"
                  className="rounded-full"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            {/* input email */}
            <div className="w-full">
              <Input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Please enter a valid email address",
                  },
                })}
                id="email"
                placeholder="Your mail"
                className="rounded-full"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* input description */}
            <div className="w-full">
              <Textarea
                {...register("message", { required: "Message is required" })}
                placeholder="Type your message here."
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            {/* submit button */}
            <Button className="w-full rounded-full" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactContainer;
