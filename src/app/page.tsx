import Navbar from "@/components/layout/navbar";
import HomeFeature from "@/sections/components/HomeFeature";
import MianHeader from "@/sections/home/MainHeader";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full w-full">
      <MianHeader />
      <HomeFeature />
    </div>
  );
}
