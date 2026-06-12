import NavItem from "./NavItem";
import { NAV_ITEMS } from "./navigation.constants";

export default function NavMenu() {
  return (
    <ul className="hidden md:flex items-center gap-1 bg-gradient-to-r from-sky-100 via-blue-50 to-sky-100 shadow-[0_4px_20px_rgba(59,130,246,0.08)] dark:bg-none dark:bg-accent-light px-3 py-2.5 rounded-full border border-sky-200 dark:border-accent-2/50">
      {NAV_ITEMS.map((item) => (
        <NavItem key={item.href} {...item} />
      ))}
    </ul>
  );
}
