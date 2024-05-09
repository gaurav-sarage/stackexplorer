import React from 'react';

import Link from 'next/link';

import { montserrat } from '@/app/fonts';
import { IconGeneratorAIIcon, ProjectPlannerAIIcon } from '@/components/icons';

export default function Ads() {
  return (
    <div className="flex flex-col space-y-2">
      {/* <div className="bg-slate-50 p-4 rounded-lg w-full flex flex-col">
        <span className="font-bold text-lg">
          Top Stacks for Building Projects and SaaS
        </span>
        <span className="text-slate-600">Curated and Regularly Updated</span>
      </div> */}

      <Link
        href="https://projectplannerai.com/"
        target="_blank"
        className="border p-3 gap-2 flex items-center bg-slate-50 rounded-lg w-full justify-between hover:shadow-lg duration-200"
      >
        <div className="flex flex-col space-y-1">
          <div className="flex flex-row space-x-2 items-center">
            <ProjectPlannerAIIcon size={24} />
            <span className="flex flex-col font-bold leading-4">
              <span className={`${montserrat.className}`}>Project</span>
              <span className={`${montserrat.className}`}>
                Planner<span className="text-[#3b82f6]">AI</span>
              </span>
            </span>
          </div>
          <span className="text-slate-600 text-xs">
            Manage your side projects in one place
          </span>
        </div>
      </Link>

      <Link
        href="https://www.icongeneratorai.com/"
        target="_blank"
        className="border p-3 gap-2 flex items-center bg-slate-50 rounded-lg w-full justify-between hover:shadow-lg duration-200"
      >
        <div className="flex flex-col space-y-1">
          <div className="flex flex-row space-x-2 item-center">
            <IconGeneratorAIIcon size={24} />
            <span className={`${montserrat.className} font-bold`}>
              IconGeneratorAI
            </span>
          </div>
          <span className="text-slate-600 text-xs">
            Generate icons with a click of a button
          </span>
        </div>
      </Link>
    </div>
  );
}
