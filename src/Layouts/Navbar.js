import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { IconProfile } from '../services/icons'

const Navbar = () => {
  return (
      <NavContainer>
          DefiDashboard
          <Link to='/connectwallet' className='userprofile'><IconProfile /></Link>
      </NavContainer>
  )
}

export default Navbar

const NavContainer = styled.div`
    .userprofile {
        svg {
            fill: #D7D9F2;
        }
    }
`