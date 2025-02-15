"use client";
import Logo from "@/app/assets/svgs/Logo";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { loginUser } from "@/services/authService";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidationSchema } from "./loginValidation";

const LoginForm = () => {
  const form = useForm({
    resolver: zodResolver(loginValidationSchema),
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Loging....");
    try {
      const res = await loginUser(data);
      // console.log("res--------->", res);
      if (res?.success) {
        toast.error(res?.message, { id: toastId });
      } else {
        toast.error(res?.message, { id: toastId });
      }
    } catch (error: any) {
      console.log("login form error", error);
    }
  };

  return (
    <>
      <div className="border-2 border-gray-300 rounded-xl flex-grow max-w-md w-full p-5">
        <div className="flex items-center space-x-4 ">
          <Logo />
          <div>
            <h1 className="text-xl font-semibold">Login</h1>
            <p className="font-extralight text-sm text-gray-600">
              Join us today and start your journey!
            </p>
          </div>
        </div>
        <Form {...form}>
          <form className="mt-5" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      value={field.value || ""}
                      placeholder="Enter your email"
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      value={field.value || ""}
                      placeholder="Enter your password"
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="mt-5 w-full">
              {isSubmitting ? "Loging...." : "Login"}
            </Button>
          </form>
        </Form>
        <p className="text-sm text-gray-600 text-center my-3">
          Don not have any account ?
          <Link href="/register" className="text-primary">
            Register
          </Link>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
