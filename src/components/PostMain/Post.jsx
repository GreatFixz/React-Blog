import React from 'react'

const Post = ({item, handlerRemovePost}) => {
    const handlerRemoveItemPost = () => handlerRemovePost(item.id)
    return (
        <div className='flex text-center items-center justify-center'>
            <div className="bg-white m-4 p-4 w-1/4 h-1/2 drop-shadow-2xl rounded-xl xs:h-auto xs:w-full s:h-auto s:w-full m:h-auto m:w-full">
                <h1 className="text-5xl m-2 font-bold">{item.title}</h1>
                <li className="text-2xl m-2">{item.description}</li>
                <button onClick={handlerRemoveItemPost}>DELETE</button>
            </div>
        </div>
    )
}

export default Post
