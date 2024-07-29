import BackButton from "@/components/layout/back-button";
import PreviewPanel from "@/widgets/preview-panner";

export default function Account() {
  return (
    <div className=" mx-auto mt-32 space-y-14 max-w-7xl">
      <BackButton />
      <PreviewPanel
        frame={1}
        height="h-[65vh]"
        src="/components/react/blog-sections/blog-with-images"
        title="Blogs - Blog With Images"
        description="The example below showcases a blog section "
        isNew
        video
        videoLink="https://youtu.be/V2aiZzQoVEM?si=aSdbOTNmSHDgAPsL"
      />
    </div>
  );
}
