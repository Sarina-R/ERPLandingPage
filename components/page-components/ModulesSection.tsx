import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { CheckCircle } from 'lucide-react'

interface Module {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  features: string[]
}

interface ModulesSectionProps {
  modules: Module[]
}

const ModulesSection: React.FC<ModulesSectionProps> = ({ modules }) => {
  return (
    <section className='py-20 px-4 bg-muted/30'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold mb-4'>ماژول‌های ERP</h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            انتخاب کنید که کدام ماژول‌ها برای کسب‌وکار شما مناسب هستند
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {modules.map((module, index) => (
            <Card
              key={index}
              className='group hover:shadow-lg transition-shadow duration-300'
            >
              <CardHeader>
                <div className='flex items-center gap-3 mb-2'>
                  <div className='p-2 bg-primary/10 rounded-lg'>
                    <module.icon className='h-6 w-6' />
                  </div>
                  <CardTitle className='text-xl'>{module.title}</CardTitle>
                </div>
                <CardDescription className='text-base'>
                  {module.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='space-y-2'>
                  {module.features.map((feature, idx) => (
                    <li key={idx} className='flex items-center gap-2 text-sm'>
                      <CheckCircle className='h-4 w-4 text-primary flex-shrink-0' />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ModulesSection
