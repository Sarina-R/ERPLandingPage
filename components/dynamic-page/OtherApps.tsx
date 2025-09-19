'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AppContent, useAppContext } from '@/app/contexts/AppContext'

interface AppData {
  name: string
  category: string
  enName: string
  content: AppContent
}

interface OtherAppsProps {
  currentApp: AppData
}

const OtherApps: React.FC<OtherAppsProps> = ({ currentApp }) => {
  const { apps, getAppByEnName } = useAppContext()

  const otherApps = apps.filter((app) => app.enName !== currentApp.enName)

  if (!otherApps.length) {
    return null
  }

  return (
    <section className='py-12 px-4 bg-gray-50'>
      <h2 className='text-2xl font-bold text-center text-gray-800 mb-8'>
        سایر برنامه‌ها
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
        {otherApps.map((app) => (
          <Link
            key={app.enName}
            href={`/apps/${app.enName}`}
            className='block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
          >
            <div className='w-full h-32 relative mb-4'>
              <Image
                src={app.content.img || '/placeholder-image.jpg'}
                alt={`${app.name} screenshot`}
                fill
                className='object-cover rounded-md'
                sizes='(max-width: 768px) 100vw, 33vw'
              />
            </div>
            <h3 className='text-lg font-semibold text-gray-800 mb-2'>
              {app.name}
            </h3>
            <p className='text-sm text-gray-600'>دسته‌بندی: {app.category}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default OtherApps
