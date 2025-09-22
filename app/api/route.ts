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
