import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
const cards = [
  {
    name: "Sales",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, obcaecati.",
    icon: PhoneIcon,
  },
  {
    name: "Technical Support",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia.",
    icon: LifebuoyIcon,
  },
  {
    name: "Media Inquiries",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, obcaecati.",
    icon: NewspaperIcon,
  },
];

export default function HeaderWithCards() {
  return (
    <div className="relative py-24 overflow-hidden bg-gray-900 isolate sm:py-48">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        className="absolute inset-0 object-cover object-right w-full h-full -z-10 md:object-center"
      />
      <div className="hidden sm:absolute sm:-top-10 right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu blur-3xl ">
        <div
          className="aspect-[1097/845] w-[68rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="absolute -translate-x-1/2 blur-3xl -z-10 left-1/2 sm:translate-x-0 sm:transform-gpu sm:ml-16 -top-52 sm:top-[-28rem] ">
        <div
          className=" aspect-[1000/800] w-[68rem] opacity-30 bg-gradient-to-tr from-[#ff4694] to-[#776fff]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Support center
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus beatae qui, dolorem est nisi esse asperiores adipisci
            ipsum nam assumenda.
          </p>
        </div>
        <div className="grid max-w-2xl grid-cols-1 gap-6 mx-auto mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.name}
              className="flex p-6 gap-x-4 bg-white/5 ring-1 ring-inset rounded-xl ring-white/10"
            >
              <card.icon className="flex-none w-5 text-blue-400 h-7" />
              <div className="text-base leading-7">
                <h3 className="font-bold text-white ">{card.name}</h3>
                <p className="mt-2 text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
