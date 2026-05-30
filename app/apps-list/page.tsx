import Card from "@/components/Card";
import localFont from "next/font/local";

const uthmanic = localFont({
  src: "../src/fonts/Uthmanic.otf",
});

export default function Apps() {
  const Apps = [
    {
      title: "الأربعون النووية",
      image: "/images/icons/alarbaon.jpg",
      route: "arbaon",
    },
    {
      title: "الأربعون النووية",
      image: "/images/icons/alarbaon.jpg",
      route: "arbaon",
    },
    {
      title: "الأربعون النووية",
      image: "/images/icons/alarbaon.jpg",
      route: "arbaon",
    },
  ];

  return (
    <div className="p-4">
      <h2 className={`text-2xl font-bold mb-4 ${uthmanic.className}`}>
        تطبيقاتنا
      </h2>

      <p className={`text-gray-700 mb-6 ${uthmanic.className}`}>
        اكتشف مجموعة من التطبيقات الرائعة التي نقدمها في متجر التطبيقات الخاص
        بنا. سواء كنت تبحث عن تطبيقات ترفيهية، تعليمية، أو إنتاجية، لدينا كل ما
        تحتاجه.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Apps.map((app, index) => (
          <Card
            key={index}
            title={app.title}
            image={app.image}
            route={app.route}
          />
        ))}
      </div>
    </div>
  );
}
