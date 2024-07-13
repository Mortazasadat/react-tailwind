"use client";
import BorderGlowCard from "@/components/card";
import Comp from "@/components/layout/com";
import CompnentsHeader from "@/components/layout/comp-header";
import ComponentsSection from "@/components/layout/components-section";
import { Chip, Typography } from "@material-tailwind/react";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <CompnentsHeader />
      <ComponentsSection />
    </main>
  );
}
