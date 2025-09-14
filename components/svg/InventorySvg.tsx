const InventoryActionIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 200 200'
      width='200'
      height='200'
      className='w-full h-full text-black dark:text-white'
    >
      <style jsx>{`
        .conveyor-move {
          animation: slideBox 2s ease-in-out infinite alternate;
        }
        .pulse {
          animation: dataPulse 2s ease-in-out infinite;
        }
        .line-draw {
          animation: drawLine 3s ease-in-out infinite;
        }

        @keyframes slideBox {
          0% {
            transform: translateX(-15px);
          }
          100% {
            transform: translateX(15px);
          }
        }

        @keyframes dataPulse {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes drawLine {
          0% {
            stroke-dashoffset: 200;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
      `}</style>

      {/* Warehouse floor */}
      <rect
        x='20'
        y='80'
        width='160'
        height='100'
        rx='6'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
      />

      {/* Conveyor belt (representing goods in/out) */}
      <g className='conveyor-move'>
        <rect
          x='40'
          y='110'
          width='120'
          height='10'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
        />
        <rect
          x='50'
          y='100'
          width='15'
          height='15'
          fill='orange'
          stroke='currentColor'
          strokeWidth='1'
        />
        <rect
          x='80'
          y='100'
          width='15'
          height='15'
          fill='orange'
          stroke='currentColor'
          strokeWidth='1'
          style={{ animationDelay: '0.3s' }}
        />
        <rect
          x='110'
          y='100'
          width='15'
          height='15'
          fill='orange'
          stroke='currentColor'
          strokeWidth='1'
          style={{ animationDelay: '0.6s' }}
        />
      </g>

      {/* Digital dashboard (representing inventory control and tracking) */}
      <g transform='translate(130, 30)' className='pulse'>
        <rect
          x='0'
          y='0'
          width='50'
          height='40'
          rx='4'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
        />
        <path
          d='M10 30 L20 20 L30 25 L40 15'
          fill='none'
          stroke='green'
          strokeWidth='1.5'
          className='line-draw'
          strokeDasharray='200'
          opacity='0.7'
        />
        <circle cx='40' cy='15' r='2.5' fill='green' className='pulse' />
        <text
          x='25'
          y='35'
          textAnchor='middle'
          fill='currentColor'
          fontSize='10'
          fontWeight='bold'
        >
          Stock
        </text>
      </g>

      {/* Report icon (representing goods movement report) */}
      <g transform='translate(30, 30)' className='pulse'>
        <rect
          x='0'
          y='0'
          width='40'
          height='50'
          rx='3'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
        />
        <line
          x1='10'
          y1='15'
          x2='30'
          y2='15'
          stroke='currentColor'
          strokeWidth='1.2'
        />
        <line
          x1='10'
          y1='25'
          x2='25'
          y2='25'
          stroke='currentColor'
          strokeWidth='1.2'
        />
        <line
          x1='10'
          y1='35'
          x2='30'
          y2='35'
          stroke='currentColor'
          strokeWidth='1.2'
        />
        <text
          x='20'
          y='47'
          textAnchor='middle'
          fill='currentColor'
          fontSize='8'
          fontWeight='bold'
        >
          Report
        </text>
      </g>

      {/* Arrows for goods movement */}
      <g>
        <path
          d='M30 120 L10 120 L15 115 M10 120 L15 125'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
          className='pulse'
        />
        <path
          d='M170 120 L190 120 L185 115 M190 120 L185 125'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
          className='pulse'
          style={{ animationDelay: '0.4s' }}
        />
      </g>

      {/* Barcode (representing goods tracking) */}
      <g transform='translate(80, 140)' className='pulse'>
        <rect
          x='0'
          y='0'
          width='40'
          height='20'
          fill='none'
          stroke='currentColor'
          strokeWidth='1'
          rx='2'
        />
        <line
          x1='5'
          y1='5'
          x2='5'
          y2='15'
          stroke='currentColor'
          strokeWidth='1.5'
        />
        <line
          x1='10'
          y1='5'
          x2='10'
          y2='15'
          stroke='currentColor'
          strokeWidth='2'
        />
        <line
          x1='15'
          y1='5'
          x2='15'
          y2='15'
          stroke='currentColor'
          strokeWidth='1'
        />
        <line
          x1='20'
          y1='5'
          x2='20'
          y2='15'
          stroke='currentColor'
          strokeWidth='1.5'
        />
        <line
          x1='25'
          y1='5'
          x2='25'
          y2='15'
          stroke='currentColor'
          strokeWidth='2'
        />
        <line
          x1='30'
          y1='5'
          x2='30'
          y2='15'
          stroke='currentColor'
          strokeWidth='1'
        />
        <line
          x1='35'
          y1='5'
          x2='35'
          y2='15'
          stroke='currentColor'
          strokeWidth='1.5'
        />
      </g>
    </svg>
  )
}

export default InventoryActionIcon
