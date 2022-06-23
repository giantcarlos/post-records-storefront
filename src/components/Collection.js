import React from 'react';
import CardCollected from './CardCollected';

const Collection = ({ collection, login }) => {

    const cards = () => {
        return collection.map(record => {
            return <CardCollected key={record.id} id={record.id} record={record} />
        })
        }

    return login ? (
        <div>
            <div className="collection-header">{collection.length} records in your collection.</div>
            <div className="card-grid">
                    {cards()}
            </div>
        </div>
    ) : (
        <div className="collection-login">Please login to view your collection.</div>
    )
}

export default Collection;