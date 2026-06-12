import Footer from "@/components/Common/Footer/Footer";
import Header from "@/components/Header/Header";

export default function MoyenneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative dark:bg-black-100 overflow-clip">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
