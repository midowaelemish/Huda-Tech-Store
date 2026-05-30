"use client";

import Link from "next/link";
import Image from "next/image";
import { JSX, Suspense } from "react";

import SpoilerImage from "@/components/SpoilerImage";

// Types
interface StatCardProps {
  value: string;
  label: string;
  color: string;
  icon: string;
}

interface FeatureCardProps {
  emoji: string;
  title: string;
  description: string;
}

interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
  icon?: string;
}

interface SecondaryButtonProps {
  href: string;
  children: React.ReactNode;
  icon?: string;
}

// بيانات قابلة للتكوين
const statsData: StatCardProps[] = [
  {
    value: "+5",
    label: "تطبيق تم تطويره",
    color: "text-blue-400",
    icon: "📱",
  },
  { value: "+2", label: "عميل نشيط", color: "text-purple-400", icon: "🤝" },
  { value: "+4", label: "سنوات من الخبرة", color: "text-pink-400", icon: "⭐" },
];

const featuresData: FeatureCardProps[] = [
  {
    emoji: "🚀",
    title: "تطوير سريع",
    description: "نستخدم أحدث التقنيات لتسريع عملية التطوير",
  },
  {
    emoji: "🎨",
    title: "تصاميم جذابة",
    description: "تجربة مستخدم مميزة وتصاميم عصرية",
  },
  {
    emoji: "🔒",
    title: "آمن وموثوق",
    description: "نولي الأمان أولوية قصوى في جميع مشاريعنا",
  },
  {
    emoji: "⚡",
    title: "أداء عالي",
    description: "تطبيقات سريعة الاستجابة وتحمل أحمال كبيرة",
  },
  {
    emoji: "🔄",
    title: "دعم مستمر",
    description: "نقدم دعماً فنياً متواصلاً بعد التسليم",
  },
  {
    emoji: "🌍",
    title: "حلول عالمية",
    description: "نقدم خدماتنا للعملاء حول العالم",
  },
];

const valuesData: ValueItem[] = [
  {
    icon: "🎯",
    title: "رؤيتنا",
    description:
      "نسعى لأن نكون رواداً في مجال تطوير التطبيقات التقنية في المنطقة، من خلال تقديم حلول مبتكرة تلبي احتياجات عملائنا وتتجاوز توقعاتهم.",
  },
  {
    icon: "📢",
    title: "رسالتنا",
    description:
      "تمكين الأعمال والشركات من خلال تقديم حلول تقنية متكاملة تسهل حياتهم وتعزز نجاحهم في العصر الرقمي.",
  },
  {
    icon: "💎",
    title: "قيمنا",
    description:
      "الابتكار، الجودة، الثقة، والتعاون المستمر مع عملائنا لتحقيق أفضل النتائج.",
  },
  {
    icon: "🏆",
    title: "تميزنا",
    description:
      "نتميز بالالتزام بالمواعيد والدقة في التنفيذ والشفافية التامة مع عملائنا.",
  },
];

// مكون تحميل للصور
function ImageLoader(): JSX.Element {
  return (
    <div className="w-full h-full min-h-100 bg-linear-to-r from-gray-200 to-gray-300 rounded-2xl animate-pulse flex items-center justify-center">
      <span className="text-gray-500">جاري التحميل...</span>
    </div>
  );
}

// مكون الإحصائية الواحدة
function StatCard({ value, label, color, icon }: StatCardProps): JSX.Element {
  return (
    <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="absolute -top-4 right-4 text-3xl opacity-50 group-hover:opacity-100 transition-opacity">
        {icon}
      </div>
      <div className={`text-4xl md:text-5xl font-bold ${color} mb-2`}>
        {value}
      </div>
      <div className="text-white/80 text-lg">{label}</div>
    </div>
  );
}

// مكون الميزة الواحدة
function FeatureCard({
  emoji,
  title,
  description,
}: FeatureCardProps): JSX.Element {
  return (
    <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-right hover:bg-white/10 hover:scale-105 transition-all duration-300 border border-white/10 hover:border-white/30">
      <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {emoji}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-white/70 leading-relaxed">{description}</p>
    </div>
  );
}

// مكون زر رئيسي
function PrimaryButton({
  href,
  children,
  icon,
}: PrimaryButtonProps): JSX.Element {
  return (
    <Link
      href={href}
      className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-linear-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-xl overflow-hidden"
    >
      <span className="relative z-10 flex items-center gap-3">
        {icon && <span className="text-2xl">{icon}</span>}
        {children}
      </span>
      <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </Link>
  );
}

