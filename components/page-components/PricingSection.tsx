import { FC, useState } from 'react'
import { CheckCircle, Star } from 'lucide-react'

interface PricingPlan {
  name: string
  price: number
  modules: string[]
  features: string[]
  free: string[]
}

interface PricingPlans {
  starter: PricingPlan
  business: PricingPlan
  enterprise: PricingPlan
}

type Benefit = string

const benefits: Benefit[] = [
  'یکپارچه‌سازی تمام فرآیندهای کسب‌وکار',
  'کاهش هزینه‌های عملیاتی تا ۳۰٪',
  'افزایش بهره‌وری تیم‌ها',
  'گزارش‌گیری لحظه‌ای و دقیق',
  'پشتیبانی کامل به زبان فارسی',
  'امکان سفارشی‌سازی بر اساس نیاز',
]

const pricingPlans: PricingPlans = {
  starter: {
    name: 'استارتر',
    price: 15,
    modules: ['حسابداری', 'CRM پایه', 'فروش'],
    features: ['تا ۳ کاربر', 'پشتیبانی ایمیل', '۵GB فضای ذخیره'],
    free: ['داشبورد پایه', 'گزارش‌های ساده'],
  },
  business: {
    name: 'کسب‌وکار',
    price: 25,
    modules: ['تمام ماژول‌های استارتر', 'مدیریت انبار', 'پروژه', 'وب‌سایت'],
    features: ['تا ۱۰ کاربر', 'پشتیبانی تلفنی', '۲۰GB فضای ذخیره'],
    free: ['تمام امکانات رایگان استارتر', 'تحلیل‌های پیشرفته'],
  },
  enterprise: {
    name: 'سازمانی',
    price: 40,
    modules: ['تمام ماژول‌ها', 'سفارشی‌سازی', 'یکپارچه‌سازی API'],
    features: ['کاربران نامحدود', 'پشتیبانی ۲۴/۷', 'فضای نامحدود'],
    free: ['تمام امکانات رایگان', 'مشاوره تخصصی', 'آموزش اختصاصی'],
  },
}

const PricingSection: FC = () => {
  const [selectedPlan, setSelectedPlan] =
    useState<keyof PricingPlans>('starter')
  const [userCount, setUserCount] = useState<number>(1)

  return (
    <section className='pt-20 border-y'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center'>
          <div className='border-y'>
            <div className='text-center mx-6 md:mx-12'>
              <h2 className='relative text-3xl md:text-4xl font-bold border-x py-6 md:py-8 px-3 md:px-4'>
                قیمت‌گذاری هوشمند
                <p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto pt-4 md:pt-6'>
                  فقط برای آنچه استفاده می‌کنید پرداخت کنید. برخی امکانات
                  رایگان، برخی پولی.
                </p>
                {/* subtle accent line under heading */}
                <span className='absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-primary rounded-full' />
              </h2>
            </div>
          </div>
        </div>

        <div className='lg:flex'>
          {/* Left Side: Benefits + Plan Switcher */}
          <div className='flex flex-col-reverse lg:flex-col lg:border-l p-0 lg:p-14'>
            {/* Plan Selection */}
            <div className='flex justify-center mb-8 py-12 lg:pt-0 lg:mt-0 border-y lg:border-0'>
              <div className='bg-muted p-1 rounded-lg flex gap-1 text-sm lg:text-base'>
                {Object.entries(pricingPlans).map(([key, plan]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedPlan(key as keyof PricingPlans)}
                    className={`px-4 py-2 lg:px-6 lg:py-2 rounded-md transition-all ${
                      selectedPlan === key
                        ? 'bg-background shadow-sm text-foreground border'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                    aria-pressed={selectedPlan === key}
                  >
                    {plan.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className=' bg-muted/10 lg:bg-transparent p-6'>
              <h3 className='text-xl lg:text-2xl font-semibold text-center mb-6'>
                مزایای ما
              </h3>
              <ul className='grid grid-cols-1 sm:grid-cols-2 lg:block gap-3 lg:space-y-4 text-sm'>
                {benefits.map((benefit, idx) => (
                  <li
                    key={idx}
                    className='flex items-center gap-2 text-foreground'
                  >
                    <CheckCircle className='h-5 w-5 text-green-600 flex-shrink-0' />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: Pricing Details */}
          <div className='w-full'>
            <div className='p-6 lg:p-14'>
              {/* Plan title + price */}
              <div className='text-center mb-10'>
                <div className='text-xl lg:text-2xl font-medium'>
                  {pricingPlans[selectedPlan].name}
                </div>
                <div className='text-3xl lg:text-4xl font-bold text-primary mt-2'>
                  ${pricingPlans[selectedPlan].price}
                  <span className='text-sm lg:text-lg text-muted-foreground'>
                    /ماه/کاربر
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className='grid grid-cols-2 gap-8'>
                <div>
                  <h4 className='font-semibold mb-4 text-green-600'>
                    ✓ امکانات رایگان
                  </h4>
                  <ul className='space-y-2 text-sm'>
                    {pricingPlans[selectedPlan].free.map((feature, idx) => (
                      <li key={idx} className='flex items-center gap-2'>
                        <CheckCircle className='h-4 w-4 text-green-600 flex-shrink-0' />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className='font-semibold mb-4 text-primary'>
                    💎 امکانات پولی
                  </h4>
                  <ul className='space-y-2 text-sm'>
                    {pricingPlans[selectedPlan].modules.map((module, idx) => (
                      <li key={idx} className='flex items-center gap-2'>
                        <Star className='h-4 w-4 text-primary flex-shrink-0' />
                        {module}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* User Count Selector */}
              <div className='mt-10 p-4 bg-muted/50 rounded-lg border'>
                <label
                  htmlFor='user-count'
                  className='block text-sm font-medium mb-3'
                >
                  تعداد کاربران: {userCount}
                </label>
                <input
                  id='user-count'
                  type='range'
                  min='1'
                  max='50'
                  value={userCount}
                  onChange={(e) =>
                    setUserCount(Number.parseInt(e.target.value))
                  }
                  className='w-full accent-primary'
                  aria-label={`انتخاب تعداد کاربران (اکنون: ${userCount})`}
                />
                <div className='text-center mt-4'>
                  <div className='text-xl lg:text-2xl font-bold text-primary'>
                    ${pricingPlans[selectedPlan].price * userCount}/ماه
                  </div>
                  <div className='text-xs lg:text-sm text-muted-foreground'>
                    قیمت کل برای {userCount} کاربر
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
