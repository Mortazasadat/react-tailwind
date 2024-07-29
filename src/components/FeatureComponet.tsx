"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiBadgeDollar } from "react-icons/ci";
import { FaBookOpen } from "react-icons/fa";
import { MdOutlineRssFeed } from "react-icons/md";
import ShineBorder from "./ShineBorder";
import { Button, Chip } from "@material-tailwind/react";

const DATA = [
  {
    title: "Marketing & Presentation",
    id: "marketing-presentation",
    Number: 1,
    description:
      "Choose the blocks that capture your user's attention and engage them.",
    blocks: [
      {
        count: 4,
        title: "Hero Sections",
        route: "/components/hero-sections",
        img: "/blocks/heroe1s.jpg",
        isNew: false,
      },
      {
        count: 3,
        title: "Feature Sections",
        route: "/components/feature-sections",
        img: "/blocks/feature.jpg",
        isNew: false,
      },
      {
        count: 2,
        title: "CTA Sections",
        route: "/components/cta-sections",
        img: "/blocks/cta-sections.jpg",
        isNew: true,
      },
      {
        count: 2,
        title: "Pricing Sections",
        route: "/components/pricing-sections",
        img: "/blocks/pricing.jpg",
        isNew: false,
      },
      {
        count: 1,
        title: "Header Sections",
        route: "/components/header-sections",
        img: "/blocks/heroe1s.jpg",
        isNew: true,
      },
      {
        count: 1,
        title: "Newsletter Sections",
        route: "/components/newsletter-sections",
        img: "/blocks/pricing.jpg",
        isNew: true,
      },
      {
        count: 1,
        title: "Blogs Sections",
        route: "/components/blog-sections",
        img: "/blocks/blog1.jpg",
        isNew: true,
      },
      {
        count: 1,
        title: "Testimonial Sections",
        route: "/components/testimonial-sections",
        img: "/blocks/heroe1s.jpg",
        isNew: true,
      },
      {
        count: 1,
        title: "Border Sections",
        route: "/components/border-sections",
        img: "/blocks/feature.jpg",
        isNew: true,
      },
      {
        count: 1,
        title: "Team Sections",
        route: "/components/team-sections",
        img: "/blocks/blog1.jpg",
        isNew: true,
      },
    ],
  },
  {
    title: "Templates",
    id: "templates",
    Number: 2,
    description: "Templates made with next.js tailwindcss and framer motion",
    blocks: [
      {
        count: 1,
        title: "Hero Section",
        route: "/components/hero-sections",
        img: "/blocks/heroe1s.jpg",
        isNew: false,
      },
    ],
  },
  // {
  //   title: "Ecommerce UI",
  //   id: "ecommerce-ui",
  //   description: "Create beautiful online stores with pre-built blocks.",
  //   blocks: [
  //     {
  //       count: 6,
  //       title: "Banner Sections",
  //       route: "/blocks/banner-sections",
  //       img: "https://material-taillwind-pro-ct-tailwind-team.vercel.app/image/components/banner-thumbnail.jpg",
  //     },
  //     {
  //       count: 14,
  //       title: "Ecommerce Sections",
  //       route: "/blocks/ecommerce-sections",
  //       img: "https://material-taillwind-pro-ct-tailwind-team.vercel.app/image/components/ecommerce-thumbnail.jpg",
  //     },
  //     {
  //       count: 5,
  //       title: "Product List Sections",
  //       route: "/blocks/product-list-sections",
  //       img: "https://material-taillwind-pro-ct-tailwind-team.vercel.app/image/components/product-list-thumbnail.jpg",
  //     },
  //     {
  //       count: 3,
  //       title: "Customer Overview Sections",
  //       route: "/blocks/overview-sections",
  //       img: "https://material-taillwind-pro-ct-tailwind-team.vercel.app/image/components/customer-overview-thumbnail.jpg",
  //     },
  //     {
  //       count: 10,
  //       title: "Pricing Sections",
  //       route: "/blocks/pricing-sections",
  //       img: "https://material-taillwind-pro-ct-tailwind-team.vercel.app/image/components/pricing-thumbnail.jpg",
  //     },
  //   ],
  // },
];

