import Link from "next/link";
import "../styles/footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-gray-300 overflow-hidden mt-auto">
      {/* خلفية مزخرفة بسيطة */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_50%,rgba(59,130,246,0.08)_0%,transparent_50%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-16 lg:py-20">
        {/* القسم العلوي */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* قسم الشعار */}
          <div className="footer-section space-y-4">
            <div className="flex items-center gap-3">
              <svg
                className="w-8 h-8 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="text-2xl font-black bg-linear-to-r from-white to-blue-300 bg-clip-text text-transparent font-title">
                متجر التطبيقات
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              منصتك الأولى لتحميل التطبيقات المميزة والموثوقة
            </p>
            <div className="flex gap-3 pt-2">
              {[
                { icon: "twitter", label: "تويتر" },
                { icon: "facebook", label: "فيسبوك" },
                { icon: "instagram", label: "انستجرام" },
              ].map((social) => (
                <a
                  key={social.icon}
                  href="#"
                  className="w-9 h-9 bg-white/5 rounded-xl flex items-center justify-center hover:bg-linear-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {social.icon === "twitter" && (
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    )}
                    {social.icon === "facebook" && (
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    )}
                    {social.icon === "instagram" && (
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* قسم روابط سريعة */}
          <div className="footer-section space-y-4">
            <h3 className="text-white font-bold text-lg relative inline-block after:content-[''] after:absolute after:-bottom-2 after:right-0 after:w-8 after:h-0.5 after:bg-linear-to-r after:from-blue-500 after:to-purple-500 after:rounded-full">
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              {[
                { name: "الرئيسية", href: "/" },
                { name: "التطبيقات", href: "/apps-list" },
                { name: "من نحن", href: "/about" },
                { name: "اتصل بنا", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-sm hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* قسم الدعم */}
          <div className="footer-section space-y-4">
            <h3 className="text-white font-bold text-lg relative inline-block after:content-[''] after:absolute after:-bottom-2 after:right-0 after:w-8 after:h-0.5 after:bg-linear-to-r after:from-blue-500 after:to-purple-500 after:rounded-full">
              الدعم
            </h3>
            <ul className="space-y-3">
              {[
                { name: "الأسئلة الشائعة", href: "/faq" },
                { name: "سياسة الخصوصية", href: "/privacy" },
                { name: "شروط الاستخدام", href: "/terms" },
                { name: "الدعم الفني", href: "/support" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-sm hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* قسم النشرة البريدية */}
          <div className="footer-section space-y-4">
            <h3 className="text-white font-bold text-lg relative inline-block after:content-[''] after:absolute after:-bottom-2 after:right-0 after:w-8 after:h-0.5 after:bg-linear-to-r after:from-blue-500 after:to-purple-500 after:rounded-full">
              اشترك معنا
            </h3>
            <p className="text-sm text-gray-400">
              احصل على أحدث التطبيقات والعروض الحصرية
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-all"
                dir="rtl"
              />
              <button
                title="."
                type="submit"
                className="bg-linear-to-r from-blue-500 to-purple-500 rounded-xl px-4 py-2 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* القسم السفلي */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-500">
            © {currentYear} هدى تك. جميع الحقوق محفوظة
          </p>
          <div className="flex items-center gap-4">
            <span className="text-gray-500">طرق الدفع الآمنة</span>
            <div className="flex gap-2">
              <div className="w-10 h-6 bg-white/10 rounded opacity-50 hover:opacity-100 transition"></div>
              <div className="w-10 h-6 bg-white/10 rounded opacity-50 hover:opacity-100 transition"></div>
              <div className="w-10 h-6 bg-white/10 rounded opacity-50 hover:opacity-100 transition"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
