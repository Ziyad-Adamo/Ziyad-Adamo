import { cn } from "@/lib/utils";
import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
    asChild?: boolean;
}

export const buttonVariants = {
    base: "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none active:scale-95",
    variants: {
        primary: "bg-accent text-background hover:bg-accent/90 hover:-translate-y-1 shadow-[0_4_15px_rgba(0,240,255,0.2)] hover:shadow-[0_6_25px_rgba(0,240,255,0.4)]",
        secondary: "glass text-foreground hover:bg-foreground/10",
        outline: "border border-accent text-accent hover:bg-accent/10",
        ghost: "text-foreground hover:bg-foreground/5",
    },
    sizes: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-8 text-base",
        lg: "h-14 px-10 text-lg",
    }
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant = "primary",
            size = "md",
            isLoading = false,
            asChild = false,
            children,
            disabled,
            ...props
        },
        ref
    ) => {
        const compClasses = cn(buttonVariants.base, buttonVariants.variants[variant], buttonVariants.sizes[size], className);

        if (asChild && React.isValidElement(children)) {
            const child = children as React.ReactElement<{ className?: string }>;
            return React.cloneElement(child, {
                className: cn(compClasses, child.props.className),
            });
        }

        return (
            <button
                ref={ref}
                disabled={disabled || isLoading}
                className={compClasses}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);
Button.displayName = "Button";
