import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

export default function NewsLetterSection1() {
  return (
    <div className="relative py-16 overflow-hidden bg-gray-900 sm:py-24 lg:py-60 isolate">
      <div className="px-6 mx-auto lg:px-8 max-w-7xl">
        <div className="grid max-w-2xl grid-cols-1 mx-auto lg:grid-cols-2 lg:max-w-none lg:mx-0 gap-y-16">
          <div className="max-w-xl lg:max-w-lg">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Subscribe for newsletter.
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Incidunt, voluptatibus.
            </p>
            <div className="flex max-w-md mt-6 gap-x-4">
              <input
                type="text"
                name="email"
                id="email"
                required
                autoComplete="email"
                placeholder="Enter your email"
                className="min-w-0 max-w-md rounded-md border-0 bg-white/5 px-3.5 py-2.5 text-white ring-1 ring-inset w-full ring-white/10 focus:ring-2 focus:ring-inset focus-within:ring-blue-500 sm:text-sm sm:leading-6"
              />
              <button className="flex-none rounded-md bg-blue-500 py-2.5 px-3.5 font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">
                Subscribe
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8">
            <div className="flex flex-col items-start group">
              <div className="p-2 rounded-md group-hover:ring-[2px] group-hover:ring-white/20 bg-white/5 transition-all duration-200 ring-1 ring-white/10 ">
                <CalendarDaysIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="mt-4 leading-7 text-white">Weekly articles</h3>
              <p className="mt-2 leading-7 text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, illum!
              </p>
            </div>
            <div className="flex flex-col items-start group">
              <div className="p-2 rounded-md group-hover:ring-[2px] group-hover:ring-white/20 bg-white/5 transition-all duration-200 ring-1 ring-white/10 ">
                <HandRaisedIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="mt-4 leading-7 text-white">No spam</h3>
              <p className="mt-2 leading-7 text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, illum!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* gradient */}
      <div className="absolute top-0 -translate-x-1/2 -z-10 left-1/2 xl:-top-6 blur-3xl">
        <div
          className="aspect-[1100/700] opacity-30 w-[70rem] bg-gradient-to-tr from-blue-700 to-red-400 "
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
