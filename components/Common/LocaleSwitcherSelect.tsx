"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useState, useTransition, useRef, useEffect } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";

import {
  localeData,
  availableLocales,
  SupportedLocale,
} from "@/config/locales";

export default function LocaleSwitcherSelect({
  defaultValue,
}: {
  defaultValue: SupportedLocale;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocale, setSelectedLocale] =
    useState<SupportedLocale>(defaultValue);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const searchParams = useSearchParams();

  function handleSelect(locale: SupportedLocale) {
    setSelectedLocale(locale);
    setIsOpen(false);
    const query: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      query[key] = value;
    });

    startTransition(() => {
      router.replace({ pathname, query, ...params }, { locale });
    });
  }
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="max-md:w-full relative inline-block text-left"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 dark:text-slate-100 text-slate-800 text-xs font-bold tracking-widest px-3 py-2.5 rounded-full border border-sky-200 dark:border-accent-2/50 bg-gradient-to-r from-sky-100/90 via-blue-50/90 to-sky-100/90 dark:bg-none dark:bg-accent-light"
      >
        <Image
          src={localeData[selectedLocale].flag}
          alt={selectedLocale}
          width={24}
          height={18}
          className="w-5 h-auto rounded-[3px]"
        />
        <span className="text-sm font-semibold uppercase">
          {localeData[selectedLocale].short}
        </span>
        <FaAngleDown className="text-xs " />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-3 w-full dark:text-slate-100 text-slate-800 text-xs font-bold tracking-widest rounded-md border border-sky-200 dark:border-accent-2/50 bg-gradient-to-r from-sky-100/90 via-blue-50/90 to-sky-100/90 dark:bg-none dark:bg-accent-light z-50">
          {availableLocales.map((locale, i) => (
            <>
              <button
                key={locale}
                onClick={() => handleSelect(locale)}
                className="flex items-center gap-1.5 px-2 py-2 w-full text-left hover:opacity-70 "
              >
                <Image
                  src={localeData[locale].flag}
                  alt={locale}
                  width={24}
                  height={18}
                  className="w-5 h-auto rounded-[3px]"
                />
                <span className="text-sm uppercase text-gray-700 dark:text-gray-300">
                  {localeData[locale].short}
                </span>
              </button>
              {i != availableLocales.length - 1 && (
                <hr className="h-[0.5px] w-full border-sky-200 dark:border-accent-2/50" />
              )}
            </>
          ))}
        </div>
      )}
    </div>
  );
}