// مكون زر ثانوي
function SecondaryButton({
  href,
  children,
  icon,
}: SecondaryButtonProps): JSX.Element {
  return (
    <Link
      href={href}
      className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border border-white/30 hover:border-white/50"
    >
      <span className="flex items-center gap-3">
        {icon && <span className="text-2xl">{icon}</span>}
        {children}
      </span>
    </Link>
  );
}

// مكون قسم القيم
function ValuesSection(): JSX.Element {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {valuesData.map((item: ValueItem) => (
        <div
          key={item.title}
          className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100"
        >
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-14 h-14 bg-linear-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:rotate-6 transition-transform duration-300">
              {item.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// المكون الرئيسي
export default function Main(): JSX.Element {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/images/background.avif')",
          }}
        >
          <div className="absolute inset-0 bg-linear-to-br from-blue-900/95 via-purple-900/90 to-pink-900/95"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-6xl mx-auto text-center">
            {/* Logo with Animation */}
            <div
              className="mb-8"
              style={{ animation: "float 3s ease-in-out infinite" }}
            >
              <div className="relative inline-flex items-center justify-center w-32 h-32 md:w-44 md:h-44 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 hover:scale-110 transition-all duration-500 overflow-hidden border-4 border-white/30 hover:border-white/60">
                <Image
                  src="/images/company.jpg"
                  alt="شعار شركة هدى تك - حلول رقمية مبتكرة"
                  fill
                  className="object-cover"
                  sizes="(max-width: 800px) 200px, 200px"
                  priority
                  quality={100}
                />
              </div>
            </div>

            {/* Company Name */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              هدى تك
            </h1>

            {/* Company Description */}
            <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-6 max-w-4xl mx-auto leading-relaxed font-medium">
              نبتكر الحلول الرقمية المتكاملة ونحول أفكارك إلى تطبيقات مبتكرة
              <span className="block mt-3 text-lg md:text-xl text-white/80 font-normal">
                باستخدام أحدث التقنيات وأفضل الممارسات العالمية
              </span>
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <PrimaryButton href="/apps-list" icon="🚀">
                استكشف تطبيقاتنا
              </PrimaryButton>
              <SecondaryButton href="/about" icon="ℹ️">
                من نحن
              </SecondaryButton>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
              {statsData.map((stat: StatCardProps, index: number) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {featuresData.map((feature: FeatureCardProps, index: number) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>

            {/* Scroll Down Indicator */}
            <div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
              style={{ animation: "bounce-slow 2s infinite" }}
            >
              <Link
                href="#more"
                className="text-white/50 hover:text-white/80 transition-colors"
                aria-label="التمرير لأسفل للمزيد من المعلومات"
              >
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* More Information Section */}
      <div
        id="more"
        className="relative bg-linear-to-br from-gray-50 to-gray-100 py-24 px-4"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 uppercase tracking-wider">
                لماذا نحن
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              لماذا تختار{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
                هدى تك؟
              </span>
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
              نقدم لك أكثر من مجرد تطبيق، نقدم لك شريكاً موثوقاً في رحلة نجاحك
            </p>
          </div>

          {/* Values and Image Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ValuesSection />
            <div className="relative group">
              <div className="absolute -inset-4 bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                <Suspense fallback={<ImageLoader />}>
                  <SpoilerImage
                    src="/images/creator.jpg"
                    alt="صورة مؤسس وفريق شركة هدى تك - خبراء في تطوير التطبيقات والحلول الرقمية"
                    className="w-full h-auto"
                  />
                </Suspense>
              </div>
            </div>
          </div>

          {/* Additional Trust Indicators */}
          <div className="mt-20 pt-12 border-t-2 border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">✓</div>
                <div className="text-gray-700 font-medium">ضمان الجودة</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  ⚡
                </div>
                <div className="text-gray-700 font-medium">تسليم سريع</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-600 mb-2">💬</div>
                <div className="text-gray-700 font-medium">دعم فني 24/7</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">🔐</div>
                <div className="text-gray-700 font-medium">خصوصية تامة</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(-25%) translateX(-50%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0) translateX(-50%);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
      `}</style>
    </>
  );
}
