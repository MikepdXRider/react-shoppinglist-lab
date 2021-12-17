import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { waitFor } from "@testing-library/react";
import Home from "../src/views/Home/Home.jsx";

// queryBy returns null if the element does not exist.
//  - this is great if we want test if an element is NOT rendering.
// getBy throws an error if the element does not exist.
//  - this is great if we only want to test if an element IS rendering. 

it('deletes an item from shopping list', async () => {
    render(<Home />);

    const milkItem = screen.queryByText('Milk');
    expect(milkItem).toBeInTheDocument();

    const deleteButton = screen.getByLabelText(/delete-milk/i);

    userEvent.click(deleteButton);

    expect(screen.queryByText('Milk')).toBeNull();
})