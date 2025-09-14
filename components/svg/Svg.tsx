import React, { useState } from 'react'

interface BusinessWorkflowProps {
  theme?: 'light' | 'dark'
  width?: number
  height?: number
}

const BusinessWorkflowSVG: React.FC<BusinessWorkflowProps> = ({
  theme = 'light',
  width = 500,
  height = 350,
}) => {
  const colors = {
    light: {
      sales: '#2563eb', // Blue
      website: '#059669', // Green
      inventory: '#dc2626', // Red
      connection: '#6b7280', // Gray
      background: '#ffffff', // White
      text: '#1f2937', // Dark Gray
    },
    dark: {
      sales: '#3b82f6', // Lighter Blue
      website: '#10b981', // Lighter Green
      inventory: '#ef4444', // Lighter Red
      connection: '#9ca3af', // Lighter Gray
      background: '#111827', // Dark
      text: '#f9fafb', // Light Gray
    },
  }

  const currentColors = colors[theme]

  return (
    <svg
      viewBox='0 0 500 350'
      width={width}
      height={height}
      style={{ backgroundColor: currentColors.background }}
      xmlns='http://www.w3.org/2000/svg'
    >
      {/* Background */}
      <rect width='100%' height='100%' fill={currentColors.background} />

      {/* Sales Section (Left) */}
      <g id='sales-section'>
        {/* Title */}
        <text
          x='25'
          y='25'
          fontSize='14'
          fontWeight='bold'
          fill={currentColors.sales}
        >
          Sales Management
        </text>

        {/* Order Management Icon */}
        <rect
          x='20'
          y='40'
          width='60'
          height='45'
          rx='3'
          fill='none'
          stroke={currentColors.sales}
          strokeWidth='2'
        />
        <line
          x1='25'
          y1='50'
          x2='70'
          y2='50'
          stroke={currentColors.sales}
          strokeWidth='1.5'
        />
        <line
          x1='25'
          y1='58'
          x2='60'
          y2='58'
          stroke={currentColors.sales}
          strokeWidth='1'
        />
        <line
          x1='25'
          y1='65'
          x2='65'
          y2='65'
          stroke={currentColors.sales}
          strokeWidth='1'
        />
        <line
          x1='25'
          y1='72'
          x2='55'
          y2='72'
          stroke={currentColors.sales}
          strokeWidth='1'
        />
        <text x='85' y='55' fontSize='10' fill={currentColors.text}>
          Order
        </text>
        <text x='85' y='68' fontSize='10' fill={currentColors.text}>
          Management
        </text>

        {/* Invoice/Pre-invoice */}
        <rect
          x='20'
          y='100'
          width='50'
          height='35'
          fill='none'
          stroke={currentColors.sales}
          strokeWidth='2'
        />
        <line
          x1='25'
          y1='108'
          x2='65'
          y2='108'
          stroke={currentColors.sales}
          strokeWidth='1'
        />
        <line
          x1='25'
          y1='115'
          x2='55'
          y2='115'
          stroke={currentColors.sales}
          strokeWidth='1'
        />
        <line
          x1='25'
          y1='122'
          x2='60'
          y2='122'
          stroke={currentColors.sales}
          strokeWidth='1'
        />
        <circle
          cx='60'
          cy='128'
          r='3'
          fill='none'
          stroke={currentColors.sales}
          strokeWidth='1.5'
        />
        <text x='75' y='115' fontSize='10' fill={currentColors.text}>
          Pre-invoice
        </text>

        {/* Pricing */}
        <polygon
          points='25,155 45,155 50,165 45,175 25,175'
          fill='none'
          stroke={currentColors.sales}
          strokeWidth='2'
        />
        <circle cx='40' cy='165' r='2' fill={currentColors.sales} />
        <text x='55' y='170' fontSize='10' fill={currentColors.text}>
          Pricing
        </text>

        {/* Discounts */}
        <circle
          cx='40'
          cy='200'
          r='18'
          fill='none'
          stroke={currentColors.sales}
          strokeWidth='2'
        />
        <text
          x='32'
          y='207'
          fontSize='16'
          fontWeight='bold'
          fill={currentColors.sales}
        >
          %
        </text>
        <text x='65' y='205' fontSize='10' fill={currentColors.text}>
          Discounts
        </text>
      </g>

      {/* Website Builder Section (Center) */}
      <g id='website-section'>
        {/* Title */}
        <text
          x='175'
          y='25'
          fontSize='14'
          fontWeight='bold'
          fill={currentColors.website}
        >
          Website Builder
        </text>

        {/* Responsive Design */}
        <rect
          x='170'
          y='40'
          width='120'
          height='70'
          rx='5'
          fill='none'
          stroke={currentColors.website}
          strokeWidth='2'
        />
        {/* Desktop */}
        <rect
          x='180'
          y='50'
          width='35'
          height='20'
          fill='none'
          stroke={currentColors.website}
          strokeWidth='1'
        />
        <line
          x1='185'
          y1='55'
          x2='210'
          y2='55'
          stroke={currentColors.website}
          strokeWidth='1'
        />
        <line
          x1='185'
          y1='60'
          x2='205'
          y2='60'
          stroke={currentColors.website}
          strokeWidth='0.5'
        />
        <line
          x1='185'
          y1='65'
          x2='208'
          y2='65'
          stroke={currentColors.website}
          strokeWidth='0.5'
        />

        {/* Tablet */}
        <rect
          x='225'
          y='52'
          width='25'
          height='35'
          fill='none'
          stroke={currentColors.website}
          strokeWidth='1'
        />
        <line
          x1='228'
          y1='57'
          x2='247'
          y2='57'
          stroke={currentColors.website}
          strokeWidth='0.8'
        />
        <line
          x1='228'
          y1='62'
          x2='242'
          y2='62'
          stroke={currentColors.website}
          strokeWidth='0.5'
        />
        <line
          x1='228'
          y1='67'
          x2='245'
          y2='67'
          stroke={currentColors.website}
          strokeWidth='0.5'
        />

        {/* Mobile */}
        <rect
          x='260'
          y='55'
          width='15'
          height='25'
          fill='none'
          stroke={currentColors.website}
          strokeWidth='1'
        />
        <line
          x1='262'
          y1='60'
          x2='273'
          y2='60'
          stroke={currentColors.website}
          strokeWidth='0.5'
        />
        <line
          x1='262'
          y1='65'
          x2='270'
          y2='65'
          stroke={currentColors.website}
          strokeWidth='0.5'
        />
        <line
          x1='262'
          y1='70'
          x2='272'
          y2='70'
          stroke={currentColors.website}
          strokeWidth='0.5'
        />

        <text x='295' y='65' fontSize='10' fill={currentColors.text}>
          Responsive
        </text>
        <text x='295' y='78' fontSize='10' fill={currentColors.text}>
          Design
        </text>

        {/* Online Store */}
        <rect
          x='170'
          y='125'
          width='90'
          height='60'
          fill='none'
          stroke={currentColors.website}
          strokeWidth='2'
        />
        {/* Product Image */}
        <circle
          cx='190'
          cy='145'
          r='10'
          fill='none'
          stroke={currentColors.website}
          strokeWidth='1.5'
        />
        <line
          x1='185'
          y1='140'
          x2='195'
          y2='150'
          stroke={currentColors.website}
          strokeWidth='1'
        />
        <line
          x1='195'
          y1='140'
          x2='185'
          y2='150'
          stroke={currentColors.website}
          strokeWidth='1'
        />

        {/* Product Info */}
        <line
          x1='210'
          y1='140'
          x2='245'
          y2='140'
          stroke={currentColors.website}
          strokeWidth='1.5'
        />
        <line
          x1='210'
          y1='147'
          x2='235'
          y2='147'
          stroke={currentColors.website}
          strokeWidth='1'
        />
        <line
          x1='210'
          y1='154'
          x2='240'
          y2='154'
          stroke={currentColors.website}
          strokeWidth='1'
        />

        {/* Add to Cart Button */}
        <rect
          x='210'
          y='165'
          width='35'
          height='12'
          rx='2'
          fill='none'
          stroke={currentColors.website}
          strokeWidth='1'
        />
        <text x='220' y='173' fontSize='8' fill={currentColors.website}>
          ADD
        </text>

        <text x='270' y='155' fontSize='10' fill={currentColors.text}>
          Online
        </text>
        <text x='270' y='168' fontSize='10' fill={currentColors.text}>
          Store
        </text>

        {/* SEO */}
        <circle
          cx='210'
          cy='210'
          r='15'
          fill='none'
          stroke={currentColors.website}
          strokeWidth='2'
        />
        <text
          x='202'
          y='216'
          fontSize='10'
          fontWeight='bold'
          fill={currentColors.website}
        >
          SEO
        </text>
        <text x='235' y='215' fontSize='10' fill={currentColors.text}>
          Optimization
        </text>
      </g>

      {/* Inventory Management Section (Right) */}
      <g id='inventory-section'>
        {/* Title */}
        <text
          x='350'
          y='25'
          fontSize='14'
          fontWeight='bold'
          fill={currentColors.inventory}
        >
          Inventory Management
        </text>

        {/* Warehouse */}
        <polygon
          points='350,45 380,30 420,45 420,90 350,90'
          fill='none'
          stroke={currentColors.inventory}
          strokeWidth='2'
        />
        <line
          x1='350'
          y1='45'
          x2='380'
          y2='30'
          stroke={currentColors.inventory}
          strokeWidth='1'
        />
        <line
          x1='380'
          y1='30'
          x2='380'
          y2='75'
          stroke={currentColors.inventory}
          strokeWidth='1'
        />
        <line
          x1='380'
          y1='75'
          x2='350'
          y2='90'
          stroke={currentColors.inventory}
          strokeWidth='1'
        />

        {/* Storage Boxes */}
        <rect
          x='360'
          y='65'
          width='12'
          height='12'
          fill='none'
          stroke={currentColors.inventory}
          strokeWidth='1'
        />
        <rect
          x='375'
          y='60'
          width='12'
          height='12'
          fill='none'
          stroke={currentColors.inventory}
          strokeWidth='1'
        />
        <rect
          x='390'
          y='63'
          width='12'
          height='12'
          fill='none'
          stroke={currentColors.inventory}
          strokeWidth='1'
        />
        <rect
          x='405'
          y='58'
          width='12'
          height='12'
          fill='none'
          stroke={currentColors.inventory}
          strokeWidth='1'
        />

        <text x='425' y='65' fontSize='10' fill={currentColors.text}>
          Stock
        </text>
        <text x='425' y='78' fontSize='10' fill={currentColors.text}>
          Control
        </text>

        {/* Tracking System */}
        <rect
          x='350'
          y='110'
          width='70'
          height='35'
          fill='none'
          stroke={currentColors.inventory}
          strokeWidth='2'
        />
        <polyline
          points='360,120 370,120 365,115'
          fill='none'
          stroke={currentColors.inventory}
          strokeWidth='1.5'
        />
        <polyline
          points='370,120 365,125'
          fill='none'
          stroke={currentColors.inventory}
          strokeWidth='1.5'
        />

        <polyline
          points='375,130 385,130 380,125'
          fill='none'
          stroke={currentColors.inventory}
          strokeWidth='1.5'
        />
        <polyline
          points='385,130 380,135'
          fill='none'
          stroke={currentColors.inventory}
          strokeWidth='1.5'
        />

        <line
          x1='390'
          y1='125'
          x2='410'
          y2='125'
          stroke={currentColors.inventory}
          strokeWidth='1'
        />
        <line
          x1='390'
          y1='135'
          x2='405'
          y2='135'
          stroke={currentColors.inventory}
          strokeWidth='0.8'
        />

        <text x='425' y='125' fontSize='10' fill={currentColors.text}>
          Item
        </text>
        <text x='425' y='138' fontSize='10' fill={currentColors.text}>
          Tracking
        </text>

        {/* Reports */}
        <rect
          x='350'
          y='165'
          width='70'
          height='45'
          fill='none'
          stroke={currentColors.inventory}
          strokeWidth='2'
        />
        {/* Chart Lines */}
        <polyline
          points='360,200 370,185 380,175 390,180 400,170 410,175'
          fill='none'
          stroke={currentColors.inventory}
          strokeWidth='1.5'
        />
        <line
          x1='355'
          y1='205'
          x2='415'
          y2='205'
          stroke={currentColors.inventory}
          strokeWidth='1'
        />
        <line
          x1='355'
          y1='205'
          x2='355'
          y2='170'
          stroke={currentColors.inventory}
          strokeWidth='1'
        />

        <text x='425' y='185' fontSize='10' fill={currentColors.text}>
          Movement
        </text>
        <text x='425' y='198' fontSize='10' fill={currentColors.text}>
          Reports
        </text>
      </g>

      {/* Connection Lines */}
      {/* Sales to Website */}
      <g id='connections'>
        <line
          x1='90'
          y1='120'
          x2='160'
          y2='120'
          stroke={currentColors.connection}
          strokeWidth='1.5'
          strokeDasharray='8,4'
        />
        <polyline
          points='160,120 155,115'
          fill='none'
          stroke={currentColors.connection}
          strokeWidth='1.5'
        />
        <polyline
          points='160,120 155,125'
          fill='none'
          stroke={currentColors.connection}
          strokeWidth='1.5'
        />

        {/* Website to Inventory */}
        <line
          x1='300'
          y1='140'
          x2='340'
          y2='140'
          stroke={currentColors.connection}
          strokeWidth='1.5'
          strokeDasharray='8,4'
        />
        <polyline
          points='340,140 335,135'
          fill='none'
          stroke={currentColors.connection}
          strokeWidth='1.5'
        />
        <polyline
          points='340,140 335,145'
          fill='none'
          stroke={currentColors.connection}
          strokeWidth='1.5'
        />

        {/* Data Flow Indicators */}
        <circle
          cx='125'
          cy='120'
          r='3'
          fill={currentColors.connection}
          opacity='0.7'
        />
        <circle
          cx='320'
          cy='140'
          r='3'
          fill={currentColors.connection}
          opacity='0.7'
        />
      </g>

      {/* Process Flow Labels */}
      <text x='110' y='110' fontSize='8' fill={currentColors.connection}>
        Orders
      </text>
      <text x='305' y='130' fontSize='8' fill={currentColors.connection}>
        Inventory
      </text>
    </svg>
  )
}

