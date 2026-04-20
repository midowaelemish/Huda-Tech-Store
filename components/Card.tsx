"use client";

import { useRouter } from "next/navigation";
import "../styles/card.css";

type CardProps = {
  title: string;
  image: string;
  route?: string;
};

export default function Card({ title, image, route }: CardProps) {
  const router = useRouter();
  return (
    <div className="relative bg-white shadow-md rounded-3xl p-4 overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* الصورة */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-3xl"
      />

      {/* التدرج الطبيعي */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent rounded-3xl group-hover:opacity-0 transition-opacity duration-300"></div>

      {/* المحتوى العادي */}
      <div className="absolute inset-0 flex flex-col items-center justify-end p-4 group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="text-white text-xl md:text-2xl font-bold font-title tracking-tight">
          {title}
        </h3>
      </div>

      {/* الهوفر الاسود */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
        <button
          onClick={() => router.push(`/apps/${route}` || "/apps")}
          className="bg-white text-black px-6 py-2.5 rounded-full font-bold text-base md:text-lg hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2"
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
