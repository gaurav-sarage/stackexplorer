import React from 'react';

import Link from 'next/link';

import {
  findSubCategory,
  findTagColor,
  uppercaseFirstLetter,
} from '@/lib/utils';
import {
  BackendItem,
  DatabaseItem,
  DataItem,
  DataStructure,
  FrontendItem,
  FullstackItem,
  HostingItem,
  MartketingItem,
  MobileItem,
  ToolingItem,
} from '@/types';

export default function SubCategoryPage({
  params,
}: {
  params: { categoryId: string; subCategoryId: string };
}) {
  const subCategory = findSubCategory(params.categoryId, params.subCategoryId);

  if (!subCategory) {
    return null;
  }

  return (
    <div className="flex flex-col flex-1 mt-6">
      <div className="flex flex-col mb-6">
        <span className="font-bold text-2xl">
          {uppercaseFirstLetter(subCategory.name) || 'All'}
        </span>
        {Array.isArray(subCategory.items) ? (
          <span className="text-slate-600">
            {subCategory.items.length} items
          </span>
        ) : (
          <span className="text-slate-600">
            {getTotalItems(subCategory.items)} items
          </span>
        )}
      </div>

      <ToolingList
        categoryId={params.categoryId}
        subCategoryId={params.subCategoryId}
        tooling={subCategory.items}
      />
    </div>
  );
}

const getTotalItems = (toolingItem: ToolingItem) => {
  let total = 0;
  for (let key in toolingItem) {
    if (Array.isArray(toolingItem[key])) {
      total += toolingItem[key].length;
    }
  }
  return total;
};

function ToolingList({
  tooling,
  categoryId,
  subCategoryId,
}: {
  tooling:
    | any[]
    | FrontendItem
    | BackendItem
    | FullstackItem
    | MobileItem
    | HostingItem
    | MartketingItem
    | DatabaseItem;
  categoryId: string;
  subCategoryId: string;
}) {
  if (!tooling || (Array.isArray(tooling) && tooling.length === 0)) {
    return <div>No data available for this category.</div>;
  }

  // Function to render a single item
  const renderItem = (item: any) => (
    <Link
      key={item.name}
      href={`/category/${categoryId}/${subCategoryId}/${item.slug}`}
      className="sm:p-4 rounded-lg md:border hover:border-black hover:duration-200"
    >
      <div className="flex flex-row space-x-4 items-start">
        <div>{item && <item.icon size={64} />}</div>
        <div className="flex flex-col overflow-hidden">
          <span className="font-bold">{item?.name}</span>
          {item.tags.length > 0 && (
            <div className="flex flex-row space-x-2 " style={{ minWidth: 0 }}>
              {item.tags.map((tag: string, idx: number) => {
                const color = findTagColor(tag);
                return (
                  <div key={idx} className="mb-1 ">
                    <span
                      className={`text-xs font-medium rounded-full px-2 py-0.5  ${color ?? ''}`}
                    >
                      {tag}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
          <span className="text-slate-600 line-clamp-2 text-sm ">
            {item?.overview.description}
          </span>
        </div>
      </div>
    </Link>
  );

  // Check if tooling is an array (for Auth) or an object (for Frontend)
  if (Array.isArray(tooling)) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 min-[1170px]:grid-cols-3 gap-8">
        {tooling.map(renderItem)}
      </div>
    );
  } else {
    // For Frontend, iterate over each category (Libraries, Frameworks, Styling)
    return (
      <div className="flex flex-col w-full">
        {Object.entries(tooling).map(([category, items]) => (
          <div key={category} className="flex flex-col">
            <h2 className="font-bold text-xl mb-4">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 min-[1170px]:grid-cols-3 gap-8 pb-10">
              {items.map(renderItem)}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
