'use client'

import { useParams } from 'next/navigation'
import { useAppContext } from '../contexts/AppContext'
import LoadingSpinner from '@/components/LoadingSpinner'
import NotFound from '@/components/NotFound'
import HeroSection from '@/components/dynamic-page/HeroSection'
import FeatureShowcase from '@/components/dynamic-page/FeatureShowcase'
import InteractiveElements from '@/components/dynamic-page/InteractiveElements'
import ImageGallery from '@/components/dynamic-page/ImageGallery'
import Testimonials from '@/components/dynamic-page/Testimonials'
import Image from 'next/image'
import CTASection from '@/components/page-components/CTASection'
import OtherApps from '@/components/dynamic-page/OtherApps'

export default function AppPage() {
  const params = useParams()
  const enName = params?.enName as string
  const { getAppByEnName, loading, error } = useAppContext()

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-red-600 mb-4'>
            خطا در بارگذاری
          </h1>
          <p className='text-gray-600'>{error}</p>
        </div>
      </div>
    )
  }

  const app = getAppByEnName(enName)

  if (!app) {
    return <NotFound />
  }

  const { content } = app

  {
    console.log('content.img', content.img)
  }
  return (
    <div className='bg-background max-w-6xl m-auto px-4 md:px-6'>
      <main className='min-h-screen border-x'>
        {/* Hero Section */}
        <HeroSection
          title={content.heroSection.title}
          description={content.heroSection.desc}
          ctaText={content.heroSection.ctaText}
        />
        <div className='p-18 relative'>
          <span className='absolute top-18 left-0 h-px w-full bg-black/10 dark:bg-white/10' />
          <span className='absolute bottom-18 left-0 h-px w-full bg-black/10 dark:bg-white/10' />
          <span className='absolute left-18 top-0 h-full w-px bg-black/10 dark:bg-white/10' />
          <span className='absolute right-18 top-0 h-full w-px bg-black/10 dark:bg-white/10' />

          <div className=''>
            <Image
              src={content.img}
              alt='screenshot'
              width={500}
              height={500}
              className='h-full w-full '
            />
          </div>
        </div>
        {content.interactiveElements.length > 0 && (
          <InteractiveElements elements={content.interactiveElements} />
        )}
        <div className='p-18 relative'>
          <span className='absolute top-18 left-0 h-px w-full bg-black/10 dark:bg-white/10' />
          <span className='absolute bottom-18 left-0 h-px w-full bg-black/10 dark:bg-white/10' />
          <span className='absolute left-18 top-0 h-full w-px bg-black/10 dark:bg-white/10' />
          <span className='absolute right-18 top-0 h-full w-px bg-black/10 dark:bg-white/10' />

          <FeatureShowcase features={content.featureShowcase} />
        </div>
        <OtherApps currentApp={app.enName} />

        {content.imageGallery.length > 0 && (
          <ImageGallery images={content.imageGallery} />
        )}
        {content.testimonials.length > 0 && (
          <Testimonials testimonials={content.testimonials} />
        )}
        <CTASection />
      </main>
    </div>
  )
}
