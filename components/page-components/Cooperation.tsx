import React from 'react'
import { Card, CardContent } from '../ui/card'
import { CheckCircle, Zap } from 'lucide-react'

const Cooperation = () => {
  return (
    <section className='py-20 px-4 relative overflow-hidden'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold mb-4'>همکاری استراتژیک</h2>
          <p className='text-xl text-muted-foreground'>
            AVIS و ODOO - قدرت فناوری در خدمت کسب‌وکار شما
          </p>
        </div>

        <div className='relative'>
          <Card className='border-2 border-primary/20 bg-gradient-to-br from-background to-muted/30'>
            <CardContent className='p-12'>
              <div className='grid lg:grid-cols-2 gap-12 items-center'>
                <div>
                  <div className='flex items-center gap-4 mb-8'>
                    <div className='relative'>
                      <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center'>
                        <Zap className='w-8 h-8 text-primary animate-pulse' />
                      </div>
                      <div className='absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full animate-ping'></div>
                    </div>
                    <div>
                      <h3 className='text-2xl font-bold'>AVIS × ODOO</h3>
                      <p className='text-muted-foreground'>شراکت نوآورانه</p>
                    </div>
                  </div>

                  <div className='space-y-6'>
                    <div className='flex items-start gap-4'>
                      <div className='w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                        <CheckCircle className='w-4 h-4 text-primary' />
                      </div>
                      <div>
                        <h4 className='font-semibold mb-2'>پیاده‌سازی تخصصی</h4>
                        <p className='text-sm text-muted-foreground'>
                          تیم متخصص AVIS با سال‌ها تجربه در پیاده‌سازی Odoo
                        </p>
                      </div>
                    </div>

                    <div className='flex items-start gap-4'>
                      <div className='w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                        <CheckCircle className='w-4 h-4 text-primary' />
                      </div>
                      <div>
                        <h4 className='font-semibold mb-2'>پشتیبانی محلی</h4>
                        <p className='text-sm text-muted-foreground'>
                          خدمات پشتیبانی کامل به زبان فارسی و متناسب با نیازهای
                          ایرانی
                        </p>
                      </div>
                    </div>

                    <div className='flex items-start gap-4'>
                      <div className='w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                        <CheckCircle className='w-4 h-4 text-primary' />
                      </div>
                      <div>
                        <h4 className='font-semibold mb-2'>
                          سفارشی‌سازی پیشرفته
                        </h4>
                        <p className='text-sm text-muted-foreground'>
                          توسعه ماژول‌های اختصاصی متناسب با قوانین و نیازهای
                          کسب‌وکار شما
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='relative'>
                  {/* Animated Connection Diagram */}
                  <div className='relative w-full h-80'>
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                      <div className='w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center animate-pulse'>
                        <div className='w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center'>
                          <Zap className='w-6 h-6 text-primary' />
                        </div>
                      </div>
                    </div>

                    {/* AVIS Logo Area */}
                    <div className='absolute top-4 left-4 animate-float'>
                      <div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg'>
                        AVIS
                      </div>
                    </div>

                    {/* ODOO Logo Area */}
                    <div
                      className='absolute bottom-4 right-4 animate-float'
                      style={{ animationDelay: '1s' }}
                    >
                      <div className='w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg'>
                        ODOO
                      </div>
                    </div>

                    {/* Connecting Lines */}
                    <svg className='absolute inset-0 w-full h-full pointer-events-none'>
                      <path
                        d='M80 80 Q 160 160 240 240'
                        stroke='currentColor'
                        strokeWidth='2'
                        fill='none'
                        className='text-primary/40'
                        strokeDasharray='10,5'
                        style={{ animation: 'dashMove 3s linear infinite' }}
                      />
                      <path
                        d='M240 80 Q 160 160 80 240'
                        stroke='currentColor'
                        strokeWidth='2'
                        fill='none'
                        className='text-primary/40'
                        strokeDasharray='10,5'
                        style={{
                          animation: 'dashMove 3s linear infinite reverse',
                        }}
                      />
                    </svg>

                    {/* Floating Particles */}
                    <div
                      className='absolute top-1/4 left-1/3 w-2 h-2 bg-primary/60 rounded-full animate-ping'
                      style={{ animationDelay: '0.5s' }}
                    ></div>
                    <div
                      className='absolute bottom-1/4 right-1/3 w-3 h-3 bg-primary/40 rounded-full animate-ping'
                      style={{ animationDelay: '1.5s' }}
                    ></div>
                    <div
                      className='absolute top-3/4 left-1/4 w-1 h-1 bg-primary/80 rounded-full animate-ping'
                      style={{ animationDelay: '2.5s' }}
                    ></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Background Animated Elements */}
      <div className='absolute top-10 left-10 w-32 h-32 border border-primary/10 rounded-full animate-spin-slow'></div>
      <div
        className='absolute bottom-10 right-10 w-24 h-24 border border-primary/20 rounded-full animate-spin-slow'
        style={{ animationDirection: 'reverse' }}
      ></div>
    </section>
  )
}

export default Cooperation
