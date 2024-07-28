import BackButton from "@/components/layout/back-button";
import PreviewPanel from "@/widgets/preview-panner";

export default function Account() {
  return (
    <div className=" mx-auto mt-32 space-y-14 max-w-7xl">
      <BackButton />
      <PreviewPanel
        frame={1}
        height="h-[65vh]"
        src="/components/react/cta-sections/cta-with-image-block"
        title="CTA - CTA With Image Block"
        description="The example below showcases a cta section "
        isNew
      />
      <PreviewPanel
        frame={1}
        height="h-[65vh]"
        src="/components/react/cta-sections/cta-with-bg-simple"
        title="CTA - CTA With Simple Background"
        description="The example below showcases a cta section "
        isNew
      />
    </div>
  );
}
