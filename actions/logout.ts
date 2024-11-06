"use server";
import { signOut } from "@/auth";

// For when modifications on the server are needed

export const logout = async () => {
  // you can do server specific stuff here
  await signOut({redirectTo: "/auth/login"});
};
