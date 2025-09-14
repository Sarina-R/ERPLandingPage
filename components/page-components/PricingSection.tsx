import { FC, useState } from 'react'
import {
  CheckCircle,
  Star,
  Zap,
  Users,
  Globe,
  Cpu,
  Shield,
  Headphones,
} from 'lucide-react'

interface PricingPlan {
  name: string
  priceMonthly: number
  priceYearly: number
  modules: string[]
  features: string[]
  free: string[]
  popular?: boolean
  icon: React.ComponentType<{ className?: string }>
}

interface PricingPlans {
  oneApp: PricingPlan
  standard: PricingPlan
  custom: PricingPlan
}

type Benefit = {
  title: string
  icon: React.ComponentType<{ className?: string }>
}

const benefits: Benefit[] = [
  { title: 'یکپارچه‌سازی تمام فرآیندهای کسب‌وکار', icon: Globe },
  { title: 'کاهش هزینه‌های عملیاتی تا ۳۰٪', icon: Zap },
  { title: 'افزایش بهره‌وری تیم‌ها', icon: Users },
  { title: 'گزارش‌گیری لحظه‌ای و دقیق', icon: Cpu },
  { title: 'پشتیبانی کامل به زبان فارسی', icon: Headphones },
  { title: 'امکان سفارشی‌سازی بر اساس نیاز', icon: Shield },
]

const pricingPlans: PricingPlans = {
  oneApp: {
    name: 'یک اپلیکیشن',
    priceMonthly: 0,
    priceYearly: 0,
    modules: ['یک اپلیکیشن', 'کاربران نامحدود', 'Odoo Online'],
    features: [],
    free: ['یک اپلیکیشن', 'کاربران نامحدود', 'Odoo Online'],
    icon: Star,
  },
  standard: {
    name: 'استاندارد',
    priceMonthly: 1990000,
    priceYearly: 2490000,
    modules: ['تمام اپلیکیشن‌ها', 'Odoo Online'],
    features: [],
    free: [],
    popular: true,
    icon: Zap,
  },
  custom: {
    name: 'سفارشی',
    priceMonthly: 2990000,
    priceYearly: 3740000,
    modules: [
      'تمام اپلیکیشن‌ها',
      'Odoo Online',
      'Odoo.sh',
      'Odoo Studio',
      'چند شرکتی',
      'API خارجی',
    ],
    features: [],
    free: [],
    icon: Shield,
  },
}

