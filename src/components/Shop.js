import React, { useState, useEffect } from 'react';
import Card from './Card';

const Shop = () => {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/records")
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }, [])

    return (
        <div>
            <Card />
        </div>
    )
}

export default Shop; 