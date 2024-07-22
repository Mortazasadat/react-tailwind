import HomeFeatureComponent from "@/components/FeatureComponet";

import MianHeader from "@/sections/home/MainHeader";

export default function Home() {
  return (
    <div className="h-full w-full">
      <MianHeader />
      <HomeFeatureComponent />
    </div>
  );
}
