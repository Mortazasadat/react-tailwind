import BackButton from "@/components/layout/back-button";
import PreviewPanel from "@/widgets/preview-panner";

export default function Account() {
  return (
    <div className=" mx-auto mt-32 space-y-14 max-w-7xl">
      <BackButton />
      <PreviewPanel
        frame={1}
        height="h-[65vh]"
        src="/components/react/newsletter-sections/newsletter-with-details"
        title="Newsletter - Newsletter with details"
        description="The example below showcases a newsletter section "
        isNew
        video
        videoLink="https://youtu.be/qPpXEEjJKhk?si=VDZbfrKhekDqpb6a"
      />
    </div>
  );
}
