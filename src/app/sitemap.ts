import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/posts`,
            lastModified: new Date(),
        },
    ];
};