"use client"
import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const Social = () => {

  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    })
  }

  return (
    <div className="w-full flex items-center gap-x-2">
      <Button variant="outline" size="lg" className="w-full" onClick={() => { onClick("google") }}>
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button variant="outline" size="lg" className="w-full" onClick={() => { onClick("github") }}>
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  )
}

export default Social;