import { Button } from '@/components/ui/button'

interface CTASectionProps {
  title: string
  description: string
  primaryButton: string
  secondaryButton: string
}

export default function CTASection({
  title,
  description,
  primaryButton,
  secondaryButton,
}: CTASectionProps) {
  return (
    <section className='py-20 px-4 bg-gradient-to-br from-primary/10 via-blue-600/5 to-purple-600/10'>
      <div className='max-w-4xl mx-auto text-center'>
        <div className='space-y-8'>
          <h2 className='text-3xl md:text-5xl font-bold leading-tight'>
            {title}
          </h2>
          <p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed'>
            {description}
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button size='lg' className='text-lg px-8 py-6'>
              {primaryButton}
            </Button>
            <Button size='lg' variant='outline' className='text-lg px-8 py-6'>
              {secondaryButton}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
