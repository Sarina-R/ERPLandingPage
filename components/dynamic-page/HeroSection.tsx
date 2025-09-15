import { Button } from '../ui/button'

interface HeroSectionProps {
  title: string
  description: string
  ctaText: string
  image: string
}

export default function HeroSection({
  title,
  description,
  ctaText,
  image,
}: HeroSectionProps) {
  return (
    <section className='relative py-20 px-4 overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-8'>
            <h1 className='text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-br from-primary to-blue-600 bg-clip-text text-transparent'>
              {title}
            </h1>
            <p className='text-lg md:text-xl text-muted-foreground leading-relaxed'>
              {description}
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Button size='lg' className='text-lg px-8 py-6'>
                {ctaText}
              </Button>
            </div>
          </div>
          <div className='relative'>
            <div className='absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-3xl blur-3xl'></div>
            <img
              src={image}
              alt={title}
              className='relative w-full h-auto rounded-2xl shadow-2xl'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
