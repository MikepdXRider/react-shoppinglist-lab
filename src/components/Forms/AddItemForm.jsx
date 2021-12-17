import React, { useState } from 'react'



export default function AddItemForm({addHandler}) {
    const [itemField, setItemField] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        addHandler(itemField);
        setItemField('');
    }

    return (
        <div>
            <h1>FORM!</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <fieldset>
                    {/* <legend>Add</legend> */}
                    <label>
                    Add
                    <input value={itemField} type="text" onChange={(e) => setItemField(e.target.value)} />
                    </label>
                    <button>Add</button>
                </fieldset>
            </form>
        </div>
    )
}

// Set up proptypes. 