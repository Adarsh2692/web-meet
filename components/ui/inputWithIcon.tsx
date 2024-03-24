import * as React from "react";
import { cn } from "@/lib/utils";
import { SendHorizontal } from "lucide-react";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputWithIcon = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <div className="relative">
                <input
                    type={type}
                    className={cn(
                        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {/* Add an icon for sending a message */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 opacity-40 hover:opacity-100 cursor-pointer">
                    <SendHorizontal />
                </div>
            </div>
        );
    }
);

InputWithIcon.displayName = "Input";

export { InputWithIcon };
