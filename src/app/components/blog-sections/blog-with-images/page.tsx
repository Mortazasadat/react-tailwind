const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ut adipisci eum, provident odit harum porro! Ipsum, hic. Reprehenderit quidem debitis ut fuga corporis quisquam explicabo quae nesciunt, et molestiae non repellat cupiditate, aperiam sint atque sed doloremque at quas?",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ut adipisci eum, provident odit harum porro! Ipsum, hic. Reprehenderit quidem debitis ut fuga corporis quisquam explicabo quae nesciunt, et molestiae non repellat cupiditate, aperiam sint atque sed doloremque at quas?",
    imageUrl:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80",
    },
  },
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ut adipisci eum, provident odit harum porro! Ipsum, hic. Reprehenderit quidem debitis ut fuga corporis quisquam explicabo quae nesciunt, et molestiae non repellat cupiditate, aperiam sint atque sed doloremque at quas?",
    imageUrl:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function BlogWithImages() {
  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto text-center ">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blogs
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="grid max-w-2xl grid-cols-1 mx-auto mt-16 lg:max-w-none lg:mx-0 lg:grid-cols-3 gap-y-20 gap-x-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                <img
                  src={post.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] "
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/20 " />
              </div>
              <div className="max-w-xl">
                <div className="flex items-center gap-4 mt-8 text-xs">
                  <time className="text-gray-600">{post.date}</time>
                  <a
                    className="relative z-10 rounded-full bg-red-50 hover:bg-red-100 px-3 py-1.5 text-gray-600 "
                    href={post.category.href}
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="relative group">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      {" "}
                      <span className="absolute inset-0 " /> {post.title}{" "}
                    </a>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
                    {" "}
                    {post.description}{" "}
                  </p>
                </div>
                <div className="relative flex items-center mt-8 gap-x-4">
                  <img
                    src={post.author.imageUrl}
                    className="w-10 h-10 bg-gray-100 rounded-full"
                    alt=""
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0 " />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600"> {post.author.role} </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
