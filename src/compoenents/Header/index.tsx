import { Scroll, Timer } from 'phosphor-react'

import { HeaderContainer } from './styles'

import Logo from '../../assets/logo-ignite.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo do Ignite Timer" />

      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} weight="regular" />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} weight="regular" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
