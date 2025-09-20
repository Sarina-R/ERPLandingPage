'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useAppContext } from '@/app/contexts/AppContext'

interface OtherAppsProps {
  currentApp: string
}

const OtherApps: React.FC<OtherAppsProps> = ({ currentApp }) => {
  const { apps } = useAppContext()
  const currentIndex = apps.findIndex((app) => app.enName === currentApp)
  if (currentIndex === -1) return null

  let start = currentIndex - 3
  let end = currentIndex + 4

  if (start < 0) {
    end += -start
    start = 0
  }
  if (end > apps.length) {
    start -= end - apps.length
    end = apps.length
  }
  if (start < 0) start = 0

  const otherApps = apps
    .slice(start, end)
    .filter((app) => app.enName !== currentApp)
    .slice(0, 6)

  if (!otherApps.length) return null

  return (
    <section className='border-t'>
      <div className='px-10 md:px-18'>
        <h2 className='text-2xl font-bold text-center text-neutral-800 py-12 dark:text-neutral-200 border-x'>
          سایر برنامه‌ها
        </h2>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto'>
        {otherApps.map((app) => (
          <Link
            key={app.enName}
            href={`${app.enName}`}
            className='flex items-center gap-4 p-6 border'
          >
            <div className='flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-900'>
              <Image
                src={app.imageSrc || '/placeholder-image.jpg'}
                alt={app.name}
                width={40}
                height={40}
                className='object-contain'
              />
            </div>
            <div className='flex flex-col'>
              <h3 className='text-sm md:text-base font-semibold text-neutral-800 dark:text-neutral-200'>
                {app.name}
              </h3>
              <p className='text-xs md:text-sm text-neutral-600 dark:text-neutral-400'>
                {app.category}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default OtherApps
