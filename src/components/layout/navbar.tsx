import { BsYoutube } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import ToggleTheme from "../ThemeChanger";
import { MobileNavbar } from "./mobile-nav";
import Link from "next/link";
const navigation = [
  { name: "Components", href: "/components" },
  { name: "Templates", href: "/templates" },
];
export default function Navbar() {
  return (
    <nav className="absolute mx-auto max-w-[1380px] inset-x-0 top-0 z-50">
      <div
        aria-label="Global"
        className=" relative lg:flex dark:border-b-0 hidden  border-b border-gray-50 items-center justify-between p-6 lg:px-8"
      >
        <div className="flex items-center gap-x-16">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 flex items-center gap-x-2 p-1.5">
              <span className="sr-only">Your Company</span>

              <img alt="" src="/react-tailwind.png" className="h-8 w-auto" />
            </Link>
          </div>{" "}
          <div className="hidden lg:flex lg:gap-x-7">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm dark:text-white font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-1 items-center gap-x-5 lg:justify-end">
          <BsYoutube className="w-5 h-5 mt-0.5 text-red-500" />
          <FaGithub className="w-5 h-5" />
          <ToggleTheme className="" />
        </div>
      </div>
      <MobileNavbar />
    </nav>
  );
}
