'use client';

import React from 'react';

import Feedback from '@/components/feedback';
import MainNav from '@/components/main-nav';
import SearchDialog from '@/components/search-dialog';
import Submission from '@/components/submission';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { ITEMS } from '@/consts';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const preventHover = (event: any) => {
    const e = event as Event;
    if (window.innerWidth < 1024) console.log(window.innerWidth);
    e.preventDefault();
  };
  return (
    <header className="w-full z-10">
      <SearchDialog open={open} setOpen={setOpen} />
      <nav className="flex h-14 items-center text-md font-medium container">
        <div className="flex w-full items-center">
          <MainNav />
          <div className="hidden items-center md:ml-4 md:flex md:gap-6">
            <div>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      onPointerEnter={preventHover}
                      onPointerLeave={preventHover}
                      onPointerMove={preventHover}
                    >
                      Explore
                    </NavigationMenuTrigger>
                    <NavigationMenuContent
                      onPointerEnter={preventHover}
                      onPointerLeave={preventHover}
                    >
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {ITEMS.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            icon={component.icon}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="flex flex-row items-center space-x-8">
              {/* <Link href="/blog" className="text-sm">
                Blog
              </Link> */}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-4">
          <button onClick={() => setOpen(true)}>
            <Search
              className="stroke-neutral-500 hover:stroke-neutral-700 duration-200"
              size={20}
            />
          </button>

          <div className="flex-row items-center space-x-2 hidden md:flex ">
            <Feedback />
            <Submission />
          </div>
        </div>
      </nav>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & {
    icon?: any;
    title: string;
  }
>(({ className, title, icon, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          {icon}
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
