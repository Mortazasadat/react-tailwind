"use client";

import { FaGithub } from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";

export default function MianHeader() {
  return (
    <div className=" overflow-hidden  dark:bg-black">
      <div className="relative h-full  md:min-h-screen overflow-hidden isolate px-6 ">
        <svg
          className="absolute hidden  dark:block inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
          />
        </svg>
        <div
          className="absolute hidden dark:block left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-40 -z-10 transform-gpu overflow-hidden  sm:-top-60 blur-3xl"
        >
          <div
            style={{
              clipPath: " polygon(0 25%, 22% 10%, 100% 84%, 96% 100%)",
            }}
            className="relative dark:hidden left-[calc(50%-11rem)] aspect-[1155/778] w-[36.125rem] -translate-x-1/2 rotate-[15deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-10 sm:left-[calc(50%-25rem)] sm:w-[80.1875rem]"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute blur-3xl  inset-x-0 top-40 -z-10 transform-gpu overflow-hidden  sm:top-72 "
        >
          <div
            style={{
              clipPath: " polygon(0 40%, 22% 10%, 100% 64%, 96% 100%)",
            }}
            className="relative dark:hidden left-[calc(50%-11rem)] aspect-[1155/778] w-[36.125rem] -translate-x-1/2 rotate-[24deg]  bg-gradient-to-tr from-light-blue-200 to-light-blue-200 opacity-20 sm:left-[calc(50%-25rem)] sm:w-[80.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl  py-32 md:py-36 lg:py-36 ">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <Link
              href="#"
              className="relative  animate-buttonheartbeat rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 dark:text-white ring-gray-900/10 hover:ring-gray-900/20"
            >
              <span className="absolute  inset-0" />
              Introducing React Tailwind
            </Link>
          </div>
          <div className="flex flex-col mb-10 items-center">
            <Image
              width={80}
              height={80}
              src="/react-tailwind.png"
              alt="logo"
              className="object-cover object-center"
            />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight   dark:text-white text-gray-900 md:text-6xl  ">
              Build faster.
            </h1>
            <h1 className="text-4xl font-bold tracking-tight   dark:text-white text-gray-900 md:text-6xl  ">
              Speed development.
            </h1>

            <p className="mt-3 text-lg dark:text-white leading-8 text-gray-600">
              Free to use UI components for creative developers.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/components"
                className="rounded-md dark:text-white bg-[#30baf7] px-3.5 py-2.5 text-sm font-semibold transition-colors duration-300 text-white shadow-sm hover:bg-[#0fa5e8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#30baf7]"
              >
                Get started
              </Link>
              <Link
                href="https://github.com/Mortazasadat/react-tailwind"
                target="_blank"
                className="flex items-center dark:text-black gap-1 rounded-md bg-white ring-1  dark:ring-0 dark:py-2 ring-gray-200 px-3.5 py-2 hover:ring-gray-300 transition-all duration-300 ring-inset "
              >
                <FaGithub className="w-5 h-5" />
                Star on Github
              </Link>
            </div>
          </div>
        </div>
        {/* <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative dark:hidden left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div> */}
      </div>
    </div>
  );
}
