'use client';

import { NAV_BARS } from '@/common/constants/navbar.constant';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '../shadcn/navigation-menu';

export default function Navbar() {
  return (
    <NavigationMenu className="flex space-x-4">
      <NavigationMenuList className="space-x-5">
        {NAV_BARS.map((item) => (
          <NavigationMenuItem key={item.name}>
            <Link href={item.link} legacyBehavior passHref>
              <NavigationMenuLink className="font-semibold tracking-wide relative transition hover:text-primary">
                {item.name}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
