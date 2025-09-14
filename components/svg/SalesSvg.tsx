const ShoppingCartSvg = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 200 200'
      width='200'
      height='200'
      className='w-full h-full text-black dark:text-white'
    >
      <style jsx>{`
        @keyframes card-move {
          0% {
            transform: translate(0, 0) rotate(0) scale(1);
            opacity: 1;
          }
          45% {
            transform: translate(-15px, 40px) rotate(-8deg) scale(0.95);
            opacity: 1;
          }
          50% {
            transform: translate(-25px, 50px) rotate(-12deg) scale(0.9);
            opacity: 0;
          }
          60% {
            transform: translate(-25px, 50px) rotate(-12deg) scale(0.9);
            opacity: 0;
          }
          100% {
            transform: translate(0, 0) rotate(0) scale(1);
            opacity: 1;
          }
        }
        #product-card {
          transform-origin: center;
          animation: card-move 3s cubic-bezier(0.2, 0.9, 0.2, 1) infinite;
        }
      `}</style>

      {/* Shopping Cart */}
      <g
        stroke='currentColor'
        strokeWidth='2.4'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        {/* Cart body with depth */}
        <path d='M50 80h15l18 60h55' />
        <path d='M65 80l16 50h45' opacity='0.3' />

        {/* Cart basket grid */}
        <path d='M70 95h50' opacity='0.2' strokeWidth='1.5' />
        <path d='M75 110h45' opacity='0.2' strokeWidth='1.5' />
        <path d='M80 125h40' opacity='0.2' strokeWidth='1.5' />

        {/* Wheels with spokes */}
        <circle cx='75' cy='155' r='8' />
        <circle cx='125' cy='155' r='8' />
        <circle cx='75' cy='155' r='3' fill='currentColor' />
        <circle cx='125' cy='155' r='3' fill='currentColor' />
        <path d='M72 152l6 6M78 152l-6 6' strokeWidth='1.5' opacity='0.6' />
        <path d='M122 152l6 6M128 152l-6 6' strokeWidth='1.5' opacity='0.6' />

        {/* Handle with grip */}
        <path d='M50 80l5-15h25' />
        <circle cx='52' cy='67' r='2' fill='currentColor' opacity='0.4' />
        <circle cx='57' cy='67' r='2' fill='currentColor' opacity='0.4' />
      </g>

      {/* Product Card with shadow */}
      <g opacity='0.1'>
        <rect
          x='107'
          y='42'
          width='35'
          height='25'
          rx='4'
          ry='4'
          fill='currentColor'
        />
      </g>

      <g
        id='product-card'
        stroke='#10b981'
        strokeWidth='2.2'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <rect x='105' y='40' width='35' height='25' rx='4' ry='4' />

        {/* Card header */}
        <path d='M110 48h25' strokeWidth='2.5' />

        {/* Card content with varying weights */}
        <path d='M110 54h18' strokeWidth='1.8' />
        <path d='M110 58h22' strokeWidth='1.5' />
        <path d='M110 62h15' strokeWidth='1.5' />

        {/* Price tag corner */}
        <circle cx='130' cy='45' r='3' fill='#10b981' opacity='0.8' />
        <path d='M128 45h4' stroke='white' strokeWidth='0.8' />
      </g>

      {/* Subtle motion lines */}
      <g stroke='#10b981' strokeWidth='1' opacity='0.2' strokeDasharray='2,3'>
        <path d='M95 45 Q85 50 80 60' />
        <path d='M98 52 Q88 57 83 67' />
      </g>
    </svg>
  )
}

export default ShoppingCartSvg
