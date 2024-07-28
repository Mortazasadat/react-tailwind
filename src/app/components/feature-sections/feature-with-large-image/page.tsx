import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced security.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
    icon: FingerPrintIcon,
  },
  {
    name: "Powerful API.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: Cog6ToothIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ",
    icon: ServerIcon,
  },
];

export default function WithLargeShot() {
  return (
    <div className="py-24 overflow-hidden bg-white lg:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto sm:text-center">
          <h4 className="text-base font-semibold leading-7 text-blue-600 ">
            Everything you need
          </h4>
          <h1 className="mt-3 text-3xl font-bold leading-8 tracking-tight text-gray-900 lg:text-5xl ">
            No server? No problem.
          </h1>
          <p className="mt-6 text-lg font-normal leading-8 text-gray-600 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate
            blanditiis.
          </p>
        </div>
      </div>
      <div className="relative pt-16 overflow-hidden ">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <img
            src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
            alt="App photo"
            className="mb-[-12%] shadow-2xl w-full h-full rounded-xl ring-1 ring-gray-900/10"
            width={2432}
            height={1442}
          />
          <div className="relative">
            <div className="pt-[7%] bg-gradient-to-t absolute from-white bottom-0 -inset-x-20  " />
          </div>
        </div>
      </div>
      <div className="relative px-6 mt-20 overflow-hidden lg:px-8 sm:mt-24">
        <div className="w-full h-full px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 mx-auto sm:grid-cols-2 lg:max-w-none gap-y-10 gap-x-6 lg:gap-16 lg:gap-x-8 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative pl-10 text-base leading-7 "
              >
                <div className="inline pr-1 font-semibold">
                  {feature.name}
                  <feature.icon className="absolute w-6 h-6 text-sm text-blue-600 top-1 left-1" />
                </div>
                <p className="inline tex-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
