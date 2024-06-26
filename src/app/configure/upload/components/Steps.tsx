"use client";

import { Icons } from "@/components/Icons";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const STEPS = [
  {
    name: "Step 1: Add Image",
    description: "Choose an image for your case",
    url: "/upload",
  },
  {
    name: "Step 2: Customize Design",
    description: "Make the case yours",
    url: "/design",
  },
  {
    name: "Step 3: Summary",
    description: "'review your final design",
    url: "/preview",
  },
];

export default function Steps() {
  const pathname = usePathname();
  return (
    <ol className="rounded-md bg-white lg:flex lg:rounded-none lg-border-l lg-border-r lg:border-gray-200">
      {STEPS.map((step, index) => {
        const isCurrent = pathname.endsWith(step.url);
        const isCompleted = STEPS.slice(index + 1).some((step) =>
          pathname.endsWith(step.url),
        );
        const imgPath = `/snake-${index + 1}.png`;
        return (
          <li key={step.name} className="relative overflow-hidden lg:flex-1">
            <div>
              <span
                className={cn(
                  "absolute left-0 top-0 h-full w-1 bg-zinc-400 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full",
                  {
                    "bg-zinc-700": isCurrent,
                    "bg-primary": isCompleted,
                  },
                )}
                aria-hidden="true"
              />
              <span
                className={cn(
                  index !== 0 ? "lg:pl-9" : "",
                  "flex items-center px-6 py-4 text-sm font-medium",
                )}
              >
                <span className="flex-shrink-0">
                  <img
                    src={imgPath}
                    alt="image path icon"
                    className={cn(
                      "flex size-20 object-container items-center justify-center",
                    )}
                  />
                </span>
                <span className="ml-4 h-full mt-0.5 flex min-w-0 flex-col justify-center">
                  <span
                    className={cn("text-sm font-semibold text-zing-700", {
                      "text-primary": isCompleted,
                      "text-zinc-700": isCurrent,
                    })}
                  >
                    {step.name}
                  </span>
                  <span className="text-sm text-zinc-500">
                    {step.description}
                  </span>
                </span>
              </span>

              {/* NOTE: Separator */}
              {index !== 0 ? (
                <div className="absolute inset-0 hidden w-3 lg:block">
                  <Icons.separator />
                </div>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
