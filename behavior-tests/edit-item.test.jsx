import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { waitFor } from "@testing-library/react";
import Home from "../src/views/Home/Home.jsx";

// queryBy returns null if the element does not exist.
//  - this is great if we want test if an element is NOT rendering.
// getBy throws an error if the element does not exist.
//  - this is great if we only want to test if an element IS rendering. 

it('edits an item on the shopping list', async () => {
    // render page ✔
    render(<Home />);

    // check to make sure milk is on the screen. ✔
    const milkItem = screen.queryByText('Milk');
    expect(milkItem).toBeInTheDocument();

    // check to make sure the edit button is on the screen. ✔
    const editButton = screen.getByLabelText(/edit-milk/i);
    // click edit
    userEvent.click(editButton);

    // Check to see that the form input and button is on screen. ✔
    const inputField = screen.getByLabelText(/Edit Item/i);
    const submitButton = screen.getByLabelText(/edit-item/i);
    
    
    // updates input field and clicks submit. ✔
    userEvent.clear(inputField);
    userEvent.type(inputField, 'testing is starting to make some sense again');
    screen.debug()
    userEvent.click(submitButton);
    
    // check to make sure milk is no longer on screen.
    expect(screen.queryByText('Milk')).toBeNull();
    // check to make sure new item is on screen.
    screen.getByText('testing is starting to make some sense again');
})