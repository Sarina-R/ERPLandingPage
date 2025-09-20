import Navigation from '@/components/Navigation'

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
    <>
      <Navigation menuItems={menuItems} />
      {children}
    </>
  )
}
