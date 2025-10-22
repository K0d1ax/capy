"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/lib/nav';

export default function NavSidebar() {
  const pathname = usePathname();
  return (
    <nav aria-label="Primary" className="h-full w-[var(--sidebar-width)] border-r bg-white">
      <div className="p-4 text-xl font-bold">LandingStudio</div>
      <ul className="px-2 space-y-1">
        {NAV_ITEMS.map((item) => {
          const active = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white ${active ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}
                aria-current={active ? 'page' : undefined}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
