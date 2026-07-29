import { ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/0xuntamed",
  },
];

export function Contact() {
  return (
    <div className="mt-5 rounded-2xl border border-gray-200 bg-white px-6 py-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div>
        <div className="max-w-md">
          <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
            <span
              className="size-2 rounded-full bg-green-500"
              aria-hidden="true"
            />
            Open to thoughtful conversations
          </div>

          <h2 className="mt-4 text-xl font-semibold text-gray-900">
            Let&apos;s build something useful.
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Working on backend systems, developer tools, or a product problem
            worth thinking through? I&apos;d be happy to hear about it.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2">
          <a
            href="tel:00220022002"
            className="flex min-w-0 flex-col rounded-lg border border-gray-200 px-4 py-3 transition-colors hover:bg-gray-50"
          >
            <span className="text-xs text-gray-500">Mobile</span>
            <span className="mt-1 text-sm font-medium text-gray-900">
              +971568398064
            </span>
          </a>
          <a
            href="mailto:ahmedbilal.sde@gmail.com"
            className="flex min-w-0 flex-col rounded-lg border border-gray-200 px-4 py-3 transition-colors hover:bg-gray-50"
          >
            <span className="text-xs text-gray-500">Email</span>
            <span className="mt-1 break-all text-sm font-medium text-gray-900">
              ahmedbilal.sde@gmail.com
            </span>
          </a>
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="col-span-2 inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50"
            >
              {link.label}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <p className="mt-6 border-t border-gray-100 pt-4 text-xs text-gray-500">
        Backend systems · Developer tools · Product engineering
      </p>
    </div>
  );
}
