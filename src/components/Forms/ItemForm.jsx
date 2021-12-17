import React, { useState } from 'react'


// parameter should include:
//  - an isEdit=false, which initializes the isEdit state as false.
//  - an handleSubmitFn from parent component.
export default function ItemForm({handlerFn}) {
    const [itemField, setItemField] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        handlerFn(itemField);
        setItemField('');
    }

    return (
        <div>
            <h1>FORM!</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <fieldset>
                    <legend>Add</legend>
                    <input value={itemField} type="text" onChange={(e) => setItemField(e.target.value)} />
                    <button>Add</button>
                </fieldset>
            </form>
            {/* review previous lab where I created a reusable form to identify conditional handling of input values */}
        </div>
    )
}
