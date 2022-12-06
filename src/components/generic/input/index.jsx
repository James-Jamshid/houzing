import { Container, Icons, Wrapper } from "./Styled"

const Input = ({
  type,
  onChange,
  value,
  defaultValue,
  placeholder,
  width,
  height,
  icon,
}) => {
  return (
    <Wrapper>
      <Icons>{icon}</Icons>
      <Container
        icon={icon}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
        width={width}
        height={height}
        type={type}
      />
    </Wrapper>
  )
}
export default Input
