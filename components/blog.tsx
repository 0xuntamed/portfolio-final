const posts = [
  {
    id: 1,
    title: 'Engineering Behind File Upload',
    href: 'https://digitalgarden-tan.vercel.app/backend/engineering-behind-uploading-a-file/',
    description:
      'Click Thats all we do.We press an Upload button, select a file, wait a few seconds, and its done. Simple. But underneath that tiny click, millions of tiny events happen before your photo finally reaches a server.Lets follow a single file on its journey.',
    date: 'Mar 16, 2026',
    datetime: '2026-03-16',
    category: { title: 'Backend' },

  },
  {
    id: 2,
    title: 'Internals of Redis',
    href: 'https://digitalgarden-tan.vercel.app/backend/redis/',
    
    description: 'Building A Minimal Redis RESP2 Server In Go',
    date: 'May 10, 2026',
    datetime: '2026-05-10',
    category: { title: 'Tech' },

  },
  {
    id: 3,
    title: 'Load balancer',
    href: 'https://digitalgarden-tan.vercel.app/backend/load-balnacer/',
    description:
      'I wanted to build a load balancer from scratch, mostly for fun, but also because load balancing is one of those infrastructure ideas that sounds simple until you actually try to make it work.',
    date: 'June 12, 2026',
    datetime: '2020-06-12',
    category: { title: 'Infra' },

  },
]

export default function Blog() {
  return (
    <div className="flex w-full bg-transparent">
      <div className="mx-auto flex w-full max-w-2xl px-6 lg:px-0">
        <div className="mx-auto flex w-full flex-col gap-1  border-gray-200 pt-5 sm:pt-4">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex w-full max-w-2xl flex-col justify-between rounded-2xl border border-gray-200 bg-white px-6 py-5 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <span
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </span>
              </div>
              <div className="group relative grow">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a
                    href={post.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
              </div>
              {/* <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                <img alt="" src={post.author.imageUrl} className="size-10 rounded-full bg-gray-50" />
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div> */}
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
