import React from 'react'
import { Button } from '@/components/ui/button'

interface InteractiveElement {
  type: string
  title: string
  desc: string
}

interface InteractiveElementsProps {
  elements: InteractiveElement[]
}

export default function InteractiveElements({
  elements,
}: InteractiveElementsProps) {
  const handleElementClick = (element: InteractiveElement) => {
    // Handle different interactive element types
    console.log(`Opening ${element.type}:`, element.title)
  }

  return (
    <section className='py-20 px-4'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            ابزارهای تعاملی
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            ابزارهای قدرتمند را امتحان کنید و قابلیت‌های سیستم را کشف کنید
          </p>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {elements.map((element, index) => (
            <div
              key={index}
              className='bg-gradient-to-br from-primary/5 to-blue-600/5 rounded-2xl p-8 border border-primary/10 hover:border-primary/20 transition-all duration-300 group cursor-pointer'
              onClick={() => handleElementClick(element)}
            >
              <div className='text-center space-y-4'>
                <div className='w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                  <div className='w-8 h-8 bg-primary rounded-full'></div>
                </div>
                <h3 className='text-xl font-semibold'>{element.title}</h3>
                <p className='text-muted-foreground'>{element.desc}</p>
                <Button variant='outline' className='mt-4'>
                  امتحان کنید
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
