import NavItem from "./NavItem";
import { NAV_ITEMS } from "./navigation.constants";

export default function NavMenu() {
  return (
    <ul className="hidden md:flex items-center gap-1 bg-accent-light px-3 py-2.5 rounded-full border border-accent-2/50">
      {NAV_ITEMS.map((item) => (
        <NavItem key={item.href} {...item} />
      ))}
    </ul>
  );
}