const PricingSection: FC = () => {
  const [selectedPlan, setSelectedPlan] =
    useState<keyof PricingPlans>('standard')
  const [userCount, setUserCount] = useState<number>(5)
  const [isYearly, setIsYearly] = useState<boolean>(false)

  const calculateSavings = (plan: PricingPlan) => {
    if (plan.priceMonthly === 0) return 0
    const monthlyCost = plan.priceMonthly * 12
    const yearlyCost = plan.priceYearly
    return Math.round(((monthlyCost - yearlyCost) / monthlyCost) * 100)
  }

  return (
    <section id='pricing' className='min-h-screen mt-20'>
      <div>
        {/* Header */}
        <div className='text-center border-y mb-8'>
          <div className='mx-4 md:mx-8'>
            <h2 className='relative text-2xl md:text-3xl font-bold border-x py-4 md:py-6 px-2 md:px-3'>
              قیمت‌گذاری هوشمند
              <p className='text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto pt-3 md:pt-4'>
                فقط برای آنچه استفاده می‌کنید پرداخت کنید. برخی امکانات رایگان،
                برخی پولی.
              </p>
            </h2>
          </div>
        </div>

        {/* Billing Toggle */}
        <div className='flex justify-center mb-8'>
          <div className='bg-neutral-100 dark:bg-neutral-900 p-1.5 rounded-sm border flex gap-1.5'>
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-lg transition-all duration-300 font-medium ${
                !isYearly
                  ? 'bg-black text-white'
                  : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800'
              }`}
            >
              ماهانه
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-lg transition-all duration-300 font-medium flex items-center gap-1.5 ${
                isYearly
                  ? 'bg-black text-white'
                  : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800'
              }`}
            >
              سالانه
              {isYearly && (
                <span className='bg-white/20 text-[10px] px-1.5 py-0.5 rounded-full'>
                  تا ۲۰٪ تخفیف
                </span>
              )}
            </button>
          </div>
        </div>

        <div className='grid lg:grid-cols-4 border-y'>
          {/* Benefits Column */}
          <div className='lg:col-span-1'>
            <div className='sticky top-6'>
              <div className='p-6'>
                <h3 className='text-xl font-bold mb-6 text-center'>چرا ما؟</h3>
                <div className='space-y-4 grid grid-cols-2 lg:grid-cols-1'>
                  {benefits.map((benefit, idx) => {
                    const IconComponent = benefit.icon
                    return (
                      <div
                        key={idx}
                        className='flex items-start gap-3 group p-2 transition-all duration-300'
                      >
                        <div className='bg-black dark:bg-white p-1.5 rounded-full'>
                          <IconComponent className='h-4 w-4 text-white dark:text-black' />
                        </div>
                        <span className='text-xs leading-relaxed font-medium'>
                          {benefit.title}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className='lg:col-span-3'>
            <div className='grid grid-cols-2 md:grid-cols-3'>
              {Object.entries(pricingPlans).map(([key, plan], index) => {
                const IconComponent = plan.icon
                const isSelected = selectedPlan === key
                const savings = calculateSavings(plan)

                return (
                  <div
                    key={key}
                    className={`relative border transition-all duration-500 cursor-pointer ${
                      isSelected ? 'border-black/50 dark:border-white/50' : ''
                    } ${index === 0 ? 'col-span-2 md:col-span-1' : ''}`}
                    onClick={() => setSelectedPlan(key as keyof PricingPlans)}
                  >
                    {plan.popular && (
                      <div className='absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white dark:bg-white dark:text-black px-4 py-1.5 rounded-full text-xs font-bold'>
                        محبوب‌ترین
                      </div>
                    )}

                    <div className='p-6'>
                      {/* Plan Header */}
                      <div className='text-center mb-6'>
                        <div className='inline-flex p-3 mb-3 bg-neutral-200 dark:bg-neutral-700 rounded-full'>
                          <IconComponent className='h-6 w-6 text-black dark:text-white' />
                        </div>
                        <h3 className='text-xl font-bold mb-1.5'>
                          {plan.name}
                        </h3>
                        <div className='mb-3'>
                          <div className='text-3xl font-bold'>
                            {plan.priceMonthly === 0
                              ? 'رایگان'
                              : `${(isYearly
                                  ? plan.priceYearly
                                  : plan.priceMonthly
                                ).toLocaleString('fa-IR')}`}
                          </div>
                          {plan.priceMonthly !== 0 && (
                            <>
                              <div className='text-xs text-neutral-600 dark:text-neutral-400'>
                                تومان/کاربر/{isYearly ? 'سال' : 'ماه'}
                              </div>
                              {isYearly && savings > 0 && (
                                <div className='text-[10px] text-green-600 font-medium mt-1'>
                                  {savings}% صرفه‌جویی سالانه
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      </div>

                      {/* Features */}
                      <div className='space-y-4 mb-6'>
                        {plan.free.length > 0 && (
                          <div>
                            <h4 className='font-semibold mb-2 flex items-center gap-1.5 text-base'>
                              <CheckCircle className='h-4 w-4' /> امکانات رایگان
                            </h4>
                            <ul className='space-y-1.5'>
                              {plan.free.map((feature: string, idx: number) => (
                                <li
                                  key={idx}
                                  className='flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300'
                                >
                                  <CheckCircle className='h-4 w-4 text-green-500 flex-shrink-0' />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {plan.modules.length > 0 && plan.priceMonthly > 0 && (
                          <div>
                            <h4 className='font-semibold mb-2 flex items-center gap-1.5 text-base'>
                              <Star className='h-4 w-4' /> امکانات پیشرفته
                            </h4>
                            <ul className='space-y-1.5'>
                              {plan.modules.map(
                                (module: string, idx: number) => (
                                  <li
                                    key={idx}
                                    className='flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300'
                                  >
                                    <Star className='h-4 w-4 flex-shrink-0' />
                                    {module}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* CTA Button */}
                      <button
                        className={`w-full py-3 px-4 rounded-lg font-bold transition-all duration-300 ${
                          isSelected
                            ? 'bg-black text-white dark:bg-white dark:text-black'
                            : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200'
                        }`}
                        onClick={(e) => {
                          e.stopPropagation()
                        }}
                      >
                        {plan.priceMonthly === 0 ? 'شروع رایگان' : 'انتخاب پلن'}
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* User Count Selector */}
            {pricingPlans[selectedPlan].priceMonthly !== 0 && (
              <div className='p-6 border'>
                <div className='text-center mb-4'>
                  <h3 className='text-xl font-bold mb-1.5'>
                    محاسبه دقیق هزینه
                  </h3>
                  <p className='text-sm text-neutral-600 dark:text-neutral-400'>
                    تعداد کاربران خود را انتخاب کنید و هزینه نهایی را ببینید
                  </p>
                </div>

                <div className='max-w-xl mx-auto'>
                  <div className='mb-4'>
                    <div className='flex justify-between items-center mb-3'>
                      <label className='text-base font-semibold'>
                        تعداد کاربران
                      </label>
                      <div className='bg-black text-white dark:bg-white dark:text-black px-3 py-1.5 rounded-full font-bold text-sm'>
                        {userCount} کاربر
                      </div>
                    </div>
                    <input
                      type='range'
                      min='1'
                      max='50'
                      value={userCount}
                      onChange={(e) =>
                        setUserCount(Number.parseInt(e.target.value))
                      }
                      className='w-full h-2 bg-neutral-200 dark:bg-neutral-700 rounded-lg appearance-none cursor-pointer'
                    />
                    <div className='flex justify-between text-[10px] text-neutral-500 dark:text-neutral-400 mt-1.5'>
                      <span>۱ کاربر</span>
                      <span>۵۰ کاربر</span>
                    </div>
                  </div>

                  <div className='p-6'>
                    <div className='text-center'>
                      <div className='text-3xl font-bold mb-1.5'>
                        {(isYearly
                          ? pricingPlans[selectedPlan].priceYearly * userCount
                          : pricingPlans[selectedPlan].priceMonthly * userCount
                        ).toLocaleString('fa-IR')}{' '}
                        <span className='text-xl'>تومان</span>
                      </div>
                      <div className='text-base font-medium'>
                        هزینه {isYearly ? 'سالانه' : 'ماهانه'} برای {userCount}{' '}
                        کاربر
                      </div>
                      {isYearly && (
                        <div className='text-xs text-green-600 font-medium mt-1.5'>
                          در مقایسه با پرداخت ماهانه،{' '}
                          {calculateSavings(pricingPlans[selectedPlan])}%
                          صرفه‌جویی
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
