"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Resources({
    resources
}: {
    resources: any
}) {
    const [ogDataArray, setOgDataArray] = useState<any[]>([]);

    if (!resources) {
        return null;
    }

    return (
        <div className="border md:border-none p-8 flex flex-col space-y-6">
            {resources.articles && resources.articles.length > 0 && (
                <div className="w-full">
                    <h2 className="font-bold mb-4 flex">
                        Relevant Articles
                    </h2>
                    <div className="flex flex-row space-x-2 overflow-x-auto min-[648px]:grid min-[648px]:grid-cols-3 min-[648px]:gap-4">
                        {resources.articles.map((resource: any, idx: any) => {
                            return (
                                <div key={idx} className="flex flex-col">
                                    <span className="overflow-hidden line-clamp-1 font-medium mt-2">
                                        {resource.title}
                                    </span>
                                </div>
                            );
                        })};
                    </div>
                </div>
            )};
        </div>
    );
};