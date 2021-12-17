import { render } from '@testing-library/react';
import Home from "./Home.jsx";


it('renders home view component', () => {
    const {container} = render(
        <Home />
    )

    expect(container).toMatchSnapshot();
})