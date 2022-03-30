import React from 'react'

const HeaderModalWindow = () => {

    const [AboutWindow,setAboutWindow] = React.useState(false)
    const [CenterWindow,setCenterWindow] = React.useState(false)
    const [AboutCloseWindow,setAboutCloseWindow] = React.useState(false)
    const [CenterCloseWindow, setCenterCloseWindow] = React.useState(false)


    return (
        <div className="flex text-center items-center">

            <h1 className="text-4xl m-10 font-bold cursor-pointer xs:m-6 s:m-6 m:m-6" onClick={() => window.location.reload()}>BlogX</h1>
                <ul className='flex flex-row'>
                    <li className='text-2xl m-4 cursor-pointer font-Roboto hover:underline'>
                        <button onClick={() => {
                        setAboutCloseWindow(!AboutCloseWindow)
                        setAboutWindow(!AboutWindow)}}
                        >About</button>
                    </li>

                    <li className='text-2xl m-4 cursor-pointer font-Roboto hover:underline'>
                        <button onClick={() => {
                        setCenterWindow(!CenterWindow)
                        setCenterCloseWindow(!CenterCloseWindow)
                        }}>Center</button>
                    </li>
                </ul>

        <div>
            {AboutWindow ? (
                <div>
                    {AboutCloseWindow ? (
                        <div className='bg-zinc-200 opacity-80 fixed inset-0 z-50 xs:h-auto xs:w-full s:h-auto s:w-full m:h-auto m:w-full'>
                            <div className='flex h-screen justify-center items-center'>
                                <div className='flex-col w-1/2 justify-center bg-white py-12 px-24 rounded-xl drop-shadow-2xl xs:h-auto xs:w-full s:h-auto s:w-full'>
                                    <div className='flex justify-center items-center text-2xl text-black font-bold mb-10'>About</div>
                                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available</p>
                                        <div className='flex'>
                                        <button type='button' className='absolute top-0 right-0 mx-6 ml-4 my-4 text-black' 
                                        onClick={() => {
                                        setAboutCloseWindow(!AboutCloseWindow) 
                                        setAboutWindow(!AboutWindow)}}>
                                            <span class="sr-only">Close menu</span>
                                                <svg class="animate-bounce h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ): (<div />)}
                        </div>
                    ):(<div />)}
            </div>
                        
        <div>
            {CenterWindow ? (
                <div>
                    {CenterCloseWindow ? (
                        <div className='bg-zinc-200 opacity-80 fixed inset-0 z-50'>
                            <div className='flex h-screen justify-center items-center'>
                                <div className='flex-col w-1/2 justify-center bg-white py-12 px-24 rounded-xl drop-shadow-2xl xs:h-auto xs:w-full s:h-auto s:w-full m:h-auto m:w-full'>
                                    <div className='flex justify-center items-center text-2xl text-black font-bold mb-10'>Center</div>
                                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available</p>
                                            <div className='flex'>
                                            <button type='button' className='absolute top-0 right-0 mx-6 ml-4 my-4 text-black' 
                                            onClick={() => {
                                                setCenterWindow(!CenterWindow)
                                                setCenterCloseWindow(!CenterCloseWindow)
                                            }}>
                                            <span class="sr-only">Close menu</span>
                                                <svg class="animate-bounce h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ): (<div />)}
                </div>
            ):(<div />)}
        </div>
</div>
    )
}

export default HeaderModalWindow
