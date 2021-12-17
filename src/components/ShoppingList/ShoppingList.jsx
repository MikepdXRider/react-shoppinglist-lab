import React, { useReducer } from 'react'
import assignUID from '../../utils/assignUID'
import AddItemForm from '../Forms/AddItemForm.jsx'
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
            // delete the current version of the item
            const filteredState = state.filter(item => item.id !== action.payload.id);
            // add the new version of the item
            return [...filteredState, action.payload];
        }
        case 'delete':{
            return state.filter(item => item.id !== action.payload.id);
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
        dispatch({
            type: 'delete',
            payload: {id}}
            );
    }

    function handleAdd(item) {      
        dispatch({
            type: 'add',
            payload: {
                item: item,
                id: assignUID()
            }
        });
    }

    function handleEdit(id, item) {         
        dispatch({
            type: 'edit',
            payload: {
                id: id,
                item: item
            }
        });
    }

    return (
        <section>
            <AddItemForm addHandler={handleAdd} />
        <ul>
            {
                shoppingList.map((listItem) => {
                    return (
                        <li key={listItem.id}>
                            <ListItem listItem={listItem} handleDelete={handleDelete} handleEdit={handleEdit}/>
                        </li>
                    )
                })
            }
        </ul>
        </section>
    )
}
