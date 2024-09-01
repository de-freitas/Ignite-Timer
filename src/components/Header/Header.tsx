import { HeaderContainer } from "./styles";

import { Timer, Scroll } from "phosphor-react";

import LogoTimer from "../../assets/logo-timer.svg";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoTimer} alt="Logo Timer - logo da aplicação" />
      <nav>
        <NavLink to="/" title="timer">
          <Timer size={24} />
        </NavLink>

        <NavLink to="history" title="histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
