import React, { useReducer } from 'react'
import assignUID from '../../utils/assignUID'
import ItemForm from '../Forms/ItemForm.jsx'
import ListItem from '../ListItem/ListItem.jsx'


// state initial values
const initialValue = [
    {item: 'Milk', id: 1 },
    {item: 'Burrito', id: 2 },
    {item: 'Pesto Sauce', id: 3 }
]

// reducer fn for useReducer hook
function reducer(state, action) {
    switch (action.type) {
        case 'add':{
            // add new thing to state.
            return [...state, action.payload]
        }
        case 'edit':{
            // add new thing to state.
        }
        case 'delete':{
            // add new thing to state.
        }
        default: {
            throw new Error(`No matching cases for ${action.type}`);
        }
            
    }
}

export default function ShoppingList() {
    // useReducer hook
    const [shoppingList, dispatch] = useReducer(reducer, initialValue);
    
    function handleDelete(id) {         
        dispatch({type: 'delete', id});
    }

    function handleAdd(item) {      
        dispatch({type: 'add', payload: {item: item, id: assignUID()}});
    }

    function handleEdit(id, newObj) {         
        dispatch({type: 'edit', id, item});
    }

    return (
        <section>
            {/* pass form submit handlers here */}
            <ItemForm handlerFn={handleAdd} />
        <ul>
            {/* Map data array and render listItems */}
            {
                shoppingList.map((listItem) => {
                    return <li key={listItem.id}><ListItem listItem={listItem}/></li>
                })
            }
        </ul>
        </section>
    )
}
