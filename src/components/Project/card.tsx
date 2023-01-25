import React from 'react';
import './index.css'

const Card = ({ imgSrc, text, link }: any) => {
  return (
    <div className="card-item">
      <img src={imgSrc} className="card-img-top" alt="card"/>
      <div className="card-body">
        <p className="card-text">{text}</p>
        <a href={link} className="btn btn-primary">Learn More</a>
      </div>
    </div>
  )
}

export default Card;