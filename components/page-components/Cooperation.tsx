import React from 'react'
import { CheckCircle } from 'lucide-react'

const Cooperation = () => {
  return (
    <section className='py-20 relative overflow-hidden'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center'>
          <div className='border-y border-border'>
            <div className='text-center mx-6 md:mx-12'>
              <h2 className='relative text-3xl md:text-4xl font-bold border-x border-border py-6 md:py-8 px-3 md:px-4'>
                همکاری استراتژیک
                <p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto pt-4 md:pt-6'>
                  AVIS و ODOO - قدرت فناوری در خدمت کسب‌وکار شما
                </p>
                <span className='absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-primary rounded-full' />
              </h2>
            </div>
          </div>
        </div>

        <div className='relative'>
          <div className='bg-gradient-to-br from-background to-muted/30'>
            <div className='p-12'>
              <div className='grid lg:grid-cols-2 gap-12 items-center'>
                <div>
                  <div className='flex items-center gap-4 mb-8'>
                    <div className='relative'>
                      <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center'></div>
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
                  {/* Mathematical Network Topology Visualization */}
                  <div className='relative w-full h-80 bg-card/50 rounded-xl border border-border/50 backdrop-blur-sm overflow-hidden'>
                    {/* Neural Network Grid Background */}
                    <svg className='absolute inset-0 w-full h-full opacity-10'>
                      <defs>
                        <pattern
                          id='neuralGrid'
                          width='30'
                          height='30'
                          patternUnits='userSpaceOnUse'
                        >
                          <circle
                            cx='15'
                            cy='15'
                            r='1'
                            fill='currentColor'
                            className='text-primary'
                          />
                          <path
                            d='M0 15 L30 15 M15 0 L15 30'
                            stroke='currentColor'
                            strokeWidth='0.5'
                            className='text-primary'
                            opacity='0.3'
                          />
                        </pattern>
                      </defs>
                      <rect
                        width='100%'
                        height='100%'
                        fill='url(#neuralGrid)'
                      />
                    </svg>

                    {/* Mathematical Function Visualization */}
                    <div className='absolute inset-4'>
                      {/* AVIS Node Cluster */}
                      <div className='absolute top-8 left-8'>
                        <div className='relative'>
                          {/* Main AVIS Node */}
                          <div className='w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-600/20 border-2 border-blue-500/30 rounded-full flex items-center justify-center backdrop-blur-sm'>
                            <span className='text-sm font-bold text-primary'>
                              AVIS
                            </span>
                          </div>

                          {/* Satellite nodes representing AVIS capabilities */}
                          <div className='absolute -top-2 -right-2 w-6 h-6 bg-blue-500/30 rounded-full border border-blue-500/50 animate-pulse'></div>
                          <div
                            className='absolute -bottom-2 -left-2 w-4 h-4 bg-purple-500/30 rounded-full border border-purple-500/50 animate-pulse'
                            style={{ animationDelay: '0.5s' }}
                          ></div>
                          <div
                            className='absolute top-1/2 -left-4 w-3 h-3 bg-blue-400/30 rounded-full border border-blue-400/50 animate-pulse'
                            style={{ animationDelay: '1s' }}
                          ></div>

                          {/* Mathematical label */}
                          <div className='absolute -bottom-8 left-1/2 transform -translate-x-1/2'>
                            <span className='text-xs font-mono text-muted-foreground'>
                              f(A)
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* ODOO Node Cluster */}
                      <div className='absolute bottom-8 right-8'>
                        <div className='relative'>
                          {/* Main ODOO Node */}
                          <div className='w-20 h-20 bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-2 border-purple-600/30 rounded-full flex items-center justify-center backdrop-blur-sm'>
                            <span className='text-sm font-bold text-primary'>
                              ODOO
                            </span>
                          </div>

                          {/* Satellite nodes representing ODOO modules */}
                          <div className='absolute -top-2 -left-2 w-5 h-5 bg-purple-600/30 rounded-full border border-purple-600/50 animate-pulse'></div>
                          <div
                            className='absolute -bottom-2 -right-2 w-4 h-4 bg-pink-500/30 rounded-full border border-pink-500/50 animate-pulse'
                            style={{ animationDelay: '0.7s' }}
                          ></div>
                          <div
                            className='absolute top-1/2 -right-4 w-3 h-3 bg-purple-400/30 rounded-full border border-purple-400/50 animate-pulse'
                            style={{ animationDelay: '1.3s' }}
                          ></div>

                          {/* Mathematical label */}
                          <div className='absolute -top-8 left-1/2 transform -translate-x-1/2'>
                            <span className='text-xs font-mono text-muted-foreground'>
                              g(O)
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Central Integration Hub - Tensor Product */}
                      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <div className='relative'>
                          {/* Main integration node */}
                          <div className='w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/30 border-2 border-primary/40 rounded-full flex items-center justify-center backdrop-blur-sm animate-pulse'>
                            <span className='text-lg font-bold text-primary'>
                              ⊗
                            </span>
                          </div>

                          {/* Tensor product visualization */}
                          <div className='absolute inset-0 rounded-full border-2 border-primary/20 animate-spin-slow'></div>
                          <div
                            className='absolute inset-2 rounded-full border border-primary/30 animate-spin-slow'
                            style={{ animationDirection: 'reverse' }}
                          ></div>

                          {/* Mathematical label */}
                          <div className='absolute -bottom-10 left-1/2 transform -translate-x-1/2'>
                            <span className='text-xs font-mono text-muted-foreground whitespace-nowrap'>
                              f(A) ⊗ g(O)
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Complex Mathematical Connections */}
                      <svg className='absolute inset-0 w-full h-full'>
                        {/* Bezier curves representing data flow */}
                        <path
                          d='M90 60 Q140 100 160 140'
                          stroke='currentColor'
                          strokeWidth='2'
                          fill='none'
                          className='text-primary/40'
                          strokeDasharray='8,4'
                        >
                          <animate
                            attributeName='stroke-dashoffset'
                            values='0;12'
                            dur='3s'
                            repeatCount='indefinite'
                          />
                        </path>

                        <path
                          d='M240 180 Q280 140 310 100'
                          stroke='currentColor'
                          strokeWidth='2'
                          fill='none'
                          className='text-primary/40'
                          strokeDasharray='8,4'
                        >
                          <animate
                            attributeName='stroke-dashoffset'
                            values='0;12'
                            dur='3s'
                            repeatCount='indefinite'
                          />
                        </path>

                        {/* Additional neural connections */}
                        <path
                          d='M70 80 Q120 120 170 160'
                          stroke='currentColor'
                          strokeWidth='1'
                          fill='none'
                          className='text-primary/25'
                          strokeDasharray='4,2'
                        >
                          <animate
                            attributeName='stroke-dashoffset'
                            values='0;6'
                            dur='2s'
                            repeatCount='indefinite'
                          />
                        </path>

                        <path
                          d='M230 160 Q270 120 320 80'
                          stroke='currentColor'
                          strokeWidth='1'
                          fill='none'
                          className='text-primary/25'
                          strokeDasharray='4,2'
                        >
                          <animate
                            attributeName='stroke-dashoffset'
                            values='0;6'
                            dur='2s'
                            repeatCount='indefinite'
                          />
                        </path>

                        {/* Gradient field visualization */}
                        <defs>
                          <radialGradient
                            id='fieldGradient'
                            cx='50%'
                            cy='50%'
                            r='50%'
                          >
                            <stop
                              offset='0%'
                              stopColor='currentColor'
                              stopOpacity='0.1'
                              className='text-primary'
                            />
                            <stop
                              offset='100%'
                              stopColor='currentColor'
                              stopOpacity='0'
                              className='text-primary'
                            />
                          </radialGradient>
                        </defs>
                        <ellipse
                          cx='200'
                          cy='160'
                          rx='120'
                          ry='80'
                          fill='url(#fieldGradient)'
                        />
                      </svg>

                      {/* Information Theory Particles */}
                      <div
                        className='absolute top-1/4 left-1/4 w-2 h-2 bg-primary/60 rounded-full animate-ping'
                        style={{ animationDelay: '0.2s' }}
                      ></div>
                      <div
                        className='absolute top-3/4 right-1/4 w-1 h-1 bg-primary/80 rounded-full animate-ping'
                        style={{ animationDelay: '0.8s' }}
                      ></div>
                      <div
                        className='absolute bottom-1/3 left-2/3 w-1.5 h-1.5 bg-primary/70 rounded-full animate-ping'
                        style={{ animationDelay: '1.4s' }}
                      ></div>
                      <div
                        className='absolute top-2/3 left-1/3 w-1 h-1 bg-primary/90 rounded-full animate-ping'
                        style={{ animationDelay: '2s' }}
                      ></div>

                      {/* Complex Mathematical Equation */}
                      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2'>
                        <div className='bg-background/80 backdrop-blur-sm px-3 py-1 rounded-md border border-border/50'>
                          <span className='text-xs font-mono text-muted-foreground'>
                            ∫(AVIS ⊗ ODOO)dx = Σ∞
                          </span>
                        </div>
                      </div>

                      {/* Information entropy indicator */}
                      <div className='absolute top-4 right-4'>
                        <div className='bg-background/80 backdrop-blur-sm px-2 py-1 rounded-md border border-border/50'>
                          <span className='text-xs font-mono text-muted-foreground'>
                            H(X,Y)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Background Mathematical Elements */}
      <div className='absolute top-10 left-10 w-32 h-32 border border-primary/10 rounded-full animate-spin-slow'></div>
      <div
        className='absolute bottom-10 right-10 w-24 h-24 border border-primary/20 rounded-full animate-spin-slow'
        style={{ animationDirection: 'reverse' }}
      ></div>

      {/* Additional mathematical symbols floating */}
      <div
        className='absolute top-1/4 right-1/4 text-primary/5 text-4xl font-bold animate-pulse'
        style={{ animationDelay: '1s' }}
      >
        ∇
      </div>
      <div
        className='absolute bottom-1/4 left-1/4 text-primary/5 text-3xl font-bold animate-pulse'
        style={{ animationDelay: '2s' }}
      >
        ∂
      </div>

      <style jsx>{`
        @keyframes animate-spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: animate-spin-slow 20s linear infinite;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default Cooperation
