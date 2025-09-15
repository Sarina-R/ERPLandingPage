import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import HeroSection from '@/components/dynamic-page/HeroSection'
// import FeatureShowcase from '@/components/landing/FeatureShowcase'
// import InteractiveElements from '@/components/landing/InteractiveElements'
// import ImageGallery from '@/components/landing/ImageGallery'
// import Testimonials from '@/components/landing/Testimonials'
// import CTASection from '@/components/landing/CTASection'

interface LandingPageData {
  name: string
  category: string
  enName: string
  content: {
    heroSection: {
      title: string
      desc: string
      ctaText: string
      image: string
    }
    featureShowcase: Array<{
      title: string
      desc: string
      image: string
    }>
    interactiveElements: Array<{
      type: string
      title: string
      desc: string
    }>
    imageGallery: string[]
    testimonials: Array<{
      name: string
      position: string
      company: string
      content: string
      avatar: string
      companyLogo: string
    }>
    cta: {
      title: string
      desc: string
      primaryButton: string
      secondaryButton: string
    }
  }
}

async function getLandingPageData(
  name: string
): Promise<LandingPageData | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const response = await fetch(`${baseUrl}/api/landing-pages/${name}`, {
      cache: 'no-store', // Disable caching for dynamic content
    })

    if (!response.ok) {
      return null
    }

    const result = await response.json()
    return result.success ? result.data : null
  } catch (error) {
    console.error('Error fetching landing page data:', error)
    return null
  }
}

interface PageProps {
  params: {
    name: string
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const data = await getLandingPageData(params.name)

  if (!data) {
    return {
      title: 'صفحه یافت نشد',
      description: 'صفحه مورد نظر یافت نشد.',
    }
  }

  return {
    title: `${data.name} | نرم‌افزار مدیریت کسب و کار`,
    description: data.content.heroSection.desc,
    openGraph: {
      title: data.content.heroSection.title,
      description: data.content.heroSection.desc,
      images: [data.content.heroSection.image],
    },
  }
}

export default async function LandingPage({ params }: PageProps) {
  const data = await getLandingPageData(params.name)

  if (!data) {
    notFound()
  }

  const { content } = data

  return (
    <main className='min-h-screen'>
      {/* Hero Section */}
      <HeroSection
        title={content.heroSection.title}
        description={content.heroSection.desc}
        ctaText={content.heroSection.ctaText}
        image={content.heroSection.image}
      />

      {/* Feature Showcase */}
      {/* <FeatureShowcase features={content.featureShowcase} /> */}

      {/* Interactive Elements */}
      {/* <InteractiveElements elements={content.interactiveElements} /> */}

      {/* Image Gallery */}
      {/* <ImageGallery images={content.imageGallery} /> */}

      {/* Testimonials */}
      {/* <Testimonials testimonials={content.testimonials} /> */}

      {/* Call to Action */}
      {/* <CTASection
        title={content.cta.title}
        description={content.cta.desc}
        primaryButtonText={content.cta.primaryButton}
        secondaryButtonText={content.cta.secondaryButton}
      /> */}
    </main>
  )
}

// Generate static params for known pages (optional, for better performance)
export async function generateStaticParams() {
  // This would typically fetch from your data source
  const pages = [
    'knowledge',
    'accounting',
    'social-marketing',
    'CRM',
    'email-marketing',
    'sign',
    'studio',
    'subscription',
    'rental',
    'point-of-sale',
    'discuss',
    'documents',
    'project',
    'timesheets',
    'field-service',
    'planning',
    'helpdesk',
    'website',
    'purchase',
    'inventory',
    'manufacturing',
    'sales',
    'hr',
    'dashboard',
  ]

  return pages.map((name) => ({
    name: name,
  }))
}
