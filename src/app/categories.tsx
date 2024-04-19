import React from "react";
import Link from "next/link";

import { getCategories } from "@/lib/categories";

export default function Categories() {
    const allCategories = getCategories();
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
            {allCategories.map((item, idx) => {
                const icon = item.icon;
                const name = item.name;
                const description = item.description;
                const path = item.path;
                return (
                    <Link
                        key={idx}
                        href={path}
                        className="flex flex-col border rounded-md p-6 space-y-2 hover:border-gray-600 duration-200"
                    >
                        <div className="flex flex-row space-x-2 items-center">
                            {icon}
                            <span className="text-md font-medium leading-none">
                                {name}
                            </span>
                        </div>
                        <p className="line-clamp-2 text-md leading-snug text-muted-foreground">
                            {description}
                        </p>
                    </Link>
                );
            })}
        </div>
    );
};