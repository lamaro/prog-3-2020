import React from 'react'

const Avatar = ({imageSrc}) => {

    return(
        <figure className='image is-64x64'>
            <img className='is-rounded' src={imageSrc} />
        </figure>
    )
}

export default Avatar