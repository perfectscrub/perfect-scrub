"use client";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import React from "react";

const Provider = ({
  session,
  children,
}: {
  session: Session;
  children: React.ReactNode;
}) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
