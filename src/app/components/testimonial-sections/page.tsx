import BackButton from "@/components/layout/back-button";
import PreviewPanel from "@/widgets/preview-panner";

export default function Account() {
  return (
    <div className=" mx-auto mt-32 space-y-14 max-w-7xl">
      <BackButton />
      <PreviewPanel
        frame={1}
        height="h-[65vh]"
        src="/components/react/testimonial-sections/simple-testimonial"
        title="Testimonial -Simple testimonial"
        description="The example below showcases a testimonial section "
        isNew
      />
    </div>
  );
}
