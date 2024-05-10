"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import MainNav from "@/components/main-nav";
import Submission from "@/components/submission";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ITEMS } from "@/consts";
import { cn } from "@/lib/utils";
import { DataItem } from "@/types";
import Fuse from "fuse.js";

export default function Header() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState<DataItem[]>([]);
    const [fuse, setFuse] = useState<Fuse<DataItem> | null>(null);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    useEffect(() => {
        if (searchQuery && fuse) {
            const results = fuse.search(searchQuery).map((result) => result.item);
            setSearchResults(results.slice(0, 5));
            setDropdownVisible(results.length > 0);
        } else {
            setSearchResults([]);
            setDropdownVisible(false);
        }
    }, [searchQuery, fuse]);

    const handleInputChange = (e: any) => {
        setSearchQuery(e.target.value);
    };

    const handleClick = (value: any) => {
        setDropdownVisible(false);
        router.push(`/${value.slug}`);
    };

    const clearSearch = () => {
        setSearchQuery("");
        setSearchResults([]);
    };

    return (
        <header className="w-full border-b-0.5 border">
            <nav className="flex h-14 items-center text-md font-medium container">
                <div className="flex w-full items-center justify-between">
                    <div className="relative flex items-center gap-3">
                        <MainNav />
                        <div className="hidden items-center md:ml-4 md:flex md:gap-4">
                            <div className="ml-4 hidden items-center gap-4 md:flex">
                                <NavigationMenu>
                                    <NavigationMenuList>
                                        <NavigationMenuItem>
                                            <NavigationMenuTrigger>
                                                Browse
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                                    {ITEMS.map((component) => (
                                                        <ListItem
                                                            key={component.title}
                                                            title={component.title}
                                                            icon={component.icon}
                                                            href={component.href}
                                                        >
                                                            {component.description}
                                                        </ListItem>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>
                            </div>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="flex items-center justify-end gap-2">
                            <div className="flex flex-col w-full">
                                <div className="relative">
                                    <div className="w-full rounded-lg border h-10 px-2 bg-slate-50 flex flex-row items-center space-x-2">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="text-slate-500"
                                        >
                                            <path
                                                fill="currentColor"
                                                stroke="currentColor"
                                                strokeWidth=".5"
                                                d="m20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8a7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42M5 11a6 6 0 1 1 6 6a6 6 0 0 1-6-6"
                                            />
                                        </svg>
                                        <input
                                            className="w-full outline-none bg-slate-50 text-slate-600"
                                            autoFocus
                                            placeholder="Search..."
                                            value={searchQuery}
                                            onChange={handleInputChange}
                                        />
                                        {searchQuery !== "" && (
                                            <button onClick={clearSearch}>
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="text-neutral-400"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m2.71 11.29a1 1 0 0 1 0 1.42a1 1 0 0 1-1.42 0L12 13.41l-1.29 1.3a1 1 0 0 1-1.42 0a1 1 0 0 1 0-1.42l1.3-1.29l-1.3-1.29a1 1 0 0 1 1.42-1.42l1.29 1.3l1.29-1.3a1 1 0 0 1 1.42 1.42L13.41 12Z"
                                                    />
                                                </svg>
                                            </button>
                                        )}
                                    </div>
                                    {dropdownVisible && (searchResults.length > 0 ? (
                                        <div className="absolute w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto z-30">
                                            {searchResults.map((item) => (
                                                <button
                                                    key={item.name}
                                                    onClick={() => handleClick(item)}
                                                    className="cursor-pointer p-4 hover:bg-gray-100 flex flex-row items-center space-x-2 w-full"
                                                >
                                                    <item.icon size={24} />
                                                    <span>
                                                        {item.name}
                                                    </span>
                                                </button>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="absolute w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
                                            <p className="p-4 text-slate-600">
                                                No items found!
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <span className="hidden md:flex md:space-x-2">
                                <Submission />
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & {
    icon?: any;
    title: string;
  }
>(({ className, title, icon, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          {icon}
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";