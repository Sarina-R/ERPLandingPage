interface Testimonial {
  name: string
  position: string
  company: string
  content: string
  avatar: string
  companyLogo: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className='py-20 px-4'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>نظرات مشتریان</h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            ببینید مشتریان ما در مورد تجربه‌شان چه می‌گویند
          </p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className='bg-background rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50'
            >
              <div className='flex items-center mb-6'>
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className='w-12 h-12 rounded-full object-cover mr-4'
                />
                <div className='flex-1'>
                  <h4 className='font-semibold'>{testimonial.name}</h4>
                  <p className='text-sm text-muted-foreground'>
                    {testimonial.position}
                  </p>
                </div>
                <img
                  src={testimonial.companyLogo}
                  alt={testimonial.company}
                  className='w-8 h-8 object-contain'
                />
              </div>
              <blockquote className='text-muted-foreground italic leading-relaxed'>
                &quot;{testimonial.content}&quot;
              </blockquote>
              <div className='mt-4 text-sm font-medium text-primary'>
                {testimonial.company}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
