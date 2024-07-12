"use client";
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Input,
} from "@material-tailwind/react";
import { ComputerDesktopIcon } from "@heroicons/react/16/solid";
import { FaWebflow } from "react-icons/fa6";
import { BsYoutube } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import ToggleTheme from "../ThemeChanger";
import { BiSearch } from "react-icons/bi";

export function MobileNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        className="flex mt-4 dark:text-white z-10 items-center text-blue-gray-900 gap-x-2 p-1 font-bold"
      >
        <ComputerDesktopIcon className="w-5 h-5" />
        <a href="#" className="flex font-bold items-center">
          Components
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center dark:text-white font-bold gap-x-2 p-1 "
      >
        <FaWebflow className="w-5 h-5" />
        <a href="#" className="flex items-center">
          Templates
        </a>
      </Typography>
      <div className="dark:text-white my-3 flex lg:flex-1 items-center gap-x-5">
        <BsYoutube className="w-5 h-5   text-red-500" />
        <FaGithub className="w-5 h-5 dark:text-white text-gray-900" />
        <ToggleTheme className="text-gray-900 dark:text-white" />
      </div>
    </ul>
  );

  return (
    <Navbar className="mx-auto -z-10 dark:bg-gradient-to-r from-black/90 to-black dark:border-0 dark:border-b dark:rounded-none lg:hidden max-w-screen-xl px-4 py-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between dark:text-white text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          <img alt="" src="/react-tailwind.png" className="h-8 w-auto" />
        </Typography>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex flex-col gap-x-2 sm:flex-row sm:items-center">
            <div className="relative w-full gap-2 md:w-max">
              <Input
                type="search"
                placeholder="Search"
                containerProps={{
                  className: "min-w-[288px]",
                }}
                className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <div className="!absolute left-3 top-[13px]">
                <BiSearch />
              </div>
            </div>
            <Button size="md" color="blue" className="mt-1 rounded-lg sm:mt-0">
              Search
            </Button>
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}
