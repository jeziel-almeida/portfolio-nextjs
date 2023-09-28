import { render } from "@testing-library/react"
import '@testing-library/jest-dom'

import Button from "./Button"

describe('<Button>', () => {
    it('should render button', () => {
        const { getByText, getByRole } = render(<Button isLoading={false}>Botão</Button>)

        expect(getByText('Botão')).toBeInTheDocument();

        const button2 = getByRole('button', {name: /2/i})
        expect(button2).toBeInTheDocument();
    })

    it(`should render 'Loading...' text when isLoading was passed`, () => {
        const { getByText } = render(<Button isLoading>Botão</Button>)

        const ButtonElement = getByText('Loading...')

        expect(ButtonElement).toBeInTheDocument();
    })

    it('should render button with font-weight 700 and background blue', () => {
        const { getByRole } = render(<Button>Botão</Button>)

        const ButtonElement = getByRole('button', {name: 'Botão 2'})

        expect(ButtonElement).toHaveClass('font-bold')
        expect(ButtonElement).toHaveStyle({
            backgroundColor: 'blue'
        })
    })
})