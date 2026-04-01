import { LogoStepper } from '@/components/ui/24-logos-ui';
import React from 'react';

export default function CarruselLogos() {
  const logos = [
    {
      icon: (
        <>
          <img
            src='/icons/React_light.svg'
            alt='React'
            className='w-full h-full object-contain block dark:hidden'
          />
          <img
            src='/icons/React_dark.svg'
            alt='React'
            className='w-full h-full object-contain hidden dark:block'
          />
        </>
      ),
      label: 'React',
    },
    {
      icon: (
        <img
          src='/icons/next.svg'
          alt='Next'
          className='w-full h-full object-contain'
        />
      ),
      label: 'Next.js',
    },
    {
      icon: (
        <img
          src='/icons/typescript.svg'
          alt='TypeScript'
          className='w-full h-full object-contain'
        />
      ),
      label: 'TypeScript',
    },
    {
      icon: (
        <img
          src='/icons/tailwindcss.svg'
          alt='Tailwindcss'
          className='w-full h-full object-contain'
        />
      ),
      label: 'Tailwindcss',
    },
    {
      icon: (
        <>
          <img
            src='/icons/Vercel_light.svg'
            alt='Vercel'
            className='w-full h-full object-contain block dark:hidden'
          />
          <img
            src='/icons/Vercel_dark.svg'
            alt='Vercel'
            className='w-full h-full object-contain hidden dark:block'
          />
        </>
      ),
      label: 'Vercel',
    },
    {
      icon: (
        <>
          <img
            src='/icons/GitHub_light.svg'
            alt='GitHub'
            className='w-full h-full object-contain block dark:hidden'
          />
          <img
            src='/icons/GitHub_dark.svg'
            alt='GitHub'
            className='w-full h-full object-contain hidden dark:block'
          />
        </>
      ),
      label: 'GitHub',
    },
    {
      icon: (
        <>
          <img
            src='/icons/OpenAI_light.svg'
            alt='ChatGPT'
            className='w-full h-full object-contain block dark:hidden'
          />
          <img
            src='/icons/OpenAI_dark.svg'
            alt='ChatGPT'
            className='w-full h-full object-contain hidden dark:block'
          />
        </>
      ),
      label: 'ChatGPT',
    },    

  ];

  return (
    <LogoStepper
      logos={logos}
      direction='vloop'
      animationDelay={1.2}
      animationDuration={0.6}
      visibleCount={5}
    />
  );
}
