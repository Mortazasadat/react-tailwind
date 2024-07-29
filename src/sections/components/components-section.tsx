"use client";
import { Typography, Chip } from "@material-tailwind/react";
import BorderGlowCard from "@/components/BorderGlowCard";
import Link from "next/link";

const DATA = [
  // {
  //   title: "Application & Admin UI",
  //   id: "application-admin-ui",
  //   description:
  //     "Combine our pre-built blocks to create functional applications.",
  //   blocks: [
  //     {
  //       count: 7,
  //       title: "Widgets",
  //       route: "/blocks/widgets",
  //       img: "/image/components/widgets-thumbnail.jpg",
  //     },
  //     {
  //       count: 6,
  //       title: "Charts",
  //       route: "/blocks/charts",
  //       img: "/image/components/charts-thumbnail.jpg",
  //     },
  //     {
  //       count: 8,
  //       title: "Tables",
  //       route: "/blocks/tables",
  //       img: "/image/components/table-thumbnail.jpg",
  //     },
  //     {
  //       count: 5,
  //       title: "Modals",
  //       route: "/blocks/modals",
  //       img: "/image/components/modals-thumbnail.jpg",
  //     },
  //     {
  //       count: 7,
  //       title: "Account",
  //       route: "/blocks/account",
  //       img: "/image/components/account-thumbnail.jpg",
  //     },
  //     {
  //       count: 5,
  //       title: "Billing",
  //       route: "/blocks/billing",
  //       img: "/image/components/billing-thumbnail.jpg",
  //     },
  //     {
  //       count: 6,
  //       title: "Tables Headers",
  //       route: "/blocks/tables-headers",
  //       img: "/image/components/table-headers-thumbnail.jpg",
  //       isNew: true,
  //     },
  //     {
  //       count: 6,
  //       title: "Tables Footers",
  //       route: "/blocks/tables-footers",
  //       img: "/image/components/table-footers-thumbnail.jpg",
  //       isNew: true,
  //     },
  //     {
  //       count: 5,
  //       title: "Newsletter",
  //       route: "/blocks/newsletter-sections",
  //       img: "/image/components/newsletter-thumbnail.jpg",
  //       isNew: true,
  //     },
  //   ],
  // },
  {
    title: "Marketing & Presentation",
    id: "marketing-presentation",
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
        img: "/components/pricing.jpg",
        isNew: true,
      },
      {
        count: 1,
        title: "Blogs Sections",
        route: "/blocks/blog-sections",
        img: "/blocks/blog1.jpg",
        isNew: true,
      },
      // {
      //   count: 17,
      //   title: "Testimonial Sections",
      //   route: "/blocks/testimonial-sections",
      //   img: "https://material-taillwind-pro-ct-tailwind-team.vercel.app/image/components/testimonial-thumbnail.jpg",
      // },
      // {
      //   count: 6,
      //   title: "Popup Sections",
      //   route: "/blocks/popup-sections",
      //   img: "/image/components/popup-thumbnail.jpg",
      // },
      // {
      //   count: 4,
      //   title: "Authentication",
      //   route: "/blocks/authentication",
      //   img: "/image/components/authentication-thumbnail.jpg",
      // },
      // {
      //   count: 5,
      //   title: "Onboarding Sections",
      //   route: "/blocks/onboarding-sections",
      //   img: "/image/components/onboarding-thumbnail.jpg",
      // },
      // {
      //   count: 10,
      //   title: "Navbars",
      //   route: "/blocks/navbars",
      //   img: "/image/components/navbars-thumbnail.jpg",
      // },
      // {
      //   count: 13,
      //   title: "Contact Sections",
      //   route: "/blocks/contact-sections",
      //   img: "/image/components/contact-us-thumbnail.jpg",
      // },
      // {
      //   count: 15,
      //   title: "Team Sections",
      //   route: "/blocks/team-sections",
      //   img: "/image/components/team-thumbnail.jpg",
      // },
      // {
      //   count: 16,
      //   title: "Footers",
      //   route: "/blocks/footers",
      //   img: "https://material-taillwind-pro-ct-tailwind-team.vercel.app/image/components/footer-thumbnail.jpg",
      // },
    ],
  },
  // {
  //   title: "Content UI",
  //   id: "content-ui",
  //   description:
  //     "Convey information, instructions, or descriptions with our versatile blocks.",
  //   blocks: [
  //     {
  //       count: 6,
  //       title: "FAQs",
  //       route: "/blocks/faqs",
  //       img: "https://material-taillwind-pro-ct-tailwind-team.vercel.app/image/components/faq-thumbnail.jpg",
  //     },
  //     {
  //       count: 15,
  //       title: "Feature Section",
  //       route: "/blocks/feature-sections",
  //       img: "https://material-taillwind-pro-ct-tailwind-team.vercel.app/image/components/features-thumbnail.jpg",
  //     },
  //     {
  //       count: 7,
  //       title: "Stats Sections",
  //       route: "/blocks/stats-sections",
  //       img: "https://material-taillwind-pro-ct-tailwind-team.vercel.app/image/components/stats-thumbnail.jpg",
  //     },
  //     {
  //       count: 16,
  //       title: "Content Sections",
  //       route: "/blocks/content-sections",
  //       img: "https://material-taillwind-pro-ct-tailwind-team.vercel.app/image/components/content-section-thumbnail.jpg",
  //     },
  //     {
  //       count: 5,
  //       title: "Cards",
  //       route: "/blocks/cards",
  //       img: "https://material-taillwind-pro-ct-tailwind-team.vercel.app/image/components/cards-thumbnail.jpg",
  //     },
  //     {
  //       count: 7,
  //       title: "Error Sections",
  //       route: "/blocks/error-sections",
  //       img: "https://material-taillwind-pro-ct-tailwind-team.vercel.app/image/components/error-thumbnail.jpg",
  //     },
  //     {
  //       count: 4,
  //       title: "Maintenance Sections",
  //       route: "/blocks/maintenance-sections",
  //       img: "https://material-taillwind-pro-ct-tailwind-team.vercel.app/image/components/maintenance-thumbnail.jpg",
  //     },
  //     {
  //       count: 15,
  //       title: "Blog Sections",
  //       route: "/blocks/blog-sections",
  //       img: "https://material-taillwind-pro-ct-tailwind-team.vercel.app/image/components/blog-posts-thumbnail.jpg",
  //     },
  //     {
  //       count: 5,
  //       title: "Logo Sections",
  //       route: "/blocks/logo-sections",
  //       img: "https://material-taillwind-pro-ct-tailwind-team.vercel.app/image/components/logo-areas-thumbnail.jpg",
  //     },
  //   ],
  // },
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

