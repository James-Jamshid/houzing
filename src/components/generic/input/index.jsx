import { forwardRef } from "react"
import { Container, Icons, Wrapper } from "./Styled"
const Input = forwardRef(
  (
    { type, onChange, value, defaultValue, placeholder, width, height, icon },
    ref
  ) => {
    return (
      <Wrapper>
        <Icons>{icon}</Icons>
        <Container
          ref={ref}
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
)
export default Input

//useRef inputga ma'lumotni yozganimizdan keyin render qilish uchun boshqa payt, bizga kerak bo'lmagan payt
// ortiqcha render qilishini oldini olish uchun, biz useRefdan foydalanamiz.
//lekin input generic qilib yasab olganmiz shuning uchun useRefni oqiyolmaydi.
//buni tog'rilash uchun biz generic componentga otib useRefimizni forwardRefga orab olamiz.
//forwarRef ham reactdan keladi manabu uni default korinishini: const nomi = forwardRef((props,ref)=>{})
//biz bu forwardRefni ichiga barcha containerlarimizni kirgizib olamiz.
