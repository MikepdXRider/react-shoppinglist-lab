import React, { useState } from 'react'



export default function EditItemForm({handleEdit, listItem, setIsEdit}) {
    const [itemField, setItemField] = useState(listItem.item);

    function handleSubmit(e) {
        e.preventDefault();
        handleEdit(listItem.id, itemField);
        setIsEdit(prevState => !prevState);
        setItemField('');
    }

    return (
        <div>
            <h1>FORM!</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <fieldset>
                    {/* <legend>Edit</legend> */}
                    <label>
                        Edit
                        <input value={itemField} type="text" onChange={(e) => setItemField(e.target.value)} />
                    </label>
                    <button>Edit</button>
                </fieldset>
            </form>
        </div>
    )
}

// Set up proptypes. 