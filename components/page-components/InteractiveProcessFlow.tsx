import React, { useState, useEffect } from 'react'
import {
  Play,
  Pause,
  RotateCcw,
  Zap,
  BarChart3,
  FileText,
  Package,
} from 'lucide-react'

interface Step {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  time: string
}

export default function InteractiveProcessFlow() {
  const [activeStep, setActiveStep] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  const steps: Step[] = [
    {
      title: 'ورود اطلاعات',
      description: 'داده‌های کسب‌وکار شما وارد سیستم می‌شود',
      icon: FileText,
      time: '۲ دقیقه',
    },
    {
      title: 'پردازش هوشمند',
      description: 'الگوریتم‌های پیشرفته اطلاعات را تحلیل می‌کنند',
      icon: Zap,
      time: '۱۵ ثانیه',
    },
    {
      title: 'تولید گزارش',
      description: 'گزارش‌های دقیق و قابل اعتماد تولید می‌شود',
      icon: BarChart3,
      time: '۵ ثانیه',
    },
    {
      title: 'ارائه نتایج',
      description: 'داشبورد تعاملی نتایج را نمایش می‌دهد',
      icon: Package,
      time: 'فوری',
    },
  ]

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length)
      }, 2500)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isPlaying, steps.length])

  return (
    <section className='py-16 transition-colors duration-300 border-b'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12'>
          <div className='text-center'>
            <div className='border-y border-border'>
              <div className='text-center mx-6 md:mx-12'>
                <h2 className='relative text-2xl md:text-3xl font-bold border-x border-border py-6 md:py-8 px-3 md:px-4'>
                  فرآیند کار چطور است؟
                  <p className='text-base md:text-lg text-muted-foreground max-w-2xl mx-auto pt-4 md:pt-6'>
                    ببینید سیستم ERP ما چگونه در ۴ مرحله ساده کسب‌وکار شما را
                    متحول می‌کند
                  </p>
                </h2>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className='flex justify-center gap-3 my-10'>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className='flex items-center gap-2 px-5 py-2.5 rounded-lg border text-white dark:text-black bg-black dark:bg-white transition-colors duration-200'
            >
              {isPlaying ? (
                <Pause className='w-4 h-4' />
              ) : (
                <Play className='w-4 h-4' />
              )}
              {isPlaying ? 'توقف' : 'شروع'}
            </button>
            <button
              onClick={() => {
                setActiveStep(0)
                setIsPlaying(false)
              }}
              className='flex items-center gap-2 px-5 py-2.5 rounded-lg border  text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors duration-200'
            >
              <RotateCcw className='w-4 h-4' />
              ریست
            </button>
          </div>
        </div>

        {/* Steps */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 px-2 md:px-6'>
          {steps.map((step, index) => {
            const StepIcon = step.icon
            const isActive = index === activeStep

            return (
              <div
                key={index}
                onClick={() => setActiveStep(index)}
                className={`relative cursor-pointer rounded-2xl p-6 border transition-all duration-300
                  ${
                    isActive
                      ? 'border-zinc-900 dark:border-white bg-zinc-50 dark:bg-zinc-800 shadow-sm scale-[1.02]'
                      : ' bg-white/60 dark:bg-zinc-800/40 hover:border-zinc-400 dark:hover:border-zinc-600'
                  }
                `}
              >
                <div className='flex items-center justify-between mb-4'>
                  <span
                    className={`w-5 sm:w-8 h-5 sm:h-8 rounded-full flex items-center justify-center text-[10px] font-semibold
                      ${
                        isActive
                          ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900'
                          : 'bg-zinc-100 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-400'
                      }`}
                  >
                    {index + 1}
                  </span>
                  <span className='text-[10px] px-2 py-1 rounded-full border border-zinc-200 dark:border-zinc-600 text-zinc-500 dark:text-zinc-400'>
                    {step.time}
                  </span>
                </div>

                <div
                  className={`w-9 sm:w-12 h-9 sm:h-12 rounded-lg flex items-center justify-center mb-4
                    ${
                      isActive
                        ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900'
                        : 'bg-zinc-100 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-400'
                    }`}
                >
                  <StepIcon className='h-4 sm:h-6 w-4 sm:w-6' />
                </div>

                <h3 className='text-base font-medium mb-2 text-zinc-900 dark:text-white'>
                  {step.title}
                </h3>
                <p className='text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed'>
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Progress */}
        <div className='mt-12 max-w-86 sm:max-w-3xl mx-auto'>
          <div className='flex justify-between items-center mb-3'>
            <span className='text-xs font-medium text-zinc-700 dark:text-zinc-300'>
              پیشرفت
            </span>
            <span className='text-xs text-zinc-500 dark:text-zinc-400'>
              {activeStep + 1} از {steps.length}
            </span>
          </div>
          <div className='w-full bg-zinc-200 dark:bg-zinc-700 h-1.5 rounded-full overflow-hidden'>
            <div
              className='bg-zinc-900 dark:bg-white h-1.5 rounded-full transition-all duration-500 ease-out'
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
