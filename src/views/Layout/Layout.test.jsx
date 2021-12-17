import Layout from "./Layout.jsx"
import { render } from '@testing-library/react'


it('renders layout view component', () => {
    const {container} = render(
        <Layout />
    )

    expect(container).toMatchSnapshot();
})