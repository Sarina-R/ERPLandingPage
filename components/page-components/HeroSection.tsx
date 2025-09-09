const HeroSection = () => {
  return (
    <section className='border-b'>
      <div className='text-center max-w-4xl mx-auto'>
        <div className='mx-14 border-x py-24'>
          <h1 className='relative text-4xl md:text-5xl font-bold mb-6 border-y py-8 px-4 text-gray-900 dark:text-white'>
            سیستم مدیریت منابع سازمانی
            {/* Top-left cross */}
            <span className='absolute -top-[14px] -left-[14px] w-7 h-7 flex items-center justify-center'>
              <span className='absolute w-px h-full bg-black/30 dark:bg-white/30'></span>
              <span className='absolute h-px w-full bg-black/30 dark:bg-white/30'></span>
            </span>
            {/* Bottom-right cross */}
            <span className='absolute -bottom-[14px] -right-[14px] w-7 h-7 flex items-center justify-center'>
              <span className='absolute w-px h-full bg-black/30 dark:bg-white/30'></span>
              <span className='absolute h-px w-full bg-black/30 dark:bg-white/30'></span>
            </span>
          </h1>

          <p className='text-lg md:text-xl text-gray-600 dark:text-white/70 mb-8 max-w-2xl mx-auto px-4'>
            راه‌حل یکپارچه برای مدیریت تمام فرآیندهای کسب‌وکار شما. از حسابداری
            تا فروش، همه چیز در یک پلتفرم.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='bg-gray-900 dark:bg-white text-white dark:text-black px-6 py-3 rounded-md font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition w-52 mx-auto sm:mx-0'>
              درخواست دمو
            </button>
            <button className='bg-white dark:bg-black border border-black/20 dark:border-white/20 px-6 py-3 rounded-md font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition w-52 mx-auto sm:mx-0'>
              مشاهده قیمت‌ها
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
