import React from 'react'
import { Button } from '../ui/button'

const CTASection = () => {
  return (
    <section className='py-20 px-4 '>
      <div className='max-w-4xl mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-6'>آماده شروع هستید؟</h2>
        <p className='text-xl mb-8 opacity-90'>
          همین امروز دمو رایگان دریافت کنید و ببینید Odoo چگونه کسب‌وکار شما را
          متحول می‌کند.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Button size='lg' variant='secondary' className='text-lg px-8'>
            درخواست دمو رایگان
          </Button>
          <Button
            size='lg'
            variant='outline'
            className='text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent'
          >
            تماس با مشاور
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CTASection
