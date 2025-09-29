import { NextResponse } from 'next/server'

const data = [
  {
    name: 'حسابداری',
    category: 'finance',
    enName: 'accounting',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(24).svg',
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
          title: 'بدون نیاز به ورود داده',
          desc: 'با هوش مصنوعی پیشرفته، 98% داده‌های فاکتور به صورت خودکار شناسایی می‌شوند.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/accounting/accounting-vendor-bill.webp',
        },
        {
          title: 'تجربه گزارش‌گیری لحظه‌ای',
          desc: 'گزارش‌های مالی تعاملی و دقیق را در لحظه مشاهده کنید و تصمیم‌گیری‌های هوشمندانه‌تری داشته باشید.',
          image:
            'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-images/Screenshot%202025-09-20%20175612.png',
        },
        {
          title: 'مدیریت جریان نقدی',
          desc: 'جریان نقدی ورودی و خروجی را به صورت بلادرنگ رصد کنید و مدیریت مالی خود را بهبود دهید.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/accounting/accounting-vendor-bill.webp',
        },
        {
          title: 'سرعت بی‌نظیر',
          desc: 'عملیات حسابداری در کمتر از 90 میلی‌ثانیه پردازش می‌شود، سریع‌تر از یک چشم به هم زدن!',
          image:
            'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-images/Screenshot%202025-09-20%20180948.png',
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
          title: 'تجربه موبایلی',
          desc: 'هزینه‌ها را با موبایل ثبت کنید و هوش مصنوعی بقیه کار را انجام دهد.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/accounting/accounting-mobile-01.webp',
          action: {
            label: 'امتحان کنید',
            url: '/demo/invoicing',
          },
        },
        {
          type: 'interactive-demo',

          title: 'تطبیق بانکی هوشمند',
          desc: 'اتصال به 28,000 بانک در سراسر جهان و تطبیق 95% تراکنش‌ها به صورت خودکار.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/accounting/accounting-mobile-02.webp',
          action: {
            label: 'امتحان کنید',
            url: '/demo/invoicing',
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
    name: 'مدیریت دانش',
    category: 'productivity',
    enName: 'knowledge',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(23).svg',
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
    name: 'امضا',
    category: 'marketing',
    enName: 'sign',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(22).svg',
    content: {
      img: 'https://odoocdn.com/openerp_website/static/src/img/apps/sign/hero_image.webp',
      heroSection: {
        title: 'امضای آنلاین با آویس، ساده‌تر از همیشه!',
        desc: 'با آویس ساین، سندتو راحت آنلاین بفرست، امضا بگیر و همه‌چیز رو سریع و مطمئن پیش ببر. وقتشه کاغذ بازی رو کنار بذاری!',
        ctaText: 'همین حالا شروع کن',
        image: '/images/avis-sign-hero.webp',
      },
      featureShowcase: [
        {
          title: 'ساده کن، خودکارش کن، امضا بزن!',
          desc: 'فیلدهای آماده یا قابل ویرایش رو فقط بکش و رها کن. کارای تکراری رو با قالب‌های آماده خودکار کن. یه بار سندتو درست کن و همیشه راحت‌تر کار کن.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/sign/simplify_automate_sign.webp',
        },
        {
          title: 'امضا از هرجا، هر وقت',
          desc: 'فرقی نداره موبایل باشه، لپ‌تاپ یا تبلت؛ مشتری‌هات راحت سند رو باز می‌کنن، بررسی می‌کنن و فقط با چند کلیک امضا می‌زنن.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/sign/sign_online.webp',
        },
        {
          title: 'فرآیند امضا دست خودته!',
          desc: 'وضعیت سند رو لحظه‌ای دنبال کن، درخواست امضا و یادآوری‌ها رو سریع بفرست و همیشه از پیشرفت قرارداد‌هات باخبر باش.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/sign/control.webp',
        },
      ],
      interactiveElements: [
        {
          type: 'interactive-demo',
          title: 'امضای الکترونیکی راحت',
          desc: 'PDFها رو آنلاین امضا کن؛ هم تو زمان صرفه‌جویی میشه، هم تو هزینه و هم به طبیعت کمک می‌کنیم!',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/sign/features_adopt.webp',
          action: {
            label: 'امتحانش کن',
            url: '/demo/avis-sign',
          },
        },
        {
          type: 'interactive-demo',
          title: 'قانونی و معتبر',
          desc: 'امضاهای آویس با استانداردهای جهانی مثل eIDAS اروپا، ESIGN آمریکا و قوانین هند هماهنگه. پس خیالت راحت!',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/sign/features_adopt.webp',
          action: {
            label: 'بزن بریم',
            url: '/demo/avis-sign',
          },
        },
        {
          type: 'interactive-demo',
          title: 'یادآوری خودکار برای اعضا',
          desc: 'دیگه کسی امضا کردن یادش نمی‌ره! یه ریمایندر اتوماتیک بساز تا همه به موقع سند رو امضا کنن.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/sign/features_reminders.webp',
          action: {
            label: 'یه دمو ببین',
            url: '/demo/avis-sign-tracking',
          },
        },
        {
          type: 'interactive-demo',
          title: 'ترتیب امضا دست خودته',
          desc: 'خودت مشخص کن چه کسی اول یا بعدی امضا کنه تا همه‌چیز منظم و به‌موقع پیش بره.',
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
      img: 'https://odoocdn.com/openerp_website/static/src/img/apps/crm/hero_image.webp',
      heroSection: {
        title: 'ابزار مدیریت مشتری‌ها که واقعاً کسب‌وکارت رو جلو می‌بره',
        desc: 'با CRM آویس، سرنخ‌ها رو پیگیری کن، پیش‌بینی‌های دقیق داشته باش و روی اون چیزی تمرکز کن که واقعاً مهمه: بستن فرصت‌ها و رشد فروش.',
        ctaText: 'بزن بریم — رایگان امتحان کن',
        image: '/images/avis-crm-hero.webp',
      },
      featureShowcase: [
        {
          title: 'چشم‌انداز فوری از فرصت‌ها',
          desc: 'هر فرصت مثل یه کارت نمایش داده میشه با همه‌ی اطلاعات ضروری؛ مراحل مختلف کار بهت نشون داده میشه تا بدونی درآمدها در کدوم مرحله‌ان.',
          image:
            'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-images/Screenshot%202025-09-21%20135745.png',
        },
        {
          title: 'سازماندهی کارآمد با دید کانبان',
          desc: 'فرصت‌ها رو بر اساس مرحله‌شون دسته‌بندی کن، با کشیدن و رها کردن پیشرفتِ کارها رو راحت مدیریت کن.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/crm/effortless_communication.webp',
        },
        {
          title: 'ارتباطات بی دردسر',
          desc: 'ایمیل‌ها، تماس‌ها، جلسات همه در یکجا؛ همیشه با مشتری در تماس باش و هیچ چیزی گم نشه.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/crm/quotation.webp',
        },
      ],
      interactiveElements: [
        {
          type: 'interactive-demo',
          title: 'اتوماسیون کامل',
          desc: 'سرنخ‌ها رو خودکار ایجاد کن، تیم رو خودش اختصاص بده و فعالیت‌ها رو برنامه ریزی کن؛ وقتتو روی چیزای مهم‌تر بذار.',
          image:
            'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-images/Screenshot%202025-09-21%20141626.png',
          action: {
            label: 'امتحانش کن',
            url: '/demo/avis-crm',
          },
        },
        {
          type: 'interactive-demo',
          title: 'امتیازدهی هوشمند به سرنخ‌ها',
          desc: 'سرنخ زیاد داری؟ ما با هوش مصنوعی به کارت میاییم — اولویت‌ها معلوم تا تو بتونی روی مهم‌ترین‌شون وقت بذاری.',
          image:
            'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-images/Screenshot%202025-09-21%20141545.png',
          action: {
            label: 'یه دمو ببین',
            url: '/demo/avis-crm-lead-scoring',
          },
        },
        {
          type: 'interactive-demo',
          title: 'گزارش‌گیری و داشبوردها',
          desc: 'داده‌ها رو لحظه‌ای ببین، پیش‌بینی کن، گزارش‌ها رو بررسی کن و روند تیم و فروش رو رصد کن.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/crm/reporting.webp',
          action: {
            label: 'شروع کن',
            url: '/demo/avis-crm-reporting',
          },
        },
      ],
      imageGallery: [
        'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-images/Screenshot%202025-09-21%20141626.png',
        'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-images/Screenshot%202025-09-21%20141545.png',
        'https://odoocdn.com/openerp_website/static/src/img/apps/crm/effortless_communication.webp',
        'https://odoocdn.com/openerp_website/static/src/img/apps/crm/reporting.webp',
      ],
    },
  },
  {
    name: 'استودیو',
    category: 'creative',
    enName: 'studio',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(20).svg',
    content: {
      img: 'https://odoocdn.com/openerp_website/static/src/img/apps/studio/hero_image.webp',
      heroSection: {
        title: 'اپلیکیشن خودتو با آویس بساز!',
        desc: 'بدون نیاز به حتی یه خط کد! فقط بکش و رها کن، همه‌چی رو به سلیقه خودت درست کن. ساده، سریع و دقیقا همون چیزی که می‌خوای!',
        ctaText: 'همین حالا شروع کن',
        image:
          'https://odoocdn.com/openerp_website/static/src/img/apps/studio/hero_image.webp',
      },
      featureShowcase: [
        {
          title: 'اپ جدیدت رو بدون دردسر بساز!',
          desc: 'فقط ویژگی‌هایی که لازم داری رو انتخاب کن، بقیه‌ش رو آویس برات انجام می‌ده.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/studio/your_new_app_not_from_scratch.webp',
        },
        {
          title: 'دیگه خبری از قالب‌های خشک و یه‌جور نیست!',
          desc: 'کافیه با کشیدن و رها کردن، فیلدهای جدید اضافه کنی و صفحه‌هاتو شخصی‌سازی کنی: برچسب، نوع، ظاهر، قابلیت‌ها و کلی چیز دیگه. همه‌چیز دست خودته!',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/studio/no_more_one_size_fits_all.webp',
        },
      ],
      interactiveElements: [
        {
          type: 'interactive-demo',
          title: 'مدارکت، دقیقاً همون‌جوری کن که می‌خوای!',
          desc: 'از ظاهر گرفته تا محتوا رو خودت تنظیم کن. فاکتوراتو دقیق کن، گزارش‌هاتو تغییر بده یا حتی از صفر سندای جدید بساز.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/studio/make_your_documents_1.webp',
          action: {
            label: 'امتحانش کن',
            url: '/demo/avis-studio',
          },
        },
        {
          type: 'interactive-demo',
          title: 'بذار آویس استودیو به جاش کار کنه!',
          desc: 'شرط‌ها و کارهای خودکار تعریف کن تا هر تغییر توی رکوردها به صورت خودکار انجام بشه.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/studio/let_odoo_studio_do_the_work.webp',
          action: {
            label: 'دمو رو ببین',
            url: '/demo/avis-studio-reporting',
          },
        },
        {
          type: 'interactive-demo',
          title: 'بدون نیاز به کدنویسی',
          desc: 'بدون حتی یه خط کد! ساخت اپلیکیشن هیچ‌وقت انقدر ساده و سریع نبوده.',
          image:
            'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-images/Screenshot%202025-09-21%20155356.png',
          action: {
            label: 'شروع کن',
            url: '/demo/avis-studio-nocode',
          },
        },
      ],
      imageGallery: [
        'https://odoocdn.com/openerp_website/static/src/img/apps/studio/make_your_documents_1.webp',
        'https://odoocdn.com/openerp_website/static/src/img/apps/studio/let_odoo_studio_do_the_work.webp',
        'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-images/Screenshot%202025-09-21%20155356.png',
        'https://odoocdn.com/openerp_website/static/src/img/apps/studio/hero_image.webp',
      ],
    },
  },
  {
    name: 'اشتراکات',
    category: 'finance',
    enName: 'subscription',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(19).svg',
    content: {
      img: 'https://odoocdn.com/openerp_website/static/src/img/apps/subscription/hero-image.webp',
      heroSection: {
        title: 'مدیریت مشتری‌ها!',
        desc: ' مدیریت مشتری و صورتحساب دوره‌ای، به ساده‌ترین شکل ممکن! با چند تا قابلیت ساده می‌تونی اشتراک‌ها رو اتوماتیک مدیریت کنی. دیگه وقتتو بذار روی سرویس و رابطه با مشتری، چون بقیه کارها مثل قرارداد، فاکتور خودکار، مالیات و پرداختا رو آویس خودش اوکی می‌کنه',
        ctaText: 'همین حالا شروع کن',
        image:
          'https://odoocdn.com/openerp_website/static/src/img/apps/studio/hero_image.webp',
      },
      featureShowcase: [
        {
          title: 'عملکرد فروشتو ببر بالا!',
          desc: 'به هرکسی توی تیم فروش کمک کن توانایی‌هاشو شکوفا کنه؛ با تحلیل عملکرد تک‌تک اعضا.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/2016/subscriptions/subscriptions_screenshot_06.gif',
        },
        {
          title: 'تحلیل درآمداتو همیشه دم‌دست داشته باش!',
          desc: 'از داشبورد پر از جزئیات با شاخصایی مثل MRR و LTV سر دربیار. فقط کافیه روی ردیف‌های فاکتور کلیک کنی تا ریز آمارو ببینی!',
          image:
            'https://odoocdn.com/web/image/11191450/Subscriptions-Analytics.png',
        },
        {
          title: 'آینده کسب‌وکارتو پیش‌بینی کن!',
          desc: 'توی چند ثانیه پیش‌بینی بساز، رشدتو بشناس و کمک کن شرکتت به اهدافش برسه. با آمار درست می‌تونی ببینی کارای الان چه نتیجه‌ای دارن.',
          image:
            'https://odoocdn.com/web/image/11191421/Subscriptions-Retention-Analysis.png',
        },
      ],
      interactiveElements: [
        {
          type: 'interactive-demo',
          title: 'دیگه لازم نیست مشتریا برای هر کاری لاگین کنن!',
          desc: 'ثبت‌نام ساده‌س، راحت وارد می‌شن و فروش‌هاتو بیشتر می‌کنه',
          image:
            'https://odoocdn.com/web/image/11147961/Subscriptions-Monthly.png',
          action: {
            label: 'امتحانش کن',
            url: '/demo/avis-studio',
          },
        },
        {
          type: 'interactive-demo',
          title: 'مشتریات یه پرتال ساده و کاربرپسند بده!',
          desc: 'همه اطلاعات و قراردادهاشون جلو چشماشونه، بی‌دردسر و سریع.',
          image:
            'https://odoocdn.com/web/image/11191501/Subscription-Portal.png',
          action: {
            label: 'دمو رو ببین',
            url: '/demo/avis-studio-reporting',
          },
        },
        {
          type: 'interactive-demo',
          title: 'پرداخت‌ها رو خودکار کن و وقتتو ذخیره کن!',
          desc: 'صورتحسابا خودشون صادر می‌شن و مدیریت همه‌چی راحت‌تر می‌شه.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/2016/subscriptions/subscriptions_screenshot_04.gif',
          action: {
            label: 'شروع کن',
            url: '/demo/avis-studio-nocode',
          },
        },
      ],
      imageGallery: [
        'https://odoocdn.com/web/image/11126708/Subscriptions-Template.png',
        // 'https://odoocdn.com/openerp_website/static/src/img/apps/studio/let_odoo_studio_do_the_work.webp',
        // 'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-images/Screenshot%202025-09-21%20155356.png',
        // 'https://odoocdn.com/openerp_website/static/src/img/apps/studio/hero_image.webp',
      ],
    },
  },
  {
    name: 'اجاره',
    category: 'finance',
    enName: 'rental',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(18).svg',
    content: {
      img: 'https://odoocdn.com/openerp_website/static/src/img/apps/rental/hero_image.webp',
      heroSection: {
        title: 'یه راه‌حل بلندمدت برای قراردادای کوتاه‌مدت!',
        desc: 'اپلیکیشن اجاره آویس کل پروسه اجاره رو واست آسون کرده. محصولاتو مدیریت کن، زمان تحویل رو مشخص کن و قراردادارو همه از یه جا ببند',
        ctaText: 'همین حالا شروع کن',
        image:
          'https://odoocdn.com/openerp_website/static/src/img/apps/studio/hero_image.webp',
      },
      featureShowcase: [
        {
          title: 'یه راه‌حل بلندمدت برای قراردادای کوتاه‌مدت!',
          desc: 'به اپلیکیشن اجاره آویس کل پروسه اجاره رو واست آسون کرده. محصولاتو مدیریت کن، زمان تحویل رو مشخص کن و قراردادارو همه از یه جا ببند.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/rental/rental_product.webp',
        },
        {
          title: 'تو وقت صرفه‌جویی کن، آنلاین اجاره بده!',
          desc: 'رزرو و اجاره آنلاین هیچ‌وقت به این راحتی نبوده! مشتری‌ها می‌تونن محصولاتتو ببینن، تاریخو انتخاب کنن و همون‌جا تو سایت رزروشونو کامل کنن',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/rental/rental_meeting_room.webp',
        },
      ],
      interactiveElements: [
        {
          type: 'interactive-demo',
          title: 'درخواست امضا خیلی راحت',
          desc: 'قرارداد اجاره، فرم بیمه یا هر مدرک دیگه‌ای رو آپلود کن و قبل از اینکه محصول از انبارت بیرون بره، امضای دیجیتال مشتری رو بگیر',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/rental/rental_agreement.webp',
          action: {
            label: 'امتحانش کن',
            url: '/demo/avis-studio',
          },
        },
        {
          type: 'interactive-demo',
          title: 'روزای غیرقابل اجاره',
          desc: 'روزایی که تحویل یا بازگشت نداری رو راحت مشخص کن تا کسی رزرو نزنه.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/rental/rental-days.webp',
          action: {
            label: 'دمو رو ببین',
            url: '/demo/avis-studio-reporting',
          },
        },
        {
          type: 'interactive-demo',
          title: 'هزینه تأخیر',
          desc: 'جریمه دیرکرد تحویل رو به صورت پیش‌فرض بذار تا همه‌چی منظم پیش بره.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/rental/rental-delay.webp',
          action: {
            label: 'شروع کن',
            url: '/demo/avis-studio-nocode',
          },
        },
      ],
      imageGallery: [
        'https://odoocdn.com/openerp_website/static/src/img/apps/rental/rental_agreement.webp',
        'https://odoocdn.com/openerp_website/static/src/img/apps/rental/rental-days.webp',
        'https://odoocdn.com/openerp_website/static/src/img/apps/rental/rental-delay.webp',
      ],
    },
  },
  {
    name: 'فروشگاه',
    category: 'sales',
    enName: 'point-of-sale',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(17).svg',
    content: {
      img: 'https://odoocdn.com/openerp_website/static/src/img/apps/pos/hero_image.webp',
      heroSection: {
        title: 'صندوق فروش آویس، میتونی بهش اعتماد کنی!',
        desc: 'صندوق فروش آویس ساده، قابل اعتماد و همیشه آماده‌ست؛ چه آنلاین باشی چه آفلاین. فقط چند دقیقه راه‌اندازی می‌خواد و در عرض چند ثانیه می‌تونی شروع به فروش کنی. هم مشتری‌هات راضین هم پرسنلت',
        ctaText: 'همین حالا شروع کنید - رایگان است',
        image:
          'https://odoocdn.com/openerp_website/static/src/img/apps/pos/hero_image.webp',
      },
      featureShowcase: [
        {
          title: 'ترکیب ساده و حرفه‌ای',
          desc: 'یه رابط کاربری کامل و آسون که هرکسی می‌تونه سریع یاد بگیره، ولی در عین حال کلی امکانات حرفه‌ای هم داره. هر تراکنشی رو راحت مدیریت کن و تمرکزتو بذار روی چیزی که مهمه: مشتری.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/pos/interface.webp',
        },
        {
          title: 'فروش بدون مرز',
          desc: 'خرید آنلاین کن، حضوری تحویل بگیر! دیگه بین کانال‌های فروش سردرگمی نداری. حتی می‌تونی سفارش‌های بزرگ رو از قبل آماده کنی.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/pos/cross_channel_selling_2.webp',
        },
      ],
      interactiveElements: [
        {
          title: 'سفارش‌دهی خودکار، برگ برنده',
          desc: 'بذار مشتری‌ها خودشون همه کار کنن؛ چه از طریق کیوسک، چه از گوشی‌شون. از انتخاب محصول تا پرداخت، همه‌چی دست خودشونه.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/pos/self_service_for_the_win_kiosk.webp',
        },
        {
          type: 'interactive-demo',
          title: 'پرداخت یکپارچه',
          desc: 'از نقدی و چک گرفته تا کارت بانکی و روش‌های پرداخت جدید، همه رو تو آویس می‌تونی راحت اضافه کنی.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/pos/cross_channel_selling_2.webp',
          action: {
            label: 'امتحانش کنید',
            url: '/demo/avis-pos-loyalty',
          },
        },
        {
          type: 'interactive-demo',
          title: 'برنامه‌های وفاداری مشتری',
          desc: 'مشتریان با برنامه‌های وفاداری آویس حسابی جذب می‌شن: امتیاز، پاداش، و کارت هدیه. بازپرداخت داری؟ کیف پول الکترونیکی هست.',
          image:
            'https://artfulthinkers.com/wp-content/uploads/2017/05/iStock_000067235071_Double-768x602.jpg',
          action: {
            label: 'امتحانش کنید',
            url: '/demo/avis-pos-loyalty',
          },
        },
        {
          type: 'interactive-demo',
          title: 'پرداخت‌های آفلاین',
          desc: 'وقتی داری خرید میکنی و قطع میشی با پرداخت آفلاین وقتی وصل شدی به طور خودکار حساب میکنی!',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/pos/cross_channel_selling_1.webp',
          action: {
            label: 'شروع کنید',
            url: '/demo/avis-pos-offline',
          },
        },
      ],
      imageGallery: [
        'https://odoocdn.com/openerp_website/static/src/img/apps/pos/banner-shop.webp',
        'https://odoocdn.com/openerp_website/static/src/img/apps/pos/kitchen_display.webp',
        'https://odoocdn.com/openerp_website/static/src/img/apps/pos/self_ordering.webp',
        'https://odoocdn.com/openerp_website/static/src/img/apps/pos/hero_image.webp',
      ],
    },
  },
  {
    name: 'بحث و گفتگو',
    category: 'communication',
    enName: 'discuss',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(15).svg',
    content: {
      img: 'https://odoocdn.com/openerp_website/static/src/img/apps/discuss/hero_image.webp',
      heroSection: {
        title: 'ارتباط آسون و بی‌دردسر',
        desc: 'دیگه خبری از چندتا اپ پراکنده یا تماس‌های قاطی‌پاطی نیست',
        ctaText: 'همین حالا شروع کنید - رایگان است',
        image:
          'https://odoocdn.com/openerp_website/static/src/img/apps/pos/hero_image.webp',
      },
      featureShowcase: [
        {
          title: 'Avis Discuss: مرکز ارتباطات همه‌جانبه',
          desc: 'با آویس دیسکاس همه‌چی دم دستته: چت مستقیم، واتساپ، لایوچت، تماس صوتی و تصویری، همه تو یه جا.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/discuss/communication_hub.webp',
        },
        {
          title: 'فروش بدون مرز',
          desc: 'خرید آنلاین کن، حضوری تحویل بگیر! دیگه بین کانال‌های فروش سردرگمی نداری. حتی می‌تونی سفارش‌های بزرگ رو از قبل آماده کنی.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/discuss/message_channels.webp',
        },
      ],
      interactiveElements: [
        {
          title: 'سفارش‌دهی خودکار، برگ برنده',
          desc: 'بذار مشتری‌ها خودشون همه کار کنن؛ چه از طریق کیوسک، چه از گوشی‌شون. از انتخاب محصول تا پرداخت، همه‌چی دست خودشونه.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/pos/self_service_for_the_win_kiosk.webp',
        },
        {
          type: 'interactive-demo',
          title: 'پرداخت یکپارچه',
          desc: 'از نقدی و چک گرفته تا کارت بانکی و روش‌های پرداخت جدید، همه رو تو آویس می‌تونی راحت اضافه کنی.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/pos/cross_channel_selling_2.webp',
          action: {
            label: 'امتحانش کنید',
            url: '/demo/avis-pos-loyalty',
          },
        },
        {
          type: 'interactive-demo',
          title: 'برنامه‌های وفاداری مشتری',
          desc: 'مشتریان با برنامه‌های وفاداری آویس حسابی جذب می‌شن: امتیاز، پاداش، و کارت هدیه. بازپرداخت داری؟ کیف پول الکترونیکی هست.',
          image:
            'https://artfulthinkers.com/wp-content/uploads/2017/05/iStock_000067235071_Double-768x602.jpg',
          action: {
            label: 'امتحانش کنید',
            url: '/demo/avis-pos-loyalty',
          },
        },
        {
          type: 'interactive-demo',
          title: 'پرداخت‌های آفلاین',
          desc: 'وقتی داری خرید میکنی و قطع میشی با پرداخت آفلاین وقتی وصل شدی به طور خودکار حساب میکنی!',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/pos/cross_channel_selling_1.webp',
          action: {
            label: 'شروع کنید',
            url: '/demo/avis-pos-offline',
          },
        },
      ],
      imageGallery: [
        'https://odoocdn.com/openerp_website/static/src/img/apps/pos/banner-shop.webp',
        'https://odoocdn.com/openerp_website/static/src/img/apps/pos/kitchen_display.webp',
        'https://odoocdn.com/openerp_website/static/src/img/apps/pos/self_ordering.webp',
        'https://odoocdn.com/openerp_website/static/src/img/apps/pos/hero_image.webp',
      ],
    },
  },
  {
    name: 'اسناد',
    category: 'productivity',
    enName: 'documents',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(14).svg',
    content: {
      img: 'https://odoocdn.com/openerp_website/static/src/img/apps/documents/hero_image.webp',
      heroSection: {
        title: 'دوران کاغذ تموم شد',
        desc: 'با آویس داکیومنت، همه فایل‌هاتو آنلاین و یه‌جا مدیریت کن. دیگه نیازی به اسکن قرارداد، وارد کردن دستی فاکتورها یا پروسه‌های طولانی تأیید نیست.',
        ctaText: 'همین حالا شروع کنید - رایگان است',
        image:
          'https://odoocdn.com/openerp_website/static/src/img/apps/pos/hero_image.webp',
      },
      featureShowcase: [
        {
          title: 'همه‌چی دم دستت، مرتب و دسته‌بندی‌شده!',
          desc: 'هر سند توی ورک‌اسپیس خودش ذخیره می‌شه و با تگ‌گذاری هیچ‌وقت گم نمی‌شه. وقتشه ذهنت و دسکتاپتو خلوت کنی',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/documents/organization.webp',
        },
        {
          title: 'PDF ها رو تقسیم بندی کن',
          desc: 'یه PDF چندصفحه‌ای رو با یه کلیک به چند سند جدا تقسیم کن. خیلی کاربردیه مخصوصاً وقتی با دسته‌ای از اسناد سروکار داری.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/documents/split.webp',
        },
        {
          title: 'شیت‌ها',
          desc: 'مستقیم از توی اپ شیت بساز یا روی شیت‌هایی که جای دیگه ساختی کار کن',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/documents/spreadsheets.webp',
        },
      ],
      interactiveElements: [
        {
          title: 'هنر همکاری مؤثر',
          desc: 'اشتراک‌گذاری فایل با تاریخ انقضا، ارتباط با همکار، مشتری و تأمین‌کننده همگی یه‌جا! هر وقت لازم باشه به اطلاعات مهم دسترسی داری',
          image:
            'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-images/Screenshot%202025-09-28%20132843.png',
        },
        {
          title: 'هنر همکاری مؤثر',
          desc: 'اشتراک‌گذاری فایل با تاریخ انقضا، ارتباط با همکار، مشتری و تأمین‌کننده همگی یه‌جا! هر وقت لازم باشه به اطلاعات مهم دسترسی داری',
          image:
            'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-images/Screenshot%202025-09-28%20132850.png',
        },
      ],
      imageGallery: [
        'https://odoocdn.com/openerp_website/static/src/img/apps/pos/banner-shop.webp',
        'https://odoocdn.com/openerp_website/static/src/img/apps/pos/kitchen_display.webp',
        'https://odoocdn.com/openerp_website/static/src/img/apps/pos/self_ordering.webp',
        'https://odoocdn.com/openerp_website/static/src/img/apps/pos/hero_image.webp',
      ],
    },
  },
  {
    name: 'پروژه',
    category: 'productivity',
    enName: 'project',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(13).svg',
    content: {
      img: 'https://odoocdn.com/openerp_website/static/src/img/apps/project/project-hero-image.webp',
      heroSection: {
        title: 'پروژه‌های شلوغ پلوغ؟! ما همچین چیزی نمی‌شناسیم 😎',
        desc: 'آویس بهترین نرم‌افزار مدیریت پروژه‌ست. تسک‌ها و ذی‌نفع‌ها رو مدیریت کن، یه نمای کامل از پروژه بگیر و بهره‌وری تیم‌تو چند برابر کن',
        ctaText: 'همین حالا شروع کنید - رایگان است',
        image:
          'https://odoocdn.com/openerp_website/static/src/img/apps/pos/hero_image.webp',
      },
      featureShowcase: [
        {
          title: 'یه داشبورد کامل داشته باش که همه‌چی رو دم دستت بیاره',
          desc: '',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/project/project-dashboard.webp',
        },
        {
          title: 'همکاری تیمی = بهره‌وری بیشتر',
          desc: 'مشتری‌هاتو هم درگیر کن! مشخص کن کدوم بخش از پروژه رو ببینن یا حتی ویرایش کنن. همه‌ی ارتباطاتتو هم تو یه محیط ساده مدیریت کن.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/project/project-chatter.webp',
        },
        {
          title: 'زمان همون پوله!',
          desc: 'میتونی مشتری‌هاتو بر اساس زمان صرف‌شده روی تسک‌ها صورت‌حساب کنی یا پروژه‌های بزرگ رو به مراحل کوچیک تقسیم کنی و هزینه‌هاشو مدیریت کنی.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/project/project-timesheets.webp',
        },
        {
          title: 'برنامه ریزی کن',
          desc: 'برنامه‌ریزی آینده‌ت رو شفاف ببین. با یه نگاه می‌دونی چه تسک‌هایی تو راهن.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/project/project-planning.webp',
        },
      ],
      interactiveElements: [
        {
          type: 'مدیریت پروژه',
          title: 'یادداشت چسبونک‌ها!',
          desc: 'نمای Kanban تسک‌ها رو مرحله به مرحله مرتب می‌کنه. فقط با درگ‌اَند‌دراپ مثل استیکی‌نوت همه‌چی رو مرتب نگه دار',
          image:
            'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-images/Screenshot%202025-09-28%20134952.png',
        },
        {
          type: 'مدیریت پروژه',
          title: 'برنامه‌ریزی و زمان‌بندی',
          desc: 'نمای Gantt یه تایم‌لاین کامله که نشون می‌ده چه تسکایی کی شروع می‌شن، وابستگی‌هاشون چیه و چه تاریخی برنامه‌ریزی شدن',
          image:
            'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-images/Screenshot%202025-09-28%20135004.png',
        },
        {
          type: 'مدیریت پروژه',
          title: 'کلید همه چیز دقته',
          desc: 'نمای لیست همه دیتای لازم رو نشون می‌ده و حتی اجازه می‌ده کارای گروهی (batch actions) انجام بدی. ساده و در عین حال قدرتمند',
          image:
            'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-images/Screenshot%202025-09-28%20135015.png',
        },
      ],
      imageGallery: [
        'https://odoocdn.com/openerp_website/static/src/img/apps/project/project-overview-budgets.webp',
        'https://odoocdn.com/openerp_website/static/src/img/apps/project/project-overview-milestones.webp',
        'https://odoocdn.com/openerp_website/static/src/img/apps/project/project-overview-profitability.webp',
      ],
    },
  },
  {
    name: 'برگه ساعت کارکرد',
    category: 'hr',
    enName: 'timesheets',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(11).svg',
    content: {
      img: 'https://odoocdn.com/openerp_website/static/src/img/apps/timesheet/hero_image.webp',
      heroSection: {
        title: 'وقتت رو هدر نده. ثبتش کن',
        desc: 'آویس تایم‌شیت به تیمت کمک می‌کنه ساعت‌های قابل‌صورتحساب رو ثبت و تأیید کنن، زمان صرف‌شده روی کارها رو تصویب کنن و صدور فاکتور خدماتت رو خیلی ساده کنن — همش تو یه محیط بی‌دردسر',
        ctaText: 'همین حالا شروع کنید - رایگان است',
        image:
          'https://odoocdn.com/openerp_website/static/src/img/apps/pos/hero_image.webp',
      },
      featureShowcase: [
        {
          title: 'این همه ساعت کجا رفت؟ دیگه حدس نزن',
          desc: 'ردیابی زمان هوشمند: یه تایمر سریع روشن کن و مطمئن باش تایم‌شیت‌ها همیشه به پروژه، تسک یا سفارش فروش درست وصل می‌شن. دیگه هیچ داده‌ای گم نمیشه.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/timesheet/timesheet.webp',
        },
        {
          title: 'حالت‌های مختلف نمایش',
          desc: 'بین ۵ حالت نمایش مختلف جابه‌جا شو و هر وقت خواستی، نمای مناسب‌تو انتخاب کن.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/timesheet/views.webp',
        },
        {
          title: 'تایمر',
          desc: 'از هرجایی با میانبرهای کیبورد تایمر رو شروع یا متوقف کن. همین لحظه ببین کی روی چی کار می‌کنه و ساعات اضافه‌کاری تیمت رو پیگیری کن.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/timesheet/timer-and-filters.webp',
        },
      ],
      interactiveElements: [
        {
          type: 'مدیریت زمان',
          title: 'هر دقیقه رو بشمار',
          desc: 'سودآور بمون. یه نمای کلی از ساعت‌های قابل‌صورتحساب داشته باش — بر اساس اعضای تیم، پروژه، تسک و نوع فاکتورسازیت.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/timesheet/reporting-pivot.webp',
        },
        {
          type: 'مدیریت زمان',
          title: 'هر دقیقه رو بشمار',
          desc: 'سودآور بمون. یه نمای کلی از ساعت‌های قابل‌صورتحساب داشته باش — بر اساس اعضای تیم، پروژه، تسک و نوع فاکتورسازیت.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/timesheet/reporting-bar-chart.webp',
        },
      ],
      imageGallery: [
        'https://odoocdn.com/openerp_website/static/src/img/apps/timesheet/reporting-pivot.webp',
        'https://odoocdn.com/openerp_website/static/src/img/apps/timesheet/hero_image.webp',
      ],
    },
  },
  {
    name: 'خدمات میدانی',
    category: 'operations',
    enName: 'field-service',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(10).svg',
    content: {
      img: 'https://odoocdn.com/openerp_website/static/src/img/apps/field-service/field-service-hero-image.webp',
      heroSection: {
        title: 'سرویس‌های میدانی‌تو تحت کنترل داشته باش',
        desc: 'آویس بهترین راه‌حل برای کسب‌وکارهای خدمات میدانیه. برنامه‌ی تیم‌تو مرتب کن، کارهای حضوری رو مدیریت کن و از راحتی تایم‌شیت و فاکتورهای یکپارچه لذت ببر',
        ctaText: 'همین حالا شروع کنید - رایگان است',
        image:
          'https://odoocdn.com/openerp_website/static/src/img/apps/pos/hero_image.webp',
      },
      featureShowcase: [
        {
          title: 'برنامه‌ریزی عالی = اجرای عالی',
          desc: 'قدرت برنامه‌ریزی دست توئه. بین نماهای مختلف جابه‌جا شو: یه نمای ساده و شهودی با کارت‌های کانبان، مدیریت کارهای تیم توی نمای گانت، یا حتی مرتب کردن قرارها بر اساس موقعیت روی نقشه.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/field-service/field-service-planning.webp',
        },
        {
          title: 'نمای تقویم',
          desc: 'ساده و بی‌دردسر. برنامه‌ی تیم‌تو بر اساس روز، هفته یا ساعت تنظیم و آپدیت کن',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/field-service/field-service-calendar-view.webp',
        },
        {
          title: 'مثل خدماتی که میگیری برنامه ریزی می‌کنی، عالی و دقیق!',
          desc: '',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/field-service/field-service-invoice.webp',
        },
      ],
      interactiveElements: [
        {
          type: 'مدیریت همه چیز!',
          title: 'مدیریت موجودی انبار',
          desc: 'قطعات مصرف‌شده رو موقع سرویس حضوری ثبت کن و هزینه‌ی اضافه رو فاکتور بزن.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/field-service/field-service-invoicing.webp',
        },
        {
          type: 'مدیریت همه چیز!',
          title: 'امضای کارمند و مشتری رو بگیر',
          desc: 'اپیلیکیشن قدرتمند آویس اینجاست که همه چیز رو پوشش بده.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/field-service/field-service-worksheet.webp',
        },
        {
          type: 'مدیریت همه چیز!',
          title: 'زمان صرف‌شده برای هر قرار رو ثبت کن',
          desc: 'همه قرارها رو از اول تا آخر توی گوشیت هندل کن.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/field-service/field-service-timesheet.webp',
        },
      ],
      imageGallery: [
        'https://odoocdn.com/openerp_website/static/src/img/apps/timesheet/reporting-pivot.webp',
        'https://odoocdn.com/openerp_website/static/src/img/apps/timesheet/hero_image.webp',
      ],
    },
  },
  {
    name: 'برنامه‌ریزی',
    category: 'productivity',
    enName: 'planning',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(9).svg',
    content: {
      img: 'https://odoocdn.com/openerp_website/static/src/img/apps/planning/planning-shifts-overview.webp',
      heroSection: {
        title: 'برای بدترین حالت برنامه‌ریزی کن، به بهترین نتیجه امیدوار باش',
        desc: 'برنامه‌ریزی آویس زمان‌بندی‌تو ساده می‌کنه و بهره‌وری تیم‌تو بالا می‌بره. شیفت‌ها و منابع رو یکپارچه مدیریت کن و به کارمندات قدرت بده تا هماهنگی بی‌نقصی داشته باشن',
        ctaText: 'همین حالا شروع کنید - رایگان است',
        image:
          'https://odoocdn.com/openerp_website/static/src/img/apps/pos/hero_image.webp',
      },
      featureShowcase: [
        {
          title: 'زمان‌بندی‌تو یه لِوِل ببر بالا',
          desc: `برنامه‌تو تصویری کن و بهینه‌اش کن. با ابزار گانت چارت شگفت‌انگیز، وضوح و کارایی بیشتری بگیر. قالب‌ها، زمان‌بندی خودکار و وظایف تکراری باعث میشه مدیریت برنامه‌هات راحت‌تر از همیشه باشه
          پ.ن: ما گانت‌مون انقدر خوبه که نمی‌تونیم صبر کنیم تا ببینیش! 😅`,
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/planning/planning-shift-scheduling.webp',
        },
        {
          title: 'می‌تونی شیفت منو پوشش بدی؟',
          desc: 'برنامه‌ت زیر کنترله. شیفت بساز و خیلی راحت با درگ و دراپ به هر کسی اختصاص بده یا تغییرش بده. با گزینه‌های همکاری، همه‌ی اعضای تیم می‌تونن شیفت‌های خالی رو ببینن و بین خودشون جابه‌جا کنن',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/planning/planning-shift-swapping.webp',
        },
      ],
      interactiveElements: [
        {
          type: 'برنامه ریزی',
          title: 'شیفت‌های خالی',
          desc: 'بذار بدون مسئول بمونه و بعد با یه درگ ساده به کسی اختصاص بده',
          image:
            'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-images/planning/Screenshot%202025-09-28%20165549.png',
        },
        {
          type: 'برنامه ریزی',
          title: 'جلوگیری از تداخل',
          desc: 'اگه یه نفر رو هم‌زمان برای چندتا شیفت برنامه‌ریزی کنی، سیستم سریع بهت اخطار میده.',
          image:
            'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-images/planning/Screenshot%202025-09-28%20165501.png',
        },
        {
          type: 'برنامه ریزی',
          title: 'زمان بندی',
          desc: 'همه‌ی شیفت‌ها رو بر اساس نقش، کارمند یا پروژه مدیریت کن',
          image:
            'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-images/planning/Screenshot%202025-09-28%20135015.png',
        },
      ],
      imageGallery: [
        'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-images/planning/Screenshot%202025-09-28%20165549.png',
        'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-images/planning/Screenshot%202025-09-28%20135015.png',
        'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-images/planning/Screenshot%202025-09-28%20165523.png',
        'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-images/planning/Screenshot%202025-09-28%20135015.png',
      ],
    },
  },
  {
    name: 'پشتیبانی',
    category: 'support',
    enName: 'helpdesk',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(8).svg',
    content: {
      img: 'https://odoocdn.com/openerp_website/static/src/img/apps/helpdesk/helpdesk-dashboard.webp',
      heroSection: {
        title: 'تیم پشتیبانیت یه ارتقا می‌خواد',
        desc: 'هلپ‌دسک آویس همون پلتفرم تیکتینگیه که تیم‌تو ساپورت می‌کنه، تا اونا هم بتونن مشتری‌هاتو ساپورت کنن. دیگه خداحافظ پیچیدگی! سلام به یه دنیای جدید از پشتیبانی راحت، سریع و مشتری‌محور',
        ctaText: 'همین حالا شروع کنید - رایگان است',
        image:
          'https://odoocdn.com/openerp_website/static/src/img/apps/helpdesk/helpdesk-dashboard.webp',
      },
      featureShowcase: [
        {
          title: 'پیگیری، اولویت‌بندی و حل تیکت‌های مشتری',
          desc: `تیکت‌ها رو همون‌جوری که می‌خوای مدیریت کن، با نمای کانبان فوق‌العاده.
یه نگاه بنداز، فوراً حجم کار تیم‌تو ببین و وضعیت هر تیکت رو بر اساس قوانین SLA اختصاصی خودت بررسی کن.`,
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/helpdesk/helpdesk-tickets-overview.webp',
        },
        {
          title: 'پشتیبانی هوشمندتر برای مشتری‌ها',
          desc: `یه پایگاه دانش داخلی آماده داری!
سوالات پرتکرار (FAQ)، ویدیوهای آموزشی و پرزنتیشن‌هاتو مستقیم به تیکت وصل کن.
دور محصولت یه جامعه بساز با استفاده از انجمن‌ها`,
          image: 'https://odoocdn.com/web/image/3090531',
        },
        {
          title: 'اجازه بده مشتری‌ها خودشون تیکتشونو ببندن',
          desc: `خودمختاری بده، بهره‌وری رو بالا ببر.
احتمال خطا رو کم کن، سوءتفاهم‌ها رو کنار بذار و زمان بیشتری به تیم هلپ‌دسکت بده تا روی موضوعات مهم‌تر تمرکز کنه.`,
          image: 'https://odoocdn.com/web/image/24786968/close-ticket.jpg',
        },
      ],
      interactiveElements: [
        {
          type: 'پشتیبانی',
          title: 'بهینه‌شده برای بهره‌وری',
          desc: 'قوانین SLA رو بساز و بذار آویس خودش کارها رو جلو ببره',
          image: 'https://odoocdn.com/web/image/25283223/helpdesk-3.png',
        },
        {
          type: 'پشتیبانی',
          title: 'قالب آماده برای جواب دادن',
          desc: 'قالب ایمیل پویا بساز برای پاسخ‌های پرتکرار',
          image:
            'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-images/help-desk/Screenshot%202025-09-28%20180438.png',
        },
        {
          type: 'پشتیبانی',
          title: 'ارجاع تیکت',
          desc: 'فقط با یه کلیک تیکت رو به مدیرت ارجاع بده',
          image:
            'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-images/help-desk/Screenshot%202025-09-28%20180523.png',
        },
      ],
    },
  },
  {
    name: 'وب‌سایت',
    category: 'creative',
    enName: 'website',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(7).svg',
    content: {
      img: 'https://odoocdn.com/openerp_website/static/src/img/apps/website/hero_image.webp',
      heroSection: {
        title: 'یه وبسایت حرفه‌ای، فقط توی چند دقیقه',
        desc: 'آویس وبسایت داره نگاه همه رو به طراحی وب تغییر میده. با رابط کاربری ساده و سرراستش، می‌تونی وبسایتت رو راحت بسازی، مدیریت کنی و هرجوری خواستی شخصی‌سازیش کنی',
        ctaText: 'همین حالا شروع کنید - رایگان است',
        image:
          'https://odoocdn.com/openerp_website/static/src/img/apps/website/hero_image.webp',
      },
      featureShowcase: [
        {
          title: 'رویاپردازی؟ فقط بسازش!',
          desc: `بذار هوش مصنوعی بر اساس صنعتت، چیدمان و محتوای وبسایت رو بهت پیشنهاد بده.

بیزینست رو مشخص کن

لوگوتو اضافه کن

قابلیت‌های اضافه رو انتخاب کن

تم مورد علاقه‌تو بردار
همین! وبسایتت آماده‌ست. هرکسی می‌تونه این کارو بکنه`,
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/website/configurator.webp',
        },
        {
          title: 'سایتتو مثل یه طراح بساز',
          desc: `با درگ‌اَند‌دراپ بلوک‌ها، همه‌چی دست خودته. می‌خوای چیدمان رو دقیق‌تر تنظیم کنی؟ روی عکسا فیلتر و افکت بذاری؟ یه المان رو انیمیت کنی؟ مشکلی نیست! همه اینا رو همون‌جا روی صفحه انجام بده`,
          image: 'https://odoocdn.com/web/image/3090531',
        },
        {
          title: 'دستیار هوش مصنوعی همیشه کنارت',
          desc: `کپی‌رایتینگت رو قوی‌تر کن با ChatGPT. از آویس بخواه محتوای وبسایتت رو فقط با یه پرامپت بسازه یا متن فعلیت رو با یه کلیک تغییر لحن بده..`,
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/website/ai.webp',
        },
      ],
      interactiveElements: [
        {
          type: 'ساخت وبسایت',
          title: 'سایتتو مثل یه طراح بساز!',
          desc: 'با درگ‌اَند‌دراپ بلوک‌ها، همه‌چی دست خودته. می‌خوای چیدمان رو دقیق‌تر تنظیم کنی؟ روی عکسا فیلتر و افکت بذاری؟ یه المان رو انیمیت کنی؟ مشکلی نیست! همه اینا رو همون‌جا روی صفحه انجام بده.',
          image:
            'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-images/website/Screenshot%202025-09-29%20130053.png',
        },
        {
          type: 'ساخت وبسایت',
          title: 'مقیاس‌پذیر و کاملأ یکپارچه',
          desc: 'با قابلیت‌های فوق‌العاده خیلی ساده بیزینست رو رشد بده. فرآیندها رو ساده کن، تجربه کاربر رو بهتر کن و همه‌چیز رو تو یه سیستم یکپارچه مدیریت کن تا کسب‌وکار رو راحت‌تر پیش ببری.',
          image:
            'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-images/website/Screenshot%202025-09-29%20130039.png',
        },
      ],
      imageGallery: [
        'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-images/website/Screenshot%202025-09-29%20124126.png',
        'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-images/website/Screenshot%202025-09-29%20124202.png',
        'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-images/website/Screenshot%202025-09-29%20131259.png',
      ],
    },
  },
  {
    name: 'بازاریابی اجتماعی',
    category: 'marketing',
    enName: 'social-marketing',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(6).svg',
    content: {
      img: 'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-images/social-marketing/Screenshot%202025-09-29%20144609.png',
      heroSection: {
        title: 'مدیریت همه شبکه‌های اجتماعی توی یه پلتفرم',
        desc: 'همه اکانت‌های سوشیال مدیات رو با همه محتواهاشون توی یه داشبورد ببین. کامنت بذار، با پست‌ها تعامل کن یا مستقیم با فالوورها وارد گفتگو شو؛ دیگه لازم نیست بین ده‌ها اپلیکیشن پراکنده سرگردون بشی. 🚀 کنی',
        ctaText: 'همین حالا شروع کنید - رایگان است',
        image:
          'https://odoocdn.com/openerp_website/static/src/img/apps/website/hero_image.webp',
      },
      featureShowcase: [
        {
          title: 'برنامه‌ریزی، پایش و تحلیل همه اکانت‌ها یه‌جا',
          desc: `مشتریای جدید پیدا کن و مخاطب‌هات رو همیشه درگیر نگه دار. حضور توی شبکه‌های اجتماعی باعث میشه برندت بیشتر شناخته بشه، ارتباطت با مشتریا نزدیک‌تر بشه، سرنخ‌های فروش و درآمدت بیشتر بشه. حتی می‌تونی پشتیبانی بدی و اخبار مهم شرکت رو هم راحت منتشر کنی.`,
          image:
            'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-images/social-marketing/Screenshot%202025-09-29%20145913.png',
        },
        {
          title: 'هرجا که مخاطبته، پیداش کن',
          desc: `پیام‌های فوری و به‌موقع .نوتیفیکیشن وقتی میاد، سریع توجه کاربر رو جلب می‌کنه. متن کوتاه و ساده‌ست، پس کاربر تو همون نگاه اول متوجه میشه و اگه جذب بشه، روش کلیک می‌کنه.`,
          image:
            'https://odoocdn.com/web/image/16681066/social_screenshot_03.png',
        },
      ],
      interactiveElements: [
        {
          type: 'شبکه‌های اجتماعی',
          title: 'از بازدیدکننده مشتری بساز، از مشتری طرفدار!',
          desc: 'با یه روش ساده، کسایی که فقط یه سر به سایتت می‌زنن رو مشتری کن و مشتری‌هات رو عاشق خودت کن! کسایی که میان سایتت رو مشتری کن و مشتری‌ها رو به طرفدارای خوشحال تبدیل کن!',
          image:
            'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-images/social-marketing/Screenshot%202025-09-29%20145004.png',
        },
        {
          type: 'شبکه‌های اجتماعی',
          title: 'چت زنده، کلید موفقیت!',
          desc: 'با چت زنده، فروش رو تا ۴۰٪ بیشتر کن! کاربرا عاشق گپ زدنن، چون حس واقعی بودن می‌ده و تو می‌تونی خودت پیش‌قدم شی! هر وقت بخوای گپ بزن! چت زنده نرخ تبدیل رو تا ۴۰٪ بالا می‌بره. کاربرا از گفت‌وگوی زنده خوششون میاد و تو می‌تونی باهاشون صمیمی شی و تجربه پشتیبانی باحالی بسازی!',
          image:
            'https://odoocdn.com/web/image/16681064/social_screenshot_02b.jpg',
        },
      ],
    },
  },
  {
    name: 'ایمیل مارکتینگ',
    category: 'marketing',
    enName: 'email-marketing',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(5).svg',
    content: {
      img: 'https://odoocdn.com/openerp_website/static/src/img/2016/email-marketing/email_marketing_screenshot_01.jpg',
      heroSection: {
        title: 'بیخیال! بابت ایمیل فرستادن پول نده!',
        desc: 'با آویس ایمیل مارکتینگ، تو چند ثانیه ایمیل‌های حرفه‌ای بساز و درست همون موقع که باید، به مخاطبای درست برسونشون!',
        ctaText: 'همین حالا شروع کنید - رایگان است',
        image:
          'https://odoocdn.com/openerp_website/static/src/img/2016/email-marketing/email_marketing_screenshot_01.jpg',
      },
      featureShowcase: [
        {
          title: 'دیتابیست رو دسته‌بندی کن',
          desc: `برای باز شدن و کلیک بیشتر!
نتایجت رو با فرستادن کمپین به گروه‌های هدفمند تو دیتابیست بهتر کن. از لیست مخاطبات، سرنخ‌ها، مشتری‌ها یا هر گروه دیگه‌ای رو بر اساس کشور، تاریخ، شغل و... انتخاب کن تا محتوات فقط به کسایی برسه که خودت می‌خوای.`,
          image: 'https://odoocdn.com/web/image/11142787/Mass-Mail-New.png',
        },
        {
          title: 'با آمار و داده‌ها، ایمیل‌های خفن‌تری بفرست!',
          desc: `با آمار دقیق و لحظه‌ای، هر ایمیلی که می‌فرستی رو زیر نظر بگیر. تعداد سرنخ‌ها، سفارش‌ها، درآمد، نرخ باز شدن ایمیل، نرخ پرش و نرخ کلیک رو راحت چک کن و استراتژی بازاریابی‌ت رو حسابی قوی‌تر کن. فرصت‌هایی که ایجاد شدن و درآمد پیش‌بینی‌شده رو هم دنبال کن.`,
          image: 'https://odoocdn.com/web/image/11142929/Mass-Mail-Summary.png',
        },
      ],
      interactiveElements: [
        {
          type: 'ایمیل مارکتینگ',
          title: 'کمپین‌های باحال بساز',
          desc: `از صفر شروع کن یا یکی از قالب‌های ما رو انتخاب کن. بدون نیاز به دانش فنی، کمپین‌های ایمیلی باحال بساز که حسابی به دل مخاطبات بشینه. با یه نرم‌افزار ساده و بصری، رو محتوا و ظاهر ایمیلت کامل کنترل داری.`,
          image:
            'https://odoocdn.com/openerp_website/static/src/img/2016/email-marketing/email_marketing_screenshot_02.jpg',
        },
        {
          type: 'ایمیل مارکتینگ',
          title: 'حوصله طراحی خبرنامه نداری؟ اشکال نداره!',
          desc: `فقط یکی از قالب‌های آماده‌مون رو انتخاب کن، یه کم چیدمانش رو تغییر بده، پیام و عکست رو اضافه کن و آماده‌ای که کمپین جدیدت رو بفرستی!`,
          image:
            'https://odoocdn.com/openerp_website/static/src/img/2016/email-marketing/email_marketing_screenshot_03.jpg',
        },
        {
          type: 'ایمیل مارکتینگ',
          title: 'رو هر دستگاهی کار می‌کنه',
          desc: `مطمئن باش خبرنامۀ ایمیلی‌ت روی هر صفحه‌ای—تبلت، موبایل، لپ‌تاپ یا کامپیوتر—عالی نمایش داده می‌شه. محتوامون خودش با صفحه مخاطبت تنظیم می‌شه، فاصله‌ها رو درست می‌کنه و تصاویر رو بهینه می‌کنه تا رو هر دستگاهی راحت خونده بشه.`,
          image:
            'https://odoocdn.com/openerp_website/static/src/img/2016/email-marketing/email_marketing_screenshot_05.png',
        },
      ],
      imageGallery: [
        'https://odoocdn.com/web/image/11170514/Link-Tracker.png',
        'https://odoocdn.com/openerp_website/static/src/img/2016/email-marketing/email_marketing_screenshot_08.gif',
        'https://odoocdn.com/openerp_website/static/src/img/2016/email-marketing/email_marketing_screenshot_02.jpg',
        'https://odoocdn.com/openerp_website/static/src/img/2016/email-marketing/email_marketing_screenshot_03.jpg',
      ],
    },
  },
  {
    name: 'خرید',
    category: 'operations',
    enName: 'purchase',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(4).svg',
    content: {
      img: 'https://odoocdn.com/openerp_website/static/src/img/2016/email-marketing/email_marketing_screenshot_01.jpg',
      heroSection: {
        title: 'سریع‌تر انبار رو پر کن و هیچ‌وقت کم نیار!',
        desc: 'از درخواست‌های خرید (RFQ) گرفته تا رسیدها، از مدل‌های مختلف محصول تا صورت‌حساب‌های فروشنده... راحت بشین و بذار نرم‌افزار همه‌کاره‌ی خرید آویس کارا رو برات انجام بده!',
        ctaText: 'همین حالا شروع کنید - رایگان است',
        image:
          'https://odoocdn.com/openerp_website/static/src/img/apps/purchase/hero_image.webp',
      },
      featureShowcase: [
        {
          title: 'قراردادهای خرید انعطاف‌پذیر برای هر موقعیت',
          desc: `با قراردادهای خرید قابل تنظیم و خودکار، خرید رو بهینه کن. با درخواست‌های جایگزین بهترین قیمت‌ها رو بگیر، خطوط محصول رو مقایسه کن و سفارش‌های تکراری رو با قراردادهای کلی ساده‌تر کن.`,
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/purchase/flexible_1.webp',
        },
        {
          title: 'همه جزئیات کوچیکی که خرید رو ممکن می‌کنه',
          desc: `مثل مدل‌های مختلف محصول، بسته‌بندی‌ها، واحدهای اندازه‌گیری و غیره.
یه قدم فراتر برو و سیستم‌های فروش حضوری و تجارت الکترونیک رو هم هماهنگ کن.`,
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/purchase/all_the_small_things_1.webp',
        },
        {
          title: 'شرکتای بیشتر، مشکلات کمتر',
          desc: 'یه محیط آویس، چند تا شرکت: تطبیق بانکی رو خودکار کن، مدیریت سفارش‌ها و فاکتورها رو ساده کن و داده‌ها رو بین شرکت‌های مختلف راحت به اشتراک بذار.',
          image:
            'hhttps://odoocdn.com/openerp_website/static/src/img/apps/purchase/features_2.webp',
        },
        {
          title: 'تصمیم‌های خرید هوشمندانه‌تر',
          desc: 'با چیزای مهم هم‌گام بمون. لیست قیمت فروشنده‌ها، مراجع، تخفیف‌ها و موجودی محصولات رو به دیتابیس خودت وارد کن.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/purchase/features_1.webp',
        },
      ],
      interactiveElements: [
        {
          type: 'خرید کردن',
          title: 'خودکارسازی درخواست‌های خرید',
          desc: 'برای آدمای پرمشغله که می‌خوان سریع کاراشونو روبراه کنن! هر درخواست خرید و سفارش رو با قوانین سفارش‌دهی خودکار ساده کن و وقتت رو برای چیزای مهم‌تر آزاد کن.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/purchase/automated_rfq_4.webp',
        },
        {
          type: 'خرید کردن',
          title: 'کنترل کامل فرآیندهای خرید',
          desc: 'قوانین و روش‌های خودت رو بساز و همه‌چیز رو هماهنگ کن! قوانین و روش‌های پر کردن انبار رو به دلخواه خودت تنظیم کن و فرآیندهای مهم رو هر جا لازم بود هماهنگ کن — قدرت دست توئه!',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/purchase/automated_rfq_2.webp',
        },
      ],
      imageGallery: [
        'https://odoocdn.com/openerp_website/static/src/img/apps/purchase/charge_vendors_2.webp',
        'https://odoocdn.com/openerp_website/static/src/img/apps/purchase/charge_vendors_1.webp',
        'https://odoocdn.com/openerp_website/static/src/img/apps/purchase/all_the_small_things_2.webp',
        'https://odoocdn.com/openerp_website/static/src/img/apps/purchase/flexible_2.webp',
      ],
    },
  },
  {
    name: 'موجودی انبار',
    category: 'operations',
    enName: 'inventory',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(16).svg',
    content: {
      img: 'https://odoocdn.com/openerp_website/static/src/img/apps/inventory/hero_image.webp',
      heroSection: {
        title: 'بالاخره یه سیستم انبارداری مدرن!',
        desc: 'با اپ مدیریت انبار آویس، دیگه نگران کمبود موجودی نباش، کاراتو سریع‌تر کن، مسیرها رو بهینه کن و همه‌چیز رو لحظه‌ای زیر نظر داشته باش! یادآورهای فروشنده رو هم خودکار کن!',
        ctaText: 'همین حالا شروع کنید - رایگان است',
        image:
          'https://odoocdn.com/openerp_website/static/src/img/apps/purchase/hero_image.webp',
      },
      featureShowcase: [
        {
          title: 'انبارت رو بهینه کن',
          desc: 'با استراتژی‌های هوشمند مثل قوانین مین-مکس، MTO یا برنامه تولید اصلی، انبارت همیشه پره. بذار آویس پیشنهاد بده یا سفارش‌های خرید رو خودکار فعال کن. پیگیری فروشنده‌ها رو هم خودکار کن تا چیزی از قلم نیفته: تأیید سفارش خرید، تأیید زمان‌بندی دریافت چند روز قبل و اینجور چیزا.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/inventory/automate_vendor.webp',
        },
        {
          title: 'پر کردن انبار بدون نقص',
          desc: 'مدیریت موجودی لحظه‌ای با کلی ویژگی: شماره سریال، لات‌ها، بسته‌بندی، استراتژی‌های رزرو، شمارش دوره‌ای، شاخص‌های کلیدی و غیره. جست‌وجوی سریع موجودی: تو یه چشم به هم زدن جای همه محصولاتت تو انبارهای مختلف یا شرکت‌های چندگانه رو پیدا کن.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/inventory/optimize_warehouse.webp',
        },
        {
          title: 'مسافت‌ها رو با مسیرهای هوشمند کم کن',
          desc: 'خرید بهینه: مسیرهای پیچیده رو تو آویس نقشه‌برداری کن و انتقال‌ها رو خودکار برنامه‌ریزی کن. با اقدامات بین اپ‌های مختلف، زنجیره تأمین رو کامل کنترل کن.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/inventory/smarts_routes.webp',
        },
        {
          title: 'ردیابی کامل',
          desc: '',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/inventory/reservation_mechanism.webp',
        },
      ],
      interactiveElements: [
        {
          type: 'مدیریت انبار',
          title: 'حرکات برداشت رو کم کن',
          desc: 'استراتژی مناسب خودت رو انتخاب کن: برداشت تکی، خوشه‌ای، موجی یا دسته‌ای. با استراتژی‌های رزرو چندگانه، کالاها رو آزاد کن. با روش درست، می‌تونی با همون تیم ۳۰٪ بیشتر محصول جمع کنی و بسته‌بندی کنی.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/inventory/wave-picking.svg',
        },
        {
          type: 'مدیریت انبار',
          title: 'برداشت موجی',
          desc: 'سفارش‌های برداشت رو بر اساس راهرو یا منطقه شروع کن و تو محل بسته‌بندی جمع کن. عالی برای انبارهای بزرگ',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/inventory/cluster-picking.svg',
        },
        {
          type: 'مدیریت انبار',
          title: 'برداشت خوشه‌ای',
          desc: 'چند سفارش رو تو یه مسیر جمع کن و همزمان آماده کن تا تو بسته‌بندی وقت صرفه‌جویی بشه. مناسب برای محصولات کوچیک',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/inventory/batch-picking.svg',
        },
      ],
      imageGallery: [
        'https://odoocdn.com/openerp_website/static/src/img/apps/inventory/traceability.webp',
      ],
    },
  },
  {
    name: 'تولید',
    category: 'operations',
    enName: 'manufacturing',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(3).svg',
    content: {
      img: 'https://odoocdn.com/openerp_website/static/src/img/apps/inventory/hero_image.webp',
      heroSection: {
        title: 'بهترین اپ تولید ناب!',
        desc: 'MRP + MES + PLM + کیفیت + کارگاه + نگهداری همه‌چیز تو یه پلتفرم ساده و سریع که نیازاتو برآورده می‌کنه!',
        ctaText: 'همین حالا شروع کنید - رایگان است',
        image:
          'https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/hero_image.webp',
      },
      featureShowcase: [
        {
          title: 'عملیات شبیه‌سازی‌شده لحظه‌ای',
          desc: 'سفارش‌های تولید رو با برنامه‌ریزی ظرفیت لحظه‌ای، موجودی قطعات و کنترل هزینه شبیه‌سازی کن. پیشنهادهای پر کردن به‌موقع بگیر و انتخاب کن که قطعات رو چطور تأمین کنی: تولید کن، بخر، برون‌سپاری کن یا از انبار دیگه بیار.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/operations.webp',
        },
        {
          title: 'برنامه‌ریزی که همیشه یه قدم جلوت نگه می‌داره',
          desc: 'سفارش‌های تولید رو برنامه‌ریزی کن و منابع رو با ظرفیت محدود مدیریت کن. با نمودار گانت به‌راحتی همه‌چیز رو تنظیم کن.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/schedule.webp',
        },
      ],
      interactiveElements: [
        {
          type: 'مدیریت تولید',
          title: 'ثبت تولید و قطعات',
          desc: 'سفارش‌ها رو پردازش کن، عملیات رو سریع‌تر کن و خطاهای ورودی رو کم کن. از همون لحظه اول کار می‌کنه، سریع و بدون تأخیر! بدون وای‌فای هم کار می‌کنه پس نگران قطعی اینترنت نباش!',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/barcode.webp',
        },
      ],
      imageGallery: [
        'https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/become_paperless_02.webp',
        'https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/sigma_6.webp',
        'https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/kaizen.svg',
        'https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/features_01.webp',
      ],
    },
  },
  {
    name: 'فروش',
    category: 'sales',
    enName: 'sales',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(2).svg',
    content: {
      img: 'https://odoocdn.com/openerp_website/static/src/img/apps/inventory/hero_image.webp',
      heroSection: {
        title: 'بیشتر بفروش با پیشنهادات فوری!',
        desc: 'با ابزار قدرتمند پیشنهاد قیمت آویس، به‌سرعت پیشنهادات تمیز، حرفه‌ای و تعاملی بساز.',
        ctaText: 'همین حالا شروع کنید - رایگان است',
        image:
          'https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/hero_image.webp',
      },
      featureShowcase: [
        {
          title:
            'از قالب‌های پیشنهاد قیمت برای خودکار کردن سفارش‌های رایج استفاده کن ',
          desc: 'قیمت‌گذاری و مالیات درست رو برای هر مشتری خودکار اعمال کن. کارای وقت‌گیر رو کنار بذار و روی چیزی که مهمه تمرکز کن: فروش!',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/sales/quote_template.webp',
        },
        {
          title: 'با پرتال مشتری، سریع‌تر معامله ببند',
          desc: 'بذار مشتریا خودشون دست‌به‌کار بشن! مشتریا می‌تونن به پیشنهادات، سفارش‌های فروش، سفارش‌های تحویل و کلی چیز دیگه دسترسی داشته باشن.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/sales/customer_portal_02.webp',
        },
        {
          title: 'فقط روی سرنخ‌های باکیفیت تمرکز کن',
          desc: 'از بازدیدهای وب‌سایت، کمپین‌های بازاریابی، ایمیل‌های مستعار، ثبت‌نام رویدادها و غیره سرنخ‌های باکیفیت تولید کن. امتیازدهی سرنخ‌ها با هوش مصنوعی بهت نشون می‌ده کدوم سرنخ‌ها ارزش وقت تیم فروشت رو دارن.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/sales/qualified_leads.webp',
        },
      ],
      imageGallery: [
        'https://odoocdn.com/openerp_website/static/src/img/apps/sales/unique_pricing.webp',
        'https://odoocdn.com/openerp_website/static/src/img/apps/sales/ai_powered.webp',
        'https://odoocdn.com/openerp_website/static/src/img/apps/sales/manage_01.webp',
        'https://odoocdn.com/openerp_website/static/src/img/apps/sales/manage_02.webp',
      ],
    },
  },
  {
    name: 'منابع انسانی',
    category: 'hr',
    enName: 'hr',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(1).svg',
    content: {
      img: 'https://odoocdn.com/openerp_website/static/src/img/apps/employees/hero_image.webp',
      heroSection: {
        title: 'یه مرکز جدید برای همه اطلاعات کارمندات',
        desc: 'اپ کارمندان آویس خیلی بیشتر از یه لیست ساده‌ست. این یه مرکز برای کلی ویژگی‌های منابع انسانیه!',
        ctaText: 'همین حالا شروع کنید - رایگان است',
        image:
          'https://odoocdn.com/openerp_website/static/src/img/apps/manufacturing/hero_image.webp',
      },
      featureShowcase: [
        {
          title: 'اون مهارت‌ها رو به رخ بکش',
          desc: 'مهارت‌های خاص هر کارمند رو ثبت کن تا دفعه بعد که دنبال یه متخصص جاوااسکریپت فرانسوی‌زبان بودی، دقیق بدونی به کی زنگ بزنی!',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/employees/show_off_those_skills.webp',
        },
        {
          title: 'مدیریت مرخصی‌ها رو تو دست بگیر',
          desc: 'با سیستم ردیابی مرخصی یکپارچه، درخواست‌های مرخصی رو زیر نظر داشته باش. با گزارش حضور و غیاب، کارمندا رو چک کن و درخواست‌های تعطیلات رو سریع تأیید کن.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/employees/take_control_of_time_off.webp',
        },
        {
          title: 'براساس عملکرد، ارزیابی کن',
          desc: 'ارزیابی‌های کارمندا رو برنامه‌ریزی کن و پیشرفت مهارت‌هاشون رو بسنج.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/employees/performance_appraisals.webp',
        },
      ],
      interactiveElements: [
        {
          type: 'مدیریت کارمندان',
          title: 'همه آدما، تو یه جا',
          desc: 'یه نگاه کلی به همه بخش‌ها بنداز و بعد برو سراغ جزئیات. کارمندات رو بر اساس ساعت کاری، عنوان شغلی یا حتی وضعیت قرارداد مرتب کن تا تیم‌ت رو از هر زاویه‌ای کامل ببینی.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/employees/all_in_one_place.webp',
        },
        {
          type: 'مدیریت کارمندان',
          title: 'چیزای خصوصی، خصوصی بمونن',
          desc: 'با تنظیمات دسترسی محدود، اطلاعات شخصی کارمندا مثل شماره تماس اضطراری، اطلاعات ویزا و غیره رو محافظت کن.',
          image:
            'https://odoocdn.com/openerp_website/static/src/img/apps/employees/stuff_private.webp',
        },
      ],
      imageGallery: [
        'https://odoocdn.com/openerp_website/static/src/img/apps/employees/all_in_one_place.webp',
        'https://odoocdn.com/openerp_website/static/src/img/apps/employees/stuff_private.webp',
      ],
    },
  },
  {
    name: 'داشبورد',
    category: 'analytics',
    enName: 'dashboard',
    imageSrc:
      'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/erp-icons/icon%20(12).svg',
  },
]
export async function GET() {
  return NextResponse.json(data)
}
