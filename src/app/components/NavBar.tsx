'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/illustration', label: '插画作品' },
  { href: '/books', label: '绘本故事' },
  { href: '/products', label: '周边及出版物' },
  { href: '/exhibitions', label: '活动及展览' },
  { href: '/about', label: '个人介绍' },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-[#dce7f1]/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-12 sm:h-14">
        <Link href="/illustration" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
          BOBULI SPACE
        </Link>
        <div className="flex items-center gap-0.5">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-2 sm:px-3 py-1.5 text-[11px] sm:text-xs rounded-full transition-all duration-200 whitespace-nowrap ${
                pathname === item.href
                  ? 'bg-gray-800/10 text-gray-800 font-medium'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-800/5'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
