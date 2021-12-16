# react-template

A starter template for React projects at Alchemy Code Lab. We'll be using this in the "Advanced React" portion of the program.

## Getting Started

Click "Use this template" to create a new repo with your user as the owner. Then clone down the newly created repo and get hacking!

## Expected app behaviors
- Users are able to add a new item to the list
- Users are able to edit an existing item
- Users are able to delete an item
- Users are able to see a list of shopping items

## Context
- If props are excessively "drilled" down in more than one direction. I.E. there are two siblings that require props to be relays to cousins. 

## Hooks
- useReducer for managing larger state.
- useState for managing local states.

## Views
- **Home:** Displays all components relative to home page. 
- **Layout:** Contains header and footer. Takes in children as a parameter.

## Components
- **ListItem:** Renders item name,  description, and a delete/edit button. 
    - State: editSwitch. A setState initialized at false, toggling boolean. 
    - HTML: semantic html container. p tags for item name and description. buttons for edit and delete functionality.
    - Called in shopping list component.
    - Needs: 
        - Access to dispatch fn from useReduce hook. 
        - To have a UID that can be grabbed 
    - Events: 
        - user clicks delete button, call dispatch fn with an action obj containing type:delete, id: listItemId key:value pair. 
        - user clicks edit button, updates edSwitch state -> renders EditForm component with controlled inputs.
- **ShoppingList:** Renders NewItem Form. Maps through shoppinglist data array and renders ListItem components to page. 
    - State: 
        - useReducer hook 
    - HTML: semantic container tag. ul to contain li's. li per ListItem component, must have a unique key. 
    - Called in home views component.
    - Events: N/A 
- **ItemForm:** 
    - NOTE**: Consider making one item form that can be used for both adding and editting.
    - State: useState per input type
    - HTML: form, fieldset, legend, input per userfield, input for button. 
    - Called in home view component(** and in listitem if making this component reusable).
    - Needs: 
        - dispatch from useReducer hook.
        - <placeholder>
    - Events:
        - on submit (calls dispatcher)
- **UpdateItemForm:** 
    - State: useState per input type
    - HTML: form, fieldset, legend, input per userfield, input for button. 
    - Called in ListItem view component.
    - Needs: 
        - dispatch from useReducer hook.
        - <placeholder>
    - Events:
        - on submit (calls dispatcher)
## Data models
- ListItem: {
    name: str
    description: str
    id: number(generate using an abstracted function which keeps a dictionary.)
}
- ShoppingList: [
    {},
    {},
    {}
]

## Tests
- Test all expected app behaviors. 
- Snapshot test all view components. 

## Extra credit:
- Google: mdn filter, Javascript 30, Wes bos
