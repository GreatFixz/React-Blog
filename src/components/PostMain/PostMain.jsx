import React from 'react'
import ModalWindow from './ModalWindow'

const PostMain = () => {
  const [buttonModal, setButtonModal] = React.useState(false)
    return (
        <div>
            <button 
            type="button" 
            onClick={() => setButtonModal(!buttonModal)}
            className='text-xl m-20 xs:m-6 s:m-6 m:m-6'
            >Create post</button> 
                <ModalWindow buttonModal={buttonModal} setButtonModal={setButtonModal}/> 
        </div>
    )
}

export default React.memo(PostMain)
