import CustomDropDownMenu from "../Common/CustomDropDownMenu";
// import ThemeToggle from "../Common/ThemeToggle/ThemeToggle";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import AccountDropDownMenu from "@/components/NavBar/CustomDropDownMenu/AccountDropDownMenu";

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 dark:border-b shadow-[0_0_4px] shadow-slate-500 dark:shadow-none dark:border-white1/10 bg-white1/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white1/20">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Logo />

        <NavMenu />
        <CustomDropDownMenu />
        {/* <ThemeToggle /> */}
        {/* <AccountDropDownMenu /> */}
      </nav>
    </header>
  );
}

// import AccountDropDownMenu from "@/components/NavBar/CustomDropDownMenu/AccountDropDownMenu";
// import WebSiteLogo from "../Common/WebSiteLogo";

// const Header = () => {
//   return (
//     <div className="sticky top-0 z-50 w-full h-[90px] bg-grayscale-100 shadow-[0_0_2px] shadow-grayscale-400 border-b-[1px] border-grayscale-300">
//       <div className="container flex h-full justify-between items-center px-8 ">
//         <WebSiteLogo />
//         <AccountDropDownMenu />
//       </div>
//     </div>
//   );
// };

// export default Header;
