"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, JSX } from "react";

// Types
interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// معلومات التواصل
const contactInfo = [
  {
    icon: "📧",
    title: "البريد الإلكتروني",
    value: "mohamed@hudatech.com",
    link: "mailto:mohamed@hudatech.com",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: "📱",
    title: "الهاتف",
    value: "+966 50 000 0000",
    link: "tel:+966500000000",
    color: "from-green-500 to-green-600",
  },
  {
    icon: "💬",
    title: "واتساب",
    value: "+966 50 000 0000",
    link: "https://wa.me/966500000000",
    color: "from-green-600 to-green-700",
  },
  {
    icon: "📍",
    title: "الموقع",
    value: "الرياض، المملكة العربية السعودية",
    link: "https://maps.google.com",
    color: "from-red-500 to-red-600",
  },
];

// روابط التواصل الاجتماعي
const socialLinks = [
  {
    name: "Twitter",
    icon: "🐦",
    url: "https://twitter.com/yourusername",
    color: "hover:bg-blue-400",
  },
  {
    name: "LinkedIn",
    icon: "🔗",
    url: "https://linkedin.com/in/yourusername",
    color: "hover:bg-blue-700",
  },
  {
    name: "GitHub",
    icon: "💻",
    url: "https://github.com/yourusername",
    color: "hover:bg-gray-800",
  },
  {
    name: "Instagram",
    icon: "📷",
    url: "https://instagram.com/yourusername",
    color: "hover:bg-pink-600",
  },
];

// مكون بطاقة معلومات التواصل
function ContactCard({
  icon,
  title,
  value,
  link,
  color,
}: {
  icon: string;
  title: string;
  value: string;
  link: string;
  color: string;
}) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-center">
        <div
          className={`text-5xl mb-4 inline-block p-4 rounded-full bg-linear-to-r ${color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}
        >
          {icon}
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm md:text-base break-all">{value}</p>
      </div>
    </Link>
  );
}

// المكون الرئيسي
export default function Contact(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // محاكاة إرسال البيانات (يمكن استبدالها بـ API حقيقي)
    setTimeout(() => {
      console.log("Form Data:", formData);
      setSubmitStatus({
        type: "success",
        message: "تم إرسال رسالتك بنجاح! سأتصل بك قريباً.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[50vh] overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/images/contact-bg.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-linear-to-br from-blue-900/95 via-purple-900/90 to-pink-900/95"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-[50vh] flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              تواصل معي
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              هل لديك سؤال أو فكرة مشروع؟ أنا هنا لمساعدتك!
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

      {/* Contact Section */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* بطاقات التواصل */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <ContactCard key={index} {...info} />
            ))}
          </div>

          {/* نموذج التواصل والخريطة */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* نموذج التواصل */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <div className="text-center mb-8">
                <div className="inline-block mb-4">
                  <span className="text-xs md:text-sm font-semibold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 uppercase tracking-wider">
                    أرسل لي رسالة
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  تواصل معي مباشرة
                </h2>
                <div className="w-20 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
              </div>

              {/* رسالة النجاح/الخطأ */}
              {submitStatus.type && (
                <div
                  className={`mb-6 p-4 rounded-lg text-center ${
                    submitStatus.type === "success"
                      ? "bg-green-100 text-green-700 border border-green-300"
                      : "bg-red-100 text-red-700 border border-red-300"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-right">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-right">
                      البريد الإلكتروني *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
                      placeholder="example@domain.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-right">
                      رقم الهاتف
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
                      placeholder="+966 50 000 0000"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-right">
                      الموضوع *
                    </label>
                    <select
                      title="o"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
                    >
                      <option value="">اختر الموضوع</option>
                      <option value="استفسار عام">استفسار عام</option>
                      <option value="طلب مشروع">طلب مشروع جديد</option>
                      <option value="استشارة تقنية">استشارة تقنية</option>
                      <option value="فرصة عمل">فرصة عمل</option>
                      <option value="أخرى">أخرى</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-right">
                    الرسالة *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
                    placeholder="اكتب رسالتك هنا..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
                </button>
              </form>

              {/* وسائل التواصل الاجتماعي */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-center text-gray-600 mb-4">
                  أو تواصل معي عبر
                </p>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 ${social.color} hover:text-white`}
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* خريطة الموقع */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-linear-to-r from-blue-600 to-purple-600 p-6 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  موقعي
                </h3>
                <div className="w-16 h-0.5 bg-white/50 mx-auto"></div>
              </div>
              <div className="p-6">
                <div className="w-full h-80 md:h-96 bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.9458123!2d31.5820!3d31.1650!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c8b1c2d0b3c5%3A0x9c1e2f3a4b5c6d7e!2z2YXYrNmF2YjZhCDYp9mE2YXZiti02YbYp9mE2YrYp9mEINin2YTZhdi12YTZiQ!5e0!3m2!1sar!2seg!4v1717171717171!5m2!1sar!2seg"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="موقع هدى تك"
                  ></iframe>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-gray-600">
                    📍 جمهورية مصرالعربية - محافظة الدقهلية - مدينة المنزلة
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    ساعات العمل: الأحد - الخميس | 9 صباحاً - 6 مساءً
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action - أسئلة متكررة */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4">
            <span className="text-xs md:text-sm font-semibold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 uppercase tracking-wider">
              أسئلة شائعة
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            هل لديك{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
              استفسار؟
            </span>
          </h2>
          <p className="text-gray-600 mb-8">
            أطلع على الأسئلة الشائعة أو تواصل معي مباشرة
          </p>
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-purple-600 transition-colors font-semibold"
          >
            <span>زيارة الأسئلة الشائعة</span>
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
          </Link>
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
