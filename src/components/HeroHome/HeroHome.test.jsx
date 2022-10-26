import HeroHome from "./HeroHome"
import {render, screen} from '@testing-library/react'

describe('HeroHome', ()=>{
    it('renders HeroHome', ()=>{
        render(<HeroHome/>)
        expect(screen.getByText('Squeeze')).toBeInTheDocument()
    })
})