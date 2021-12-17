import React, { useState } from 'react';
import EditItemForm from '../Forms/EditItemForm.jsx';

export default function ListItem({listItem, handleDelete, handleEdit}) {
    const [isEdit, setIsEdit] = useState(false);
    
    return (
        <article>
            {/* render ListItem data here */}
            {
                isEdit
                ? <EditItemForm listItem={listItem} handleEdit={handleEdit} setIsEdit={setIsEdit}/>
                : <>
                    <h1>{listItem.item}</h1>
                    <button aria-label={`delete-${listItem.item}`} onClick={() => handleDelete(listItem.id)}>Delete</button>
                    <button aria-label={`edit-${listItem.item}`} onClick={() => setIsEdit(prevState => !prevState)}>Edit</button>
                </>
            }
        </article>
    )
}
