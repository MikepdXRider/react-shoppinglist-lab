import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { waitFor } from "@testing-library/react";
import Home from "../src/views/Home/Home.jsx";



it('adds a new item to the shopping list', async () => {
    render(<Home />);

    const inputField = screen.getByLabelText(/New Item/i);
    const submitButton = screen.getByLabelText(/add-item/i);

    expect(inputField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

    userEvent.type(inputField, 'Im totally stable in the head');
    userEvent.click(submitButton);

    await waitFor(() => screen.getByText('Im totally stable in the head'));
})