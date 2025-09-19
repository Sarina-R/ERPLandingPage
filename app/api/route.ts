import { NextResponse } from 'next/server'

const data = [
  {
    name: 'مدیریت دانش',
    category: 'productivity',
    enName: 'knowledge',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(1).svg',
    content: {
      img: 'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/Screenshot%202025-09-03%20114727.png',
      heroSection: {
        title: 'سیستم مدیریت دانش هوشمند',
        desc: 'تمام اطلاعات و دانش سازمان خود را در یک مکان متمرکز کنید. با ابزارهای قدرتمند جستجو و سازماندهی، به راحتی به اطلاعات مورد نیاز دسترسی پیدا کنید.',
        ctaText: 'شروع رایگان',
        image: '/images/knowledge-hero.webp',
      },
      featureShowcase: [
        {
          title: 'ویرایشگر متن پیشرفته',
          desc: 'با استفاده از میانبرهای قدرتمند، محتوای خود را در بهترین شکل ممکن ارائه دهید',
          image:
            'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/Screenshot%202025-09-03%20114727.png',
        },
        {
          title: 'سازماندهی انعطاف‌پذیر',
          desc: 'محتوای خود را با فیلدهای سفارشی مرتب کرده و با نماهای شخصی‌سازی شده مرور کنید',
          image:
            'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/Screenshot%202025-09-03%20114727.png',
        },
      ],
      interactiveElements: [
        {
          type: 'demo',
          title: 'آزمایش رایگان',
          desc: 'سیستم مدیریت دانش را به مدت 15 روز رایگان امتحان کنید',
          image:
            'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/Screenshot%202025-09-03%20114727.png',
        },
        {
          type: 'demo0',
          title: 'آزمایش رایگان',
          desc: 'سیستم مدیریت دانش را به مدت 15 روز رایگان امتحان کنید',
          image:
            'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/Screenshot%202025-09-03%20114727.png',
        },
      ],
      imageGallery: [
        'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/Screenshot%202025-09-03%20114727.png',
        'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/Screenshot%202025-09-03%20114727.png',
        'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/Screenshot%202025-09-03%20114727.png',
      ],
      testimonials: [
        {
          name: 'علی احمدی',
          position: 'مدیر فناوری اطلاعات',
          company: 'شرکت نوآوری پارس',
          content:
            'سیستم مدیریت دانش به ما کمک کرد تا تمام اطلاعات پراکنده سازمان را در یک مکان جمع‌آوری کنیم',
          avatar: '/images/testimonial-1.webp',
          companyLogo: '/images/company-1.webp',
        },
      ],
      cta: {
        title: 'آماده شروع هستید؟',
        desc: 'همین امروز سیستم مدیریت دانش خود را راه‌اندازی کنید',
        primaryButton: 'شروع رایگان',
        secondaryButton: 'مشاهده دمو',
      },
    },
  },
  {
    name: 'حسابداری',
    category: 'finance',
    enName: 'accounting',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(2).svg',
    content: {
      heroSection: {
        title: 'حسابداری هوشمند و کامل',
        desc: 'تمام امور مالی کسب‌وکار خود را با نرم‌افزار حسابداری پیشرفته مدیریت کنید. از صدور فاکتور تا گزارش‌گیری مالی، همه چیز در یک مکان.',
        ctaText: 'شروع رایگان',
        image: '/images/accounting-hero.webp',
      },
      featureShowcase: [
        {
          title: 'صدور فاکتور آنلاین',
          desc: 'فاکتورهای حرفه‌ای ایجاد کرده و به راحتی برای مشتریان ارسال کنید',
          image: '/images/accounting-invoice.webp',
        },
        {
          title: 'گزارش‌گیری مالی',
          desc: 'گزارش‌های مالی جامع و دقیق برای تصمیم‌گیری‌های بهتر',
          image: '/images/accounting-reports.webp',
        },
        {
          title: 'مدیریت بانک',
          desc: 'تطبیق خودکار تراکنش‌های بانکی و مدیریت حساب‌های مختلف',
          image: '/images/accounting-bank.webp',
        },
      ],
      interactiveElements: [
        {
          type: 'calculator',
          title: 'محاسبه مالیات',
          desc: 'مالیات معاملات خود را به راحتی محاسبه کنید',
        },
      ],
      imageGallery: [
        '/images/accounting-gallery-1.webp',
        '/images/accounting-gallery-2.webp',
        '/images/accounting-gallery-3.webp',
      ],
      testimonials: [
        {
          name: 'مریم رضایی',
          position: 'مدیر مالی',
          company: 'گروه صنعتی آریا',
          content:
            'با این نرم‌افزار، زمان صدور فاکتور و گزارش‌گیری مالی ما به یک سوم کاهش یافت',
          avatar: '/images/testimonial-2.webp',
          companyLogo: '/images/company-2.webp',
        },
      ],
      cta: {
        title: 'حسابداری خود را دیجیتال کنید',
        desc: 'امروز شروع کنید و از مزایای حسابداری هوشمند بهره‌مند شوید',
        primaryButton: 'شروع رایگان',
        secondaryButton: 'درخواست دمو',
      },
    },
  },
  {
    name: 'بازاریابی اجتماعی',
    category: 'marketing',
    enName: 'social-marketing',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(3).svg',
    content: {
      heroSection: {
        title: 'بازاریابی اجتماعی حرفه‌ای',
        desc: 'کمپین‌های بازاریابی قدرتمند در شبکه‌های اجتماعی ایجاد کنید. محتوا را برنامه‌ریزی کرده، عملکرد را تجزیه و تحلیل کنید و فروش را افزایش دهید.',
        ctaText: 'شروع کمپین',
        image: '/images/social-marketing-hero.webp',
      },
      featureShowcase: [
        {
          title: 'برنامه‌ریزی محتوا',
          desc: 'پست‌های خود را از قبل برنامه‌ریزی کرده و در زمان مناسب منتشر کنید',
          image: '/images/social-scheduling.webp',
        },
        {
          title: 'آنالیز عملکرد',
          desc: 'عملکرد کمپین‌های خود را با گزارش‌های تفصیلی پیگیری کنید',
          image: '/images/social-analytics.webp',
        },
        {
          title: 'مدیریت چند پلتفرم',
          desc: 'تمام شبکه‌های اجتماعی خود را از یک مکان مدیریت کنید',
          image: '/images/social-multiplatform.webp',
        },
      ],
      interactiveElements: [
        {
          type: 'content-planner',
          title: 'برنامه‌ریز محتوا',
          desc: 'محتوای یک ماه آینده خود را برنامه‌ریزی کنید',
        },
      ],
      imageGallery: [
        '/images/social-gallery-1.webp',
        '/images/social-gallery-2.webp',
        '/images/social-gallery-3.webp',
      ],
      testimonials: [
        {
          name: 'حسین کریمی',
          position: 'مدیر بازاریابی',
          company: 'استارتاپ تک',
          content:
            'با این ابزار، تعامل مشتریان ما در شبکه‌های اجتماعی ۳۰۰ درصد افزایش یافت',
          avatar: '/images/testimonial-3.webp',
          companyLogo: '/images/company-3.webp',
        },
      ],
      cta: {
        title: 'کمپین بعدی خود را شروع کنید',
        desc: 'با ابزارهای حرفه‌ای بازاریابی اجتماعی، برند خود را به سطح بعدی برسانید',
        primaryButton: 'شروع کمپین',
        secondaryButton: 'مشاهده نمونه کار',
      },
    },
  },
  {
    name: 'CRM',
    category: 'sales',
    enName: 'CRM',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(4).svg',
    content: {
      heroSection: {
        title: 'مدیریت ارتباط با مشتری',
        desc: 'روابط خود با مشتریان را به شکل حرفه‌ای مدیریت کنید. از مرحله اولیه آشنایی تا فروش نهایی، همه فرآیند را کنترل کنید.',
        ctaText: 'شروع فروش',
        image: '/images/crm-hero.webp',
      },
      featureShowcase: [
        {
          title: 'پیگیری مشتریان',
          desc: 'تمام اطلاعات مشتریان و تاریخچه تعاملات را در یک مکان نگهداری کنید',
          image: '/images/crm-tracking.webp',
        },
        {
          title: 'مدیریت فرصت‌های فروش',
          desc: 'فرصت‌های فروش را شناسایی و پیگیری کرده تا به فروش تبدیل کنید',
          image: '/images/crm-opportunities.webp',
        },
        {
          title: 'گزارش‌گیری فروش',
          desc: 'عملکرد فروش خود را با داشبوردهای تعاملی تجزیه و تحلیل کنید',
          image: '/images/crm-reports.webp',
        },
      ],
      interactiveElements: [
        {
          type: 'sales-pipeline',
          title: 'مسیر فروش',
          desc: 'مراحل فروش خود را بصورت تعاملی مدیریت کنید',
        },
      ],
      imageGallery: [
        '/images/crm-gallery-1.webp',
        '/images/crm-gallery-2.webp',
        '/images/crm-gallery-3.webp',
      ],
      testimonials: [
        {
          name: 'سارا موسوی',
          position: 'مدیر فروش',
          company: 'شرکت پیشران',
          content: 'نرخ تبدیل فرصت‌های فروش ما با این سیستم ۴۵ درصد بهبود یافت',
          avatar: '/images/testimonial-4.webp',
          companyLogo: '/images/company-4.webp',
        },
      ],
      cta: {
        title: 'فروش خود را افزایش دهید',
        desc: 'با ابزارهای CRM حرفه‌ای، مشتریان بیشتری جذب کنید',
        primaryButton: 'شروع رایگان',
        secondaryButton: 'درخواست مشاوره',
      },
    },
  },
  // {
  //   name: 'ایمیل مارکتینگ',
  //   category: 'marketing',
  //   enName: 'email-marketing',
  //   content: {
  //     heroSection: {
  //       title: 'ایمیل مارکتینگ هوشمند',
  //       desc: 'کمپین‌های ایمیلی موثر طراحی کنید. با قالب‌های آماده و ابزارهای اتوماسیون، مشتریان را درگیر کرده و فروش را افزایش دهید.',
  //       ctaText: 'شروع کمپین',
  //       image: '/images/email-marketing-hero.webp',
  //     },
  //     featureShowcase: [
  //       {
  //         title: 'طراحی ایمیل',
  //         desc: 'با ویرایشگر drag & drop، ایمیل‌های زیبا و جذاب طراحی کنید',
  //         image: '/images/email-design.webp',
  //       },
  //       {
  //         title: 'اتوماسیون',
  //         desc: 'سیناریوهای خودکار برای ارسال ایمیل‌ها بر اساس رفتار مشتریان',
  //         image: '/images/email-automation.webp',
  //       },
  //       {
  //         title: 'آنالیز عملکرد',
  //         desc: 'نرخ باز شدن، کلیک و تبدیل ایمیل‌های خود را پیگیری کنید',
  //         image: '/images/email-analytics.webp',
  //       },
  //     ],
  //     interactiveElements: [
  //       {
  //         type: 'email-builder',
  //         title: 'سازنده ایمیل',
  //         desc: 'ایمیل خود را با ابزار طراحی تعاملی بسازید',
  //       },
  //     ],
  //     imageGallery: [
  //       '/images/email-gallery-1.webp',
  //       '/images/email-gallery-2.webp',
  //       '/images/email-gallery-3.webp',
  //     ],
  //     testimonials: [
  //       {
  //         name: 'امیر حسینی',
  //         position: 'مدیر دیجیتال مارکتینگ',
  //         company: 'فروشگاه آنلاین مهر',
  //         content: 'نرخ باز شدن ایمیل‌های ما با این پلتفرم از ۱۵٪ به ۴۲٪ رسید',
  //         avatar: '/images/testimonial-5.webp',
  //         companyLogo: '/images/company-5.webp',
  //       },
  //     ],
  //     cta: {
  //       title: 'کمپین ایمیلی خود را شروع کنید',
  //       desc: 'همین امروز اولین کمپین ایمیل مارکتینگ خود را راه‌اندازی کنید',
  //       primaryButton: 'شروع رایگان',
  //       secondaryButton: 'مشاهده قالب‌ها',
  //     },
  //   },
  // },
  {
    name: 'استودیو',
    category: 'creative',
    enName: 'studio',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(5).svg',
  },
  {
    name: 'اشتراکات',
    category: 'finance',
    enName: 'subscription',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(6).svg',
  },
  {
    name: 'اجاره',
    category: 'finance',
    enName: 'rental',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(7).svg',
  },
  {
    name: 'فروشگاه',
    category: 'sales',
    enName: 'point-of-sale',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(8).svg',
  },
  {
    name: 'بحث و گفتگو',
    category: 'communication',
    enName: 'discuss',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(9).svg',
  },
  {
    name: 'اسناد',
    category: 'productivity',
    enName: 'documents',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(10).svg',
  },
  {
    name: 'پروژه',
    category: 'productivity',
    enName: 'project',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(11).svg',
  },
  {
    name: 'حضور و غیاب',
    category: 'hr',
    enName: 'timesheets',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(12).svg',
  },
  {
    name: 'خدمات میدانی',
    category: 'operations',
    enName: 'field-service',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(13).svg',
  },
  {
    name: 'برنامه‌ریزی',
    category: 'productivity',
    enName: 'planning',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(14).svg',
  },
  {
    name: 'پشتیبانی',
    category: 'support',
    enName: 'helpdesk',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(15).svg',
  },
  {
    name: 'وب‌سایت',
    category: 'creative',
    enName: 'website',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(16).svg',
  },
  {
    name: 'بازاریابی اجتماعی',
    category: 'marketing',
    enName: 'social-marketing',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(17).svg',
  },
  {
    name: 'ایمیل مارکتینگ',
    category: 'marketing',
    enName: 'email-marketing',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(18).svg',
  },
  {
    name: 'خرید',
    category: 'operations',
    enName: 'purchase',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(19).svg',
  },
  {
    name: 'موجودی انبار',
    category: 'operations',
    enName: 'inventory',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(20).svg',
  },
  {
    name: 'تولید',
    category: 'operations',
    enName: 'manufacturing',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(21).svg',
  },
  {
    name: 'فروش',
    category: 'sales',
    enName: 'sales',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(22).svg',
  },
  {
    name: 'منابع انسانی',
    category: 'hr',
    enName: 'hr',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(23).svg',
  },
  {
    name: 'داشبورد',
    category: 'analytics',
    enName: 'dashboard',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(24).svg',
  },
]
export async function GET() {
  return NextResponse.json(data)
}
