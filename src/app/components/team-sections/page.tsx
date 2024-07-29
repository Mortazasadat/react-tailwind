import BackButton from "@/components/layout/back-button";
import PreviewPanel from "@/widgets/preview-panner";

export default function Account() {
  return (
    <div className=" mx-auto mt-32 space-y-14 max-w-7xl">
      <BackButton />
      <PreviewPanel
        frame={1}
        height="h-[65vh]"
        src="/components/react/team-sections/team-with-rounded-images"
        title="Team - Team with rounded images"
        description="The example below showcases a team section "
        isNew
        video
        videoLink="https://youtu.be/SyC4kmi1jJo?si=40MrUv1_eiHBQkaC"
      />
    </div>
  );
}
