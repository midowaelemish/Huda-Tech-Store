"use client";

import Link from "next/link";
import Image from "next/image";
import { JSX, Suspense } from "react";

// Types
interface Milestone {
  year: string;
  title: string;
  description: string;
}

// بيانات الإنجازات
const milestones: Milestone[] = [
  {
    year: "2020",
    title: "بداية الرحلة",
    description:
      "بدأت رحلتي في عالم تطوير البرمجيات بشغف كبير لتعلم أحدث التقنيات.",
  },
  {
    year: "2021",
    title: "أول مشروع",
    description: "أطلقت أول تطبيق لي وحقق نجاحاً كبيراً وثقة العملاء.",
  },
  {
    year: "2022",
    title: "تطوير مستمر",
    description:
      "طورت مهاراتي في React و Next.js وبدأت في تقديم حلول احترافية.",
  },
  {
    year: "2023",
    title: "انطلاق هدى تك",
    description: "أسست شركة هدى تك لتقديم الحلول الرقمية المتكاملة للعملاء.",
  },
  {
    year: "2024",
    title: "شراكات واستمرار",
    description: "وصلت لأكثر من 15 تطبيق و 12 عميل نشيط في المنطقة.",
  },
];

// إحصائيات
const stats = [
  { value: "+15", label: "تطبيق تم تطويره", icon: "📱" },
  { value: "+12", label: "عميل سعيد", icon: "😊" },
  { value: "+4", label: "سنوات خبرة", icon: "💼" },
  { value: "100%", label: "رضا العملاء", icon: "⭐" },
];

