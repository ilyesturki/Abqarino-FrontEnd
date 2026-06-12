"use client";

import { useEffect, useState } from "react";
import NavItem from "./NavItem";
import { NAV_ITEMS } from "./navigation.constants";
import { usePathname } from "@/i18n/navigation";

export default function NavMenu() {
  const pathname = usePathname();
  const [activeHref, setActiveHref] = useState("");

  useEffect(() => {
    if (pathname !== "/") {
      setActiveHref(pathname);
      return;
    }

    const sections = NAV_ITEMS.filter((item) => item.href.includes("#")).map(
      (item) => ({
        href: item.href,
        element: document.getElementById(item.href.split("#")[1]),
      })
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length === 0) return;

        const section = sections.find((s) => s.element === visible[0].target);

        if (section) {
          setActiveHref(section.href);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-80px 0px -40% 0px",
      }
    );

    sections.forEach((section) => {
      if (section.element) observer.observe(section.element);
    });

    setActiveHref("/#features");

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <ul className="hidden md:flex items-center gap-1 rounded-full border border-sky-200 dark:border-accent-2/50 bg-gradient-to-r from-sky-100/90 via-blue-50/90 to-sky-100/90 dark:bg-none dark:bg-accent-light px-3 py-2.5 shadow-[0_4px_20px_rgba(59,130,246,0.08)]">
      {NAV_ITEMS.map((item) => (
        <NavItem key={item.href} {...item} active={activeHref === item.href} />
      ))}
    </ul>
  );
}
