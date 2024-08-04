import BackButton from "@/components/layout/back-button";
import PreviewPanel from "@/widgets/preview-panner";

export default function Account() {
  return (
    <div className=" mx-auto mt-32 space-y-14 max-w-7xl">
      <BackButton />
      <PreviewPanel
        frame={1}
        height="h-[65vh]"
        src="/components/react/hero-sections/hero-simple-centered"
        title="Hero - Simple Center Block"
        description="The example below showcases an hero section "
      />
      <PreviewPanel
        frame={2}
        height="h-[65vh]"
        src="/components/react/hero-sections/hero-with-split-image"
        title="Hero - Split With Image Block"
        description="The example below showcases an hero section "
      />
      <PreviewPanel
        frame={3}
        height="h-[65vh]"
        src="/components/react/hero-sections/hero-with-angled-image"
        title="Hero - With Angled Image "
        description="The example below showcases an hero section "
      />
      <PreviewPanel
        frame={4}
        height="h-[65vh]"
        src="/components/react/hero-sections/hero-with-multi-image"
        title="Hero - Hero With Multi Images"
        description="The example below showcases an hero section "
        isNew
      />
    </div>
  );
}
