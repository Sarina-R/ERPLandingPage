import { CheckCircle } from 'lucide-react'

interface Module {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  features: string[]
  svg?: React.ComponentType
}

interface ModulesSectionProps {
  modules: Module[]
}

const ModulesSection: React.FC<ModulesSectionProps> = ({ modules }) => {
  return (
    <section className='pt-20 border-y'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <div className='border-y'>
            <div className='text-center mx-12'>
              <h2 className='relative text-4xl font-bold border-x py-8 px-4'>
                ماژول‌های ERP
              </h2>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3'>
          {modules.map((module, index) => (
            <div
              key={index}
              className='group hover:shadow-lg transition-shadow duration-300 border p-4'
            >
              {/* Conditionally render SVG if it exists */}
              <div>
                <div className='flex items-center gap-3 mb-2'>
                  <div className='p-2 bg-primary/10 rounded-lg'>
                    <module.icon className='h-6 w-6' />
                  </div>
                  <div className='text-xl'>{module.title}</div>
                </div>
                <div className='text-base'>{module.description}</div>
              </div>
              <div>
                <ul className='space-y-2'>
                  {module.features.map((feature, idx) => (
                    <li key={idx} className='flex items-center gap-2 text-sm'>
                      <CheckCircle className='h-4 w-4 text-primary flex-shrink-0' />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              {module.svg && (
                <div className='flex justify-center mt-auto opacity-60'>
                  <module.svg />
                </div>
              )}{' '}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ModulesSection
