import { TAGS } from '@/consts';
import { categoryData as categoryData6 } from '@/data/ai-ml-development';
import { categoryData as categoryData3 } from '@/data/cross-platform-development';
import { categoryData as categoryData4 } from '@/data/desktop-development';
import { categoryData as categoryData5 } from '@/data/game-development';
import { categoryData as categoryData2 } from '@/data/mobile-development';
import { categoryData as categoryData1 } from '@/data/web-development';
import {
  Category,
  DataItem,
  DataStructure,
  FrontendItem,
  Item,
  SubCategory,
} from '@/types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { getCategories } from './categories';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function lowercaseFirstLetter(str: string): string {
  if (!str) return str;
  return str.charAt(0).toLowerCase() + str.slice(1);
}

export function uppercaseFirstLetter(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const findTagColor = (tagName: string): string | undefined => {
  const tag = TAGS.find((t) => t.tag === tagName);
  return tag ? tag.color : undefined;
};

function extractSlugFromPath(path: string) {
  const parts = path.split('/');
  return parts.pop();
}

export function findCategory(categoryId: string) {
  const categories = getCategories();
  return categories.find((category) => {
    const categorySlug = extractSlugFromPath(category.path);
    return categorySlug === categoryId;
  });
}

export function findSubCategory(categoryId: string, subCategoryId: string) {
  const category = findCategory(categoryId);
  if (category?.subCategories) {
    const subCategory = category.subCategories.find(
      (subCat: any) => subCat.path === subCategoryId,
    );
    return subCategory;
  }
}

export function findSubItem(
  categoryId: string,
  subCategoryPath: string,
  subItemId: string,
) {
  const subCategory = findSubCategory(categoryId, subCategoryPath);
  if (subCategory) {
    const items = subCategory.items;
    const subCategoryName = subCategory.name;
    if (Array.isArray(items)) {
      // Handle 'Auth' and similar categories
      const foundItem = items.find((item: any) => item.slug === subItemId);
      if (foundItem) {
        return { ...foundItem, subCategoryName };
      }
    } else {
      // Handle 'Frontend' and similar categories
      const subItems = items as any; // Cast to 'any' to bypass TypeScript's strict typing
      for (let subCategory in subItems) {
        const foundSubItem = subItems[subCategory].find(
          (item: any) => item.slug === subItemId,
        );
        if (foundSubItem) {
          return { ...foundSubItem, subCategoryName, subCategory };
        }
      }
    }
  }
}

export function findRootPathBySlug(data: any, slug: string) {
  for (let subCategory of data.subCategories) {
    if (Array.isArray(subCategory.items)) {
      for (let item of subCategory.items) {
        if (item.slug === slug) {
          return subCategory.path;
        }
      }
    } else {
      for (let key in subCategory.items) {
        let itemsArray = subCategory.items[key];
        for (let item of itemsArray) {
          if (item.slug === slug) {
            return subCategory.path;
          }
        }
      }
    }
  }
  return null;
}

export const flattenData = (): Item[] => {
  const categories = [
    categoryData1,
    categoryData2,
    categoryData3,
    categoryData4,
    categoryData5,
    categoryData6,
  ];

  let flattened: Item[] = [];
  let seen = new Set(); // Temporary storage for tracking unique fullPaths

  categories.forEach((category) => {
    const categoryPath = category.path; // Capture the category path

    category.subCategories.forEach((subCategory) => {
      const subCategoryPath = subCategory.path; // Capture the subcategory path

      if (Array.isArray(subCategory.items)) {
        // Directly an array of items
        subCategory.items.forEach((item: any) => {
          const fullPath = `${categoryPath}/${subCategoryPath}/${item.slug}`;
          if (!seen.has(item.name)) {
            flattened.push({
              ...item,
              fullPath, // Add the fullPath to each item
            });
            seen.add(item.name); // Mark this fullPath as seen
          }
        });
      } else {
        // Object containing arrays of items
        Object.values(subCategory.items).forEach((itemsArray) => {
          itemsArray.forEach((item: any) => {
            const fullPath = `${categoryPath}/${subCategoryPath}/${item.slug}`;
            if (!seen.has(item.name)) {
              flattened.push({
                ...item,
                fullPath, // Add the fullPath to each item
              });
              seen.add(item.name); // Mark this fullPath as seen
            }
          });
        });
      }
    });
  });

  return flattened;
};

export const searchData = (): any[] => {
  const categories = [
    categoryData1,
    categoryData2,
    categoryData3,
    categoryData4,
    categoryData5,
    categoryData6,
  ];

  let categoryItems: any = []; // Array to store the result
  let seen = new Set(); // Temporary storage for tracking unique item names

  categories.forEach((category) => {
    let flattenedItems: any = []; // Temporary array to store flattened items for this category

    const categoryPath = category.path; // Capture the category path

    category.subCategories.forEach((subCategory) => {
      const subCategoryPath = subCategory.path; // Capture the subcategory path

      if (Array.isArray(subCategory.items)) {
        // Directly an array of items
        subCategory.items.forEach((item: any) => {
          const fullPath = `${categoryPath}/${subCategoryPath}/${item.slug}`;
          if (!seen.has(item.name)) {
            flattenedItems.push({
              ...item,
              fullPath, // Add the fullPath to each item
            });
            seen.add(item.name); // Mark this item name as seen
          }
        });
      } else {
        // Object containing arrays of items
        Object.values(subCategory.items).forEach((itemsArray) => {
          itemsArray.forEach((item: any) => {
            const fullPath = `${categoryPath}/${subCategoryPath}/${item.slug}`;
            if (!seen.has(item.name)) {
              flattenedItems.push({
                ...item,
                fullPath, // Add the fullPath to each item
              });
              seen.add(item.name); // Mark this item name as seen
            }
          });
        });
      }
    });

    if (flattenedItems.length > 0) {
      // If there are items for this category, add them to the result
      categoryItems.push({
        categoryName: category.name, // Assuming each category object has a name property
        items: flattenedItems,
      });
    }
  });

  return categoryItems;
};
