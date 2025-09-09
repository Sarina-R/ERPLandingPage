const ShoppingSvg = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 200 200'
      width='200'
      height='200'
      className='hidden md:block w-full h-full text-black dark:text-white'
    >
      {/* Center - CRM System */}
      <g transform='translate(100, 100)' className='center-pulse'>
        <circle cx='0' cy='0' r='20' fill='currentColor' />
        <text
          x='0'
          y='6'
          textAnchor='middle'
          fill='white'
          fontSize='14'
          fontWeight='bold'
        >
          CRM
        </text>
      </g>

      {/* Customers around */}
      <g>
        <g transform='translate(100, 100)'>
          {/* Customer template repeated */}
          <g transform='translate(0, -60)' className='user-bob'>
            <circle
              cx='0'
              cy='0'
              r='12'
              fill='none'
              stroke='blue'
              strokeWidth='1.5'
            />
            <circle cx='0' cy='-3' r='4' fill='blue' />
            <path
              d='M-6 2 C-6 6 6 6 6 2'
              stroke='blue'
              strokeWidth='1.2'
              fill='none'
            />
          </g>
          <g
            transform='translate(52, -30)'
            className='user-bob'
            style={{ animationDelay: '0.5s' }}
          >
            <circle
              cx='0'
              cy='0'
              r='12'
              fill='none'
              stroke='blue'
              strokeWidth='1.5'
            />
            <circle cx='0' cy='-3' r='4' fill='blue' />
            <path
              d='M-6 2 C-6 6 6 6 6 2'
              stroke='blue'
              strokeWidth='1.2'
              fill='none'
            />
          </g>
          <g
            transform='translate(52, 30)'
            className='user-bob'
            style={{ animationDelay: '1s' }}
          >
            <circle
              cx='0'
              cy='0'
              r='12'
              fill='none'
              stroke='blue'
              strokeWidth='1.5'
            />
            <circle cx='0' cy='-3' r='4' fill='blue' />
            <path
              d='M-6 2 C-6 6 6 6 6 2'
              stroke='blue'
              strokeWidth='1.2'
              fill='none'
            />
          </g>
          <g
            transform='translate(0, 60)'
            className='user-bob'
            style={{ animationDelay: '1.5s' }}
          >
            <circle
              cx='0'
              cy='0'
              r='12'
              fill='none'
              stroke='blue'
              strokeWidth='1.5'
            />
            <circle cx='0' cy='-3' r='4' fill='blue' />
            <path
              d='M-6 2 C-6 6 6 6 6 2'
              stroke='blue'
              strokeWidth='1.2'
              fill='none'
            />
          </g>
          <g
            transform='translate(-52, 30)'
            className='user-bob'
            style={{ animationDelay: '2s' }}
          >
            <circle
              cx='0'
              cy='0'
              r='12'
              fill='none'
              stroke='blue'
              strokeWidth='1.5'
            />
            <circle cx='0' cy='-3' r='4' fill='blue' />
            <path
              d='M-6 2 C-6 6 6 6 6 2'
              stroke='blue'
              strokeWidth='1.2'
              fill='none'
            />
          </g>
          <g
            transform='translate(-52, -30)'
            className='user-bob'
            style={{ animationDelay: '2.5s' }}
          >
            <circle
              cx='0'
              cy='0'
              r='12'
              fill='none'
              stroke='blue'
              strokeWidth='1.5'
            />
            <circle cx='0' cy='-3' r='4' fill='blue' />
            <path
              d='M-6 2 C-6 6 6 6 6 2'
              stroke='blue'
              strokeWidth='1.2'
              fill='none'
            />
          </g>
        </g>
      </g>

      {/* Connection lines */}
      <g stroke='currentColor' strokeWidth='1.2' fill='none' opacity='0.6'>
        <path d='M100 40 L100 80' strokeDasharray='4 4' />
        <path d='M152 70 L120 85' strokeDasharray='4 4' />
        <path d='M152 130 L120 115' strokeDasharray='4 4' />
        <path d='M100 160 L100 120' strokeDasharray='4 4' />
        <path d='M48 130 L80 115' strokeDasharray='4 4' />
        <path d='M48 70 L80 85' strokeDasharray='4 4' />
      </g>
    </svg>
  )
}

export default ShoppingSvg
