"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import LocaleSwitcher from "@/components/Common/LocaleSwitcher";
import ThemeToggle from "@/components/Common/ThemeToggle/ThemeToggle";
import NavMenu from "../Header/NavMenu";
import { NAV_ITEMS } from "../Header/navigation.constants";
import NavItem from "../Header/NavItem";

const CustomDropDownMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop view - always visible */}
      <div className="hidden md:flex items-center gap-2">
        {/* <ScanButton /> */}
        <ThemeToggle />
        <LocaleSwitcher />
      </div>

      {/* Mobile view - dropdown menu */}
      <div className="md:hidden relative">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-md focus:outline-none text-amber"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {isMobileMenuOpen && (
          <div className="absolute right-0 mt-6 w-[200px] bg-gradient-to-r from-sky-100/90 via-blue-50/90 to-sky-100/90 dark:bg-none dark:bg-slate-900/95 rounded-md shadow-sm py-1 z-50 border border-accent-2/30">
            <div className="flex flex-col gap-2 px-2 py-1">
              {/* <ScanButton /> */}
              {NAV_ITEMS.map((item) => (
                <>
                  <NavItem key={item.href} {...item} />
                  <hr className="w-full h-[1px] border-accent-2/50" />
                </>
              ))}
              <div className="flex items-center justify-between pt-2">
                <ThemeToggle />
                <LocaleSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CustomDropDownMenu;
