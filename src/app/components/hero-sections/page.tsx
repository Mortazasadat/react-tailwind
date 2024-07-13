import BackButton from "@/components/layout/back-button";
import PreviewPanel from "@/widgets/preview-panner";

export default function Account() {
  return (
    <div className=" mx-auto mt-32 space-y-10 max-w-7xl">
      <BackButton />
      <PreviewPanel
        frame={1}
        height="h-[65vh]"
        src="/components/react/hero-sections/hero-section-1"
        title="Hero - Simple Center Block"
        description="The example below showcases an hero section "
        isNew
      />
      <PreviewPanel
        frame={1}
        height="h-[65vh]"
        src="/components/react/hero-sections/hero-section-1"
        title="Hero - Simple Center Block"
        description="The example below showcases an hero section "
        isNew
      />
    </div>
  );
}
