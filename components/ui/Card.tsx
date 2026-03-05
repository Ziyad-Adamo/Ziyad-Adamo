import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    interactive?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, children, interactive = false, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "glass rounded-2xl p-6 transition-all duration-300",
                    interactive && "hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_4px_20px_rgba(0,240,255,0.1)]",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);
Card.displayName = "Card";
