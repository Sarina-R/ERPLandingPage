const HeroSection = () => {
  return (
    <section className='border-b'>
      <div className='text-center max-w-3xl mx-auto'>
        <div className='mx-10 border-x py-16'>
          <h1 className='relative text-3xl md:text-4xl font-bold mb-4 border-y py-6 px-3 text-gray-900 dark:text-white'>
            سیستم مدیریت منابع سازمانی
            {/* Top-left cross */}
            <span className='absolute -top-[10px] -left-[10px] w-5 h-5 flex items-center justify-center'>
              <span className='absolute w-px h-full bg-black/30 dark:bg-white/30'></span>
              <span className='absolute h-px w-full bg-black/30 dark:bg-white/30'></span>
            </span>
            {/* Bottom-right cross */}
            <span className='absolute -bottom-[10px] -right-[10px] w-5 h-5 flex items-center justify-center'>
              <span className='absolute w-px h-full bg-black/30 dark:bg-white/30'></span>
              <span className='absolute h-px w-full bg-black/30 dark:bg-white/30'></span>
            </span>
          </h1>

          <p className='text-base md:text-lg text-gray-600 dark:text-white/70 mb-6 max-w-xl mx-auto px-3'>
            راه‌حل یکپارچه برای مدیریت تمام فرآیندهای کسب‌وکار شما. از حسابداری
            تا فروش، همه چیز در یک پلتفرم.
          </p>

          <div className='flex flex-col sm:flex-row gap-3 justify-center'>
            <button className='bg-gray-900 dark:bg-white text-white dark:text-black px-4 py-2 rounded-md font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition w-40 mx-auto sm:mx-0'>
              درخواست دمو
            </button>
            <button className='bg-white dark:bg-black border border-black/20 dark:border-white/20 px-4 py-2 rounded-md font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition w-40 mx-auto sm:mx-0'>
              مشاهده قیمت‌ها
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
