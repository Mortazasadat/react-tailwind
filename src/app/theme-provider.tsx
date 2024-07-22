"use client";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/navbar";
import { usePathname } from "next/navigation";
import * as React from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const pathname: string | null = usePathname();

  const isIframe =
    pathname?.startsWith("/components/react") ||
    pathname?.startsWith("/components/html");

  return (
    <div>
      {!isIframe && <Navbar />}
      {children}
      {!isIframe && <Footer />}
    </div>
  );
}
