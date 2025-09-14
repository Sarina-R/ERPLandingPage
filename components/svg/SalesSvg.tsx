const GroceryStoreSvg = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 200 200'
      width='200'
      height='200'
      className='w-full h-full text-black dark:text-white'
    >
      <style jsx>{`
        .cart-roll {
          animation: cartRoll 3s ease-in-out infinite alternate;
        }

        @keyframes cartRoll {
          0% {
            transform: translateX(-40px);
          }
          100% {
            transform: translateX(0px);
          }
        }
      `}</style>

      {/* Large grocery store storefront with more details */}
      <g transform='translate(20, 20)'>
        {/* Store building base */}
        <path
          d='M0 100 L0 20 L20 0 L140 0 L160 20 L160 100 L0 100 Z'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
        />
        {/* Roof details */}
        <line
          x1='0'
          y1='20'
          x2='160'
          y2='20'
          stroke='currentColor'
          strokeWidth='1.5'
        />
        <path
          d='M80 0 L80 -10'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
        />
        {/* Store signboard */}
        <rect
          x='40'
          y='-15'
          width='80'
          height='15'
          rx='3'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
        />
        <text
          x='80'
          y='-3'
          textAnchor='middle'
          fill='currentColor'
          fontSize='10'
          fontWeight='bold'
        >
          Grocery Store
        </text>
        {/* Entrance door */}
        <rect
          x='60'
          y='60'
          width='40'
          height='40'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
        />
        <line
          x1='80'
          y1='60'
          x2='80'
          y2='100'
          stroke='currentColor'
          strokeWidth='1.5'
        />
        {/* Windows */}
        <rect
          x='10'
          y='30'
          width='30'
          height='20'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.2'
        />
        <rect
          x='120'
          y='30'
          width='30'
          height='20'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.2'
        />
        {/* Shelf visible through window */}
        <line
          x1='15'
          y1='35'
          x2='35'
          y2='35'
          stroke='currentColor'
          strokeWidth='1'
          opacity='0.7'
        />
        <line
          x1='15'
          y1='45'
          x2='35'
          y2='45'
          stroke='currentColor'
          strokeWidth='1'
          opacity='0.7'
        />
        <line
          x1='125'
          y1='35'
          x2='145'
          y2='35'
          stroke='currentColor'
          strokeWidth='1'
          opacity='0.7'
        />
        <line
          x1='125'
          y1='45'
          x2='145'
          y2='45'
          stroke='currentColor'
          strokeWidth='1'
          opacity='0.7'
        />
        {/* Awning above door */}
        <path
          d='M50 60 Q80 40 110 60'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
        />
      </g>

      {/* shopping cart */}
      <g transform='translate(50, 140)' className='cart-roll'>
        {/* Cart basket with grid lines */}
        <rect
          x='0'
          y='110'
          width='50'
          height='30'
          rx='2'
          fill='none'
          stroke='red'
          strokeWidth='1.5'
        />
        <line x1='10' y1='110' x2='10' y2='140' stroke='red' strokeWidth='1' />
        <line x1='20' y1='110' x2='20' y2='140' stroke='red' strokeWidth='1' />
        <line x1='30' y1='110' x2='30' y2='140' stroke='red' strokeWidth='1' />
        <line x1='40' y1='110' x2='40' y2='140' stroke='red' strokeWidth='1' />
        <line x1='0' y1='120' x2='50' y2='120' stroke='red' strokeWidth='1' />
        <line x1='0' y1='130' x2='50' y2='130' stroke='red' strokeWidth='1' />

        {/* Wheels */}
        <circle
          cx='10'
          cy='145'
          r='4'
          fill='none'
          stroke='red'
          strokeWidth='1.2'
        />
        <circle
          cx='40'
          cy='145'
          r='4'
          fill='none'
          stroke='red'
          strokeWidth='1.2'
        />
      </g>
    </svg>
  )
}

export default GroceryStoreSvg
