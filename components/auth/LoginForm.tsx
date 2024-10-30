"use client";
import { useSearchParams } from "next/navigation";
import { useState, useTransition } from 'react';
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/FormError";
import { FormSuccess } from "@/components/FormSuccess";
import { login } from "@/actions/login";

import { LoginSchema } from "@/schemas";
import { CardWrapper } from "./CardWrapper"; 

export const LoginForm = () => {
  const searchParams = useSearchParams();
  const urlError = searchParams.get("error") ==="OAuthAccountNotLinked"? "Email already exists with another provider":"";
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: any) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      login(values).then(data => {
        setError(data?.error);
        // TODO: Add when added 2FA
        // setSuccess(data?.success);
      });
    })
  }

  return (
    <CardWrapper
      headerTitle="Login"
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-4 p-1 ">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="jane.smith@youremail.com"
                      {...field}
                      disabled={isPending}
                      className="placeholder:text-gray-300"
                    />
                  </FormControl>
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
                      type="password"
                      {...field}
                      placeholder="********"
                      disabled={isPending}
                      className="placeholder:text-gray-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error || urlError} />
          <FormSuccess message={success} />
          <Button
            type="submit"
            size="lg"
            className="w-full hover:bg-muted-primary"
            disabled={isPending}
          >
            Login

          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}