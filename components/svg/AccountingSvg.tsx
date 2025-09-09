const AccountingSvg = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 200 200'
      width='200'
      height='200'
      className='w-full h-full text-black dark:text-white'
    >
      <style jsx>{`
        .paper-slide {
          animation: slideIn 2s ease-in-out infinite alternate;
        }
        .coin-bounce {
          animation: coinFloat 3s ease-in-out infinite;
        }

        @keyframes slideIn {
          0% {
            transform: translateX(-5px);
          }
          100% {
            transform: translateX(0px);
          }
        }

        @keyframes coinFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>

      {/* Invoice paper */}
      <g className='paper-slide'>
        <rect
          x='40'
          y='30'
          width='80'
          height='120'
          rx='4'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.2'
        />

        {/* Text lines */}
        <line
          x1='50'
          y1='50'
          x2='110'
          y2='50'
          stroke='currentColor'
          strokeWidth='1.5'
        />
        <line
          x1='50'
          y1='65'
          x2='100'
          y2='65'
          stroke='currentColor'
          strokeWidth='1'
        />
        <line
          x1='50'
          y1='80'
          x2='105'
          y2='80'
          stroke='currentColor'
          strokeWidth='1'
        />
        <line
          x1='50'
          y1='95'
          x2='95'
          y2='95'
          stroke='currentColor'
          strokeWidth='1'
        />

        {/* Total line */}
        <line
          x1='50'
          y1='120'
          x2='110'
          y2='120'
          stroke='currentColor'
          strokeWidth='2'
        />
        <text
          x='80'
          y='135'
          textAnchor='middle'
          fill='currentColor'
          fontSize='12'
          fontWeight='bold'
        >
          Total
        </text>
      </g>

      {/* Money coins */}
      <g className='coin-bounce'>
        <circle
          cx='150'
          cy='60'
          r='12'
          fill='none'
          stroke='orange'
          strokeWidth='1.5'
        />
        <text
          x='150'
          y='66'
          textAnchor='middle'
          fill='orange'
          fontSize='14'
          fontWeight='bold'
        >
          $
        </text>
      </g>
      <g className='coin-bounce' style={{ animationDelay: '0.5s' }}>
        <circle
          cx='165'
          cy='75'
          r='10'
          fill='none'
          stroke='orange'
          strokeWidth='1.5'
        />
        <text
          x='165'
          y='80'
          textAnchor='middle'
          fill='orange'
          fontSize='12'
          fontWeight='bold'
        >
          $
        </text>
      </g>

      {/* Small financial chart */}
      <g transform='translate(30, 160)'>
        <rect
          x='0'
          y='0'
          width='60'
          height='30'
          fill='none'
          stroke='currentColor'
          strokeWidth='1'
          rx='2'
        />
        <path
          d='M5 25 L15 20 L25 15 L35 10 L45 18 L55 12'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
          opacity='0.7'
        />
        <circle cx='55' cy='12' r='2' fill='currentColor' />
      </g>
    </svg>
  )
}

export default AccountingSvg
