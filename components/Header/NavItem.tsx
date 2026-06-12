import { Link } from "@/i18n/navigation";
import { LucideIcon } from "lucide-react";

interface NavItemProps {
  href: string;
  label: string;
  icon: LucideIcon;
  active?: boolean;
}

export default function NavItem({
  href,
  label,
  icon: Icon,
  active,
}: NavItemProps) {
  return (
    <li>
      <Link
        href={href}
        className={`
          group
          relative
          flex
          items-center
          gap-2
          rounded-full
          px-4
          py-2
          transition-all
          duration-200
text-slate-600
          dark:text-accent-dim text-xs font-bold tracking-widest
          ${
            active
              ? "opacity-100 !text-sky-500 drop-shadow-[0_0_0.5px] "
              : "opacity-70"
          }
        `}
      >
        <Icon
          size={15}
          className="transition-transform duration-200 group-hover:scale-105  max-sm:text-amber"
        />

        <span className="transition-transform duration-200 group-hover:scale-105">
          {label}
        </span>
        {active && (
          <span
            className="
              absolute
              inset-x-3
              bottom-0
              h-px
              bg-sky-500
              shadow-[0_0_1px]
              shadow-sky-500
              transition-transform
              duration-200
              scale-x-100
            "
          />
        )}
        {!active && (
          <span
            className="
              absolute
              inset-x-3
              bottom-0
              h-px
              scale-x-0
              bg-accent-dim
              transition-transform
              duration-200
              sm:group-hover:scale-x-100
            "
          />
        )}
      </Link>
    </li>
  );
}
