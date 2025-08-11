// components/ui/spinner.tsx
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export type SpinnerProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "destructive" | "muted" | "white";
  label?: string;
} & Omit<HTMLAttributes<HTMLSpanElement>, "color">;

const sizeClasses = {
  sm: "h-4 w-4",
  md: "h-8 w-8",
  lg: "h-12 w-12",
};

const colorClasses = {
  primary: "text-primary",
  secondary: "text-secondary",
  destructive: "text-destructive",
  muted: "text-muted-foreground",
  white: "text-white",
};

export function Spinner({
  className,
  size = "md",
  color = "primary",
  label,
  ...props
}: SpinnerProps) {
  return (
    <span
      role="status"
      aria-label={label || "Loading..."}
      className="flex items-center justify-center"
      {...props}
    >
      <Loader2
        className={cn(
          "animate-spin",
          sizeClasses[size],
          colorClasses[color],
          className
        )}
      />
      {label && <span className="ml-2 text-sm font-medium">{label}</span>}
    </span>
  );
}
