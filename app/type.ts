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
