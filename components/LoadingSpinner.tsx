export default function LoadingSpinner() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='text-center space-y-4'>
        <div className='w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto'></div>
        <p className='text-muted-foreground'>در حال بارگذاری...</p>
      </div>
    </div>
  )
}
