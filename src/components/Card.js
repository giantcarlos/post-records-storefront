import React from 'react';

const Card = ({ record }) => {
    const {album, artist, comment, price, image} = record

    return (
         <div className="card">
             <div className="card-image">
                  <img src={image} alt="cover"/>
            </div>
            <div className="card-album">{album}</div>
            <div className="card-artist">{artist}</div>
            <div className="card-details">{comment}</div>
            <div className="details">{price}</div>
            <div className="card-footer">
                <button className="btn">More Info</button>
                <button className="btn">Buy Now</button>
            </div>
        </div>
    )
}

export default Card;