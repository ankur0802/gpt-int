import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn( ...inputs:ClassValue[]){
    return twMerge(clsx(inputs))

}

// left-0 right-0 -> inset-x-0