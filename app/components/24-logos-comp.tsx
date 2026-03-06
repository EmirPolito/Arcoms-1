import { LogoStepper } from '@/app/components/ui/24-logos-ui';
import React from 'react';

export default function ComponentLogos24() {
  const logos = [
    {
      icon: (
        <img
          src='/icons/React_dark.svg'
          alt='React'
          className='w-full h-full object-contain'
        />
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
        <img
          src='/icons/vercel_dark.svg'
          alt='Vercel'
          className='w-full h-full object-contain'
        />
      ),
      label: 'Vercel',
    },
    {
      icon: (
        <img
          src='/icons/GitHub_dark.svg'
          alt='GitHub'
          className='w-full h-full object-contain'
        />
      ),
      label: 'GitHub',
    },
    {
      icon: (
        <img
          src='/icons/OpenAI_dark.svg'
          alt='ChatGPT'
          className='w-full h-full object-contain'
        />
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
