import React from 'react'

const LazyLoading = () => {
    return (
        <div className="flex h-screen justify-center items-center" onClick={(e) => e.stopPropagation()}>
            <div className='drop-shadow-2xl overflow-hidden'>
                <div className=' m-5 text-3xl font-bold' id='blogXLazyMain'>
                    BlogX
                        <span class="flex absolute h-3 w-3 top-3 mx-20 pointer-events-none">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-900 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-3 w-3 bg-slate-900"></span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default LazyLoading
