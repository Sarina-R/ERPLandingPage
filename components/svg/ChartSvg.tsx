const ChartSvg = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 200 200'
      width='200'
      height='200'
      className='w-full h-full pt-10 text-black dark:text-white'
    >
      <style jsx>{`
        .bar-grow {
          animation: growBar 2s ease-in-out infinite alternate;
        }
        .line-draw {
          animation: drawLine 3s ease-in-out infinite;
        }
        .data-pulse {
          animation: dataPulse 2s ease-in-out infinite;
        }

        @keyframes growBar {
          0% {
            transform: scaleY(0.3);
          }
          100% {
            transform: scaleY(1);
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

        @keyframes dataPulse {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>

      {/* Screen border */}
      <rect
        x='20'
        y='20'
        width='160'
        height='120'
        rx='8'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
      />

      {/* Screen area */}
      <rect x='30' y='30' width='140' height='100' rx='4' fill='none' />

      {/* Monitor base */}
      <rect x='85' y='140' width='30' height='8' rx='4' fill='currentColor' />
      <rect x='70' y='148' width='60' height='6' rx='3' fill='currentColor' />

      {/* Bar chart */}
      <g
        transform='translate(40, 90)'
        className='bar-grow'
        style={{ transformOrigin: 'bottom' }}
      >
        <rect x='0' y='30' width='8' height='20' fill='green' rx='1' />
      </g>
      <g
        transform='translate(55, 85)'
        className='bar-grow'
        style={{ transformOrigin: 'bottom', animationDelay: '0.2s' }}
      >
        <rect x='0' y='30' width='8' height='25' fill='green' rx='1' />
      </g>
      <g
        transform='translate(70, 75)'
        className='bar-grow'
        style={{ transformOrigin: 'bottom', animationDelay: '0.4s' }}
      >
        <rect x='0' y='30' width='8' height='35' fill='green' rx='1' />
      </g>
      <g
        transform='translate(85, 80)'
        className='bar-grow'
        style={{ transformOrigin: 'bottom', animationDelay: '0.6s' }}
      >
        <rect x='0' y='30' width='8' height='30' fill='green' rx='1' />
      </g>

      {/* Line chart */}
      <path
        d='M110 110 L125 95 L140 85 L155 90 L170 75'
        fill='none'
        stroke='green'
        strokeWidth='1.5'
        className='line-draw'
        strokeDasharray='200'
        opacity='0.7'
      />

      {/* Data points */}
      <circle
        cx='110'
        cy='110'
        r='2.5'
        className='data-pulse'
        fill='green'
        style={{ animationDelay: '0s' }}
      />
      <circle
        cx='125'
        cy='95'
        r='2.5'
        className='data-pulse'
        fill='green'
        style={{ animationDelay: '0.3s' }}
      />
      <circle
        cx='140'
        cy='85'
        r='2.5'
        className='data-pulse'
        fill='green'
        style={{ animationDelay: '0.6s' }}
      />
      <circle
        cx='155'
        cy='90'
        r='2.5'
        className='data-pulse'
        fill='green'
        style={{ animationDelay: '0.9s' }}
      />
      <circle
        cx='170'
        cy='75'
        r='2.5'
        className='data-pulse'
        fill='green'
        style={{ animationDelay: '1.2s' }}
      />
    </svg>
  )
}

export default ChartSvg
