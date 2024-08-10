import BackButton from "@/components/layout/back-button";
import PreviewPanel from "@/widgets/preview-panner";

export default function Account() {
  return (
    <div className=" mx-auto mt-32 space-y-14 max-w-7xl">
      <BackButton />
      <PreviewPanel
        frame={1}
        height="h-[65vh]"
        src="/components/react/pricing-sections/pricing-three-tiers"
        title="Pricing - Pricing Three Tiers"
        description="The example below showcases an pricing section "
      />
      <PreviewPanel
        frame={2}
        height="h-[65vh]"
        src="/components/react/pricing-sections/simple-pricing"
        title="Pricing - Simple Pricing Block"
        description="The example below showcases an pricing section "
      />
      <PreviewPanel
        frame={3}
        height="h-[65vh]"
        src="/components/react/pricing-sections/pricing-with-featured"
        title="Pricing - Pricing With Featured"
        description="The example below showcases an pricing section "
      />
    </div>
  );
}
