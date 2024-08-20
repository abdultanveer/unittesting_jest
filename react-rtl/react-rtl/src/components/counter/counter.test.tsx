import { render, screen } from "@testing-library/react"
import Counter from "./counter"
import user from '@testing-library/user-event'


describe('counter',()=>{
    test('renders correctly',()=>{
        render(<Counter/>)
        const countElement = screen.getByRole('heading')
        expect(countElement).toBeInTheDocument()

        const incrementButton = screen.getByRole('button',{
            name:"Increment"
        })
        expect(incrementButton).toBeInTheDocument()
    })

    test('renders a count of 0', () => { 
        render(<Counter/>)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent("0")
     })

     test('incremnts  a count to 1',async () => { 
        user.setup()
        render(<Counter/>)
        const incrementButton = screen.getByRole('button',{
            name:"Increment"
        })
        await user.click(incrementButton)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent("1")

     })


})