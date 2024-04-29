import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function MaxWidthWrapper({
    className,
    children,
}: {
    className?: string;
    children: ReactNode;
}) {
    return (
        <div className={cn('pt-16 mx-auto w-full container px-4', className)}>
            {children}
        </div>
    );
};