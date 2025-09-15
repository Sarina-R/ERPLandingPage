'use client'

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'
import axios from 'axios'

// Define types based on your data structure
interface HeroSection {
  title: string
  desc: string
  ctaText: string
  image: string
}

interface Feature {
  title: string
  desc: string
  image: string
}

interface InteractiveElement {
  type: string
  title: string
  desc: string
}

interface Testimonial {
  name: string
  position: string
  company: string
  content: string
  avatar: string
  companyLogo: string
}

interface CTA {
  title: string
  desc: string
  primaryButton: string
  secondaryButton: string
}

interface AppContent {
  heroSection: HeroSection
  featureShowcase: Feature[]
  interactiveElements: InteractiveElement[]
  imageGallery: string[]
  testimonials: Testimonial[]
  cta: CTA
}

interface AppData {
  name: string
  category: string
  enName: string
  content: AppContent
}

interface AppContextType {
  apps: AppData[]
  loading: boolean
  error: string | null
  getAppByEnName: (enName: string) => AppData | undefined
  refreshData: () => Promise<void>
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [apps, setApps] = useState<AppData[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchApps = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await axios.get('/api')
      setApps(response.data)
    } catch (err) {
      console.error('Error fetching apps:', err)
      setError('Failed to fetch applications')
    } finally {
      setLoading(false)
    }
  }

  const getAppByEnName = (enName: string): AppData | undefined => {
    return apps.find((app) => app.enName === enName)
  }

  const refreshData = async () => {
    await fetchApps()
  }

  useEffect(() => {
    fetchApps()
  }, [])

  const contextValue: AppContextType = {
    apps,
    loading,
    error,
    getAppByEnName,
    refreshData,
  }

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}
