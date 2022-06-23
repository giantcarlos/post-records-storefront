import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const Record = ({ addToCollection }) => {
    const [record, setRecord] = useState({});
    const { id } = useParams();
    const { album, artist, comment, released, label, catalog, price, image } = record
    
    useEffect(() => {
        fetch(`http://localhost:3001/records/${id}`)
        .then(res => res.json())
        .then(data => setRecord(data))
    }, [id])

   /*  const handlePurchase = () => {
        fetch('http://localhost:3000/collection',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(records)
            })
            .then(res => res.json())
            .then(newRecord => addToCollection(newRecord))
    } */

    return (
        <h2>{album}</h2>
    )
}

export default Record;