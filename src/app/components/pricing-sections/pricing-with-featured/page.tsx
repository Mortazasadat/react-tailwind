"use client";
import { CheckIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

const frequencies = [
  { value: "monthly", label: "Monthly", priceSuffix: "/month" },
  { value: "annually", label: "Annually", priceSuffix: "/year" },
];

const data = [
  {
    name: "Freelancer",
    id: "tier-freelancer",
    href: "#",
    price: { monthly: "$10", annually: "$134" },
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur",
    features: [
      "2 products",
      "Up to 1,100 subscribers",
      "Basic analytics",
      "24-hour support response time",
    ],
    featured: false,
    cta: "Buy plan",
  },
  {
    name: "Startup",
    id: "tier-startup",
    href: "#",
    price: { monthly: "$20", annually: "$248" },
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur",
    features: [
      "20 products",
      "Up to 11,000 subscribers",
      "Advanced analytics",
      "44-hour support response time",
      "Marketing automations",
    ],
    featured: false,
    cta: "Buy plan",
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    price: "Custom",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "4-hour, dedicated support response time",
      "Marketing automations",
      "Custom reporting tools",
    ],
    featured: true,
    cta: "Contact sales",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function PricingWithFeatured() {
  const [frequency, setFrequency] = useState(frequencies[0]);

  return (
    <div className="py-24 bg-white lg:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="flex justify-center my-10">
          <div className="grid grid-cols-2 p-1 font-semibold leading-5 text-center rounded-lg gap-x-1 ring-1 ring-inset ring-gray-200">
            {frequencies.map((option: any) => (
              <div
                key={option.value}
                className={`cursor-pointer text-sm transition-all duration-500 rounded-md px-2.5 py-1 ${
                  option.value === frequency.value
                    ? "bg-blue-500 text-white"
                    : "text-gray-500"
                } `}
                onClick={() => setFrequency(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 mx-auto max-w-md lg:mx-0 gap-8 lg:max-w-none grid grid-cols-1 lg:grid-cols-3">
          {data.map((option) => (
            <div
              key={option.id}
              className={classNames(
                option.featured ? "bg-gray-900 ring-gray-900" : "ring-gray-200",
                "rounded-3xl p-8 ring-1 xl:p-10"
              )}
            >
              <h3
                id={option.id}
                className={classNames(
                  option.featured ? "text-white" : "text-gray-600",
                  " text-lg leading-8 font-semibold"
                )}
              >
                {option.name}
              </h3>
              <p
                className={classNames(
                  option.featured ? "text-gray-300" : "text-gray-600",
                  "mt-4 text-sm leading-6"
                )}
              >
                {option.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span
                  className={classNames(
                    option.featured ? "text-white" : "text-gray-900",
                    "text-4xl font-bold tracking-tight"
                  )}
                >
                  {typeof option.price === "string"
                    ? option.price
                    : option.price[frequency.value]}
                </span>
                {typeof option.price !== "string" ? (
                  <span
                    className={classNames(
                      option.featured ? "text-gray-300" : "text-gray-600",
                      "text-sm font-semibold leading-6"
                    )}
                  >
                    {frequency.priceSuffix}
                  </span>
                ) : null}
              </p>
              <a
                href="#"
                className={classNames(
                  option.featured
                    ? "bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white"
                    : "bg-light-blue-600 text-white shadow-sm hover:bg-light-blue-500",
                  "mt-6 block rounded-md py-2 cursor-pointer px-3 text-center text-sm font-semibold leading-6"
                )}
              >
                {option.cta}
              </a>
              <ul
                className={classNames(
                  option.featured ? "text-gray-300" : "text-gray-600",
                  "mt-8 space-y-3 text-sm leading-6 xl:mt-10"
                )}
              >
                {option.features.map((feature) => (
                  <li className="flex items-center gap-x-3">
                    <CheckIcon
                      className={classNames(
                        option.featured ? "text-white" : "text-light-blue-600",
                        "h-5 w-5 flex-none"
                      )}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
