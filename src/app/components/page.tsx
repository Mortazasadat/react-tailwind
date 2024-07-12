"use client";
import BorderGlowCard from "@/components/card";
import Comp from "@/components/layout/com";
import CompnentsHeader from "@/components/layout/comp-header";
import ComponentsSection from "@/components/layout/components-section";
import { Chip, Typography } from "@material-tailwind/react";
import Link from "next/link";

export default function Page() {
  return (
    <main className="relative h-full ">
      <CompnentsHeader />
      {/* <div className="py-32  flex justify-center items-center">
        <BorderGlowCard>
          <Link href="#">
            <div className="col-span-1 mb-8 lg:mb-0 ">
              <Link href="#" className="list-none  ">
                <div className="group relative ">
                  <div className="relative aspect-[5/3] overflow-hidden rounded-lg  ring-1 ring-cerise-red-900/10">
                    <img src="" alt="title" className="  w-full h-full" />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-blue-600 ">
                    <Link
                      href="#"
                      className="flex items-center justify-between"
                    >
                      <p className="relative">Feature Sections </p>

                      <Chip
                        variant="ghost"
                        size="sm"
                        value="new"
                        className=" bg-blue-500 text-white ml-1  capitalize !flex"
                      />
                    </Link>
                  </h4>
                  <p className="relative group-hover:text-blue-600  mt-1.5 text-xs font-medium text-slate-500">
                    3 Components
                  </p>
                </div>
              </Link>
            </div>
          </Link>
        </BorderGlowCard>
      </div> */}
      <div className="relative   z-50 ">
        <ComponentsSection />
      </div>
    </main>
  );
}
