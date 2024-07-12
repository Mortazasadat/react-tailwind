"use client";
import { useEffect, useRef, useState } from "react";

const BorderGlowCard = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({
    x: "-100%",
    y: "-100%",
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x: `${x}px`, y: `${y}px` });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="relative lg:h-[270px] overflow-hidden rounded-2xl  bg-[#e5e7eb] transform transition-transform ease-in-out active:scale-90"
      ref={ref}
    >
      <span
        className={`absolute z-0 h-28 w-28 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(#1e88e5_10%,transparent_100%)] `}
        style={
          {
            left: mousePosition.x,
            top: mousePosition.y,
          } as any
        }
      ></span>
      <div className="relative dark:bg-black z-10 m-[1px] lg:h-[268px] rounded-[calc(1rem-1px)]  bg-white/80 p-4 text-xs text-blue-600 backdrop-blur-sm">
        <div
          className="absolute hidden dark:block left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default BorderGlowCard;
