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
    <section id='modules' className='pt-20 border-y'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <div className='border-y'>
            <div className='text-center mx-12'>
              <h2 className='relative text-3xl font-bold border-x py-8 px-4'>
                ماژول‌های ERP
              </h2>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3'>
          {modules.map((module, index) => (
            <div key={index} className='border p-4'>
              {/* Conditionally render SVG if it exists */}
              <div>
                <div className='flex items-center gap-3 mb-2'>
                  <div className='p-2 bg-primary/10 rounded-lg'>
                    <module.icon className='h-4 sm:h-6 w-4 sm:w-6' />
                  </div>
                  <div className='text-lg font-bold'>{module.title}</div>
                </div>
                <div className='text-sm my-4'>{module.description}</div>
              </div>
              <div>
                <ul className='space-y-2 pr-4'>
                  {module.features.map((feature, idx) => (
                    <li key={idx} className='flex items-center gap-2 text-xs'>
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
