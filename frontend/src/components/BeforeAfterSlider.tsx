import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type BeforeAfterSliderProps = {
  beforeImageUrl: string; // shown when dragging to the right
  afterImageUrl: string;  // shown when dragging to the left
  initialPositionPercent?: number; // 0..100, default 50
  className?: string;
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImageUrl,
  afterImageUrl,
  initialPositionPercent = 50,
  className = ""
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [positionPercent, setPositionPercent] = useState<number>(initialPositionPercent);
  const isDraggingRef = useRef<boolean>(false);

  const updatePositionFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clamp(clientX - rect.left, 0, rect.width);
    const percent = (x / rect.width) * 100;
    setPositionPercent(percent);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      updatePositionFromClientX(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current) return;
      if (e.touches && e.touches[0]) {
        updatePositionFromClientX(e.touches[0].clientX);
      }
    };

    const stopDrag = () => {
      isDraggingRef.current = false;
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleTouchMove, { passive: true });
    document.addEventListener("mouseup", stopDrag);
    document.addEventListener("touchend", stopDrag);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove as any);
      document.removeEventListener("mouseup", stopDrag);
      document.removeEventListener("touchend", stopDrag);
    };
  }, []);

  const startDrag = (clientX: number) => {
    isDraggingRef.current = true;
    updatePositionFromClientX(clientX);
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-video rounded-lg overflow-hidden select-none ${className}`}
      onMouseDown={(e) => startDrag(e.clientX)}
      onTouchStart={(e) => {
        if (e.touches && e.touches[0]) startDrag(e.touches[0].clientX);
      }}
      role="group"
      aria-label="Before and after image comparison slider"
    >
      {/* Both images positioned absolutely with same dimensions */}
      <img
        src={beforeImageUrl}
        alt="Before cleaning"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />
      
      <img
        src={afterImageUrl}
        alt="After cleaning"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ 
          clipPath: `inset(0 ${100 - positionPercent}% 0 0)`,
          WebkitClipPath: `inset(0 ${100 - positionPercent}% 0 0)`
        }}
        draggable={false}
      />

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 border-r-2 border-white/90"
        style={{ left: `${positionPercent}%` }}
      />

      {/* Handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center cursor-col-resize"
        style={{ left: `${positionPercent}%` }}
      >
        <div className="flex items-center gap-1 text-gray-700">
          <ChevronLeft className="w-4 h-4" />
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>

      {/* Helper text badges (optional) */}
      <div className="absolute left-3 bottom-3 text-xs px-2 py-1 rounded-md bg-black/40 text-white">
        Before
      </div>
      <div className="absolute right-3 bottom-3 text-xs px-2 py-1 rounded-md bg-black/40 text-white">
        After
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
