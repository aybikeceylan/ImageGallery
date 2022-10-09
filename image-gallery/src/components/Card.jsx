import React from 'react'

const Card = ({ item }) => {
    const { photographer, src: { large } } = item
    return (
        <div>
            <div className="card">
                <div className="image"> <img src={large} alt={photographer} /></div>
                <a href={large} target="true" rel="noopener noreferrer">{photographer}</a>
            </div>
        </div>
    )
}

export default Card