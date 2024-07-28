import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function WithProductScreenshot() {
  const features = [
    {
      name: "Push to deploy.",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: CloudArrowUpIcon,
    },
    {
      name: "SSL certificates.",
      description:
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
      icon: LockClosedIcon,
    },
    {
      name: "Database backups.",
      description:
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
      icon: ServerIcon,
    },
  ];
  return (
    <div className="py-24 overflow-hidden bg-white lg:py-32">
      <div className="px-6 mx-auto max-w-7xl sm:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="pr-8 lg:pt-4">
            <div className="max-w-lg ">
              <h2 className="mb-6 text-base font-semibold text-blue-600 ledin7 ">
                Deploy fasster
              </h2>
              <h1 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                A better workflow
              </h1>
              <p className="text-xl font-normal leading-8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>

              <div className="max-w-xl mt-10 space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature, index) => (
                  <div key={index} className="relative pl-10 ">
                    <div className="inline pr-1 font-semibold text-gray-900">
                      {" "}
                      <feature.icon
                        className="absolute w-5 h-5 text-blue-600 top-1 left-1"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </div>
                    <p className="inline">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="product photo"
              className=" w-[49rem] max-w-none rounded-xl ring-1 ring-gray-400/10 sm:w-[56rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
