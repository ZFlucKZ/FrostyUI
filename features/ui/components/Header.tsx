'use client';

import { Dispatch, SetStateAction, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/features/shadcn/components/ui/button';
import { IconBrandGithub, IconMoonStars, IconSun } from '@tabler/icons-react';
import { themeProps } from '@/app/layout';

const navigation = [
  { name: 'Docs', href: '/docs' },
  { name: 'Components', href: '/docs/components' },
  // { name: 'Github', href: 'https://github.com/ZFlucKZ/FrostyUI' },
];

interface HeaderProps {
  theme: themeProps['theme'];
  setTheme: Dispatch<SetStateAction<themeProps['theme']>>;
}

const Header = ({ theme, setTheme }: HeaderProps) => {
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <>
      <header className='sticky top-0 z-50 backdrop-blur-md bg-background/60 transition-colors border-b-[1px] border-foreground/5'>
        <div className='container h-14 flex justify-between items-center w-full m-auto'>
          <div className='flex'>
            <Link
              href={'http://localhost:3001'}
              className='mr-6 font-bold flex items-center'
            >
              Frosty UI
            </Link>
            <nav className='flex items-center'>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className=' mr-6 text-foreground/60 hover:text-foreground/80 duration-300 font-semibold'
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <Link
              href='https://github.com/ZFlucKZ/FrostyUI'
              target='_blank'
            >
              <Button
                variant={'ghost'}
                className='transition-colors'
                size={'icon'}
              >
                <IconBrandGithub size={24} />
              </Button>
            </Link>
            <Button
              variant={'ghost'}
              onClick={toggleTheme}
              className='transition-colors'
              size={'icon'}
            >
              {theme === 'light' ? <IconSun size={24} /> : <IconMoonStars size={24} />}
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
