import React from 'react';

import Link from 'next/link';

import {
  findCategory,
  findRootPathBySlug,
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

export default function CategoryPage({
  params,
}: {
  params: { categoryId: string };
}) {
  const category = findCategory(params.categoryId);
  const tooling = flattenData(category?.subCategories as any);

  return (
    <ToolingList
      tooling={tooling}
      category={category}
      categoryId={params.categoryId}
    />
  );
}

const flattenData = (subCategories: any[]): DataItem[] => {
  const flattened: DataItem[] = [];
  // Iterate over each subcategory
  subCategories?.forEach((subCategory) => {
    // If items is directly an array (e.g., 'Auth', 'Storage')
    if (Array.isArray(subCategory.items)) {
      flattened.push(...subCategory.items);
    } else if (typeof subCategory.items === 'object') {
      // If items is an object with keys (e.g., 'Frontend', 'Backend')
      Object.keys(subCategory.items).forEach((key) => {
        flattened.push(...subCategory.items[key]);
      });
    }
  });
  // Optional: Remove duplicates based on a specific attribute, if necessary
  // For example, if each item has a unique 'name' or 'path'
  return flattened;
};

function ToolingList({
  category,
  categoryId,
  tooling,
}: {
  category: any;
  categoryId: string;
  tooling:
    | any[]
    | FrontendItem
    | BackendItem
    | FullstackItem
    | MobileItem
    | HostingItem
    | MartketingItem
    | DatabaseItem;
}) {
  if (!tooling || (Array.isArray(tooling) && tooling.length === 0)) {
    return <div>No data available for this category.</div>;
  }

  // Function to render a single item
  const renderItem = (item: any) => {
    const subCategoryId = findRootPathBySlug(category, item.slug);

    return (
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
  };

  // Check if tooling is an array (for Auth) or an object (for Frontend)
  if (Array.isArray(tooling)) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 min-[1170px]:grid-cols-3 gap-8 ">
        {tooling.map(renderItem)}
      </div>
    );
  } else {
    // For Frontend, iterate over each category (Libraries, Frameworks, Styling)

    return (
      <div className="flex flex-col w-full ">
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
