import { Outlet, useNavigate } from "react-router-dom"
import { navbar } from "../../utils/Navbar"
import { Container, Link, Logo, Section, Wrapper } from "./Styled"
const Navbar = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Wrapper>
        <Section onClick={() => navigate("/home")} logo>
          <Logo />
        </Section>
        <Section>
          {navbar.map(({ title, path }, index) => {
            return (
              <Link
                className={({ isActive }) => isActive && "active"}
                key={index}
                to={path}
              >
                {title}
              </Link>
            )
          })}
        </Section>
        <Section>
          <button>Login</button>
        </Section>
      </Wrapper>
      <Outlet />
    </Container>
  )
}
export default Navbar