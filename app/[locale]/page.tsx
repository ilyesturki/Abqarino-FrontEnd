import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Orientation from "@/components/Orientation";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Common/Footer/Footer";
// import { FloatingNav } from "@/components/ui/FloatingNavBar";

// export interface NavItem {
//   name: string;
//   link: string;
// }
// export const navItems: NavItem[] = [
//   { name: "About", link: "#about" },
//   { name: "Projects", link: "#projects" },
//   { name: "Experience", link: "#experience" },
//   { name: "Contact", link: "#contact" },
// ];
export default function Home() {
  return (
    <main className="min-h-screen relative bg-slate-100 dark:bg-black-100 overflow-clip">
      {/* <FloatingNav navItems={navItems} /> */}
      <Header />
      <Hero />
      <Stats />
      <Features />
      <Pricing />
      <Orientation />
      <Testimonials />
      <Footer />
    </main>
  );
}
