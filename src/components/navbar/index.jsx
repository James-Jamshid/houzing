import { Outlet, useNavigate } from "react-router-dom"
import { navbar } from "../../utils/Navbar"
import Button from "../generic/buttons"
import { Container, Link, Logo, Main, Section, Wrapper } from "./Styled"
const Navbar = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate("/home")} logo>
            <Logo />
          </Section>
          <Section>
            {navbar.map(({ title, path, hidden }, index) => {
              return (
                !hidden && (
                  <Link
                    className={({ isActive }) => isActive && "active"}
                    key={index}
                    to={path}
                  >
                    {title}
                  </Link>
                )
              )
            })}
          </Section>
          <Section>
            <Button onClick={() => navigate("/signin")} type={"dark"}>
              {/* onClick- bu yerda prop medod emas, chunki bu buttoni genericdan import qilob olganmiz, genericdagi onClick medodini prop orqali chaqirib olib ishlatamiz */}
              Login
            </Button>
            {/* type generic/ button/css dan kelyabdi */}
          </Section>
        </Wrapper>
      </Main>

      <Outlet />
    </Container>
  )
}
export default Navbar
