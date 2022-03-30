import React from 'react'
import AddPost from './AddPost'

const ModalWindow = ({buttonModal, setButtonModal}) => {

    const [inputText, setInputText] = React.useState('')
    const [textArea,setTextArea] = React.useState('')
    const [postTitle,setPostTitle] = React.useState([])
    const [showModal,setShowModal] = React.useState(true)
    const inputRef = React.useRef(null)

    const handleAddPost = () => {
        if(inputText === '' && textArea === ''){
            inputRef.current?.focus();
        }else if(showModal){
            setPostTitle([
                ...postTitle,
                {
                    id: Date.now(),
                    title: inputText,
                    description: textArea,
                }
            ])
            setButtonModal(!buttonModal)
        }
    }

    React.useEffect(() => {
        const localStorageItemPost = JSON.parse(localStorage.getItem('postTitle'))
        setPostTitle(localStorageItemPost)
    }, [])
    
    React.useEffect(() => {
        localStorage.setItem('postTitle', JSON.stringify(postTitle))
    }, [postTitle])

    const handlerRemovePost = (id) => {
        setPostTitle(postTitle.filter(desc => desc.id !== id))
        
    }
    return (
<div>
        {buttonModal ? (
        <div className='bg-zinc-200 opacity-80 fixed inset-0 z-50'>
            <div className="flex h-screen justify-center items-center" onClick={(e) => e.stopPropagation()}>
                <div className='h-1/3 w-1/3 rounded-xl bg-white drop-shadow-2xl xs:h-auto xs:w-full s:h-auto s:w-full m:h-auto m:w-full'>
                    <h1 className='m-5 text-2xl '>Create your post</h1>
                        <form className='m-6'>
                            <p className='text-xl'>Post title:</p>

                                <input 
                                type='text' 
                                className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
                                ref={inputRef} 
                                onChange={(e) => setInputText(e.target.value)}
                                />

                                    <p className='text-xl'>Your Description:</p>
                                        <textarea 
                                        type='text' 
                                        className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                        invalid:border-pink-500 invalid:text-pink-600
                                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500 max-h-12'
                                        onChange={(e) => setTextArea(e.target.value)}
                                        />
                        </form>
                <button 
                    type="button" 
                    className='text-xl m-1 border-solid border-2 border-sky-500 p-2 rounded-xl' 
                    onClick={handleAddPost}
                >Create post</button>

            </div>
        </div>
    </div>
        ) : (<div />)}
        <AddPost 
            postTitle={postTitle} 
            handlerRemovePost={handlerRemovePost}
        />
</div>
    )
}

export default React.memo(ModalWindow)
