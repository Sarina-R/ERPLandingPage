const SiteBuilderSvg = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 200 200'
      width='200'
      height='200'
      className='w-full h-full text-black dark:text-white'
    >
      <style jsx>{`
        .wave-flow {
          animation: flowWave 2s ease-in-out infinite alternate;
        }
        .spin {
          animation: rotateSpin 3s linear infinite;
        }
        .pulse-glow {
          animation: glowPulse 1.5s ease-in-out infinite;
        }

        @keyframes flowWave {
          0% {
            transform: translateY(5px);
          }
          100% {
            transform: translateY(-5px);
          }
        }

        @keyframes rotateSpin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes glowPulse {
          0%,
          100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>

      {/* Flowing wave background for dynamic web feel */}
      <path
        d='M0 100 Q50 50 100 100 T200 100 Q150 150 100 100 T0 100'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        opacity='0.3'
        className='wave-flow'
      />

      {/* Laptop */}
      <g transform='translate(60, 40)' className='pulse-glow'>
        {/* Laptop screen outline */}
        <rect
          x='0'
          y='0'
          width='80'
          height='55'
          rx='4'
          ry='4'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
        />

        {/* Screen inner border (bezel) */}
        <rect
          x='5'
          y='5'
          width='70'
          height='45'
          rx='2'
          ry='2'
          fill='none'
          stroke='currentColor'
          strokeWidth='1'
        />

        {/* --- Website Mockup inside screen --- */}
        {/* Top navbar */}
        <rect
          x='7'
          y='7'
          width='66'
          height='6'
          rx='1'
          ry='1'
          fill='none'
          stroke='currentColor'
          strokeWidth='0.8'
        />

        {/* Sidebar */}
        <rect
          x='7'
          y='15'
          width='12'
          height='33'
          rx='1'
          ry='1'
          fill='none'
          stroke='currentColor'
          strokeWidth='0.8'
        />

        {/* Content area */}
        <rect
          x='21'
          y='15'
          width='52'
          height='33'
          rx='1'
          ry='1'
          fill='none'
          stroke='currentColor'
          strokeWidth='0.8'
        />

        {/* Example text blocks in content */}
        <line
          x1='24'
          y1='20'
          x2='68'
          y2='20'
          stroke='currentColor'
          strokeWidth='0.6'
        />
        <line
          x1='24'
          y1='25'
          x2='60'
          y2='25'
          stroke='currentColor'
          strokeWidth='0.6'
        />
        <line
          x1='24'
          y1='30'
          x2='68'
          y2='30'
          stroke='currentColor'
          strokeWidth='0.6'
        />
        <line
          x1='24'
          y1='35'
          x2='58'
          y2='35'
          stroke='currentColor'
          strokeWidth='0.6'
        />
        <line
          x1='24'
          y1='40'
          x2='68'
          y2='40'
          stroke='currentColor'
          strokeWidth='0.6'
        />

        {/* Laptop hinge */}
        <line
          x1='20'
          y1='55'
          x2='60'
          y2='55'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
        />

        {/* Laptop base */}
        <path
          d='M-12 60 L92 60 L78 72 L2 72 Z'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
        />
      </g>

      {/* Content icons floating around (content management) */}
      <g className='wave-flow'>
        <circle
          cx='40'
          cy='60'
          r='15'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.2'
        />
        <text
          x='40'
          y='65'
          textAnchor='middle'
          fill='currentColor'
          fontSize='12'
        >
          CMS
        </text>
      </g>
      <g className='wave-flow' style={{ animationDelay: '0.5s' }}>
        <circle
          cx='160'
          cy='140'
          r='15'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.2'
        />
        <text
          x='160'
          y='145'
          textAnchor='middle'
          fill='currentColor'
          fontSize='12'
        >
          Edit
        </text>
      </g>

      {/* SEO arrow upward (SEO optimization) */}
      <g transform='translate(50, 120)' className='pulse-glow'>
        <path
          d='M0 30 L20 0 L40 30'
          fill='none'
          stroke='green'
          strokeWidth='2'
        />
        <circle cx='20' cy='15' r='5' fill='green' />
        <text x='20' y='50' textAnchor='middle' fill='green' fontSize='10'>
          SEO
        </text>
      </g>

      {/* Gear for management */}
      <g transform='translate(100, 150)' className='spin'>
        <circle
          cx='0'
          cy='0'
          r='15'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
        />
        <circle cx='0' cy='0' r='5' fill='currentColor' />
        <line
          x1='-15'
          y1='0'
          x2='-5'
          y2='0'
          stroke='currentColor'
          strokeWidth='1.5'
        />
        <line
          x1='5'
          y1='0'
          x2='15'
          y2='0'
          stroke='currentColor'
          strokeWidth='1.5'
        />
        <line
          x1='0'
          y1='-15'
          x2='0'
          y2='-5'
          stroke='currentColor'
          strokeWidth='1.5'
        />
        <line
          x1='0'
          y1='5'
          x2='0'
          y2='15'
          stroke='currentColor'
          strokeWidth='1.5'
        />
      </g>
    </svg>
  )
}

export default SiteBuilderSvg
