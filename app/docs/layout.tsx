'use client';

import SidebarMenu from '@/features/ui/components/SidebarMenu';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, type ReactNode } from 'react';

interface DocsLayoutProps {
  children: ReactNode;
}

const DocsLayout = ({ children }: DocsLayoutProps) => {
  const pathname = usePathname();

  return (
    <div className='container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 bg-background/60 transition-colors'>
      <SidebarMenu />
      <main className=''>{children}</main>
    </div>
  );
};

export default DocsLayout;
