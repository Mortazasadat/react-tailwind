"use client";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();
  return (
    <div className="w-fit mb-10 ">
      <Button className="bg-blue-500" onClick={() => router.back()}>
        BACK
      </Button>
    </div>
  );
};

export default BackButton;