export function ComponentsSection() {
  const BLUR_FADE_DELAY = 0.04;
  return (
    <section
      className="z-10 dark:bg-black overflow-hidden relative px-4 -mt-10 "
      id="explore-blocks"
    >
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
      <div className="container  px-2 mx-auto  ">
        <div className="">
          {DATA.map(({ title, blocks, description, id }, i) => (
            <div
              key={i}
              className="grid grid-cols-1 mb-16 lg:gap-x-4 lg:grid-cols-4 "
              id={id}
            >
              <div className="col-span-1 mb-8 lg:mb-0 ">
                <Typography variant="h5" className="mb-1 text-primary">
                  {title}
                </Typography>
                <Typography className=" relative !text-md !font-normal  leading-snug !text-blue-gray-500">
                  {description}
                </Typography>
              </div>

              <div className="grid grid-cols-1  col-span-3 gap-10 sm:grid-cols-2 lg:grid-cols-3 ">
                {blocks.map(({ count, title, route, img, isNew }, i) => (
                  <Link key={i} href={route} className="relative">
                    <span className="inset-0 absolute" />
                    <BorderGlowCard>
                      <div className="col-span-1 mb-8 lg:mb-0 ">
                        <Link href={route} className="list-none  ">
                          <div className=" relative ">
                            <div className="relative aspect-[5/3] overflow-hidden rounded-lg  ring-1 ring-cerise-red-900/10 dark:ring-1 dark:ring-white ">
                              <img
                                src={img}
                                alt={title}
                                className=" w-full h-full"
                              />
                            </div>
                            <h4 className="mt-4 text-sm font-medium text-slate-900  ">
                              <Link
                                href={route}
                                className="flex items-center justify-between"
                              >
                                <p className="relative dark:text-white">
                                  {" "}
                                  {title}{" "}
                                </p>

                                {isNew && (
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
                              {count}
                            </p>
                          </div>
                        </Link>
                      </div>
                    </BorderGlowCard>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ComponentsSection;
