import * as React from "react";

import { cn } from "@/lib/utils";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props}>
    <img 
      src="/images/Frame 2.png" 
      alt="Card Image" 
      className="w-[66%] h-[80%] rounded-lg"  
    />
  </div>
));

export { CardContent };
