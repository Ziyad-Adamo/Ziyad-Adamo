import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
}

export function Badge({ className, children, ...props }: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                "bg-accent/10 text-accent border border-accent/20",
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
}
