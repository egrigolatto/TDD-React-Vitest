import Accordion from "./Accordion"
import { fireEvent, render, screen } from "@testing-library/react"

describe('Accordion', () => {

  beforeEach(() => {
    render(<Accordion title="hello"  >
      <h3>content</h3>
      <p>mas content</p>
      </Accordion >
    )
  })

  test('should show the accordion component', () => {
    // render(<Accordion title="hello"  >
    //   <h3>vontendio</h3>
    //   <p>mas coso</p>
    //   </Accordion >
    // )
    // expect(screen.getByText('hello')).toBeDefined()
  })

  test('should show title all the time', () => {
    expect(screen.getByText('hello')).toBeDefined()
  })
  test('should not show the content all the start', () => {
    expect(screen.queryByText(/content/i)).toBeNull()
  })

  test('should show the content when title es clicked', () => {
    const boton = screen.getByText(/open/i)
    fireEvent.click(boton)
    expect(screen.queryByText(/content/i)).toBeDefined()
  })

  test('should hide the contetn when title is clicked', () => {
    const boton = screen.getByText(/open/i)
    fireEvent.click(boton)
    fireEvent.click(boton)
    expect(screen.queryByText(/content/i)).toBeNull()
  })
})