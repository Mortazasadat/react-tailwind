import { FaCheckCircle } from "react-icons/fa";
const data = [
  {
    title: "Multiple Layouts",
    description:
      " With lots of unique blocks, you can easily build withoutcoding.",
  },
  {
    title: "Multiple Page",
    description:
      " With lots of unique blocks, you can easily build withoutcoding.",
  },
];

export default function FeatureSection3() {
  return (
    <section className="py-32 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-left lg:max-w-3xl lg:mx-auto sm:text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
            Get your next tailwindCSS component with React Tailwind
          </h2>
          <p className="mt-4 text-lg text-gray-700 md:max-w-md md:mx-auto sm:mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo enim
            fuga esse consequuntur blanditiis.
          </p>
        </div>

        <div className="relative mt-12 sm:mt-16">
          <div className="absolute -inset-4 lg:-inset-x-8 lg:-inset-y-6">
            <div className="w-full h-full max-w-3xl mx-auto bg-gradient-to-tr from-blue-500 to-purple-500 via-red-600 blur-lg filter opacity-20"></div>
          </div>
          <div className="relative max-w-3xl mx-auto space-y-4 sm:space-x-8 sm:space-y-0 sm:flex sm:items-start sm:justify-center sm:scroll-p-8">
            {data.map(({ title, description }, i) => (
              <div key={i} className="bg-white rounded-xl">
                <div className="px-6 py-8">
                  <div className="flex items-start">
                    <FaCheckCircle className="flex-shrink-0 w-6 h-6" />
                    <div className="ml-5">
                      <h4 className="text-lg font-bold text-gray-900">
                        {title}
                      </h4>
                      <p className="mt-3 text-base text-gray-900">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
