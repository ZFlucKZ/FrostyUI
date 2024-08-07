import { Button } from '@/features/shadcn/components/ui/button';
import { IconBrandGithub } from '@tabler/icons-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='relative isolate pt-14 transition-colors bg-background/60'>
      <div
        className='absolute inset-x-0 -top-24 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
        aria-hidden='true'
      >
        <div
          className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className='py-8 lg:pb-40'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            <h1 className='text-4xl font-bold tracking-tight  sm:text-6xl'>Lorem ipsum dolor sit amet consectetur.</h1>
            <p className='mt-6 text-lg leading-8'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore similique, aliquam rem nesciunt eum nihil
              voluptatum. Hic, soluta atque, eum, quia beatae ratione repellat non magnam consectetur voluptatem
              assumenda cupiditate.
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <Link href='/docs/getting-started/introduction'>
                <Button
                  variant={'default'}
                  className='transition-colors'
                >
                  Get started
                </Button>
              </Link>
              <Link
                href='https://github.com/ZFlucKZ/FrostyUI'
                target='_blank'
              >
                <Button
                  variant={'outline'}
                  className='transition-colors'
                >
                  <IconBrandGithub
                    size={20}
                    className='mr-1'
                  />
                  Github
                </Button>
              </Link>
            </div>
          </div>
          {/* <img
            src='https://tailwindui.com/img/component-images/dark-project-app-screenshot.png'
            alt='App screenshot'
            width={2432}
            height={1442}
            className='mt-16 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:mt-24'
          /> */}
          <div className='w-[1216px] h-[721px] mt-16 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:mt-24'></div>
        </div>
      </div>
    </div>
  );
}
