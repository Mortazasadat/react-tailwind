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
        isNew
      />
      <PreviewPanel
        frame={1}
        height="h-[65vh]"
        src="/components/react/hero-sections/hero-splite-with-image"
        title="Hero - Split With Image Block"
        description="The example below showcases an hero section "
        isNew
      />
      <PreviewPanel
        frame={1}
        height="h-[65vh]"
        src="/components/react/hero-sections/hero-with-angled-image-block"
        title="Hero - With Angled Image Block"
        description="The example below showcases an hero section "
        isNew
      />
      <PreviewPanel
        frame={1}
        height="h-[65vh]"
        src="/components/react/hero-sections/hero-with-multi-image"
        title="Hero - Hero With Multi Images"
        description="The example below showcases an hero section "
        isNew
        video
        videoLink="https://youtu.be/K7ad5KZ0QJ8"
      />
    </div>
  );
}
