import { Container } from "./Styled"

const Button = ({ children, type, onClick, width, height }) => {
  return (
    <Container onClick={onClick} width={width} height={height} type={type}>
      {/* onClick - bu yerda metod va medodni onClick degan propga tenglashtirdik */}
      {children}
    </Container>
  )
}
export default Button
