import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const sleep = (ms: number = 5000) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const promise = new Promise<void>((resolve) => {
        timeoutId = setTimeout(resolve, ms);
    });

    return {
        promise,
        cancel: () => clearTimeout(timeoutId),
    };
};

