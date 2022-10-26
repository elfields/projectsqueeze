import HeroListen from "./HeroListen"
import {render, screen} from '@testing-library/react'

// Testing to ensure the Listen Hero contains the word Listening.
describe('HeroListen', ()=>{
    it('renders HeroListen', ()=>{
        render(<HeroListen/>)
        expect(screen.getByText('Listening')).toBeInTheDocument()
    })
})