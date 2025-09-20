import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Vazirmatn } from 'next/font/google'
import { AppProvider } from './contexts/AppContext'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const vazir = Vazirmatn({
  variable: '--font-vazir',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'سیستم مدیریت منابع انسانی آویس',
  description: 'یک وبسایت ساخته شده با Next.js',
  icons: {
    icon: 'https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/logo/avis-mono-dark.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const menuItems = [
    { label: 'ماژول‌ها', href: '#modules' },
    { label: 'قیمت‌ها', href: '#pricing' },
    { label: 'داشبورد', href: '#dashboard' },
    { label: 'از اینجا شروع کنید', href: '#cta' },
  ]
  return (
    <html lang='fa' dir='rtl' suppressHydrationWarning>
      <body
        className={`${vazir.variable} ${geistSans.variable} ${geistMono.variable} bg-background text-foreground`}
      >
        <AppProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <footer className='border-t border-border'>
              <div className='max-w-6xl mx-auto px-6 pb-16'>
                <div className='pt-8 flex flex-col md:flex-row justify-between items-center gap-6'>
                  <p className='text-muted-foreground'>
                    © ۱۴۰۳ AVIS. تمامی حقوق محفوظ است.
                  </p>
                  <div className='flex gap-8'>
                    <a
                      href='#'
                      className='text-muted-foreground hover:text-foreground transition-colors'
                    >
                      حریم خصوصی
                    </a>
                    <a
                      href='#'
                      className='text-muted-foreground hover:text-foreground transition-colors'
                    >
                      شرایط استفاده
                    </a>
                    <a
                      href='#'
                      className='text-muted-foreground hover:text-foreground transition-colors'
                    >
                      سوالات متداول
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  )
}
