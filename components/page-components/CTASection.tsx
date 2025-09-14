import { Button } from '../ui/button'

const CTASection = () => {
  return (
    <section id='cta' className='py-20 px-4 relative border-t'>
      <div className='max-w-4xl mx-auto text-center relative z-10'>
        {/* Main Heading with Mathematical Enhancement */}
        <div className='relative mb-6'>
          <h2 className='text-4xl font-bold mb-2'>آماده شروع هستید؟</h2>

          {/*  Line Animation */}
          <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse'></div>
        </div>

        {/* Enhanced Description */}
        <div className='relative mb-8'>
          <p className='text-xl mb-4 opacity-90 max-w-2xl mx-auto leading-relaxed'>
            همین امروز دمو رایگان دریافت کنید و ببینید AVIS چگونه کسب‌وکار شما
            را متحول می‌کند.
          </p>
        </div>

        {/* Enhanced Button Section */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center relative'>
          {/* Primary Button */}
          <div className='relative group'>
            <Button
              size='lg'
              variant='secondary'
              className='text-lg px-8 relative overflow-hidden backdrop-blur-sm border-primary/20 bg-primary/10 hover:bg-primary/20 transition-all duration-300 border'
            >
              <span className='relative z-10'>درخواست دمو رایگان</span>

              {/* Mathematical Ripple Effect */}
              <div className='absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700'></div>
            </Button>
          </div>

          {/* Secondary Button */}
          <div className='relative group'>
            <Button
              size='lg'
              variant='outline'
              className='text-lg px-8 border-primary/30 text-foreground hover:bg-primary/10 hover:text-foreground bg-transparent relative overflow-hidden backdrop-blur-sm transition-all duration-300'
            >
              <span className='relative z-10'>تماس با مشاور</span>

              {/* Wave Effect */}
              <div className='absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500'></div>
            </Button>
          </div>
        </div>

        {/* Mathematical Proof Footer */}
        <div className='mt-8 relative'>
          <div className='inline-block bg-card/30 backdrop-blur-sm border border-border/20 rounded-md px-4 py-2'>
            <span className='text-xs font-mono text-muted-foreground'></span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        @keyframes orbit-1 {
          0% {
            transform: rotate(0deg) translateX(180px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(180px) rotate(-360deg);
          }
        }
        .animate-orbit-1 {
          animation: orbit-1 20s linear infinite;
        }

        @keyframes orbit-2 {
          0% {
            transform: rotate(90deg) translateX(160px) rotate(-90deg);
          }
          100% {
            transform: rotate(450deg) translateX(160px) rotate(-450deg);
          }
        }
        .animate-orbit-2 {
          animation: orbit-2 25s linear infinite;
        }

        @keyframes orbit-3 {
          0% {
            transform: rotate(180deg) translateX(140px) rotate(-180deg);
          }
          100% {
            transform: rotate(540deg) translateX(140px) rotate(-540deg);
          }
        }
        .animate-orbit-3 {
          animation: orbit-3 30s linear infinite;
        }

        @keyframes orbit-4 {
          0% {
            transform: rotate(270deg) translateX(170px) rotate(-270deg);
          }
          100% {
            transform: rotate(630deg) translateX(170px) rotate(-630deg);
          }
        }
        .animate-orbit-4 {
          animation: orbit-4 22s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default CTASection
