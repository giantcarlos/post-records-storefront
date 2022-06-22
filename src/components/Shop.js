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
            <br></br><br></br>
            {cards()}
        </div>
    )
}

export default Shop; 