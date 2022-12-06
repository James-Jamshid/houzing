import { Container } from "./Styled"

const Input = ({
  type,
  onChange,
  value,
  defaultValue,
  placeholder,
  width,
  height,
}) => {
  return (
    <Container
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      onChange={onChange}
      width={width}
      height={height}
      type={type}
    />
  )
}
export default Input
