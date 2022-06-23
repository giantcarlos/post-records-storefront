import React from 'react';
import Card from './Card';

const Collection = ({ collection }) => {

    const cards = () => {
        return collection.map(record => {
            return <Card key={record.id} id={record.id} record={record} />
        })
        }
    return (
        <div>
            <div className="collection-header">{collection.length} records in your collection.</div>
            <div className="card-grid">
                {cards()}
            </div>
        </div>
    )
}

export default Collection;