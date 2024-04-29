'use client';

import React, { useState } from 'react';

import { useRouter } from 'next/navigation';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { searchData } from '@/lib/utils';

export default function SearchDialog({
  open,
  setOpen,
}: {
  open: any;
  setOpen: any;
}) {
  const router = useRouter();
  const data = searchData();
  const [searchTerm, setSearchTerm] = useState('');

  function handleClick(component: any) {
    router.push(component.fullPath);
    setOpen(false);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  const filteredData = data
    .map((category) => ({
      ...category,
      items: category.items.filter((item: any) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.items.length > 0);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput
        placeholder="Type a command or search..."
        value={searchTerm}
        onChangeCapture={handleInputChange}
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandList>
          {filteredData.map((category, idx) => {
            const categoryName = category.categoryName;
            const items = category.items;
            return (
              <CommandGroup key={idx} heading={categoryName}>
                {items.map((item: any, idx: any) => {
                  return (
                    <CommandItem key={idx}>
                      <button
                        onClick={() => handleClick(item)}
                        className="w-full justify-start flex flex-row items-center space-x-3"
                      >
                        <item.icon size={24} />
                        <span>{item.name}</span>
                      </button>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            );
          })}
        </CommandList>
      </CommandList>
    </CommandDialog>
  );
}
