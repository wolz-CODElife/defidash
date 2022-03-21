import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { IconProfile } from '../services/icons'

const Navbar = () => {
  return (
      <NavContainer>
          <Link to="/" className="brand">
              <h1>DefiDashboard</h1>
          </Link>
          <Link to='/connectwallet' className='userprofile'><IconProfile /></Link>
      </NavContainer>
  )
}

export default Navbar

const NavContainer = styled.div`
    position: fixed;
    height: 80px;
    width: 100%;
    box-shadow: 0px 1px 5px #D7D9F260;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    z-index: 1000;
    background: #FFFFFF;

    .brand {
        margin: 10px 20px;
        text-decoration: none;
        color: #5A66F9;

        h1 {
            font-size: 32px;
            font-weight: 700;
        }
    }
    .userprofile {
        margin: 10px 20px;
        svg {
            width: 40px;
            height: 40px;
            fill: #D7D9F2;
        }
    }
`