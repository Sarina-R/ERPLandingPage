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
import CTASection from '@/components/dynamic-page/CTASection'

export default function AppPage() {
  const params = useParams()
  const enName = params?.enName as string
  const { getAppByEnName, loading, error } = useAppContext()

  // Show loading state
  if (loading) {
    return <LoadingSpinner />
  }

  // Show error state
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

  // Get the specific app data
  const app = getAppByEnName(enName)

  // Show 404 if app not found
  if (!app) {
    return <NotFound />
  }

  const { content } = app

  return (
    <main className='min-h-screen bg-background'>
      {/* Hero Section */}
      <HeroSection
        title={content.heroSection.title}
        description={content.heroSection.desc}
        ctaText={content.heroSection.ctaText}
        image={content.heroSection.image}
      />

      {/* Feature Showcase */}
      <FeatureShowcase features={content.featureShowcase} />

      {/* Interactive Elements */}
      {content.interactiveElements.length > 0 && (
        <InteractiveElements elements={content.interactiveElements} />
      )}

      {/* Image Gallery */}
      {content.imageGallery.length > 0 && (
        <ImageGallery images={content.imageGallery} />
      )}

      {/* Testimonials */}
      {content.testimonials.length > 0 && (
        <Testimonials testimonials={content.testimonials} />
      )}

      {/* CTA Section */}
      <CTASection
        title={content.cta.title}
        description={content.cta.desc}
        primaryButton={content.cta.primaryButton}
        secondaryButton={content.cta.secondaryButton}
      />
    </main>
  )
}
