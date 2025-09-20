import Navigation from '@/components/Navigation'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const menuItems = [
    { label: 'ماژول‌ها', href: '#modules' },
    { label: 'داشبورد', href: '#dashboard' },
    { label: 'ویژگی‌ها', href: '#features' },
    { label: 'سایر برنامه‌ها', href: '#other-apps' },
    { label: 'گالری تصاویر', href: '#gallery' },
    { label: 'از اینجا شروع کنید', href: '#cta' },
  ]
  return (
    <>
      <Navigation menuItems={menuItems} />
      {children}
    </>
  )
}
