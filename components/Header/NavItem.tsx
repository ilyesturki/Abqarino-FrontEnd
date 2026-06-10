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
      <a
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

          text-accent-dim text-xs font-bold tracking-widest
          ${active ? "opacity-100" : "opacity-70"}
        `}
      >
        <Icon
          size={15}
          className="transition-transform duration-200 group-hover:scale-105"
        />

        <span className="transition-transform duration-200 group-hover:scale-105">
          {label}
        </span>

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
              group-hover:scale-x-100
            "
          />
        )}
      </a>
    </li>
  );
}
