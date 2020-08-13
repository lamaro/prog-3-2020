import React from 'react'

const Card = props =>{
    const {avatar, genre, name} = props.data
    return(
        <div className="card">
            <img src={avatar} alt={name} />
            <h2>{name}</h2>
            <p>{genre}</p>
        </div>
    )
}
export default Card