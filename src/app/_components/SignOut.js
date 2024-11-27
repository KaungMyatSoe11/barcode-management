"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import React from "react";

const SignOut = () => {
  const singInHandler = () => {
    signOut();
  };
  return (
    <div>
      <Button onClick={singInHandler}>Sign In </Button>
    </div>
  );
};

export default SignOut;
