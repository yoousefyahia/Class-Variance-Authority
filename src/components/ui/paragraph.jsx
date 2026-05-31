import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const paragraphVariants = cva(
  "leading-relaxed",
  {
    variants: {
      variant: {
        default: "text-gray-500",
        success: "text-green-600",
        error: "text-red-600",
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export function Paragraph({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "p";

  return (
    <Comp
      className={cn(
        paragraphVariants({ variant, size }),
        className
      )}
      {...props}
    />
  );
}