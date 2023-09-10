import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function prefixClass(prefix: string, className: string) {
  return className
    .split(" ")
    .map((cn) => prefix + cn)
    .join(" ");
}
