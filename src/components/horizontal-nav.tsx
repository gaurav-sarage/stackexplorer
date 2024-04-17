'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn, findCategory } from '@/lib/utils';

export default function HorizontalNav({ categoryId }: { categoryId: string }) {
  const pathname = usePathname();
  const category = findCategory(categoryId);
  const NavItem = ({ item }: { item: any }) => {
    const { name, path } = item;

    return (
      <Link
        key={name}
        href={`${category?.path}/${path}`}
        className={cn(
          'flex items-center rounded-md h-9 px-5 text-sm  border text-slate-500 font-semibold text-nowrap',
          {
            'text-slate-800 bg-slate-200': pathname.includes(path),
          },
        )}
      >
        <span>{name}</span>
      </Link>
    );
  };

  return (
    <div className="flex flex-col space-y-6 mt-6 items-center">
      <div className="flex flex-col space-y-2 items-center text-center">
        <h1 className="font-bold text-3xl">{category?.name}</h1>
        <p className="text-slate-500">{category?.description}</p>
      </div>

      <div className="flex flex-row space-x-2 w-full overflow-x-auto h-14">
        <Link
          href={`${category?.path}`}
          className={cn(
            'flex items-center rounded-md h-9 px-5 text-sm  border text-slate-500 font-semibold',
            {
              'text-slate-800 bg-slate-200': pathname === category?.path,
            },
          )}
        >
          <span>All</span>
        </Link>

        {category?.subCategories.map((item: any) => (
          <NavItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}
