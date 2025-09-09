import { FC, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { CheckCircle, Star } from 'lucide-react' // Adjust import based on your icon library

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
    <section className='py-20 px-4 bg-background' dir='rtl'>
      <div className='max-w-6xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold mb-4'>قیمت‌گذاری هوشمند</h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            فقط برای آنچه استفاده می‌کنید پرداخت کنید. برخی امکانات رایگان، برخی
            پولی.
          </p>
        </div>

        {/* Benefits Section */}
        <div className='mb-12'>
          <h3 className='text-2xl font-semibold text-center mb-6'>مزایای ما</h3>
          <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {benefits.map((benefit, idx) => (
              <li
                key={idx}
                className='flex items-center gap-2 text-foreground text-sm'
              >
                <CheckCircle className='h-5 w-5 text-green-600 flex-shrink-0' />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Plan Selection */}
        <div className='flex justify-center mb-8'>
          <div className='bg-muted p-1 rounded-lg flex gap-1'>
            {Object.entries(pricingPlans).map(([key, plan]) => (
              <button
                key={key}
                onClick={() => setSelectedPlan(key as keyof PricingPlans)}
                className={`px-6 py-2 rounded-md transition-all ${
                  selectedPlan === key
                    ? 'bg-background shadow-sm text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                aria-pressed={selectedPlan === key}
              >
                {plan.name}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Plan Details */}
        <div className='max-w-4xl mx-auto'>
          <Card className='border-2 border-primary/20'>
            <CardHeader className='text-center'>
              <CardTitle className='text-2xl'>
                {pricingPlans[selectedPlan].name}
              </CardTitle>
              <div className='text-4xl font-bold text-primary'>
                ${pricingPlans[selectedPlan].price}
                <span className='text-lg text-muted-foreground'>
                  /ماه/کاربر
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className='grid md:grid-cols-2 gap-8'>
                <div>
                  <h4 className='font-semibold mb-4 text-green-600'>
                    ✓ امکانات رایگان
                  </h4>
                  <ul className='space-y-2'>
                    {pricingPlans[selectedPlan].free.map((feature, idx) => (
                      <li key={idx} className='flex items-center gap-2 text-sm'>
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
                  <ul className='space-y-2'>
                    {pricingPlans[selectedPlan].modules.map((module, idx) => (
                      <li key={idx} className='flex items-center gap-2 text-sm'>
                        <Star className='h-4 w-4 text-primary flex-shrink-0' />
                        {module}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* User Count Selector */}
              <div className='mt-8 p-4 bg-muted/50 rounded-lg'>
                <label
                  htmlFor='user-count'
                  className='block text-sm font-medium mb-2'
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
                  className='w-full'
                  aria-label={`انتخاب تعداد کاربران (اکنون: ${userCount})`}
                />
                <div className='text-center mt-4'>
                  <div className='text-2xl font-bold text-primary'>
                    ${pricingPlans[selectedPlan].price * userCount}/ماه
                  </div>
                  <div className='text-sm text-muted-foreground'>
                    قیمت کل برای {userCount} کاربر
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
