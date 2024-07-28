import React from "react";

export default function CTAWithImageBlock() {
  return (
    <div className="relative bg-gray-900">
      <div className="relative overflow-hidden bg-blue-600 md:left-0 h-80 md:absolute md:h-full md:w-1/3 lg:w-1/2 ">
        <img
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
          alt="bg-photo"
          className="object-cover w-full h-full"
        />
        <svg
          viewBox="0 0 926 676"
          aria-hidden="true"
          className="absolute blur-3xl -bottom-24 left-24 w-[57.875rem] transform-gpu "
        >
          <path
            fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
            fillOpacity=".4"
            d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
          />
          <defs>
            <linearGradient
              id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
              x1="926.392"
              x2="-109.635"
              y1=".176"
              y2="321.024"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#776FFF" />
              <stop offset={1} stopColor="#FF4694" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative py-24 mx-auto max-w-7xl sm:py-32 lg:px-8 lg:py-40">
        <div className="pl-6 pr-6 ml-auto md:pl-16 lg:pl-24 lg:pr-0 xl:pl-32 md:w-2/3 lg:w-1/2">
          <h2 className="text-base font-semibold leading-7 tracking-tight text-blue-400">
            Award winning support
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight !text-white sm:text-4xl">
            We&apos;re here to help
          </p>
          <p className="mt-6 text-base leading-7 text-gray-300">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
            et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p>
          <div>
            <a
              href="#"
              className="inline-flex mt-4 rounded-md text-white bg-white/10 px-3.5 py-2.5 text-sm font-bold shadow-sm hover:bg-white/20 focus:outline focus-visible:outline-2  focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Visit help center
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
