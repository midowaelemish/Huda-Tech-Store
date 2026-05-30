"use client";

import { useState } from "react";
import Image from "next/image";

interface SpoilerImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  objectFit?: "cover" | "contain" | "fill";
}

export default function SpoilerImage({
  src,
  alt,
  width = 1200,
  height = 800,
  className = "",
  objectFit = "cover",
}: SpoilerImageProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div
      className={`relative cursor-pointer overflow-hidden rounded-2xl select-none shadow-xl hover:shadow-2xl transition-all duration-300 ${className}`}
      onClick={() => setRevealed(!revealed)}
    >
      {/* الصورة مع تأثيرات اخفاء التليجرام */}
      <div className="relative w-full" style={{ height: "auto" }}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`w-full h-auto transition-all duration-700 ease-in-out ${
            revealed
              ? "blur-0 scale-100 brightness-100 saturate-100"
              : "blur-3xl scale-125 brightness-50 saturate-0"
          }`}
          style={{ objectFit }}
        />
      </div>

      {/* Gradient overlay متدرج */}
      <div className="absolute inset-0 bg-linear-to-t from-blue-600/30 via-purple-600/20 to-transparent" />

      {/* طبقة الحبيبات (Noise) - مثل التليجرام */}
      {!revealed && (
        <>
          <div
            className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",
              backgroundSize: "200px 200px",
            }}
          />

          {/* طبقة التمويه الخلفي الإضافية */}
          <div className="absolute inset-0 backdrop-blur-md" />

          {/* تأثير الـ Glow من التليجرام */}
          <div className="absolute inset-0 bg-black/20" />
        </>
      )}
    </div>
  );
}
