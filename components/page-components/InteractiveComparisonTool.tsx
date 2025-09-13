'use client'

import React, { useState, useEffect } from 'react'
import {
  ArrowRight,
  ChevronDown,
  Play,
  Pause,
  RotateCcw,
  Zap,
  Users,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  AlertCircle,
  BarChart3,
  FileText,
  Package,
} from 'lucide-react'

export function InteractiveComparisonTool() {
  const [selectedPlan, setSelectedPlan] = useState('erp')
  const [showComparison, setShowComparison] = useState(false)

  const scenarios = {
    manual: {
      title: 'کار دستی',
      color: 'from-red-500 to-red-600',
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
      color: 'from-green-500 to-green-600',
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

  return (
    <section className='py-20 px-6'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white'>
            مقایسه تعاملی
          </h2>
          <p className='text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto'>
            ببینید سیستم ERP ما در مقایسه با سایر روش‌ها چقدر بهتر عمل می‌کند
          </p>

          <div className='flex flex-wrap justify-center gap-4 mb-8'>
            {Object.entries(scenarios).map(([key, scenario]) => (
              <button
                key={key}
                onClick={() => setSelectedPlan(key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedPlan === key
                    ? `bg-gradient-to-r ${scenario.color} text-white shadow-lg`
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                {scenario.title}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowComparison(!showComparison)}
            className='px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:scale-105 transition-transform duration-300'
          >
            {showComparison ? 'مخفی کردن مقایسه' : 'مشاهده مقایسه کامل'}
          </button>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Selected Scenario Details */}
          <div
            className={`bg-gradient-to-br ${scenarios[selectedPlan].color} p-8 rounded-3xl text-white transform transition-all duration-500`}
          >
            <h3 className='text-3xl font-bold mb-6'>
              {scenarios[selectedPlan].title}
            </h3>

            <div className='space-y-4 mb-8'>
              {scenarios[selectedPlan].problems.map((item, index) => (
                <div key={index} className='flex items-center gap-3'>
                  {selectedPlan === 'erp' ? (
                    <CheckCircle className='w-6 h-6 text-white' />
                  ) : (
                    <AlertCircle className='w-6 h-6 text-white' />
                  )}
                  <span className='text-lg'>{item}</span>
                </div>
              ))}
            </div>

            <div className='grid grid-cols-2 gap-4'>
              {Object.entries(scenarios[selectedPlan].metrics).map(
                ([key, value]) => (
                  <div
                    key={key}
                    className='bg-white/20 backdrop-blur p-4 rounded-xl text-center'
                  >
                    <div className='text-2xl font-bold mb-1'>{value}</div>
                    <div className='text-sm opacity-90'>
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

          {/* Comparison Chart */}
          <div className='space-y-6'>
            {showComparison &&
              Object.entries({
                time: 'زمان صرف شده',
                errors: 'درصد خطا',
                efficiency: 'بهره‌وری',
              }).map(([metric, label]) => (
                <div
                  key={metric}
                  className='bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700'
                >
                  <h4 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
                    {label}
                  </h4>
                  <div className='space-y-3'>
                    {Object.entries(scenarios).map(([key, scenario]) => (
                      <div key={key} className='flex items-center gap-4'>
                        <div className='w-24 text-sm text-gray-600 dark:text-gray-400'>
                          {scenario.title}
                        </div>
                        <div className='flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden'>
                          <div
                            className={`h-full bg-gradient-to-r ${scenario.color} transition-all duration-1000`}
                            style={{
                              width:
                                metric === 'efficiency'
                                  ? scenario.metrics[metric]
                                  : key === 'erp'
                                  ? '95%'
                                  : key === 'traditional'
                                  ? '60%'
                                  : '30%',
                            }}
                          />
                        </div>
                        <div className='w-20 text-sm font-semibold text-gray-900 dark:text-white'>
                          {scenario.metrics[metric]}
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
