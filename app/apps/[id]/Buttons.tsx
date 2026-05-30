"use client";
export default function AppButtons({ app }: { app: string }) {
  return (
    <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
      <button
        onClick={() => {
          window.location.href = app;
        }}
        className="cursor-grab group/btn relative px-10 py-4 bg-linear-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden text-lg"
      >
        <span className="relative z-10 flex items-center gap-3">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          تحميل التطبيق
        </span>
        <div className="absolute inset-0 bg-linear-to-r from-blue-700 to-blue-800 transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
      </button>

      <button className="px-10 py-4 bg-white text-gray-700 rounded-xl font-semibold border-2 border-gray-300 hover:border-purple-500 hover:text-purple-600 transition-all duration-300 hover:shadow-lg flex items-center gap-3 justify-center text-lg">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        تواصل معنا
      </button>
    </div>
  );
}
