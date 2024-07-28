export default function HeroSpliteWithImage() {
  return (
    <div className="bg-white ">
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0 ">
              <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-xl">
                <div className="hidden sm:mb-10 sm:flex">
                  <div className="relative px-3 py-1 text-sm text-gray-500 rounded-full hover:cursor-pointer ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Anim aute id magna aliqua ad ad non deserunt sunt.{" "}
                    <a
                      href="#"
                      className="font-semibold text-blue-600 whitespace-nowrap"
                    >
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  {" "}
                  Data to enrich your online business
                </h1>
                <p className="mt-6 font-normal leading-6 text-gray-600">
                  {" "}
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className="flex items-center mt-6 gap-x-5">
                  <a
                    href="#"
                    className="rounded-md bg-blue-600 px-3.5 py-2 text-sm hover:bg-blue-500 text-white transition-colors duration-200"
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    className="text-sm leading-6 text-gray-900 rounded-md"
                  >
                    Learn more <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className=" lg:inset-y-0 lg:absolute lg:right-0 lg:w-1/2">
            <img
              className=" object-cover  aspect-[3/2] lg:aspect-auto lg:h-full lg:w-full"
              src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
