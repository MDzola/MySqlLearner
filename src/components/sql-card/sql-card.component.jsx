import React from 'react'

import './sql-card.styles.css';


export const Card = (props) => (
    <div className='card-container'>
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
        <h2> SQL Keyword </h2>
        <p> example </p>
    </div>
)

export default Card;