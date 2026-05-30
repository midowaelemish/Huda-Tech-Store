import Header from "@/components/Header";
import { apps } from "@/data/apps";
import "@/styles/apps.css";
import { Metadata } from "next";
import AppButtons from "./Buttons";
import { formatRelativeTime, formatDate } from "@/utils/dateUtils";

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
      <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center">
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

  // تنسيق التواريخ
  const createdAt = app.createdAt ? formatDate(app.createdAt) : null;
  const updatedAtRelative = app.updatedAt
    ? formatRelativeTime(app.updatedAt)
    : null;
  const updatedAtFull = app.updatedAt ? formatDate(app.updatedAt) : null;

  return (
    <>
      <div
        dir="ltr"
        className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 px-4"
      >
        <div className="max-w-5xl mx-auto">
          {/* CARD الرئيسي مع تأثيرات حركية */}
          <div className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl hover:scale-[1.01]">
            {/* شريط علوي ملون - أكثر سماكة */}
            <div className="absolute top-0 left-0 right-0 h-3 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"></div>

            <div className="p-10 md:p-12">
              {/* الهيدر مع الصورة والاسم */}
              <div className="flex flex-col items-center text-center">
                {/* حاوية الصورة مع تأثير glow */}
                <div className="relative">
                  <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
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
                <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-title">
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
                  <span className="cursor-grab text-base text-gray-700 font-medium">
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

              {/* قسم التواريخ - تاريخ الإنشاء والتعديل */}
              {(createdAt || updatedAtRelative) && (
                <div
                  dir="rtl"
                  className=" mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-500 border-t border-gray-200 pt-6"
                >
                  {createdAt && (
                    <div className="flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-2 rounded-full shadow-sm">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="font-semibold text-gray-700">
                        تاريخ الإنشاء:
                      </span>
                      <span className="text-gray-600">{createdAt}</span>
                    </div>
                  )}

                  {updatedAtRelative && (
                    <div className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 rounded-full shadow-sm group/tooltip relative">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="font-semibold text-gray-700">
                        آخر تعديل:
                      </span>
                      <span className="text-blue-600 font-medium cursor-help border-b border-dashed border-blue-300">
                        {updatedAtRelative}
                      </span>
                      {/* توولتيب لعرض التاريخ الكامل عند التمرير */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap z-10 shadow-lg">
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                          <div className="border-4 border-transparent border-t-gray-900"></div>
                        </div>
                        📅 {updatedAtFull}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* المميزات - نصوص كبيرة */}
              <div className="mt-12" dir="rtl">
                <div className="relative">
                  {/* خلفية مزخرفة */}
                  <div className="absolute inset-0 bg-linear-to-r from-blue-50 to-purple-50 rounded-2xl opacity-50"></div>

                  <div className="relative bg-white/90 rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-3 bg-linear-to-r from-yellow-400 to-orange-500 rounded-xl shadow-lg">
                        <svg
                          className="w-7 h-7 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <center>
                        <h2
                          dir="rtl"
                          className="text-center text-3xl md:text-4xl font-bold text-gray-800 font-features-title"
                        >
                          المميزات الرئيسية
                        </h2>
                      </center>
                    </div>

                    <div className="space-y-5" dir="rtl">
                      {advantages.length > 0 ? (
                        advantages.map((advantage, index) => (
                          <div
                            key={index}
                            className="group/item flex items-start gap-4 p-4 rounded-xl hover:bg-linear-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 cursor-pointer"
                          >
                            <div className="shrink-0 mt-1">
                              <div className="w-8 h-8 bg-linear-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xs group-hover/item:scale-110 transition-transform">
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
              <AppButtons app={app.link} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
