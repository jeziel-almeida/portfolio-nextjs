import {render, screen} from '@testing-library/react'
import AboutMe from '../../../src/components/Home/AboutMe'
import '@testing-library/jest-dom'

describe('<AboutMe />', () => {

    it('renders aboutme page unchanged', () => {
        const { container } = render(<AboutMe />)
    
        expect(container).toMatchSnapshot()
    })

    //Verifies if an element with the expected text is rendered
    it('should render h2 correctly', () => {
        render(<AboutMe />)

        expect(screen.getByText('Sou desenvolvedor Front-end que busca cada dia mais novos conhecimentos e aprimoramento!')).toBeInTheDocument();
    })

    it('renders a heading', () => {
        render(<AboutMe />)

        const heading = screen.getByRole('heading', {
            //name: /Olá, sou Jeziel/i,
            name: 'Prazer, sou Jeziel'
        })

        expect(heading).toBeInTheDocument();
    })
})

