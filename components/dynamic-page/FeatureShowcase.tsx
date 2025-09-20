import Image from 'next/image'

interface Feature {
  title: string
  desc: string
  image: string
}

interface FeatureShowcaseProps {
  features: Feature[]
}

export default function FeatureShowcase({ features }: FeatureShowcaseProps) {
  return (
    <section id='features' className='border-b'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16 py-16 border-b'>
          <h2 className='text-2xl md:text-3xl font-bold mb-4'>
            ویژگی‌های کلیدی
          </h2>
          <p className='text-base text-muted-foreground max-w-2xl mx-auto'>
            کشف کنید که چگونه این ابزار می‌تواند کسب‌وکار شما را متحول کند
          </p>
        </div>
        <div className=''>
          {features.map((feature, index) => (
            <div key={index} className=''>
              {index % 2 === 0 ? (
                <>
                  <div className='border-y grid md:grid-cols-3'>
                    <div className='p-6 md:max-w-80 md:border-l col-span-1 text-center md:text-right'>
                      <h3 className='text-lg font-semibold'>{feature.title}</h3>
                      <p className='text-sm text-muted-foreground leading-relaxed pt-2'>
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                  <div className='grid sm:grid-cols-3'>
                    <div className='col-span-1 border-l'></div>
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={400}
                      height={400}
                      className='w-full h-full object-cover col-span-2'
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className='border-y grid md:grid-cols-3'>
                    <div className='col-span-2'></div>
                    <div className='p-6 border-r col-span-1 text-center md:text-left'>
                      <h3 className='text-lg font-semibold'>{feature.title}</h3>
                      <p className='text-sm text-muted-foreground leading-relaxed pt-2'>
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                  <div className='grid sm:grid-cols-3'>
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className='w-full h-full object-cover col-span-2'
                    />
                    <div className='col-span-1 border-r'></div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
