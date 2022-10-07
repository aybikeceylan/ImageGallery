import React from 'react'

const Card = ({ item }) => {
    const { photographer, src: { large } } = item
    return (
        <div className="main">
            <div className="card">
                <img src={large} alt={photographer} />
                <a href={large} target="true" rel="noopener noreferrer">{photographer}</a>
            </div>
        </div>
    )
}

export default Card