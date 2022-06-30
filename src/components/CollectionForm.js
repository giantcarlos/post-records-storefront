import React from 'react'

const CollectionForm = () => {
  return (
    <form className="collectionForm">
        <h3>Submit a Record For Your Collection</h3>
        <div className="formText">
            <label>Album Title:
                <input type="text"/>
            </label><br></br>
            <label>Artist Name: 
                <input type="text"/>
            </label><br></br>
            <label>Comment: 
                <input type="text"/>
            </label><br></br>
            <label>Release Year: 
                <input type="text"/>
            </label><br></br>
            <label>Record Label: 
                <input type="text"/>
            </label><br></br>
            <label>Catalog Number: 
                <input type="text"/>
            </label><br></br>
            <label>Image URL: 
                <input type="text"/>
            </label>
        </div>
    </form>
  )
}

export default CollectionForm