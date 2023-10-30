import { cn } from "@/lib/utils";
import { CSSProperties, ReactNode, useEffect, useState } from "react";

interface ShimmerButtonProps {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: ReactNode;
  type?: string;
  [key: string]: unknown; // ...props
}

export const ShimmerButton = ({
  shimmerColor = "#ffffff",
  shimmerSize = "0.1em",
  shimmerDuration = "1.5s",
  borderRadius = "12px",
  background = "radial-gradient(ellipse 80% 50% at 50% 120%, #1A56DB, #1A56DB)",
  className,
  children,
  type = "primary",
  ...props
}: ShimmerButtonProps) => {
  const [shouldAnimateShimmer, setShouldAnimateShimmer] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShouldAnimateShimmer(window.innerWidth >= 1024);
    }
  }, []);
  return (
    <button
      style={
        {
          "--spread": shouldAnimateShimmer ? "90deg" : "",
          "--shimmer-color": shimmerColor,
          "--radius": borderRadius,
          "--speed": shouldAnimateShimmer ? shimmerDuration : "",
          "--cut": shimmerSize,
          "--bg": background,
        } as CSSProperties
      }
      className={cn(
        "w-full",
        "group border border-white/30 relative cursor-pointer overflow-hidden whitespace-nowrap px-6 py-4 [background:var(--bg)] [border-radius:var(--radius)] ",
        "transition-all duration-300 hover:scale-105",
        className,
        { "hue-rotate-180": type === "secondary" }
      )}
      {...props}
    >
      {/* spark container */}
      <div className="absolute inset-0 overflow-visible [container-type:size]">
        {/* spark */}
        <div className="absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none] ">
          {/* spark before */}
          <div className="absolute inset-[-100%] w-auto rotate-0 animate-spin [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,hsl(0_0%_100%/1)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
        </div>
      </div>

      {/* backdrop */}
      <div className="absolute [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]" />

      {/* content */}
      <div className="relative z-10 flex items-center justify-center text-lg font-semibold text-white pointer-events-none md:text-xl">
        {children}
      </div>
    </button>
  );
};
