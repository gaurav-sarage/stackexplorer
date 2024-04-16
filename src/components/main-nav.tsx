import React from "react";
import Image from "next/image";
import Link from "next/link";

import { LogoIcon } from "./icons/logo";

export default function MainNav() {
    return (
        <Link
            href="/"
            className="flex space-x-1.5 focus:outline-none focus-visible:ring-2 items-center"
        >
            <LogoIcon size={30} />
            <span className="font-bold leading-3">
                Stack<span className="text-[#3b82f6]">
                    Explorer
                </span>
            </span>
        </Link>
    );
};