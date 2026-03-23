import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface SectionProps extends HTMLMotionProps<"section"> {
  containerClassName?: string;
}

export function Section({ 
  className, 
  containerClassName, 
  children, 
  ...props 
}: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={cn("py-20 md:py-32 relative", className)}
      {...props}
    >
      <div className={cn("container mx-auto px-4 md:px-6", containerClassName)}>
        {children}
      </div>
    </motion.section>
  );
}
