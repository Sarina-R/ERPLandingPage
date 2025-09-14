'use client'

import Cooperation from '@/components/page-components/Cooperation'
import CTASection from '@/components/page-components/CTASection'
import LiveDashboardPreview from '@/components/page-components/LiveDashboardPreview'
import HeroSection from '@/components/page-components/HeroSection'
import IntegrationSection from '@/components/page-components/IntegrationSection'
import ModulesSection from '@/components/page-components/ModulesSection'
import PricingSection from '@/components/page-components/PricingSection'
import InteractiveComparisonTool from '@/components/page-components/InteractiveComparisonTool'
import InteractiveProcessFlow from '@/components/page-components/InteractiveProcessFlow'
import AccountingSvg from '@/components/svg/AccountingSvg'
import ChartSvg from '@/components/svg/ChartSvg'
import ShoppingSvg from '@/components/svg/ShoppingSvg'
import {
  Calculator,
  Users,
  ShoppingCart,
  Globe,
  BarChart3,
  Warehouse,
} from 'lucide-react'
import SalesActionIcon from '@/components/svg/SalesSvg'
import SiteBuilderActionIcon from '@/components/svg/SiteBuilderActionIcon'
import InventoryActionIcon from '@/components/svg/InventorySvg'

export default function ERPLandingPage() {
  const modules = [
    {
      title: 'حسابداری',
      description: 'مدیریت کامل امور مالی، صورتحساب‌ها، و گزارش‌های مالی',
      icon: Calculator,
      features: [
        'صدور فاکتور',
        'مدیریت هزینه‌ها',
        'گزارش‌های مالی',
        'مالیات و عوارض',
      ],
      svg: AccountingSvg,
    },
    {
      title: 'گزارش‌گیری و تحلیل',
      description: 'داشبوردهای تحلیلی و گزارش‌های مدیریتی',
      icon: BarChart3,
      features: [
        'داشبورد مدیریتی',
        'گزارش‌های سفارشی',
        'تحلیل فروش',
        'پیش‌بینی درآمد',
      ],
      svg: ChartSvg,
    },
    {
      title: 'مدیریت ارتباط با مشتری',
      description: 'پیگیری مشتریان، فرصت‌های فروش و خدمات پس از فروش',
      icon: Users,
      features: [
        'پایگاه داده مشتریان',
        'پیگیری فرصت‌ها',
        'مدیریت تماس‌ها',
        'خدمات پشتیبانی',
      ],
      svg: ShoppingSvg,
    },
    {
      title: 'فروش',
      description: 'مدیریت فرآیند فروش از سفارش تا تحویل',
      icon: ShoppingCart,
      features: [
        'مدیریت سفارشات',
        'پیش‌فاکتور',
        'قیمت‌گذاری',
        'تخفیفات و پروموشن',
      ],
      svg: SalesActionIcon,
    },
    {
      title: 'سایت‌ساز',
      description: 'ایجاد و مدیریت وب‌سایت تجاری با امکانات فروشگاه آنلاین',
      icon: Globe,
      features: [
        'طراحی ریسپانسیو',
        'فروشگاه آنلاین',
        'مدیریت محتوا',
        'سئو و بهینه‌سازی',
      ],
      svg: SiteBuilderActionIcon,
    },

    {
      title: 'مدیریت انبار',
      description: 'کنترل موجودی، ورود و خروج کالا',
      icon: Warehouse,
      features: [
        'کنترل موجودی',
        'مدیریت انبارها',
        'ردیابی کالا',
        'گزارش حرکت کالا',
      ],
      svg: InventoryActionIcon,
    },
  ]

  return (
    <div className='min-h-screen bg-background text-foreground  max-w-6xl mx-auto mt-12'>
      <div className='mx-4 border'>
        <HeroSection />
        <IntegrationSection />
        <ModulesSection modules={modules} />
        <PricingSection />
        <InteractiveProcessFlow />
        <LiveDashboardPreview />
        <InteractiveComparisonTool />
        <Cooperation />
        <CTASection />
      </div>
    </div>
  )
}
