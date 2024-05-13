"use client";

import React from "react";

export default function News({ news }: { news: any }) {
    return (
        <div>
            <iframe
                src="https://nextjs.org/blog"
                title="NextJS Blog"
                width="100%"
                height="500px"
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    );
};