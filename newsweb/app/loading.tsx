import React from 'react'

const loading = () => {
  return (
    <div>
      <div className="min-h-[15rem] flex flex-col bg-black border shadow-sm rounded-xl dark:bg-black-800 dark:border-black dark:shadow-black-700/[.7]">
  <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
    <div className="flex justify-center">
      <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-black-600 rounded-full" role="status" aria-label="loading">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default loading