// المهارات
const skills = [
  { name: "Flutter", level: 100, color: "from-red-600 to-red-700" },
  { name: "HTML/CSS", level: 100, color: "from-yellow-500 to-yellow-600" },
  { name: "JavaScript", level: 100, color: "from-cyan-500 to-cyan-700" },
  { name: "React / Next.js", level: 95, color: "from-blue-500 to-blue-600" },
  { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-700" },
  { name: "Tailwind CSS", level: 95, color: "from-cyan-500 to-blue-600" },
  {
    name: "Node.js / Express",
    level: 85,
    color: "from-green-500 to-green-600",
  },
  { name: "UI/UX Design", level: 88, color: "from-purple-500 to-purple-600" },
  {
    name: "Database Design",
    level: 85,
    color: "from-orange-500 to-orange-600",
  },
];

// الخدمات المقدمة
const services = [
  {
    icon: "🚀",
    title: "تطوير تطبيقات الويب",
    description:
      "أستخدم أحدث التقنيات مثل Next.js و React لتطوير تطبيقات ويب سريعة وآمنة.",
  },
  {
    icon: "📱",
    title: "تطبيقات الجوال",
    description: "تطوير تطبيقات جوال متكاملة باستخدام React Native و Flutter.",
  },
  {
    icon: "🎨",
    title: "تصميم واجهات المستخدم",
    description: "تصاميم عصرية وجذابة مع التركيز على تجربة المستخدم.",
  },
  {
    icon: "🔧",
    title: "حلول مخصصة",
    description: "تقديم حلول تقنية مخصصة تناسب احتياجات كل عميل.",
  },
  {
    icon: "☁️",
    title: "استضافة ونشر",
    description: "خدمات النشر والاستضافة على Vercel, Netlify, و AWS.",
  },
  {
    icon: "📊",
    title: "استشارات تقنية",
    description: "تقديم استشارات تقنية لمساعدة الشركات في رحلتها الرقمية.",
  },
];

// مكون شريط المهارات
function SkillBar({
  name,
  level,
  color,
}: {
  name: string;
  level: number;
  color: string;
}) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-gray-700 font-medium text-base md:text-lg">
          {name}
        </span>
        <span className="text-gray-500 text-sm">{level}%</span>
      </div>
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full bg-linear-to-r ${color} rounded-full transition-all duration-1000`}
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}

// مكون بطاقة الخدمة
function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-right">
      <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
        {description}
      </p>
    </div>
  );
}

// المكون الرئيسي
export default function About(): JSX.Element {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[60vh] overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/images/about-bg.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-linear-to-br from-blue-900/95 via-purple-900/90 to-pink-900/95"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-[60vh] flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className="mb-8"
              style={{ animation: "float 3s ease-in-out infinite" }}
            >
              <div className="relative inline-flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full shadow-2xl overflow-hidden border-4 border-white/30 hover:border-white/60 transition-all duration-500">
                <Image
                  src="/images/creator.jpg"
                  alt="محمد وائل عميش - مؤسس هدى تك"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 128px, 160px"
                  priority
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              محمد وائل عميش
            </h1>
            <p className="text-lg md:text-2xl text-white/90 mb-4">
              مؤسس ومدير تقني في هدى تك
            </p>
            <p className="text-base md:text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              مطوير برمجيات متخصص في تطوير تطبيقات الويب والجوال، شغوف بتقديم
              حلول تقنية مبتكرة
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm md:text-base"
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              العودة للرئيسية
            </Link>
          </div>
        </div>
      </div>

      {/* نبذة عني Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-base md:text-lg font-semibold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 uppercase tracking-wider">
                من أنا
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              محمد وائل{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
                عميش
              </span>
            </h2>
            <div className="w-24 h-1 md:w-32 md:h-1.5 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-4 text-gray-600 leading-relaxed text-base md:text-lg">
                <p>
                  مطور برمجيات ومصمم حلول تقنية، أسست شركة هدى تك بهدف تقديم
                  حلول رقمية مبتكرة تساعد الشركات والأفراد على تحقيق أهدافهم في
                  العصر الرقمي.
                </p>
                <p>
                  بدأت رحلتي في عالم البرمجة منذ أكثر من 4 سنوات، وخلال هذه
                  الفترة عملت على العديد من المشاريع المتنوعة، من تطبيقات ويب
                  متكاملة إلى تطبيقات جوال احترافية.
                </p>
                <p>
                  أؤمن بأن التقنية هي أداة قوية لتغيير الحياة للأفضل، ولهذا أسعى
                  دائماً لتقديم حلول تجمع بين الإبداع والجودة والموثوقية لتحقيق
                  أفضل النتائج لعملائي.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative group">
              <div className="absolute -inset-4 bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/office.jpg"
                  alt="محمد وائل عميش"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* إحصائيات سريعة */}
      <div className="py-20 px-4 bg-linear-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              إنجازات{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
                سريعة
              </span>
            </h2>
            <div className="w-24 h-1 md:w-32 md:h-1.5 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-5xl md:text-6xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* رؤيتي ورسالتي */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              رؤيتي{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
                ورسالتي
              </span>
            </h2>
            <div className="w-24 h-1 md:w-32 md:h-1.5 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl p-6 md:p-8 text-center hover:scale-105 transition-all duration-300">
              <div className="text-6xl md:text-7xl mb-4">👁️</div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                رؤيتي
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base lg:text-lg">
                أن أكون من رواد تقديم الحلول الرقمية المبتكرة في المنطقة، وأن
                أساهم في تحويل الأفكار إلى واقع تقني يغير حياة الناس للأفضل.
              </p>
            </div>
            <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl p-6 md:p-8 text-center hover:scale-105 transition-all duration-300">
              <div className="text-6xl md:text-7xl mb-4">📢</div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                رسالتي
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base lg:text-lg">
                تمكين الأعمال والشركات من خلال تقديم حلول تقنية متكاملة، عالية
                الجودة، تسهل عملياتهم وتعزز نجاحهم في السوق الرقمي.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* المهارات */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-xs md:text-sm font-semibold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 uppercase tracking-wider">
                مهاراتي التقنية
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              ما{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
                أتقنه
              </span>
            </h2>
            <div className="w-24 h-1 md:w-32 md:h-1.5 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg">
            {skills.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}
          </div>
        </div>
      </div>

      {/* الخدمات */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-xs md:text-sm font-semibold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 uppercase tracking-wider">
                ما أقدمه
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              خدمات{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
                التقنية
              </span>
            </h2>
            <div className="w-24 h-1 md:w-32 md:h-1.5 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-sm md:text-base lg:text-lg">
              أقدم حلولاً تقنية متكاملة تناسب احتياجات كل عميل
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>

      {/* رحلتي - Timeline بتصميم جديد */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-xs md:text-sm font-semibold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 uppercase tracking-wider">
                مسيرتي المهنية
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              أبرز{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
                محطاتي
              </span>
            </h2>
            <div className="w-24 h-1 md:w-32 md:h-1.5 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* تصميم الكروت بشكل Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                {/* رأس الكارت مع السنة */}
                <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4 md:p-6 text-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                    {milestone.year}
                  </div>
                  <div className="w-12 h-0.5 md:w-16 bg-white/50 mx-auto"></div>
                </div>

                {/* محتوى الكارت */}
                <div className="p-4 md:p-6 text-right">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {milestone.description}
                  </p>

                  {/* أيقونة زخرفية */}
                  <div className="mt-4 flex justify-end">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 5l7 7-7 7M5 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 md:py-20 px-4 bg-linear-to-br from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            هل تريد العمل معي؟
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-8">
            دعنا نعمل معاً لتحويل أفكارك إلى واقع تقني ملموس
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-6 md:px-8 py-3 md:py-4 bg-white text-purple-600 rounded-full font-bold text-base md:text-lg hover:bg-gray-100 transition-all transform hover:scale-105 inline-flex items-center gap-2"
            >
              <span>تواصل معي الآن</span>
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </Link>
            <Link
              href="/apps-list"
              className="px-6 md:px-8 py-3 md:py-4 bg-white/20 backdrop-blur-md text-white rounded-full font-bold text-base md:text-lg hover:bg-white/30 transition-all transform hover:scale-105"
            >
              استعرض أعمالي
            </Link>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </>
  );
}
