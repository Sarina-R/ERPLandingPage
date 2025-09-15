import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Button } from '@/components/ui/button'
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Heart,
  BookOpen,
  Zap,
} from 'lucide-react'

interface InteractiveElement {
  type: string
  title: string
  desc: string
  image: string
}

interface InteractiveElementsProps {
  elements: InteractiveElement[]
}

export default function InteractiveElements({
  elements,
}: InteractiveElementsProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const clearAutoSlide = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  const nextSlide = useCallback(() => {
    setImageLoaded(false)
    setActiveIndex((prev) => (prev + 1) % elements.length)
  }, [elements.length])

  const prevSlide = useCallback(() => {
    setImageLoaded(false)
    setActiveIndex((prev) => (prev - 1 + elements.length) % elements.length)
  }, [elements.length])

  useEffect(() => {
    if (!isHovered && elements.length > 0) {
      intervalRef.current = setInterval(nextSlide, 4000)
    }
    return clearAutoSlide
  }, [isHovered, elements.length, nextSlide, clearAutoSlide])

  const activeElement = elements[activeIndex] || {}

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'تکنولوژی':
        return <Zap className='w-4 h-4' />
      case 'علم':
        return <Star className='w-4 h-4' />
      case 'فرهنگ':
        return <Heart className='w-4 h-4' />
      case 'demo':
      case 'demo0':
        return <BookOpen className='w-4 h-4' />
      default:
        return <BookOpen className='w-4 h-4' />
    }
  }

  return (
    <section className='border-y'>
      <div
        className='relative overflow-hidden'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className='min-h-[600px] md:flex'>
          <div className='flex-1 p-8 lg:p-16 flex flex-col justify-center bg-background'>
            <div className='max-w-2xl mx-auto w-full'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10'>
                  {getTypeIcon(activeElement.type)}
                  <span className='text-sm font-medium text-foreground/70'>
                    {activeElement.type || 'نامشخص'}
                  </span>
                </div>
                <div className='flex gap-2'>
                  {elements.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setImageLoaded(false)
                        setActiveIndex(index)
                        clearAutoSlide()
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeIndex
                          ? 'bg-foreground w-8'
                          : 'bg-foreground/20 hover:bg-foreground/40'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <h2 className='text-4xl lg:text-5xl font-bold mb-6 leading-tight text-foreground'>
                {activeElement.title || 'بدون عنوان'}
              </h2>

              <p className='text-lg lg:text-xl leading-relaxed text-foreground/80 mb-8 text-right'>
                {activeElement.desc || 'بدون توضیحات'}
              </p>

              <div className='flex items-center justify-between'>
                <div className='flex gap-3'>
                  <Button
                    variant='outline'
                    size='lg'
                    onClick={prevSlide}
                    className='border-foreground/20 hover:bg-foreground/5'
                    disabled={elements.length <= 1}
                  >
                    <ChevronRight className='w-5 h-5' />
                    قبلی
                  </Button>
                  <Button
                    variant='outline'
                    size='lg'
                    onClick={nextSlide}
                    className='border-foreground/20 hover:bg-foreground/5'
                    disabled={elements.length <= 1}
                  >
                    بعدی
                    <ChevronLeft className='w-5 h-5' />
                  </Button>
                </div>

                <div className='text-sm text-foreground/50'>
                  {activeIndex + 1} از {elements.length}
                </div>
              </div>
            </div>
          </div>

          <div className='flex-1 relative overflow-hidden bg-foreground/5'>
            {!imageLoaded && (
              <div className='absolute inset-0 bg-gradient-to-br from-foreground/10 to-foreground/5 flex items-center justify-center'>
                <div className='animate-pulse'>
                  <div className='w-16 h-16 border-4 border-foreground/20 border-t-foreground/60 rounded-full animate-spin'></div>
                </div>
              </div>
            )}

            {activeElement.image && (
              <img
                key={`${activeElement.image}-${activeIndex}`}
                src={activeElement.image}
                alt={activeElement.title || 'تصویر اسلاید'}
                className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${
                  imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                } hover:scale-105`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageLoaded(true)} // در صورت خطا، لودر مخفی می‌شود
                loading='lazy'
              />
            )}

            <div className='absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent' />

            <div className='absolute bottom-8 right-8 bg-background/90 backdrop-blur-sm p-6 rounded-2xl border border-foreground/10 max-w-xs'>
              <div className='flex items-center gap-3 mb-3'>
                {getTypeIcon(activeElement.type)}
                <span className='font-medium text-foreground'>
                  {activeElement.type || 'نامشخص'}
                </span>
              </div>
              <h3 className='font-bold text-lg mb-2 text-foreground'>
                {activeElement.title || 'بدون عنوان'}
              </h3>
              <div className='w-12 h-1 bg-foreground/30 rounded-full'>
                <div
                  className='h-full bg-foreground rounded-full transition-all'
                  style={{
                    width: isHovered ? '0%' : '100%',
                    transition: isHovered
                      ? 'width 0.3s ease'
                      : 'width 4s linear',
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='absolute inset-0 pointer-events-none opacity-5'>
          <div
            className='absolute inset-0'
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 2px, transparent 2px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>
      </div>
    </section>
  )
}
