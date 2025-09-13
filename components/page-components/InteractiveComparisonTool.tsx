'use client'

import React, { useState } from 'react'
import { CheckCircle, AlertCircle } from 'lucide-react'

interface Scenario {
  title: string
  color: string
  problems: string[]
  metrics: {
    time: string
    errors: string
    cost: string
    efficiency: string
  }
}

interface Scenarios {
  manual: Scenario
  traditional: Scenario
  erp: Scenario
}

export default function InteractiveComparisonTool() {
  const [selectedPlan, setSelectedPlan] = useState<keyof Scenarios>('erp')

  const scenarios: Scenarios = {
    manual: {
      title: 'کار دستی',
      color: 'from-yellow-500 to-yellow-600',
      problems: [
        'خطاهای انسانی زیاد',
        'زمان‌بری بالا',
        'عدم هماهنگی بین بخش‌ها',
        'گزارش‌گیری سخت',
        'از دست رفتن اطلاعات',
      ],
      metrics: {
        time: '۸ ساعت',
        errors: '۱۵%',
        cost: '۱۰ میلیون تومان',
        efficiency: '۳۰%',
      },
    },
    traditional: {
      title: 'نرم‌افزارهای قدیمی',
      color: 'from-orange-500 to-orange-600',
      problems: [
        'رابط کاربری قدیمی',
        'عدم یکپارچگی',
        'پشتیبانی ضعیف',
        'بروزرسانی سخت',
        'قابلیت‌های محدود',
      ],
      metrics: {
        time: '۴ ساعت',
        errors: '۸%',
        cost: '۶ میلیون تومان',
        efficiency: '۶۰%',
      },
    },
    erp: {
      title: 'سیستم ERP ما',
      color: 'from-purple-500 to-purple-600',
      problems: [
        'خودکارسازی کامل',
        'یکپارچگی تمام بخش‌ها',
        'گزارش‌گیری هوشمند',
        'پشتیبانی ۲۴/۷',
        'بروزرسانی خودکار',
      ],
      metrics: {
        time: '۳۰ دقیقه',
        errors: '۱%',
        cost: '۲ میلیون تومان',
        efficiency: '۹۵%',
      },
    },
  }

  const metricLabels: Record<string, string> = {
    time: 'زمان صرف شده',
    errors: 'درصد خطا',
    efficiency: 'بهره‌وری',
  }

  const getMetricWidth = (metric: string, key: keyof Scenarios): string => {
    if (metric === 'efficiency') {
      return scenarios[key].metrics[metric]
    }

    switch (key) {
      case 'erp':
        return '95%'
      case 'traditional':
        return '60%'
      case 'manual':
        return '30%'
      default:
        return '0%'
    }
  }

  return (
    <section className='py-16'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-8'>
          <div className='border-y border-neutral-200 dark:border-neutral-700'>
            <div className='text-center mx-6 md:mx-12'>
              <h2 className='relative text-3xl md:text-4xl font-bold border-x border-neutral-200 dark:border-neutral-700 py-6 md:py-8 px-3 md:px-4 text-black dark:text-white'>
                مقایسه تعاملی
                <p className='text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto pt-4 md:pt-6'>
                  ببینید سیستم ERP ما در مقایسه با سایر روش‌ها چقدر بهتر عمل
                  می‌کند
                </p>
              </h2>
            </div>
          </div>
        </div>

        {/* Plan Selection Buttons */}
        <div className='flex flex-wrap justify-center gap-3 mb-8'>
          {Object.entries(scenarios).map(([key, scenario]) => (
            <button
              key={key}
              onClick={() => setSelectedPlan(key as keyof Scenarios)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-200 border-2 ${
                selectedPlan === key
                  ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white'
                  : ' text-black border-neutral-300 hover:border-black  dark:text-white dark:border-neutral-600 dark:hover:border-white'
              }`}
            >
              {scenario.title}
            </button>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 h-[600px]'>
          {/* Selected Scenario Card */}
          <div className='  border-y border-neutral-200 dark:border-neutral-700 flex flex-col justify-between'>
            <div className='p-8'>
              <div
                className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${scenarios[selectedPlan].color} text-white text-sm font-medium mb-6`}
              >
                {scenarios[selectedPlan].title}
              </div>

              <div className='space-y-4 mb-8'>
                {scenarios[selectedPlan].problems.map((item, index) => (
                  <div key={index} className='flex items-center gap-3'>
                    {selectedPlan === 'erp' ? (
                      <CheckCircle className='w-5 h-5 text-green-500 flex-shrink-0' />
                    ) : (
                      <AlertCircle className='w-5 h-5 text-red-500 flex-shrink-0' />
                    )}
                    <span className='text-black dark:text-white'>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics Grid */}
            <div className='grid grid-cols-2'>
              {Object.entries(scenarios[selectedPlan].metrics).map(
                ([key, value]) => (
                  <div
                    key={key}
                    className='p-4 text-center border border-neutral-200 dark:border-neutral-700'
                  >
                    <div className='text-xl font-bold text-black dark:text-white mb-1'>
                      {value}
                    </div>
                    <div className='text-sm text-neutral-600 dark:text-neutral-400'>
                      {key === 'time' && 'زمان'}
                      {key === 'errors' && 'خطا'}
                      {key === 'cost' && 'هزینه ماهانه'}
                      {key === 'efficiency' && 'بهره‌وری'}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Comparison Charts */}
          <div className='flex flex-col justify-between'>
            {Object.entries(metricLabels).map(([metric, label]) => (
              <div
                key={metric}
                className='  border border-neutral-200 dark:border-neutral-700 p-6 flex-1'
              >
                <h4 className='text-lg font-semibold text-black dark:text-white mb-4'>
                  {label}
                </h4>
                <div className='space-y-4'>
                  {Object.entries(scenarios).map(([key, scenario]) => (
                    <div key={key} className='flex items-center gap-4'>
                      <div className='w-20 text-sm text-neutral-600 dark:text-neutral-400 text-right'>
                        {scenario.title}
                      </div>
                      <div className='flex-1 bg-neutral-100 dark:bg-neutral-700 rounded-full h-3 overflow-hidden'>
                        <div
                          className={`h-full bg-gradient-to-r ${scenario.color} transition-all duration-1000 ease-out`}
                          style={{
                            width: getMetricWidth(
                              metric,
                              key as keyof Scenarios
                            ),
                          }}
                        />
                      </div>
                      <div className='w-16 text-sm font-medium text-black dark:text-white text-left'>
                        {
                          scenario.metrics[
                            metric as keyof typeof scenario.metrics
                          ]
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
