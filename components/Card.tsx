"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import "../styles/card.css";

type CardProps = {
  title: string;
  image: string;
  route?: string;
};

export default function Card({ title, image, route }: CardProps) {
  const router = useRouter();

  const [opened, setOpened] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  // إغلاق عند الضغط خارج الكارد
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setOpened(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // تحديد إذا كانت الشاشة صغيرة
  const handleCardClick = () => {
    if (window.innerWidth < 768) {
      setOpened(true);
    }
  };

  return (
    <div
      ref={cardRef}
      onClick={handleCardClick}
      className="relative bg-white shadow-md rounded-3xl p-4 overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      {/* الصورة */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-3xl"
      />

      {/* التدرج */}
      <div
        className="
          absolute inset-0
          bg-linear-to-t from-black/95 via-black/20 to-transparent
          rounded-3xl
          transition-opacity duration-300
          md:group-hover:opacity-0
        "
      ></div>

      {/* العنوان */}
      <div
        className={`
          absolute inset-0
          flex flex-col items-center justify-end p-4
          transition-opacity duration-300

          ${
            opened
              ? "opacity-0 md:opacity-100"
              : "opacity-100 md:group-hover:opacity-0"
          }
        `}
      >
        <h3 className="text-white text-xl md:text-2xl font-bold font-title tracking-tight">
          {title}
        </h3>
      </div>

      {/* Overlay */}
      <div
        className={`
          absolute inset-0
          bg-black/90 backdrop-blur-sm
          flex items-center justify-center
          transition-all duration-300

          ${opened ? "opacity-100" : "opacity-0 pointer-events-none"}

          md:opacity-0
          md:group-hover:opacity-100
          md:pointer-events-auto
        `}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/apps/${route}` || "/apps");
          }}
          className="
            bg-white text-black
            px-6 py-2.5
            rounded-full
            font-bold
            text-base md:text-lg
            hover:scale-105
            hover:shadow-lg
            hover:shadow-blue-500/50
            transition-all duration-300
            flex items-center gap-2
          "
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          انتقل الآن
        </button>
      </div>
    </div>
  );
}
