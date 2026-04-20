import localFont from "next/font/local";
import Card from "./Card";
const uthmanic = localFont({
  src: "../public/fonts/Uthmanic.otf",
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
  const listApps = Apps.map((app, index) => (
    <Card key={index} title={app.title} image={app.image} route={app.route} />
  ));
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 font-uthmanic">تطبيقاتنا</h2>
      <p className={"text-gray-700 mb-6" + uthmanic.className}>
        اكتشف مجموعة من التطبيقات الرائعة التي نقدمها في متجر التطبيقات الخاص
        بنا. سواء كنت تبحث عن تطبيقات ترفيهية، تعليمية، أو إنتاجية، لدينا كل ما
        تحتاجه لتلبية احتياجاتك.
      </p>
      <br></br>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {listApps}
      </div>
    </div>
  );
}
