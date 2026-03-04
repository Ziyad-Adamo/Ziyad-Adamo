"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

interface SectionProps extends HTMLMotionProps<"section"> {
    children: React.ReactNode;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <motion.section
                ref={ref}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={cn("py-20 lg:py-32", className)}
                {...props}
            >
                {children}
            </motion.section>
        );
    }
);
Section.displayName = "Section";
