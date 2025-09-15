import type { Metadata } from 'next'

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
  return <>{children}</>
}
