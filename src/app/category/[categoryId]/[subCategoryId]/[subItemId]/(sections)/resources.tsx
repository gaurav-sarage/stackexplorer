'use client';

import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import axios from 'axios';

export default function Resources({ resources }: { resources: any }) {
  const [ogDataArray, setOgDataArray] = useState<any[]>([]);

  if (!resources) {
    return null;
  }

  return (
    <div className="border md:border-none p-8 flex flex-col space-y-6">
      {resources.articles && resources.articles.length > 0 && (
        <div className="w-full">
          <h2 className="font-bold mb-4 flex">Relevant Articles</h2>
          <div className="flex flex-row space-x-2 overflow-x-auto min-[648px]:grid  min-[648px]:grid-cols-3 min-[648px]:gap-4">
            {resources.articles.map((resource: any, idx: any) => {
              return (
                <div key={idx} className="flex flex-col">
                  <span className="overflow-hidden line-clamp-1 font-medium mt-2">
                    {resource.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {/* {resources.courses && resources.courses.length > 0 && (
        <div className="w-full">
          <span className="font-bold mb-4 flex">Related Courses</span>
          <div className="flex flex-row space-x-2 overflow-x-auto min-[648px]:grid  min-[648px]:grid-cols-3 min-[648px]:gap-4">
            {resources.courses.map((resource: any, idx: number) => (
              <Link
                key={idx}
                target="_blank"
                href={`${resource.link}`}
                className="flex flex-col space-y-2"
              >
                {ogDataArray[idx] &&
                  ogDataArray[idx].ogImage &&
                  ogDataArray[idx].ogImage.length > 0 && (
                    <div className="flex flex-col space-y-2">
                      <Image
                        src={ogDataArray[idx].ogImage[0].url} // Accessing the OG image URL from the OG data array
                        alt={ogDataArray[idx].ogTitle || resource.title} // Using the OG title as alt text, with a fallback to the resource title
                        className="w-full rounded-lg h-[170px] min-[648px]:h-[270px]"
                        width={1200}
                        height={630}
                      />
                      <div className="flex flex-row justify-between items-center">
                        <span className="line-clamp-1">
                          {ogDataArray[idx].ogTitle}
                        </span>
                        <span className="bg-black rounded-full  text-white px-2">
                          {resource.price}
                        </span>
                      </div>
                    </div>
                  )}
              </Link>
            ))}
          </div>
        </div>
      )} */}
      {/* {resources.videos && resources.videos.length > 1 && (
        <div className="w-full">
          <span className="font-bold mb-4 flex">Related Videos</span>
          <div className="flex flex-col gap-8 md:flex-row md:space-x-2 overflow-x-auto min-[648px]:grid  min-[648px]:grid-cols-3 min-[648px]:gap-4">
            {resources.videos.map((resource: any, idx: any) => {
              return (
                <div key={idx} className="flex flex-col">
                  <iframe
                    width={560}
                    height={315}
                    src={`https://www.youtube-nocookie.com/embed/${resource.youtubeId}`}
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={resource.title || 'Youtube video'}
                    className="w-[280px] min-[648px]:aspect-[16/9] h-full min-[648px]:w-full p-0 rounded-lg"
                  />
                  <span className="overflow-hidden line-clamp-1 font-medium mt-2">
                    {resource.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )} */}
    </div>
  );
}
