import { screen } from "@testing-library/react"
import { render } from "helpers/test-utils"
import { HelloWorld } from "./HelloWorld"

describe("<Button />", () => {
  it("should render the medium size by default", () => {
    render(<HelloWorld />)
    expect(screen.getByLabelText(/hello world/i)).toBeInTheDocument()
  })
})
