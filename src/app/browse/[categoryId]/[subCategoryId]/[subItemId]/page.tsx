import React from "react";
import Link from "next/link";

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import {
    findSubItem,
    findTagColor,
    lowercaseFirstLetter
} from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";

import News from "./(sections)/news";
import Overview from "./(sections)/overview";
import Pricing from "./(sections)/pricing";
import Resoures from "./(sections)/resources";

export default function SubItemPage({
    params,
}: {
    params: { categoryId: string; subCategoryId: string; subItemId: string };
}) {
    const item = findSubItem(
        params.categoryId,
        params.subCategoryId,
        params.subItemId,
    );

    if (!item) {
        return <div>Item not found!!</div>
    }

    const triggerCount = 1 + (item.overview.pricing && item.overview.pricing.length > 1 ? 1 : 0) + (item.resources && Object.keys(item.resources).length > 1 ? 1 : 0);

    const showTabs = triggerCount > 1;

    return (
        <div className="flex flex-col flex-1">
            <div className="flex items-center gap-2 text-sm font-semibold text-black py-4">
                <Link
                    className="hover:underline"
                    href={`/browse/${params.categoryId}/${params.subCategoryId}`}
                >
                    {item.subCategoryName}
                </Link>
                <ChevronRightIcon className="w-4 h-4" />{" "}
                <span className="text-gray-900">
                    {item.name}
                </span>
            </div>
            <div className="flex flex-col space-y-4 mb-4">
                <div className="flex flex-col space-x-0 items-start md:flex-row md:space-x-4">
                    <div>
                        <item.icon size={64} />
                    </div>

                    <div className="flex flex-col max-w-3xl">
                        <div className="flex flex-col items-start">
                            <span className="font-bold text-2xl flex min-w-full">
                                {item.name}
                            </span>
                            {item.tags.length > 0 && (
                                <div className="flex flex-row space-x-2" style={{ minWidth: 0 }}>
                                    {item.tags.map((tag: string, idx: number) => {
                                        const color = findTagColor(tag);
                                        return (
                                            <div key={idx} className="mb-1">
                                                <span className={`text-xs font-medium rounded-full px-2 py-0.5 ${color ?? ""}`}>
                                                    {tag}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>

                        <span className="text-slate-600">
                            {item.overview.description}
                        </span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="mt-2 w-full flex items-start">
                        <Link
                            href={item?.url}
                            target="_blank"
                            className="bg-black text-white px-3 py-0.5 rounded-full flex flex-row space-x-1 items-center"
                        >
                            <span className="text-xs">
                                {new URL(item.url).hostname}
                            </span>
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="#fff"
                                    d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z"
                                />
                            </svg>
                        </Link>
                    </div>
                    <span className="text-xs mt-2 text-slate-600 w-full">
                        Last Updated: {item.lastUpdated}
                    </span>
                </div>
            </div>
            {showTabs && (
                <Tabs defaultValue="overview">
                    <TabsList className={`grid w-full grid-cols-3`}>
                        <TabsTrigger value="overview">
                            Overview
                        </TabsTrigger>
                        {item.overview.pricing && item.overview.pricing.length > 1 && (
                            <TabsTrigger value="pricing">
                                Pricing
                            </TabsTrigger>
                        )}
                        {item.resources && Object.keys(item.resources).length > 1 && (
                            <TabsTrigger value="resources">
                                Resources
                            </TabsTrigger>
                        )}
                        {item.resources.news && Object.keys(item.resources.news).length > 0 && (
                            <TabsTrigger value="news">
                                News
                            </TabsTrigger>
                        )}
                    </TabsList>
                    <TabsContent value="overview">
                        <Overview overview={item.overview} />
                    </TabsContent>
                    {item.overview.pricing && item.overview.pricing.length > 1 && (
                        <TabsContent value="pricing">
                            <Pricing pricing={item.overview.pricing ?? []} />
                        </TabsContent>
                    )}
                    {item.resources.news && Object.keys(item.resources.news).length > 0 && (
                        <TabsContent value="news">
                            <News news={item.resources.news} />
                        </TabsContent>
                    )}
                </Tabs>
            )}
            {!showTabs && (
                <Overview overview={item.overview} />
            )}
        </div>
    );
};