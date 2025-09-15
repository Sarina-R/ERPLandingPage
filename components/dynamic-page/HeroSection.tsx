'use client'

import { Button } from '@/components/ui/button'
import { ArrowLeft, Play } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

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
    <section className='relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50'>
      {/* Background decoration */}
      <div className='absolute inset-0 bg-grid-pattern opacity-5' />
      <div className='absolute top-0 right-0 -translate-y-12 translate-x-12'>
        <div className='w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl' />
      </div>
      <div className='absolute bottom-0 left-0 translate-y-12 -translate-x-12'>
        <div className='w-96 h-96 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl' />
      </div>

      <div className='relative container mx-auto px-4 py-20 lg:py-32'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='lg:pr-8'
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight'
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed'
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className='flex flex-col sm:flex-row gap-4'
            >
              <Button
                size='lg'
                className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'
              >
                {ctaText}
                <ArrowLeft className='ml-2 h-5 w-5 rotate-180' />
              </Button>

              <Button
                variant='outline'
                size='lg'
                className='px-8 py-3 text-lg font-semibold rounded-xl border-2 border-gray-300 hover:border-gray-400 transition-all duration-300'
              >
                <Play className='mr-2 h-5 w-5' />
                مشاهده دمو
              </Button>
            </motion.div>

            {/* Stats or features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className='flex items-center gap-8 mt-12 pt-8 border-t border-gray-200'
            >
              <div className='text-center'>
                <div className='text-2xl font-bold text-gray-900'>+15M</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
