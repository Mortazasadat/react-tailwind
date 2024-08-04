import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const navigation = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/sayedmurtaza/",
    icon: (props: any) => <FaLinkedin {...props} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/Mortazasadat",
    icon: (props: any) => <FaGithub {...props} />,
  },
  {
    name: "X",
    href: "https://x.com/sayedmurtaza07",
    icon: (props: any) => <BsTwitterX {...props} />,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@reactailwind",
    icon: (props: any) => <FaYoutube {...props} />,
  },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center items-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <Link
              target="_blank"
              key={item.name}
              href={item.href}
              className="text-gray-600 dark:text-gray-200 dark:hover:text-gray-300  hover:text-gray-700"
            >
              <item.icon className="h-5 w-5" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 dark:text-gray-300 text-gray-700">
            Build by{" "}
            <Link
              className="font-semibold hover:text-gray-600 dark:hover:text-gray-300"
              href="https://www.sayedmurtaza.com/"
              target="_blank"
            >
              {" "}
              Sayed Murtaza
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
