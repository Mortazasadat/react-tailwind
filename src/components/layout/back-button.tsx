"use client";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

const BackButton = () => {
  return (
    <div className="w-fit mb-10 ">
      <Link href="/components">
        <Button className=" bg-light-blue-500 hover:bg-light-blue-400 transition-all duration-200">
          BACK
        </Button>
      </Link>
    </div>
  );
};

export default BackButton;
