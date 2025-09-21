import { NextResponse } from 'next/server'

const data = [
  {
    name: 'مدیریت دانش',
    category: 'productivity',
    enName: 'knowledge',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(24).svg',
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
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(23).svg',
    content: {
      img: 'https://odoocdn.com/openerp_website/static/src/img/apps/accounting/accounting-hero-image.webp',
      heroSection: {
        title: 'حسابداری مدرن و سریع',
        desc: 'با نرم‌افزار حسابداری اودوو، تجربه‌ای متفاوت از مدیریت مالی داشته باشید. رابط کاربری سریع، بدون نیاز به ورود دستی داده‌ها و گزارش‌گیری لحظه‌ای.',
        ctaText: 'شروع رایگان',
        image: '/images/accounting-hero.webp',
      },
      featureShowcase: [
        {
          title: 'سرعت بی‌نظیر',
          desc: 'عملیات حسابداری در کمتر از 90 میلی‌ثانیه پردازش می‌شود، سریع‌تر از یک چشم به هم زدن!',
          image:
            'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-images/Screenshot%202025-09-20%20180948.png',
        },
        {
          title: 'بدون نیاز به ورود داده',
          desc: 'با هوش مصنوعی پیشرفته، 98% داده‌های فاکتور به صورت خودکار شناسایی می‌شوند.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/accounting/accounting-vendor-bill.webp',
        },
        {
          title: 'تجربه موبایلی',
          desc: 'هزینه‌ها را با موبایل ثبت کنید و هوش مصنوعی بقیه کار را انجام دهد.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/accounting/accounting-mobile-01.webp',
        },
        {
          title: 'تطبیق بانکی هوشمند',
          desc: 'اتصال به 28,000 بانک در سراسر جهان و تطبیق 95% تراکنش‌ها به صورت خودکار.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/accounting/accounting-mobile-02.webp',
        },
      ],
      interactiveElements: [
        {
          type: 'interactive-demo',
          title: 'پیش‌نمایش فاکتور الکترونیکی',
          desc: 'فاکتورهای الکترونیکی را در فرمت‌های مختلف مانند Peppol ایجاد، ارسال و دریافت کنید. با چند کلیک، فرآیند فاکتورسازی را تجربه کنید.',
          image:
            'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-images/Screenshot%202025-09-20%20175751.png',
          action: {
            label: 'امتحان کنید',
            url: '/demo/invoicing',
          },
        },
        {
          type: 'interactive-demo',
          title: 'تجربه گزارش‌گیری لحظه‌ای',
          desc: 'گزارش‌های مالی تعاملی و دقیق را در لحظه مشاهده کنید و تصمیم‌گیری‌های هوشمندانه‌تری داشته باشید.',
          image:
            'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-images/Screenshot%202025-09-20%20175612.png',
          action: {
            label: 'مشاهده دمو',
            url: '/demo/reporting',
          },
        },
        {
          type: 'interactive-demo',
          title: 'مدیریت جریان نقدی',
          desc: 'جریان نقدی ورودی و خروجی را به صورت بلادرنگ رصد کنید و مدیریت مالی خود را بهبود دهید.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/accounting/accounting-vendor-bill.webp',
          action: {
            label: 'شروع دمو',
            url: '/demo/cashflow',
          },
        },
      ],
      imageGallery: [
        'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-images/Screenshot%202025-09-20%20175751.png',
        'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-images/Screenshot%202025-09-20%20175612.png',
        'https://odoocdn.com/openerp_website/static/src/img/apps/accounting/accounting-vendor-bill.webp',
        'https://odoocdn.com/openerp_website/static/src/img/apps/accounting/accounting-mobile-02.webp',
      ],
      testimonials: [
        {
          name: 'ویم ون دن براند',
          position: 'مدیر بخش مالیات، حقوقی و حسابداری',
          company: 'KPMG',
          content:
            'با اودوو، بستن مالیات VAT که قبلاً 4 روز طول می‌کشید، حالا در 3 ساعت انجام می‌شود و خدمات بهتری به مشتریان ارائه می‌دهیم.',
          avatar: '/images/testimonial-wim.webp',
          companyLogo: '/images/kpmg-logo.webp',
        },
      ],
      cta: {
        title: 'رشد کسب‌وکار خود را آزاد کنید',
        desc: 'با حسابداری اودوو، مدیریت مالی خود را ساده و هوشمند کنید. همین حالا شروع کنید!',
        primaryButton: 'شروع رایگان',
        secondaryButton: 'اطلاعات بیشتر',
      },
    },
  },
  {
    name: 'امضا',
    category: 'marketing',
    enName: 'sign',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(22).svg',
    content: {
      img: 'https://odoocdn.com/openerp_website/static/src/img/apps/sign/hero_image.webp',
      heroSection: {
        title: 'امضای اسناد با آویس، به همین سادگی!',
        desc: 'با آویس ساین، اسنادت رو به‌راحتی آنلاین بفرست، امضا کن و تأیید بگیر. یه راه ساده و سریع برای همه کارهای کسب‌وکارت!',
        ctaText: 'همین حالا شروع کن',
        image: '/images/avis-sign-hero.webp',
      },
      featureShowcase: [
        {
          title: 'خودکارش کن، امضا بزن',
          desc: 'فیلدهای اماده یا قابل ویرایش رو فقط drag-and-drop کن. کارای تکراری رو با قالب‌های آماده خودکار کن. یه بار سندت رو بنویس و خیلی پربازده‌تر کار کن',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/sign/simplify_automate_sign.webp',
        },
        {
          title: 'هرجا، هر وقت',
          desc: 'فیلدهای اماده یا قابل ویرایش رو فقط بکش و رها کن. کارای تکراری رو با قالب‌های آماده خودکار کن. یه بار سندت رو بنویس و خیلی پربازده‌تر کار کن!',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/sign/sign_online.webp',
        },
        {
          title: 'فرآیند امضات دست خودته!',
          desc: 'وضعیت سند رو لحظه‌ای ببین، درخواست امضا و یادآوری‌ها رو سریع بفرست و همیشه از پیشرفت قرارداد‌هات باخبر باش.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/sign/control.webp',
        },
      ],
      interactiveElements: [
        {
          type: 'interactive-demo',
          title: 'امضای الکترونیکی',
          desc: 'با امضا کردن آنلاین PDFها هم تو زمان صرفه جویی میکنی، هم تو پول و هم درخت‌ها رو نجات میدی!',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/sign/features_adopt.webp',
          action: {
            label: 'بزن بریم',
            url: '/demo/avis-sign',
          },
        },
        {
          type: 'interactive-demo',
          title: 'کاملا قانونی',
          desc: 'مطابق با eIDAS (برای همه کشورهای اروپایی)، قانون ESIGN ایالات متحده (ایالات متحده)، ITA و ICA (هند) و همچنین!',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/sign/features_adopt.webp',
          action: {
            label: 'بزن بریم',
            url: '/demo/avis-sign',
          },
        },
        {
          type: 'interactive-demo',
          title: 'ریمایندر برای اعضا',
          desc: 'میتونی برای اعضات یه ریمایندر اتوماتیک درست کنی تا یادشون بمونه امضا کنن.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/sign/features_reminders.webp',
          action: {
            label: 'یه دمو ببین',
            url: '/demo/avis-sign-tracking',
          },
        },
        {
          type: 'interactive-demo',
          title: 'ترتیب امضا رو خودت بچین',
          desc: 'با آویس مشخص کن کی باید امضا کنه تا همه‌چیز منظم پیش بره و هرکس به موقع باخبر بشه.',
          image:
            'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-images/Screenshot%202025-09-20%20180948.png',
          action: {
            label: 'امتحانش کن',
            url: '/demo/avis-sign-order',
          },
        },
      ],
      imageGallery: [
        'https://odoocdn.com/openerp_website/static/src/img/apps/sign/features_adopt.webp',
        'https://odoocdn.com/openerp_website/static/src/img/apps/sign/features_reminders.webp',
        'https://odoocdn.com/openerp_website/static/src/img/apps/sign/features_adopt.webp',
        'https://odoocdn.com/openerp_website/static/src/img/apps/sign/simplify_automate_sign.webp',
      ],
    },
  },
  {
    name: 'CRM',
    category: 'sales',
    enName: 'CRM',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(21).svg',
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
  {
    name: 'استودیو',
    category: 'creative',
    enName: 'studio',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(20).svg',
  },
  {
    name: 'اشتراکات',
    category: 'finance',
    enName: 'subscription',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(19).svg',
  },
  {
    name: 'اجاره',
    category: 'finance',
    enName: 'rental',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(18).svg',
  },
  {
    name: 'فروشگاه',
    category: 'sales',
    enName: 'point-of-sale',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(17).svg',
  },
  {
    name: 'بحث و گفتگو',
    category: 'communication',
    enName: 'discuss',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(16).svg',
  },
  {
    name: 'اسناد',
    category: 'productivity',
    enName: 'documents',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(15).svg',
  },
  {
    name: 'پروژه',
    category: 'productivity',
    enName: 'project',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(14).svg',
  },
  {
    name: 'حضور و غیاب',
    category: 'hr',
    enName: 'timesheets',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(13).svg',
  },
  {
    name: 'خدمات میدانی',
    category: 'operations',
    enName: 'field-service',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(12).svg',
  },
  {
    name: 'برنامه‌ریزی',
    category: 'productivity',
    enName: 'planning',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(11).svg',
  },
  {
    name: 'پشتیبانی',
    category: 'support',
    enName: 'helpdesk',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(10).svg',
  },
  {
    name: 'وب‌سایت',
    category: 'creative',
    enName: 'website',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(9).svg',
  },
  {
    name: 'بازاریابی اجتماعی',
    category: 'marketing',
    enName: 'social-marketing',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(8).svg',
  },
  {
    name: 'ایمیل مارکتینگ',
    category: 'marketing',
    enName: 'email-marketing',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(7).svg',
  },
  {
    name: 'خرید',
    category: 'operations',
    enName: 'purchase',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(6).svg',
  },
  {
    name: 'موجودی انبار',
    category: 'operations',
    enName: 'inventory',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(5).svg',
  },
  {
    name: 'تولید',
    category: 'operations',
    enName: 'manufacturing',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(4).svg',
  },
  {
    name: 'فروش',
    category: 'sales',
    enName: 'sales',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(3).svg',
  },
  {
    name: 'منابع انسانی',
    category: 'hr',
    enName: 'hr',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(1).svg',
  },
  {
    name: 'داشبورد',
    category: 'analytics',
    enName: 'dashboard',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(2).svg',
  },
]
export async function GET() {
  return NextResponse.json(data)
}