// Main Component with Theme Toggle
const BusinessManagement: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: theme === 'light' ? '#f9fafb' : '#111827',
        minHeight: '100vh',
        transition: 'background-color 0.3s ease',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <h1
          style={{
            color: theme === 'light' ? '#1f2937' : '#f9fafb',
            fontSize: '24px',
            fontWeight: 'bold',
            margin: 0,
          }}
        >
          Business Management System
        </h1>
        <button
          onClick={toggleTheme}
          style={{
            padding: '10px 20px',
            backgroundColor: theme === 'light' ? '#374151' : '#f3f4f6',
            color: theme === 'light' ? '#ffffff' : '#111827',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            transition: 'all 0.3s ease',
          }}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: theme === 'light' ? '#ffffff' : '#1f2937',
          padding: '20px',
          borderRadius: '12px',
          boxShadow:
            theme === 'light'
              ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              : '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
        }}
      >
        <BusinessWorkflowSVG theme={theme} width={600} height={400} />
      </div>

      {/* Description */}
      <div
        style={{
          marginTop: '30px',
          color: theme === 'light' ? '#374151' : '#d1d5db',
          maxWidth: '800px',
          margin: '30px auto 0',
        }}
      >
        <h2
          style={{
            fontSize: '18px',
            fontWeight: '600',
            marginBottom: '15px',
            color: theme === 'light' ? '#1f2937' : '#f9fafb',
          }}
        >
          System Components:
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '20px',
          }}
        >
          <div>
            <h3
              style={{ color: '#2563eb', fontSize: '14px', fontWeight: '600' }}
            >
              Sales Management
            </h3>
            <ul style={{ fontSize: '12px', lineHeight: '1.5' }}>
              <li>Order Management</li>
              <li>Pre-invoice Generation</li>
              <li>Dynamic Pricing</li>
              <li>Discounts & Promotions</li>
            </ul>
          </div>
          <div>
            <h3
              style={{ color: '#059669', fontSize: '14px', fontWeight: '600' }}
            >
              Website Builder
            </h3>
            <ul style={{ fontSize: '12px', lineHeight: '1.5' }}>
              <li>Responsive Design</li>
              <li>Online Store Integration</li>
              <li>Content Management</li>
              <li>SEO Optimization</li>
            </ul>
          </div>
          <div>
            <h3
              style={{ color: '#dc2626', fontSize: '14px', fontWeight: '600' }}
            >
              Inventory Management
            </h3>
            <ul style={{ fontSize: '12px', lineHeight: '1.5' }}>
              <li>Stock Control</li>
              <li>Warehouse Management</li>
              <li>Item Tracking</li>
              <li>Movement Reports</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessManagement
