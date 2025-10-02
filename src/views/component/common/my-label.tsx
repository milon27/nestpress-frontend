import { cn } from "@/util/util"

export function MyLabel({
    htmlFor,
    label,
    className,
}: {
    htmlFor?: string
    label: string | React.ReactNode
    className?: string
}) {
    return (
        <label
            htmlFor={htmlFor}
            className={cn(`cursor-pointer mb-1 text-sm font-medium text-slate-600 dark:text-slate-400`, className)}
        >
            {label}
        </label>
    )
}
