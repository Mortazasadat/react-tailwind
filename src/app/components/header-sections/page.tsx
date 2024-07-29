import BackButton from "@/components/layout/back-button";
import PreviewPanel from "@/widgets/preview-panner";

export default function Account() {
  return (
    <div className=" mx-auto mt-32 space-y-14 max-w-7xl">
      <BackButton />
      <PreviewPanel
        frame={1}
        height="h-[65vh]"
        src="/components/react/header-sections/header-with-card"
        title="Header - Header With Card"
        description="The example below showcases an header section "
        isNew
        video
        videoLink="https://youtu.be/35EpiIThSOQ?si=hHYKdEmUWMpmts1Z"
      />
    </div>
  );
}
