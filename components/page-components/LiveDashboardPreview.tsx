'use client'

import React, { useState, useEffect } from 'react'
import {
  Users,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  AlertCircle,
  FileText,
} from 'lucide-react'

interface Metrics {
  revenue: number
  orders: number
  customers: number
  growth: number
}

interface Activity {
  type: 'success' | 'info' | 'warning'
  message: string
  time: string
}

const LiveDashboardPreview: React.FC = () => {
  const [metrics, setMetrics] = useState<Metrics>({
    revenue: 1250000,
    orders: 847,
    customers: 1203,
    growth: 12.5,
  })

  const [isLive, setIsLive] = useState<boolean>(false)

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined
    if (isLive) {
      interval = setInterval(() => {
        setMetrics((prev) => ({
          revenue: prev.revenue + Math.floor(Math.random() * 50000),
          orders: prev.orders + Math.floor(Math.random() * 5),
          customers: prev.customers + Math.floor(Math.random() * 3),
          growth: Number(
            (prev.growth + (Math.random() - 0.5) * 0.5).toFixed(1)
          ),
        }))
      }, 2000)
    }
    return () => clearInterval(interval)
  }, [isLive])

  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('fa-IR').format(num)
  }

  return (
    <section className='min-h-screen'>
      {/* Header Section */}
      <div className='text-center'>
        <div className='border-y border-border'>
          <div className='text-center mx-6 md:mx-12'>
            <h2 className='relative text-3xl md:text-4xl font-bold border-x border-border py-6 md:py-8 px-3 md:px-4'>
              داشبورد زنده ERP{' '}
              <p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto pt-4 md:pt-6'>
                نمونه‌ای از داشبورد واقعی که هم‌اکنون در کسب‌وکارها استفاده
                می‌شود
              </p>
            </h2>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto'>
        {/* Control Panel */}
        <div className='border-b'>
          <div className='grid grid-cols-3 h-20'>
            <div className='border-r flex items-center justify-center'>
              <h3 className='text-2xl font-bold'>داشبورد مدیریتی</h3>
            </div>
            <div className='border-r flex items-center justify-center'>
              <button
                onClick={() => setIsLive(!isLive)}
                className={`px-8 py-3 font-bold border transition-all duration-300 ${
                  isLive
                    ? 'bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 rounded-lg'
                    : 'bg-white text-black hover:bg-gray-100 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 rounded-lg'
                }`}
              >
                <div className='flex items-center gap-3'>
                  <div
                    className={`w-3 h-3 border rounded-full ${
                      isLive
                        ? 'bg-white dark:bg-black animate-pulse-slow'
                        : 'bg-black dark:bg-white'
                    }`}
                  />
                  {isLive ? 'توقف نمایش زنده' : 'شروع نمایش زنده'}
                </div>
              </button>
            </div>
            <div className='flex items-center justify-center'>
              <div className='flex items-center gap-3'>
                <div
                  className={`w-4 h-4 border rounded-full ${
                    isLive
                      ? 'bg-black dark:bg-white animate-pulse-slow'
                      : 'bg-black/20 dark:bg-white/10'
                  }`}
                />
                <span className='font-bold'>{isLive ? 'زنده' : 'آفلاین'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className='grid grid-cols-4 grid-rows-4 h-[600px] border-b'>
          {/* Revenue Metric - Top Left */}
          <div className='col-span-2 row-span-2 border-l border-b p-8 relative bg-light-card dark:bg-dark-card'>
            <div className='absolute inset-0 p-4 opacity-30'>
              <svg className='w-full h-full' viewBox='0 0 200 120' fill='none'>
                {/* Revenue trend line */}
                <path
                  d='M20 100 L40 85 L60 70 L80 60 L100 45 L120 35 L140 30 L160 25 L180 20'
                  stroke='#22c55e'
                  strokeWidth='1'
                  fill='none'
                />
                {/* Area under curve */}
                <path
                  d='M20 100 L40 85 L60 70 L80 60 L100 45 L120 35 L140 30 L160 25 L180 20 L180 100 Z'
                  fill='url(#revenueGradient)'
                  opacity='0.1'
                />
                {/* Grid lines */}
                <line
                  x1='20'
                  y1='100'
                  x2='180'
                  y2='100'
                  stroke='currentColor'
                  strokeWidth='0.5'
                  opacity='0.2'
                />
                <line
                  x1='20'
                  y1='75'
                  x2='180'
                  y2='75'
                  stroke='currentColor'
                  strokeWidth='0.5'
                  opacity='0.1'
                />
                <line
                  x1='20'
                  y1='50'
                  x2='180'
                  y2='50'
                  stroke='currentColor'
                  strokeWidth='0.5'
                  opacity='0.1'
                />
                <line
                  x1='20'
                  y1='25'
                  x2='180'
                  y2='25'
                  stroke='currentColor'
                  strokeWidth='0.5'
                  opacity='0.1'
                />
                {/* Data points */}
                {[40, 60, 80, 100, 120, 140, 160].map((x, i) => (
                  <circle
                    key={i}
                    cx={x}
                    cy={85 - i * 10}
                    r='1.5'
                    fill='#22c55e'
                  >
                    {isLive && (
                      <animate
                        attributeName='r'
                        values='1.5;2.5;1.5'
                        dur={`${2 + i * 0.3}s`}
                        repeatCount='indefinite'
                      />
                    )}
                  </circle>
                ))}
                <defs>
                  <linearGradient
                    id='revenueGradient'
                    x1='0'
                    y1='0'
                    x2='0'
                    y2='1'
                  >
                    <stop offset='0%' stopColor='#22c55e' />
                    <stop offset='100%' stopColor='transparent' />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className='relative z-10'>
              <div className='flex items-center gap-4 mb-4'>
                <DollarSign className='w-8 h-8' />
                {isLive && (
                  <div className='w-2 h-2 bg-green-500 animate-ping rounded-full' />
                )}
              </div>
              <div className='text-4xl font-bold mb-2'>
                {formatNumber(metrics.revenue)} تومان
              </div>
              <div className='text-lg text-gray-600 dark:text-gray-300'>
                درآمد امروز
              </div>
            </div>
          </div>

          {/* Orders Metric - Top Right */}
          <div className='col-span-2 row-span-1 border-b p-6 relative bg-light-card dark:bg-dark-card'>
            <div className='absolute inset-0 p-2 opacity-40'>
              <svg className='w-full h-full' viewBox='0 0 160 60' fill='none'>
                {/* Bar chart for orders */}
                {[12, 18, 15, 22, 28, 24, 30, 26, 35, 32, 38, 42].map(
                  (height, i) => (
                    <rect
                      key={i}
                      x={10 + i * 12}
                      y={50 - height}
                      width='6'
                      height={height}
                      fill='#3b82f6'
                      opacity={0.7}
                    >
                      {isLive && (
                        <animate
                          attributeName='height'
                          values={`${height};${height + 5};${height}`}
                          dur={`${1.5 + i * 0.1}s`}
                          repeatCount='indefinite'
                        />
                      )}
                    </rect>
                  )
                )}
                {/* Trend line overlay */}
                <path
                  d='M13 38 L25 32 L37 35 L49 28 L61 22 L73 26 L85 20 L97 24 L109 15 L121 18 L133 12 L145 8'
                  stroke='#f59e0b'
                  strokeWidth='1.5'
                  fill='none'
                  strokeDasharray='2,2'
                />
              </svg>
            </div>
            <div className='relative z-10 flex justify-between items-center'>
              <div>
                <div className='flex items-center gap-3 mb-2'>
                  <FileText className='w-6 h-6' />
                  {isLive && (
                    <div className='w-2 h-2 bg-blue-500 animate-ping rounded-full' />
                  )}
                </div>
                <div className='text-2xl font-bold'>
                  {formatNumber(metrics.orders)}
                </div>
                <div className='text-sm text-gray-600 dark:text-gray-300'>
                  سفارشات
                </div>
              </div>
            </div>
          </div>

          {/* Customers Metric - Middle Right */}
          <div className='col-span-2 row-span-1 border-b p-6 relative bg-light-card dark:bg-dark-card'>
            <div className='absolute inset-0 p-2 opacity-30'>
              <svg className='w-full h-full' viewBox='0 0 160 60' fill='none'>
                {/* Network nodes representing customers */}
                <circle cx='30' cy='20' r='2' fill='#06b6d4' />
                <circle cx='50' cy='15' r='2' fill='#06b6d4' />
                <circle cx='80' cy='25' r='2' fill='#06b6d4' />
                <circle cx='110' cy='18' r='2' fill='#06b6d4' />
                <circle cx='130' cy='22' r='2' fill='#06b6d4' />
                <circle cx='40' cy='35' r='2' fill='#06b6d4' />
                <circle cx='70' cy='40' r='2' fill='#06b6d4' />
                <circle cx='100' cy='38' r='2' fill='#06b6d4' />

                {/* Connection lines */}
                <line
                  x1='30'
                  y1='20'
                  x2='50'
                  y2='15'
                  stroke='#06b6d4'
                  strokeWidth='0.5'
                  opacity='0.4'
                />
                <line
                  x1='50'
                  y1='15'
                  x2='80'
                  y2='25'
                  stroke='#06b6d4'
                  strokeWidth='0.5'
                  opacity='0.4'
                />
                <line
                  x1='80'
                  y1='25'
                  x2='110'
                  y2='18'
                  stroke='#06b6d4'
                  strokeWidth='0.5'
                  opacity='0.4'
                />
                <line
                  x1='110'
                  y1='18'
                  x2='130'
                  y2='22'
                  stroke='#06b6d4'
                  strokeWidth='0.5'
                  opacity='0.4'
                />
                <line
                  x1='30'
                  y1='20'
                  x2='40'
                  y2='35'
                  stroke='#06b6d4'
                  strokeWidth='0.5'
                  opacity='0.4'
                />
                <line
                  x1='80'
                  y1='25'
                  x2='70'
                  y2='40'
                  stroke='#06b6d4'
                  strokeWidth='0.5'
                  opacity='0.4'
                />
                <line
                  x1='110'
                  y1='18'
                  x2='100'
                  y2='38'
                  stroke='#06b6d4'
                  strokeWidth='0.5'
                  opacity='0.4'
                />

                {/* Growth wave */}
                <path
                  d='M10 45 Q40 40 70 45 T130 45'
                  stroke='#8b5cf6'
                  strokeWidth='1'
                  fill='none'
                  strokeDasharray='3,2'
                />

                {isLive && (
                  <>
                    <circle
                      cx='30'
                      cy='20'
                      r='6'
                      fill='none'
                      stroke='#06b6d4'
                      strokeWidth='0.5'
                      opacity='0.3'
                    >
                      <animate
                        attributeName='r'
                        values='6;12;6'
                        dur='3s'
                        repeatCount='indefinite'
                      />
                      <animate
                        attributeName='opacity'
                        values='0.3;0;0.3'
                        dur='3s'
                        repeatCount='indefinite'
                      />
                    </circle>
                    <circle
                      cx='110'
                      cy='18'
                      r='8'
                      fill='none'
                      stroke='#06b6d4'
                      strokeWidth='0.5'
                      opacity='0.2'
                    >
                      <animate
                        attributeName='r'
                        values='8;14;8'
                        dur='3s'
                        repeatCount='indefinite'
                        begin='1.5s'
                      />
                      <animate
                        attributeName='opacity'
                        values='0.2;0;0.2'
                        dur='3s'
                        repeatCount='indefinite'
                        begin='1.5s'
                      />
                    </circle>
                  </>
                )}
              </svg>
            </div>
            <div className='relative z-10 flex justify-between items-center'>
              <div>
                <div className='flex items-center gap-3 mb-2'>
                  <Users className='w-6 h-6' />
                  {isLive && (
                    <div className='w-2 h-2 bg-cyan-500 animate-ping rounded-full' />
                  )}
                </div>
                <div className='text-2xl font-bold'>
                  {formatNumber(metrics.customers)}
                </div>
                <div className='text-sm text-gray-600 dark:text-gray-300'>
                  مشتریان فعال
                </div>
              </div>
            </div>
          </div>

          {/* Growth Metric - Bottom Left */}
          <div className='col-span-1 row-span-2 border-r p-6 relative bg-light-card dark:bg-dark-card border-l'>
            <div className='absolute inset-0 p-3 opacity-35'>
              <svg className='w-full h-full' viewBox='0 0 80 140' fill='none'>
                {/* Upward trend arrow path */}
                <path
                  d='M15 120 L25 100 L35 85 L45 65 L55 45 L65 25'
                  stroke='#22c55e'
                  strokeWidth='2'
                  fill='none'
                  markerEnd='url(#arrowhead)'
                />

                {/* Growth bars in background */}
                <rect
                  x='12'
                  y='115'
                  width='4'
                  height='5'
                  fill='#ef4444'
                  opacity='0.6'
                />
                <rect
                  x='22'
                  y='105'
                  width='4'
                  height='15'
                  fill='#f59e0b'
                  opacity='0.6'
                />
                <rect
                  x='32'
                  y='90'
                  width='4'
                  height='30'
                  fill='#22c55e'
                  opacity='0.6'
                />
                <rect
                  x='42'
                  y='70'
                  width='4'
                  height='50'
                  fill='#22c55e'
                  opacity='0.6'
                />
                <rect
                  x='52'
                  y='50'
                  width='4'
                  height='70'
                  fill='#22c55e'
                  opacity='0.6'
                />
                <rect
                  x='62'
                  y='30'
                  width='4'
                  height='90'
                  fill='#22c55e'
                  opacity='0.6'
                />

                {/* Percentage indicators */}
                <text
                  x='70'
                  y='30'
                  fill='currentColor'
                  fontSize='6'
                  opacity='0.5'
                >
                  +{metrics.growth}%
                </text>

                {/* Moving dot along trend line */}
                {isLive && (
                  <circle r='2' fill='#22c55e'>
                    <animateMotion dur='4s' repeatCount='indefinite'>
                      <path d='M15 120 L25 100 L35 85 L45 65 L55 45 L65 25' />
                    </animateMotion>
                  </circle>
                )}

                <defs>
                  <marker
                    id='arrowhead'
                    markerWidth='8'
                    markerHeight='6'
                    refX='8'
                    refY='3'
                    orient='auto'
                    markerUnits='strokeWidth'
                  >
                    <path d='M0,0 L0,6 L8,3 z' fill='#22c55e' />
                  </marker>
                </defs>
              </svg>
            </div>
            <div className='relative z-10'>
              <div className='flex items-center gap-3 mb-4'>
                <TrendingUp className='w-6 h-6' />
                {isLive && (
                  <div className='w-2 h-2 bg-green-500 animate-ping rounded-full' />
                )}
              </div>
              <div className='text-3xl font-bold mb-2'>{metrics.growth}%</div>
              <div className='text-sm text-gray-600 dark:text-gray-300'>
                رشد فروش
              </div>
            </div>
          </div>

          {/* Live Activity Feed */}
          <div className='p-6 relative bg-light-card dark:bg-dark-card'>
            <div className='absolute inset-0 p-2 opacity-20'>
              <svg className='w-full h-full' viewBox='0 0 120 140' fill='none'>
                {/* Activity timeline */}
                <line
                  x1='10'
                  y1='20'
                  x2='10'
                  y2='120'
                  stroke='currentColor'
                  strokeWidth='1'
                  opacity='0.3'
                />

                {/* Activity dots */}
                <circle cx='10' cy='30' r='2' fill='#22c55e' />
                <circle cx='10' cy='60' r='2' fill='#3b82f6' />
                <circle cx='10' cy='90' r='2' fill='#f59e0b' />

                {/* Activity indicators */}
                <rect
                  x='20'
                  y='25'
                  width='15'
                  height='2'
                  fill='#22c55e'
                  opacity='0.4'
                />
                <rect
                  x='20'
                  y='28'
                  width='8'
                  height='1'
                  fill='#22c55e'
                  opacity='0.3'
                />

                <rect
                  x='20'
                  y='55'
                  width='12'
                  height='2'
                  fill='#3b82f6'
                  opacity='0.4'
                />
                <rect
                  x='20'
                  y='58'
                  width='18'
                  height='1'
                  fill='#3b82f6'
                  opacity='0.3'
                />

                <rect
                  x='20'
                  y='85'
                  width='10'
                  height='2'
                  fill='#f59e0b'
                  opacity='0.4'
                />
                <rect
                  x='20'
                  y='88'
                  width='14'
                  height='1'
                  fill='#f59e0b'
                  opacity='0.3'
                />

                {/* Live pulse on timeline */}
                {isLive && (
                  <>
                    <circle
                      cx='10'
                      cy='30'
                      r='4'
                      fill='none'
                      stroke='#22c55e'
                      strokeWidth='0.5'
                      opacity='0.5'
                    >
                      <animate
                        attributeName='r'
                        values='4;8;4'
                        dur='2s'
                        repeatCount='indefinite'
                      />
                      <animate
                        attributeName='opacity'
                        values='0.5;0;0.5'
                        dur='2s'
                        repeatCount='indefinite'
                      />
                    </circle>
                    <circle
                      cx='10'
                      cy='60'
                      r='6'
                      fill='none'
                      stroke='#3b82f6'
                      strokeWidth='0.5'
                      opacity='0.4'
                    >
                      <animate
                        attributeName='r'
                        values='6;10;6'
                        dur='2.5s'
                        repeatCount='indefinite'
                        begin='0.8s'
                      />
                      <animate
                        attributeName='opacity'
                        values='0.4;0;0.4'
                        dur='2.5s'
                        repeatCount='indefinite'
                        begin='0.8s'
                      />
                    </circle>
                  </>
                )}
              </svg>
            </div>
            <div className='relative z-10'>
              <h4 className='text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2'>
                <Clock className='w-5 h-5' />
                فعالیت‌های اخیر
              </h4>
              <div className='space-y-3'>
                {(
                  [
                    {
                      type: 'success',
                      message: 'فاکتور جدید #۱۲۳۴ ثبت شد',
                      time: 'همین الان',
                    },
                    {
                      type: 'info',
                      message: 'مشتری جدید عضو شد',
                      time: '۲ دقیقه پیش',
                    },
                    {
                      type: 'warning',
                      message: 'موجودی کالای A کم است',
                      time: '۵ دقیقه پیش',
                    },
                  ] as Activity[]
                ).map((activity, index) => (
                  <div key={index} className='flex items-center gap-3 p-3'>
                    {activity.type === 'success' && (
                      <CheckCircle className='w-5 h-5 text-green-500' />
                    )}
                    {activity.type === 'info' && (
                      <Users className='w-5 h-5 text-blue-500' />
                    )}
                    {activity.type === 'warning' && (
                      <AlertCircle className='w-5 h-5 text-orange-500' />
                    )}
                    <div className='flex-1'>
                      <div className='text-sm text-gray-900 dark:text-white'>
                        {activity.message}
                      </div>
                      <div className='text-xs text-gray-500 dark:text-gray-400'>
                        {activity.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LiveDashboardPreview