const HomeFeatureComponent = () => {
  const [activeImage, setActiveImage] = useState(1);

  const ImageTabs = [
    {
      name: "UI Components",
      description: "Build faster.Build your next project with React Tailwind.",
      icon: <MdOutlineRssFeed />,
    },
    {
      name: "Templates",
      description: "Get templates made with Next.js and Tailwind CSS.",
      icon: <CiBadgeDollar />,
    },
    {
      name: "Animation",
      description: "Get UI blocks made with React and Framer Motion ",
      icon: <FaBookOpen />,
    },
  ];

  const Images = [
    {
      imageNumber: 1,
      imageSource:
        "https://dashboardsdesign.com/img/dashboards/dashboard-05-custom.png",
    },
    {
      imageNumber: 2,
      imageSource:
        "https://dashboardsdesign.com/img/dashboards/dashboard-02.png",
    },
    {
      imageNumber: 3,
      imageSource:
        "https://dashboardsdesign.com/img/dashboards/dashboard-03.png",
    },
  ];

  const handleImageChange = (index: number) => {
    setActiveImage(index);
  };

  return (
    <div className=" md:-mt-60  dark:bg-black overflow-hidden isolate relative h-full px-5 pb-40">
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
        aria-hidden="true"
        className="absolute  inset-x-0 top-40 -z-10 transform-gpu overflow-hidden filter blur-3xl sm:top-48 "
      >
        <div
          style={{
            clipPath: " polygon(0 40%, 22% 10%, 100% 64%, 96% 100%)",
          }}
          className="relative dark:hidden left-[calc(50%-11rem)] aspect-[1155/778] w-[36.125rem] -translate-x-1/2 rotate-[-25deg] bg-gradient-to-tr from-blue-500 to-blue-100 opacity-10 sm:left-[58%] sm:w-[100.1875rem]"
        />
      </div>

      <div className="image-navigation max-w-7xl mx-auto mb-12  mt-20 flex w-full items-center justify-start text-center">
        <div className=" flex w-full  flex-col gap-2 md:flex-row">
          {ImageTabs.map((tab, index) => (
            <button
              key={index}
              className={`group relative flex w-full flex-col items-start p-3 text-left`}
              onClick={() => handleImageChange(index + 1)}
            >
              <div
                className={`mb-3 ${
                  activeImage === index + 1
                    ? `bg-[#0384c6] text-[#f0f9ff]`
                    : `bg-[#30baf7]  text-[#f0f9ff]`
                } z-10 rounded-lg p-1 group-hover:bg-[#0384c6]  group-hover:text-[#e0f2fe] `}
              >
                {tab.icon}
              </div>
              <div className="z-10 mb-2 text-xs font-semibold">{tab.name}</div>
              <p className="z-10 m-0 dark:text-gray-400 text-xs text-gray-600 md:text-sm">
                {tab.description}
              </p>
              {activeImage === index + 1 && (
                <motion.span
                  layoutId="tab"
                  transition={{ type: "spring", duration: 0.2, stiffness: 170 }}
                  className="absolute inset-0 z-0 rounded-md dark:bg-gray-900 bg-[#e0f2fe] "
                ></motion.span>
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto rounded-lg ">
        {DATA.map((data, index) => (
          <div key={index} className="  ">
            {activeImage === data.Number && (
              <div
                className={`grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7`}
              >
                {data.blocks.map((block, i) => (
                  <Link
                    key={i}
                    href={block.route}
                    className="relative ring-1  rounded-2xl ring-inset ring-[#30baf7] hover:ring-2 transition-all duration-300"
                  >
                    <span className="inset-0 absolute" />
                    <div className="p-5">
                      <div className="col-span-1  mb-8 lg:mb-0 ">
                        <Link href={block.route} className="list-none">
                          <div className=" relative ">
                            <div className="relative aspect-[5/3] overflow-hidden rounded-lg  dark:ring-1 dark:ring-white">
                              <img
                                src={block.img}
                                alt={block.title}
                                className=" w-full h-full"
                              />
                            </div>
                            <h4 className="mt-4 text-sm font-medium text-slate-900">
                              <Link
                                href={block.route}
                                className="flex items-center justify-between"
                              >
                                <p className="relative dark:text-white">
                                  {" "}
                                  {block.title}{" "}
                                </p>

                                {block.isNew && (
                                  <Chip
                                    variant="ghost"
                                    size="sm"
                                    value="new"
                                    className=" bg-blue-500 text-white ml-1  capitalize !flex"
                                  />
                                )}
                              </Link>
                            </h4>
                            <p className="relative dark:text-white group-hover:text-blue-600  mt-1.5 text-xs font-medium text-slate-500">
                              {block.count}
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="flex mt-14 w-full justify-center">
          {activeImage === 1 && (
            <Link href="/components">
              <Button className="bg-light-blue-500 hover:bg-light-blue-400 transition-all duration-200">
                Show more
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeFeatureComponent;
