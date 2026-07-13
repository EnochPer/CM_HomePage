'use client';

import { usePathname } from 'next/navigation';
import NavBar from './NavBar';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isEntry = pathname === '/';

  return (
    <>
      {!isEntry && <NavBar />}
      {children}
    </>
  );
}
