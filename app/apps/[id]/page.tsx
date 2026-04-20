import Header from "@/components/Header";
import { apps } from "@/data/apps";
import "@/styles/apps.css";
import { Metadata } from "next";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const app = apps[id as keyof typeof apps];

  return {
    title: app ? `${app.name} | تطبيقاتنا` : "التطبيق غير موجود",
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const app = apps[id as keyof typeof apps];

  if (!app) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-2xl shadow-xl">
          <div className="text-7xl mb-4">🔍</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            التطبيق غير موجود
          </h1>
          <p className="text-gray-600 text-lg">
            يرجى التحقق من الرابط والمحاولة مرة أخرى
          </p>
        </div>
      </div>
    );
  }

  const advantages = app.advantages || [];

  return (
    <>
      <Header title={app.name} />

      <div
        dir="ltr"
        className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 px-4"
      >
        <div className="max-w-5xl mx-auto">
          {/* CARD الرئيسي مع تأثيرات حركية */}
          <div className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl hover:scale-[1.01]">
            {/* شريط علوي ملون - أكثر سماكة */}
            <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

            <div className="p-10 md:p-12">
              {/* الهيدر مع الصورة والاسم */}
              <div className="flex flex-col items-center text-center">
                {/* حاوية الصورة مع تأثير glow */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <img
                    src={app.image}
                    alt={app.name}
                    className="relative w-44 h-44 md:w-52 md:h-52 object-cover rounded-full border-4 border-white shadow-2xl group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* أيقونة التحقق - أكبر */}
                  <div className="absolute bottom-2 right-2 bg-green-500 rounded-full p-1.5 border-2 border-white shadow-lg">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                {/* الاسم - أكبر حجم */}
                <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-title">
                  {app.name}
                </h1>

                {/* الإصدار - أكبر */}
                <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-base text-gray-700 font-medium">
                    الإصدار {app.version}
                  </span>
                </div>

                {/* الوصف - نصوص أكبر */}
                <div className="mt-8 max-w-3xl">
                  <p className="text-gray-700 text-xl md:text-2xl leading-relaxed font-description">
                    {app.desc}
                  </p>
                </div>
              </div>

              {/* المميزات - نصوص كبيرة */}
              <div className="mt-12">
                <div className="relative">
                  {/* خلفية مزخرفة */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl opacity-50"></div>

                  <div className="relative bg-white/90 rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl shadow-lg">
                        <svg
                          className="w-7 h-7 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <h2
                        dir="ltr"
                        className="text-right text-3xl md:text-4xl font-bold text-gray-800 font-features-title"
                      >
                        المميزات الرئيسية
                      </h2>
                    </div>

                    <div className="space-y-5" dir="rtl">
                      {advantages.length > 0 ? (
                        advantages.map((advantage, index) => (
                          <div
                            key={index}
                            className="group/item flex items-start gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 cursor-pointer"
                          >
                            <div className="flex-shrink-0 mt-1">
                              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xs group-hover/item:scale-110 transition-transform">
                                <span className="text-white text-sm font-bold">
                                  {index + 1}
                                </span>
                              </div>
                            </div>
                            <p className="text-gray-700 text-lg md:text-xl leading-relaxed flex-1 font-features-text">
                              {advantage}
                            </p>
                            <div className="opacity-0 group-hover/item:opacity-100 transition-opacity">
                              <svg
                                className="w-6 h-6 text-purple-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-500 text-center py-8 text-xl">
                          لا توجد مميزات مضافة
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* أزرار الإجراءات - أكبر */}
              <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
                <button className="group/btn relative px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden text-lg">
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
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
