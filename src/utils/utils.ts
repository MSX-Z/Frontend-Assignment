import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]) =>  twMerge(clsx(inputs))

export const sleep = (ms: number = 5000) => new Promise((resolve) => setTimeout(resolve, ms))
