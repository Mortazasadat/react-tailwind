import BackButton from "@/components/layout/back-button";
import PreviewPanel from "@/widgets/preview-panner";

export default function Account() {
  return (
    <div className=" mx-auto mt-32 space-y-14 max-w-7xl">
      <div>
        <BackButton />
      </div>
      <PreviewPanel
        frame={1}
        height="h-[65vh]"
        src="/components/react/feature-sections/feature-with-large-image"
        title="Feature - Feature With Large Image"
        description="The example below showcases a feature section "
        isNew
        video
        videoLink="https://youtube.com/@reactailwind"
      />
      <PreviewPanel
        frame={2}
        height="h-[65vh]"
        src="/components/react/feature-sections/feature-with-gradient"
        title="Feature - Feature With Gradient"
        description="The example below showcases a feature section "
        isNew
      />
      <PreviewPanel
        frame={3}
        height="h-[65vh]"
        src="/components/react/feature-sections/feature-with-product-image"
        title="Feature -Feature With Product Image"
        description="The example below showcases a feature section "
        isNew
      />
    </div>
  );
}
