'use client'

import { useState } from 'react'

interface ImageGalleryProps {
  images: string[]
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className='py-20 px-4 bg-muted/20'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>گالری تصاویر</h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            نگاهی به رابط کاربری و امکانات سیستم بیاندازید
          </p>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {images.map((image, index) => (
            <div
              key={index}
              className='relative group cursor-pointer overflow-hidden rounded-2xl'
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className='w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300'
              />
              <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center'>
                <div className='w-12 h-12 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7'
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for selected image */}
        {selectedImage && (
          <div
            className='fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4'
            onClick={() => setSelectedImage(null)}
          >
            <div className='max-w-4xl max-h-full'>
              <img
                src={selectedImage}
                alt='Selected'
                className='w-full h-auto rounded-lg'
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
