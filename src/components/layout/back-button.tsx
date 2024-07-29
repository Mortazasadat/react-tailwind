"use client";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

const BackButton = () => {
  return (
    <div className="w-fit mb-10 ">
      <Link
        href="/components"
        className="px-4 py-3 rounded-lg text-sm font-bold text-white bg-light-blue-500 hover:bg-light-blue-400 transition-all duration-200"
      >
        BACK
      </Link>
    </div>
  );
};

export default BackButton;
