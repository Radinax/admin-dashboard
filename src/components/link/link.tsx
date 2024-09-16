import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LinkProps, Link as RouterLink } from "react-router-dom";

export const Link = ({ className, children, ...props }: LinkProps) => {
  return (
    <RouterLink className={cn("text-slate-600 hover:text-slate-900", className)} {...props}>
      <Button>{children}</Button>
    </RouterLink>
  );
};
