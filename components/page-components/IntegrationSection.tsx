import { Button } from '../ui/button'

const IntegrationSection = () => {
  return (
    <section className='py-20 px-4 mt-12'>
      <div className='max-w-7xl mx-auto'>
        {/* Integration Apps Grid */}
        <div className='relative'>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto'>
            {/* Row 1 */}
            <div className='flex flex-col items-center group'>
              <div className='w-16 h-16 bg-background rounded-lg shadow-sm flex items-center justify-center mb-2 group-hover:shadow-md transition-shadow'>
                <div className='w-8 h-8 bg-gradient-to-br from-orange-400 to-yellow-500 rounded'></div>
              </div>
              <span className='text-sm font-medium'>حسابداری</span>
            </div>

            <div className='flex flex-col items-center group'>
              <div className='w-16 h-16 bg-background rounded-lg shadow-sm flex items-center justify-center mb-2 group-hover:shadow-md transition-shadow'>
                <div className='w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded'></div>
              </div>
              <span className='text-sm font-medium'>مدیریت دانش</span>
            </div>

            <div className='flex flex-col items-center group'>
              <div className='w-16 h-16 bg-background rounded-lg shadow-sm flex items-center justify-center mb-2 group-hover:shadow-md transition-shadow'>
                <div className='w-8 h-8 bg-gradient-to-br from-teal-400 to-blue-500 rounded'></div>
              </div>
              <span className='text-sm font-medium'>امضای دیجیتال</span>
            </div>

            <div className='flex flex-col items-center group'>
              <div className='w-16 h-16 bg-background rounded-lg shadow-sm flex items-center justify-center mb-2 group-hover:shadow-md transition-shadow'>
                <div className='w-8 h-8 bg-gradient-to-br from-cyan-400 to-teal-500 rounded'></div>
              </div>
              <span className='text-sm font-medium'>CRM</span>
            </div>

            <div className='flex flex-col items-center group'>
              <div className='w-16 h-16 bg-background rounded-lg shadow-sm flex items-center justify-center mb-2 group-hover:shadow-md transition-shadow'>
                <div className='w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded'></div>
              </div>
              <span className='text-sm font-medium'>استودیو</span>
            </div>

            <div className='flex flex-col items-center group'>
              <div className='w-16 h-16 bg-background rounded-lg shadow-sm flex items-center justify-center mb-2 group-hover:shadow-md transition-shadow'>
                <div className='w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded'></div>
              </div>
              <span className='text-sm font-medium'>اشتراکات</span>
            </div>

            {/* Row 2 */}
            <div className='flex flex-col items-center group'>
              <div className='w-16 h-16 bg-background rounded-lg shadow-sm flex items-center justify-center mb-2 group-hover:shadow-md transition-shadow'>
                <div className='w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded'></div>
              </div>
              <span className='text-sm font-medium'>اجاره</span>
            </div>

            <div className='flex flex-col items-center group'>
              <div className='w-16 h-16 bg-background rounded-lg shadow-sm flex items-center justify-center mb-2 group-hover:shadow-md transition-shadow'>
                <div className='w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded'></div>
              </div>
              <span className='text-sm font-medium'>فروشگاه</span>
            </div>

            <div className='flex flex-col items-center group'>
              <div className='w-16 h-16 bg-background rounded-lg shadow-sm flex items-center justify-center mb-2 group-hover:shadow-md transition-shadow'>
                <div className='w-8 h-8 bg-gradient-to-br from-orange-600 to-red-600 rounded'></div>
              </div>
              <span className='text-sm font-medium'>بحث و گفتگو</span>
            </div>

            <div className='flex flex-col items-center group'>
              <div className='w-16 h-16 bg-background rounded-lg shadow-sm flex items-center justify-center mb-2 group-hover:shadow-md transition-shadow'>
                <div className='w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded'></div>
              </div>
              <span className='text-sm font-medium'>اسناد</span>
            </div>

            <div className='flex flex-col items-center group'>
              <div className='w-16 h-16 bg-background rounded-lg shadow-sm flex items-center justify-center mb-2 group-hover:shadow-md transition-shadow'>
                <div className='w-8 h-8 bg-gradient-to-br from-teal-500 to-green-500 rounded'></div>
              </div>
              <span className='text-sm font-medium'>پروژه</span>
            </div>

            <div className='flex flex-col items-center group'>
              <div className='w-16 h-16 bg-background rounded-lg shadow-sm flex items-center justify-center mb-2 group-hover:shadow-md transition-shadow'>
                <div className='w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded'></div>
              </div>
              <span className='text-sm font-medium'>حضور و غیاب</span>
            </div>

            {/* Row 3 */}
            <div className='flex flex-col items-center group'>
              <div className='w-16 h-16 bg-background rounded-lg shadow-sm flex items-center justify-center mb-2 group-hover:shadow-md transition-shadow'>
                <div className='w-8 h-8 bg-gradient-to-br from-teal-600 to-blue-600 rounded'></div>
              </div>
              <span className='text-sm font-medium'>خدمات میدانی</span>
            </div>

            <div className='flex flex-col items-center group'>
              <div className='w-16 h-16 bg-background rounded-lg shadow-sm flex items-center justify-center mb-2 group-hover:shadow-md transition-shadow'>
                <div className='w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 rounded'></div>
              </div>
              <span className='text-sm font-medium'>برنامه‌ریزی</span>
            </div>

            <div className='flex flex-col items-center group'>
              <div className='w-16 h-16 bg-background rounded-lg shadow-sm flex items-center justify-center mb-2 group-hover:shadow-md transition-shadow'>
                <div className='w-8 h-8 bg-gradient-to-br from-green-500 to-teal-500 rounded'></div>
              </div>
              <span className='text-sm font-medium'>پشتیبانی</span>
            </div>

            <div className='flex flex-col items-center group'>
              <div className='w-16 h-16 bg-background rounded-lg shadow-sm flex items-center justify-center mb-2 group-hover:shadow-md transition-shadow'>
                <div className='w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-500 rounded'></div>
              </div>
              <span className='text-sm font-medium'>وب‌سایت</span>
            </div>

            <div className='flex flex-col items-center group'>
              <div className='w-16 h-16 bg-background rounded-lg shadow-sm flex items-center justify-center mb-2 group-hover:shadow-md transition-shadow'>
                <div className='w-8 h-8 bg-gradient-to-br from-red-500 to-pink-500 rounded'></div>
              </div>
              <span className='text-sm font-medium'>بازاریابی اجتماعی</span>
            </div>

            <div className='flex flex-col items-center group'>
              <div className='w-16 h-16 bg-background rounded-lg shadow-sm flex items-center justify-center mb-2 group-hover:shadow-md transition-shadow'>
                <div className='w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded'></div>
              </div>
              <span className='text-sm font-medium'>ایمیل مارکتینگ</span>
            </div>

            {/* Row 4 */}
            <div className='flex flex-col items-center group'>
              <div className='w-16 h-16 bg-background rounded-lg shadow-sm flex items-center justify-center mb-2 group-hover:shadow-md transition-shadow'>
                <div className='w-8 h-8 bg-gradient-to-br from-teal-600 to-green-600 rounded'></div>
              </div>
              <span className='text-sm font-medium'>خرید</span>
            </div>

            <div className='flex flex-col items-center group'>
              <div className='w-16 h-16 bg-background rounded-lg shadow-sm flex items-center justify-center mb-2 group-hover:shadow-md transition-shadow'>
                <div className='w-8 h-8 bg-gradient-to-br from-purple-600 to-indigo-600 rounded'></div>
              </div>
              <span className='text-sm font-medium'>موجودی انبار</span>
            </div>

            <div className='flex flex-col items-center group'>
              <div className='w-16 h-16 bg-background rounded-lg shadow-sm flex items-center justify-center mb-2 group-hover:shadow-md transition-shadow'>
                <div className='w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-500 rounded'></div>
              </div>
              <span className='text-sm font-medium'>تولید</span>
            </div>

            <div className='flex flex-col items-center group'>
              <div className='w-16 h-16 bg-background rounded-lg shadow-sm flex items-center justify-center mb-2 group-hover:shadow-md transition-shadow'>
                <div className='w-8 h-8 bg-gradient-to-br from-purple-500 to-red-500 rounded'></div>
              </div>
              <span className='text-sm font-medium'>فروش</span>
            </div>

            <div className='flex flex-col items-center group'>
              <div className='w-16 h-16 bg-background rounded-lg shadow-sm flex items-center justify-center mb-2 group-hover:shadow-md transition-shadow'>
                <div className='w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded'></div>
              </div>
              <span className='text-sm font-medium'>منابع انسانی</span>
            </div>

            <div className='flex flex-col items-center group'>
              <div className='w-16 h-16 bg-background rounded-lg shadow-sm flex items-center justify-center mb-2 group-hover:shadow-md transition-shadow'>
                <div className='w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded'></div>
              </div>
              <span className='text-sm font-medium'>داشبورد</span>
            </div>
          </div>

          {/* Curved Arrows and Labels */}
          <div className='absolute inset-0 pointer-events-none'>
            {/* Top curved arrows */}
            <svg
              className='absolute top-0 left-1/4 w-32 h-16'
              viewBox='0 0 128 64'
            >
              <path
                d='M10 50 Q 64 10 118 50'
                stroke='currentColor'
                strokeWidth='2'
                fill='none'
                className='text-muted-foreground/40'
              />
              <text
                x='64'
                y='25'
                textAnchor='middle'
                className='text-xs fill-muted-foreground font-medium'
              >
                QuickBooks
              </text>
            </svg>

            <svg
              className='absolute top-0 right-1/4 w-32 h-16'
              viewBox='0 0 128 64'
            >
              <path
                d='M10 50 Q 64 10 118 50'
                stroke='currentColor'
                strokeWidth='2'
                fill='none'
                className='text-muted-foreground/40'
              />
              <text
                x='64'
                y='25'
                textAnchor='middle'
                className='text-xs fill-muted-foreground font-medium'
              >
                Salesforce
              </text>
            </svg>

            {/* Side curved arrows */}
            <svg
              className='absolute left-0 top-1/3 w-24 h-32'
              viewBox='0 0 96 128'
            >
              <path
                d='M80 10 Q 20 64 80 118'
                stroke='currentColor'
                strokeWidth='2'
                fill='none'
                className='text-muted-foreground/40'
              />
              <text
                x='35'
                y='68'
                textAnchor='middle'
                className='text-xs fill-muted-foreground font-medium'
                transform='rotate(-90 35 68)'
              >
                Slack
              </text>
            </svg>

            <svg
              className='absolute right-0 top-1/3 w-24 h-32'
              viewBox='0 0 96 128'
            >
              <path
                d='M16 10 Q 76 64 16 118'
                stroke='currentColor'
                strokeWidth='2'
                fill='none'
                className='text-muted-foreground/40'
              />
              <text
                x='61'
                y='68'
                textAnchor='middle'
                className='text-xs fill-muted-foreground font-medium'
                transform='rotate(90 61 68)'
              >
                Shopify
              </text>
            </svg>

            {/* Bottom curved arrows */}
            <svg
              className='absolute bottom-0 left-1/3 w-32 h-16'
              viewBox='0 0 128 64'
            >
              <path
                d='M10 14 Q 64 54 118 14'
                stroke='currentColor'
                strokeWidth='2'
                fill='none'
                className='text-muted-foreground/40'
              />
              <text
                x='64'
                y='45'
                textAnchor='middle'
                className='text-xs fill-muted-foreground font-medium'
              >
                Zendesk
              </text>
            </svg>

            <svg
              className='absolute bottom-0 right-1/3 w-32 h-16'
              viewBox='0 0 128 64'
            >
              <path
                d='M10 14 Q 64 54 118 14'
                stroke='currentColor'
                strokeWidth='2'
                fill='none'
                className='text-muted-foreground/40'
              />
              <text
                x='64'
                y='45'
                textAnchor='middle'
                className='text-xs fill-muted-foreground font-medium'
              >
                HubSpot
              </text>
            </svg>
          </div>

          {/* Bottom text */}
          <div className='text-center mt-12'>
            <div className='inline-flex items-center gap-2 text-sm text-muted-foreground'>
              <div className='w-8 h-4 bg-muted-foreground/20 rounded-full'></div>
              <span>تصور کنید بدون Odoo</span>
              <Button
                variant='link'
                className='text-sm p-0 h-auto text-primary'
              >
                مشاهده همه اپلیکیشن‌ها ←
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntegrationSection
