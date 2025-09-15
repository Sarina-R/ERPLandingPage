import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

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

// GET /api/landing-pages/[name]
export async function GET(
  request: NextRequest,
  { params }: { params: { name: string } }
) {
  try {
    const { name } = params

    // Read the JSON data file
    const dataFilePath = path.join(process.cwd(), 'data', 'landing-pages.json')
    const jsonData = fs.readFileSync(dataFilePath, 'utf8')
    const landingPages: LandingPageData[] = JSON.parse(jsonData)

    // Find the landing page by enName
    const landingPage = landingPages.find(
      (page) => page.enName.toLowerCase() === name.toLowerCase()
    )

    if (!landingPage) {
      return NextResponse.json(
        {
          error: 'Landing page not found',
          availablePages: landingPages.map((p) => p.enName),
        },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: landingPage,
    })
  } catch (error) {
    console.error('Error fetching landing page data:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// GET /api/landing-pages (get all pages)
export async function GET_ALL() {
  try {
    const dataFilePath = path.join(process.cwd(), 'data', 'landing-pages.json')
    const jsonData = fs.readFileSync(dataFilePath, 'utf8')
    const landingPages: LandingPageData[] = JSON.parse(jsonData)

    return NextResponse.json({
      success: true,
      data: landingPages.map((page) => ({
        name: page.name,
        category: page.category,
        enName: page.enName,
      })),
    })
  } catch (error) {
    console.error('Error fetching landing pages list:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
