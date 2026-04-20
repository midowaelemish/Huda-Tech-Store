import Apps from "@/components/Apps";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <main dir="rtl" className="min-h-screen bg-gray-100">
        <Header title="متجر التطبيقات" />
        <Apps />
      </main>
    </>
  );
}
