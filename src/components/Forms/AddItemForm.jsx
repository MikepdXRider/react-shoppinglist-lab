import React, { useState } from 'react';



export default function AddItemForm({addHandler}) {
    const [itemField, setItemField] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        addHandler(itemField);
        setItemField('');
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <fieldset>
                    {/* <legend>Add</legend> */}
                    <label htmlFor='new-item'>New Item: </label>
                    <input id='new-item' value={itemField} type="text" onChange={(e) => setItemField(e.target.value)} required/>
                    <button aria-label='add-new-item'>Add</button>
                </fieldset>
            </form>
        </div>
    )
}

// Set up proptypes. 