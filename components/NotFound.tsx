import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='min-h-screen flex items-center justify-center px-4'>
      <div className='text-center space-y-6'>
        <h1 className='text-6xl font-bold text-muted-foreground'>404</h1>
        <h2 className='text-2xl font-semibold'>صفحه مورد نظر یافت نشد</h2>
        <p className='text-muted-foreground max-w-md mx-auto'>
          متأسفانه صفحه‌ای که دنبال آن می‌گردید وجود ندارد یا حذف شده است.
        </p>
        <Link href='/'>
          <Button size='lg' className='mt-6'>
            بازگشت به صفحه اصلی
          </Button>
        </Link>
      </div>
    </div>
  )
}
