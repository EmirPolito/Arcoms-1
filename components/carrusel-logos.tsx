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
            loading='lazy' decoding='async'
            className='w-full h-full object-contain block dark:hidden'
          />
          <img
            src='/icons/React_dark.svg'
            alt='React'
            loading='lazy' decoding='async'
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
          loading='lazy' decoding='async'
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
          loading='lazy' decoding='async'
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
          loading='lazy' decoding='async'
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
            loading='lazy' decoding='async'
            className='w-full h-full object-contain block dark:hidden'
          />
          <img
            src='/icons/Vercel_dark.svg'
            alt='Vercel'
            loading='lazy' decoding='async'
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
            loading='lazy' decoding='async'
            className='w-full h-full object-contain block dark:hidden'
          />
          <img
            src='/icons/GitHub_dark.svg'
            alt='GitHub'
            loading='lazy' decoding='async'
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
            loading='lazy' decoding='async'
            className='w-full h-full object-contain block dark:hidden'
          />
          <img
            src='/icons/OpenAI_dark.svg'
            alt='ChatGPT'
            loading='lazy' decoding='async'
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
      animationDelay={0.9}
      animationDuration={0.4}
      visibleCount={5}
    />
  );
}
