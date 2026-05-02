import { Building2, Shield } from "lucide-react";
import Image from "next/image";

type WorkItemProps = {
  company: string;
  role: string;
  period: string;
  summary: string;
  icon?: "shield" | "building";
  logoUrl?: string;
};

export function WorkItem({
  company,
  role,
  period,
  summary,
  icon = "building",
  logoUrl,
}: WorkItemProps) {
  const Icon = icon === "shield" ? Shield : Building2;
  return (
    <div className="rounded-xl border mt-3 border-gray-200 bg-white px-4 py-3 md:px-5 md:py-3.5 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex gap-4">
        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-gray-50 shadow-sm overflow-hidden">
          {logoUrl ? (
            <Image
              src={logoUrl}
              alt={`${company} logo`}
              width={40}
              height={40}
              className="h-full w-full object-cover"
            />
          ) : (
            <Icon className="h-5 w-5 text-gray-600" aria-hidden="true" />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 mb-1">
            <h4 className="text-sm font-semibold text-gray-900 flex-1 min-w-0">
              {company}
            </h4>
            <span className="text-xs rounded-md border border-blue-200 bg-blue-50 px-2 py-1 text-grey-700 whitespace-nowrap flex-shrink-0 self-start font-medium">
              {period}
            </span>
          </div>
          <p className="text-sm text-grey-600 font-medium">
            {role}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            {summary}
          </p>
        </div>
      </div>
    </div>
  );
}
