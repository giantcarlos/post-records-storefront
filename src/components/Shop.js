import React from 'react';
import Card from './Card';

const Shop = ({ records }) => {

    const cards = () => {
        return records.map(record => {
            return <Card key={record.id} record={record} />
        })
        }
    return (
        <div>
            <div className="card-grid">
                {cards()}
            </div>
        </div>
    )
}

export default Shop; 