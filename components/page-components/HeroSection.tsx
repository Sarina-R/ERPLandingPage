import React from 'react'
import { Button } from '../ui/button'

const HeroSection = () => {
  return (
    <section className='relative py-20 px-4 text-center'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-5xl md:text-6xl font-bold mb-6 text-balance'>
          سیستم مدیریت منابع سازمانی
          <span className='block text-muted-foreground mt-2'>با قدرت Odoo</span>
        </h1>
        <p className='text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty'>
          راه‌حل یکپارچه برای مدیریت تمام فرآیندهای کسب‌وکار شما. از حسابداری تا
          فروش، همه چیز در یک پلتفرم.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Button size='lg' className='text-lg px-8'>
            درخواست دمو
          </Button>
          <Button
            variant='outline'
            size='lg'
            className='text-lg px-8 bg-transparent'
          >
            مشاهده قیمت‌ها
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
