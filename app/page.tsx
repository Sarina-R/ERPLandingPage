'use client'

import Cooperation from '@/components/page-components/Cooperation'
import CTASection from '@/components/page-components/CTASection'
import HeroSection from '@/components/page-components/HeroSection'
import IntegrationSection from '@/components/page-components/IntegrationSection'
import ModulesSection from '@/components/page-components/ModulesSection'
import PricingSection from '@/components/page-components/PricingSection'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Calculator,
  Users,
  ShoppingCart,
  Globe,
  BarChart3,
  Warehouse,
  CheckCircle,
  Star,
  TrendingUp,
  Award,
  Zap,
} from 'lucide-react'
import { useState, useEffect } from 'react'

export default function ERPLandingPage() {
  const [selectedPlan, setSelectedPlan] = useState('starter')
  const [userCount, setUserCount] = useState(5)
  const [animatedStats, setAnimatedStats] = useState({
    users: 0,
    companies: 0,
    countries: 0,
    satisfaction: 0,
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats({
        users: 12000000,
        companies: 7000000,
        countries: 120,
        satisfaction: 98,
      })
    }, 500)
    return () => clearTimeout(timer)
  }, [])

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
    },
  ]

  return (
    <div className='min-h-screen bg-background text-foreground  max-w-6xl mx-auto mt-12'>
      <div className='mx-4 border'>
        <HeroSection />
        <IntegrationSection />
        <ModulesSection modules={modules} />
        <PricingSection />
        <Cooperation />
        <CTASection />
      </div>
    </div>
  )
}
