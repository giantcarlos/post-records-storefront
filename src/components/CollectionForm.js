import React, { useState } from 'react'

const CollectionForm = () => {
    const [form, setForm] = useState("");
        

  return (
    <form className="collectionForm">
        <h3>Submit a Record For Your Collection</h3>
        <div className="formText">
            <label>Album Title:
                <input type="textarea"/>
            </label>
            <label>Artist Name: 
                <input type="textarea"/>
            </label>
            <label>Comment: 
                <input type="textarea"/>
            </label>
            <label>Release Year: 
                <input type="textarea"/>
            </label>
            <label>Record Label: 
                <input type="textarea"/>
            </label>
            <label>Catalog Number: 
                <input type="textarea"/>
            </label>
            <label>Image URL: 
                <input type="textarea"/>
            </label>
        </div>
    </form>
  )
}

export default CollectionForm