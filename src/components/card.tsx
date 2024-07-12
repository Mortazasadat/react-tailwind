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
      <div className="relative dark:bg-black/95 z-10 m-[1px] lg:h-[268px] rounded-[calc(1rem-1px)]  bg-white/80 p-4 text-xs text-blue-600 backdrop-blur-sm">
        {children}
      </div>
    </div>
  );
};

export default BorderGlowCard;
