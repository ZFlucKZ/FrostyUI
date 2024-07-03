import { verticalMenu, VerticalMenuTypes } from '@/data/verticalMenu';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import Link from 'next/link';

const renderSection = (section: string) => {
  return <div className='mb-2 font-bold'>{section}</div>;
};

const renderMenuItem = (title: string, url: string) => {
  return (
    <Link
      href={url}
      className='text-foreground/60 hover:underline underline-offset-2'
    >
      {title}
    </Link>
  );
};

const SidebarMenu = () => {
  return (
    <ScrollArea.Root className='h-[calc(100vh-3.5rem)] overflow-hidden py-6 lg:py-8'>
      <ScrollArea.Viewport className='w-full h-full'>
        {verticalMenu.map((menu: VerticalMenuTypes) => (
          <div
            key={menu.section}
            className='mb-6'
          >
            {renderSection(menu.section)}
            <ul className='space-y-2'>
              {menu.children.map((item) => (
                <li key={item.title}>{renderMenuItem(item.title, item.url)}</li>
              ))}
            </ul>
          </div>
        ))}
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className='flex select-none touch-none p-0.5 bg-transparent transition-colors duration-[160ms] ease-out data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5'
        orientation='vertical'
      >
        <ScrollArea.Thumb className='flex-1 bg-foreground/10 rounded-[10px]' />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
};

export default SidebarMenu;
