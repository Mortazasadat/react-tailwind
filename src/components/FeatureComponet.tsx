"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiBadgeDollar } from "react-icons/ci";
import { FaBookOpen } from "react-icons/fa";
import { MdOutlineRssFeed } from "react-icons/md";
import ShineBorder from "./ShineBorder";
import { Chip } from "@material-tailwind/react";

const DATA = [
  {
    title: "Marketing & Presentation",
    id: "marketing-presentation",
    Number: 1,
    description:
      "Choose the blocks that capture your user's attention and engage them.",
    blocks: [
      {
        count: 3,
        title: "Hero Sections",
        route: "/components/hero-sections",
        img: "/blocks/heroe1s.jpg",
        isNew: true,
      },
      {
        count: 2,
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
        route: "/blocks/pricing-sections",
        img: "/blocks/pricing.jpg",
        isNew: false,
      },
    ],
  },
  {
    title: "Content UI",
    id: "content-ui",
    Number: 2,
    description:
      "Convey information, instructions, or descriptions with our versatile blocks.",
    blocks: [
      {
        count: 6,
        title: "FAQs",
        route: "/blocks/faqs",
        img: "/blocks/cta-sections.jpg",
        isNew: false,
      },
      {
        count: 15,
        title: "Feature Section",
        route: "/blocks/feature-sections",
        img: "/blocks/cta-sections.jpg",
        isNew: false,
      },
      {
        count: 7,
        title: "Stats Sections",
        route: "/blocks/stats-sections",
        img: "/blocks/cta-sections.jpg",
        isNew: false,
      },
      {
        count: 7,
        title: "Stats Sections",
        route: "/blocks/stats-sections",
        img: "/blocks/cta-sections.jpg",
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

const ImageSection = () => {
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
    <div className="bg-white dark:bg-black py-16">
      <div className="mx-auto  max-w-2xl  sm:text-center">
        <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl">
          See React Tailwind components
        </p>
      </div>
      <div className="image-navigation mb-20  mt-20 flex w-full items-center justify-center text-center">
        <div className=" flex w-full max-w-6xl flex-col gap-2 md:flex-row">
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
                    : `bg-[#30baf7] text-[#f0f9ff]`
                } z-10 rounded-lg p-1 group-hover:bg-[#0384c6] group-hover:text-[#e0f2fe] `}
              >
                {tab.icon}
              </div>
              <div className="z-10 mb-2 text-xs font-semibold">{tab.name}</div>
              <p className="z-10 m-0 text-xs text-gray-600 md:text-sm">
                {tab.description}
              </p>
              {activeImage === index + 1 && (
                <motion.span
                  layoutId="tab"
                  transition={{ type: "spring", duration: 0.2, stiffness: 170 }}
                  className="absolute inset-0 z-0 rounded-md bg-[#e0f2fe] "
                ></motion.span>
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto rounded-lg ">
        {DATA.map((data, index) => (
          <div key={index} className="  ">
            {activeImage === data.Number && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {data.blocks.map((block, i) => (
                  <Link key={i} href={block.route} className="relative">
                    <span className="inset-0 absolute" />
                    <ShineBorder
                      className="border dark:border-none"
                      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                    >
                      <div className="col-span-1 p-2 mb-8 lg:mb-0 ">
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
                    </ShineBorder>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSection;
