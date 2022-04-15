import { Wrapper } from "./style"

type HelloWorldProps = {
  title?: string
}

export function HelloWorld({ title = "Hello World!" }: HelloWorldProps) {
  return <Wrapper aria-label="Add to cart">{title}</Wrapper>
}
