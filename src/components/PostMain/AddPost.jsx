import React from 'react'
import Post from './Post'

const AddPost = ({postTitle, handlerRemovePost}) => {
    return (
        <div>
            {postTitle.map((item, id) => (
                <ul>
                    <li>{<Post item={item} key={id.id} handlerRemovePost={handlerRemovePost}/>}</li>
                </ul>
            ))}
        </div>
    )
}

export default AddPost
