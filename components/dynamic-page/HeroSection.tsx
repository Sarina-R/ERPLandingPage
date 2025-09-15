// components/HeroSection.tsx
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface HeroSectionProps {
  title: string
  description: string
  ctaText: string
}

export default function HeroSection({
  title,
  description,
  ctaText,
}: HeroSectionProps) {
  const [firstWord, ...restWords] = title.split(' ')
  const restOfTitle = restWords.join(' ')

  return (
    <section className='mt-16 text-center border-y relative'>
      <span className='absolute -top-[10px] -left-[10px] w-5 h-5 flex items-center justify-center'>
        <span className='absolute w-px h-full bg-black/30 dark:bg-white/30'></span>
        <span className='absolute h-px w-full bg-black/30 dark:bg-white/30'></span>
      </span>
      <span className='absolute -bottom-[10px] -right-[10px] w-5 h-5 flex items-center justify-center'>
        <span className='absolute w-px h-full bg-black/30 dark:bg-white/30'></span>
        <span className='absolute h-px w-full bg-black/30 dark:bg-white/30'></span>
      </span>
      {/* <span className='absolute -top-[10px] -right-[10px] w-5 h-5 flex items-center justify-center'>
        <span className='absolute w-px h-full bg-black/30 dark:bg-white/30'></span>
        <span className='absolute h-px w-full bg-black/30 dark:bg-white/30'></span>
      </span>
      <span className='absolute -bottom-[10px] -left-[10px] w-5 h-5 flex items-center justify-center'>
        <span className='absolute w-px h-full bg-black/30 dark:bg-white/30'></span>
        <span className='absolute h-px w-full bg-black/30 dark:bg-white/30'></span>
      </span> */}

      <div className='px-4 sm:px-6 lg:px-8 max-w-4xl py-20 space-y-8 mx-auto'>
        <h1 className='text-5xl md:text-6xl font-bold tracking-tight'>
          <span className='relative'>
            {firstWord}{' '}
            <span className='absolute left-0 bottom-0 w-full h-2 bg-cyan-400/70 -z-10'></span>
          </span>
          {restOfTitle}
        </h1>

        <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
          {description}
        </p>

        <div className='flex justify-center gap-4 flex-wrap'>
          <Button className='bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-6 py-6'>
            {ctaText}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='outline' className='text-lg px-6 py-6'>
                Meet an advisor
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                Micro business (&lt; 5 employees)
              </DropdownMenuItem>
              <DropdownMenuItem>
                Small Business (6-50 employees)
              </DropdownMenuItem>
              <DropdownMenuItem>
                Mid-size company (51-250 employees)
              </DropdownMenuItem>
              <DropdownMenuItem>
                Large company (&gt;250 employees)
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <p className='text-sm text-muted-foreground'>
          Free, forever, with unlimited users.
        </p>
      </div>
    </section>
  )
}
