'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'
import { ThemeToggle } from './theme-toggle'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface MenuItem {
  label: string
  href: string
}

interface NavigationProps {
  menuItems: MenuItem[]
}

const Navigation = ({ menuItems }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className='border-b border-border backdrop-blur-sm sticky top-0 z-50 bg-background/80'>
      <div className='max-w-6xl mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo and Brand */}
          <Link href='/'>
            <div className='flex items-center gap-3'>
              <div className='w-8 h-8 flex items-center justify-center'>
                <Image
                  src='https://kbgnpdzggogidjwifiuq.supabase.co/storage/v1/object/public/avis/logo/avis-mono-dark.png'
                  alt='آویس لوگو'
                  width={30}
                  height={30}
                  className='object-contain invert dark:invert-0'
                />
              </div>
              <span className='text-xl font-bold'>آویس</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center gap-8'>
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-foreground font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? 'بستن منو' : 'باز کردن منو'}
              className='p-2'
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Right Section (Theme Toggle + Button) */}
          <div className='hidden md:flex items-center gap-2'>
            <ThemeToggle />
            <Button
              size='sm'
              className='bg-primary text-primary-foreground hover:bg-primary/90'
            >
              شروع پروژه
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className='md:hidden mt-4 flex flex-col gap-4'>
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-foreground font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                aria-current={pathname === item.href ? 'page' : undefined}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className='flex items-center gap-2'>
              <ThemeToggle />
              <Button
                size='sm'
                className='bg-primary text-primary-foreground hover:bg-primary/90'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                شروع پروژه
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
