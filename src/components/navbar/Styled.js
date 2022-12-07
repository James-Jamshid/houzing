import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { ReactComponent as logoImg } from "../../assets/logo/logo.svg"
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--colorPrimary);
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: var(--padding);
  height: 64px;
  font-size: 16px;
  width: 100%;
  //max-width 14404 berganimzda uni yana bitta containerga orab wrapper default widthni 100% qilib qoyish kere
  /* max-width: 1440px; */

  //max-width ni yozishdan maqsad, yonlariga padding berganmiz agar
  //maxwidth berilmasa, ekran kattalshgan sari paddinglar ham kattalashib ketaveradi.
`
//eng katta Containerni olchamiga tegilmidi
//wrapper bolsa w 1440 bolishi kerak.
export const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ logo }) => logo && "pointer"};
  .active {
    color: #ac6b34;
  }
  //active degan clasname ocdik, indexjsda Linkga clasname berib isActive togri bolganda,
  //active classnami ishlasin deb buyruq berdik, sharti
  //active classname Link turgan parent componentga beriladi.
`
export const Link = styled(NavLink)`
  text-decoration: none;
  color: white;
  padding: 0 32px;
`
export const Logo = styled(logoImg)`
  width: 117px;
  height: 36px;
  & path {
    fill: white;
  }
`
//svg formatdagilari rangini ozgartirib bolmaydi
//ozgartirish uchun stlyedga component qilib ovolish kerak boladi.
