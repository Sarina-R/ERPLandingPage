import React from 'react'
import { Grid3X3, Link2 } from 'lucide-react'
import Link from 'next/link'

interface IntegrationApp {
  name: string
  enName: string
  category: string
}

interface ExternalIntegration {
  name: string
  position: string
}

interface ConnectionLineProps {
  from: { x: number; y: number }
  to: { x: number; y: number }
  className?: string
}

const IntegrationSection: React.FC = () => {
  const integrationApps: IntegrationApp[] = [
    { name: 'مدیریت دانش', category: 'productivity', enName: 'accounting' },
    { name: 'حسابداری', category: 'finance', enName: 'knowledge' },
    { name: 'امضای دیجیتال', category: 'security', enName: 'sign' },
    { name: 'CRM', category: 'sales', enName: 'CRM' },
    { name: 'استودیو', category: 'creative', enName: 'studio' },
    { name: 'اشتراکات', category: 'finance', enName: 'subscription' },
    { name: 'اجاره', category: 'finance', enName: 'rental' },
    { name: 'فروشگاه', category: 'sales', enName: 'point-of-sale' },
    { name: 'بحث و گفتگو', category: 'communication', enName: 'discuss' },
    { name: 'اسناد', category: 'productivity', enName: 'documents' },
    { name: 'پروژه', category: 'productivity', enName: 'project' },
    { name: 'حضور و غیاب', category: 'hr', enName: 'timesheets' },
    { name: 'خدمات میدانی', category: 'operations', enName: 'field-service' },
    { name: 'برنامه‌ریزی', category: 'productivity', enName: 'planning' },
    { name: 'پشتیبانی', category: 'support', enName: 'helpdesk' },
    { name: 'وب‌سایت', category: 'creative', enName: 'website' },
    {
      name: 'بازاریابی اجتماعی',
      category: 'marketing',
      enName: 'social-marketing',
    },
    {
      name: 'ایمیل مارکتینگ',
      category: 'marketing',
      enName: 'email-marketing',
    },
    { name: 'خرید', category: 'operations', enName: 'purchase' },
    { name: 'موجودی انبار', category: 'operations', enName: 'inventory' },
    { name: 'تولید', category: 'operations', enName: 'manufacturing' },
    { name: 'فروش', category: 'sales', enName: 'sales' },
    { name: 'منابع انسانی', category: 'hr', enName: 'hr' },
    { name: 'داشبورد', category: 'analytics', enName: 'dashboard' },
  ]

  const externalIntegrations: ExternalIntegration[] = [
    { name: 'QuickBooks', position: 'top-left' },
    { name: 'Salesforce', position: 'top-right' },
    { name: 'Slack', position: 'right' },
    { name: 'Shopify', position: 'left' },
    { name: 'Zendesk', position: 'bottom-left' },
    { name: 'HubSpot', position: 'bottom-right' },
  ]

  // const getCategoryColor = (category: string): string => {
  //   const colors: Record<string, string> = {
  //     finance: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  //     productivity: 'bg-green-500/10 text-green-600 dark:text-green-400',
  //     security: 'bg-red-500/10 text-red-600 dark:text-red-400',
  //     sales: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
  //     creative: 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
  //     communication: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
  //     hr: 'bg-pink-500/10 text-pink-600 dark:text-pink-400',
  //     operations: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  //     support: 'bg-violet-500/10 text-violet-600 dark:text-violet-400',
  //     marketing: 'bg-rose-500/10 text-rose-600 dark:text-rose-400',
  //     analytics: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
  //   }
  //   return colors[category] || 'bg-gray-500/10 text-gray-600 dark:text-gray-400'
  // }

  const ConnectionLine: React.FC<ConnectionLineProps> = ({
    from,
    to,
    className = '',
  }) => (
    <svg
      className={`absolute pointer-events-none w-full h-full ${className}`}
      style={{ zIndex: 0 }}
    >
      <defs>
        <linearGradient
          id={`lineGradient-${Math.random()}`}
          x1='0%'
          y1='0%'
          x2='100%'
          y2='0%'
        >
          <stop offset='0%' stopColor='currentColor' stopOpacity={0} />
          <stop offset='50%' stopColor='currentColor' stopOpacity={0.3} />
          <stop offset='100%' stopColor='currentColor' stopOpacity={0} />
        </linearGradient>
      </defs>
      <line
        x1={from.x}
        y1={from.y}
        x2={to.x}
        y2={to.y}
        stroke={`url(#lineGradient-${Math.random()})`}
        strokeWidth='1'
        strokeDasharray='2,3'
        className='text-border animate-pulse'
      />
    </svg>
  )

  const getGridItemPosition = (
    index: number,
    containerWidth: number = 800,
    containerHeight: number = 600
  ) => {
    const cols = 6
    const rows = 4
    const cellWidth = containerWidth / cols
    const cellHeight = containerHeight / rows

    const col = index % cols
    const row = Math.floor(index / cols)

    return {
      x: col * cellWidth + cellWidth / 2,
      y: row * cellHeight + cellHeight / 2,
    }
  }

  const getExternalPosition = (
    position: string,
    containerWidth: number = 800,
    containerHeight: number = 600
  ) => {
    const margin = 40
    const positions: Record<string, { x: number; y: number }> = {
      'top-left': { x: containerWidth * 0.2, y: -margin },
      'top-right': { x: containerWidth * 0.8, y: -margin },
      right: { x: containerWidth + margin, y: containerHeight * 0.3 },
      left: { x: -margin, y: containerWidth * 0.3 },
      'bottom-left': { x: containerWidth * 0.2, y: containerHeight + margin },
      'bottom-right': { x: containerWidth * 0.8, y: containerHeight + margin },
    }
    return positions[position] || { x: 0, y: 0 }
  }

  const centerPoint = { x: 400, y: 300 }

  return (
    <section className='py-24 bg-gradient-to-b from-background to-muted/20 overflow-hidden'>
      {/* Header */}
      <div className='text-center mb-16 '>
        <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4'>
          <Grid3X3 className='w-4 h-4' />
          یکپارچه‌سازی
        </div>
        <div className='text-center border-y mb-8'>
          <div className='mx-4 md:mx-8'>
            <h2 className='relative text-2xl md:text-3xl font-bold border-x py-4 md:py-6 px-2 md:px-3'>
              یکپارچه‌سازی کامل
              <p className='text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto pt-3 md:pt-4'>
                تمام ابزارهای کسب‌وکار شما در یک پلتفرم متحد
              </p>
            </h2>
          </div>
        </div>
      </div>

      <div className=' px-2 sm:px-6'>
        {/* Main Integration Container */}
        <div className='relative'>
          {/* Integration Grid */}
          <div className='relative border border-border/50 rounded-3xl bg-card/50 backdrop-blur-sm p-6 sm:p-12'>
            <div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 relative z-10'>
              {integrationApps.map((app: IntegrationApp, index: number) => {
                const itemPosition = getGridItemPosition(index)
                const imageSrc = `/odoo-pic/icon (${23 - index + 1}).svg`

                return (
                  <Link href={`/${app.enName}`}>
                    <div key={index} className='relative'>
                      <div className='group relative aspect-square flex flex-col items-center justify-center p-4 rounded-2xl border hover:border-border/60 bg-background/80 hover:bg-background transition-all duration-300 hover:shadow-lg hover:scale-105'>
                        <div className='w-8 sm:w-10 h-8  mb-3 flex items-center justify-center'>
                          <img
                            src={imageSrc}
                            alt={app.name}
                            className='w-8 sm:w-10 h-8 sm:h-10 object-contain transition-transform group-hover:scale-110'
                          />
                        </div>
                        <span className='text-[9px] sm:text-xs font-medium text-center leading-tight'>
                          {app.name}
                        </span>
                      </div>

                      {/* Connection Line to Center */}
                      <ConnectionLine
                        from={itemPosition}
                        to={centerPoint}
                        className='text-primary opacity-20'
                      />
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* Central Gradient Effect */}
            <svg
              className='absolute inset-0 w-full h-full pointer-events-none'
              style={{ zIndex: 1 }}
            >
              <defs>
                <radialGradient id='centerGradient' cx='50%' cy='50%' r='50%'>
                  <stop
                    offset='0%'
                    stopColor='currentColor'
                    stopOpacity={0.1}
                  />
                  <stop
                    offset='70%'
                    stopColor='currentColor'
                    stopOpacity={0.05}
                  />
                  <stop
                    offset='100%'
                    stopColor='currentColor'
                    stopOpacity={0}
                  />
                </radialGradient>
              </defs>
              <circle
                cx='50%'
                cy='50%'
                r='40%'
                fill='url(#centerGradient)'
                className='text-primary animate-pulse'
              />
            </svg>
          </div>

          {/* External Integration Badges */}
          {externalIntegrations.map(
            (integration: ExternalIntegration, index: number) => {
              const positions: Record<string, string> = {
                'top-left': '-top-6 left-1/6 -translate-x-1/2',
                'top-right': '-top-6 right-1/6 translate-x-1/2',
                right: 'top-1/3 -right-8',
                left: 'top-1/3 -left-8',
                'bottom-left': '-bottom-6 left-1/6 -translate-x-1/2',
                'bottom-right': '-bottom-6 right-1/6 translate-x-1/2',
              }

              const externalPosition = getExternalPosition(integration.position)

              return (
                <div
                  key={index}
                  className={`absolute ${positions[integration.position]}`}
                >
                  <div className='flex items-center gap-2 px-4 py-2 rounded-full bg-background/90 border border-border/50 shadow-lg backdrop-blur-sm hover:scale-105 transition-transform'>
                    <Link2 className='w-3 h-3 text-muted-foreground' />
                    <span className='text-[10px] sm:text-sm font-medium text-foreground whitespace-nowrap'>
                      {integration.name}
                    </span>
                  </div>

                  {/* Connection Line from External to Center */}
                  <ConnectionLine
                    from={externalPosition}
                    to={centerPoint}
                    className='text-primary opacity-30'
                  />

                  {/* Connection indicator */}
                  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <div className='w-1 h-1 bg-primary rounded-full animate-ping'></div>
                  </div>
                </div>
              )
            }
          )}
        </div>
      </div>
    </section>
  )
}

export default IntegrationSection
