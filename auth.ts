import NextAuth from "next-auth"
// import GitHub from "next-auth/providers/github";
// import Google from "next/auth/providers/google";

import authConfig from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/db";
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  // providers: [Github, Google],
  adapter: PrismaAdapter(prisma),
  session: {strategy: "jwt"},
  ...authConfig
})