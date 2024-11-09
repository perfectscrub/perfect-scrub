"use client";

import { useState, useTransition } from "react";
import { settings } from "@/actions/settings";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GearIcon } from "@radix-ui/react-icons";
// import { useSession } from "next-auth/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { SettingsSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormDescription,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { FormError } from "@/components/FormError";
import { FormSuccess } from "@/components/FormSuccess";
import { UserRole } from "@prisma/client";
import { CircleAlert } from "lucide-react";
import Link from "next/link";

const AdminSettings = () => {
  const user = useCurrentUser();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof SettingsSchema>>({
    resolver: zodResolver(SettingsSchema),
    defaultValues: {
      name: user?.name || undefined,
      email: user?.email || undefined,
      password: undefined,
      newPassword: undefined,
      isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
    startTransition(() => {
      settings(values)
        .then((data) => {
          if (data.error) {
            setError(data.error);
          }
          if (data.success) {
            setSuccess(data.success);
          }
        })
        .catch(() => {
          setError("Something went wrong!");
        });
    });
  };

  return (
    <section className="max-w-[1200px] ml-auto flex flex-col gap-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/admin-dashboard">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Settings</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card className="max-w-[800px] w-full mx-auto">
        <CardHeader>
          <p className="text-2xl font-semibold text-center flex justify-center items-center gap-1 mb-5">
            <GearIcon className="w-5 h-5" /> Settings
          </p>
        </CardHeader>
        <CardContent className="space-y-10 pb-10">
          <Form {...form}>
            <form className="space-y-10" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-4 px-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="John"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {!user?.isOAuth && (
                  <div>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              placeholder="john.doe@youremail.com"
                              disabled={isPending}
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
                        <FormItem className="mt-5">
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="password"
                              placeholder="********"
                              disabled={isPending}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="newPassword"
                      render={({ field }) => (
                        <FormItem  className="mt-5">
                          <FormLabel>New Password</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="password"
                              placeholder="********"
                              disabled={isPending}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="isTwoFactorEnabled"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between rounded-lg border py-6 px-3 mt-10 shadow-sm">
                          <div className="space-y-0.5">
                            <FormLabel>Two Factor Authentication</FormLabel>
                            <FormDescription>
                              Enable two factor authentication for your account
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              disabled={isPending}
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}
              </div>
              <FormError message={error} />
              <FormSuccess message={success} />
              <Button type="submit" className="w-[180px] mt-5">Save</Button>
            </form>
          </Form>
          <div className="flex flex-col items-center justify-between gap-6 border-t py-10">
            <p className="self-start">Change the role for a user</p>

            <Link href={"/settings/update-role"} className="self-end">
              <Button>Update user role</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default AdminSettings;
