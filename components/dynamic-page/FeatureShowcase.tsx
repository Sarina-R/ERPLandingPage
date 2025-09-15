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
    <section className='py-20 px-4 bg-muted/30'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            ویژگی‌های کلیدی
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            کشف کنید که چگونه این ابزار می‌تواند کسب‌وکار شما را متحول کند
          </p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='group bg-background rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1'
            >
              <div className='mb-6 overflow-hidden rounded-xl'>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
                />
              </div>
              <h3 className='text-xl font-semibold mb-3'>{feature.title}</h3>
              <p className='text-muted-foreground leading-relaxed'>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
