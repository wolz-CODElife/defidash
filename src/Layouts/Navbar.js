import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { IconCheckCircle, IconProfile } from '../services/icons'

const Navbar = ({connected}) => {
  return (
      <NavContainer>
          <Link to="/" className="brand">
              <h1>DefiDash</h1>
          </Link>
          {!connected?
            <Link to='/connectwallet' className='userprofile'><IconProfile /></Link>
          :
            <span className='userconnected'>Connected <IconCheckCircle /></span>
          }
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
        margin: 10px 30px;
        text-decoration: none;
        color: #5A66F9;

        h1 {
            font-size: 32px;
            font-weight: 700;
        }

        @media screen and (max-width: 498px) {
            margin-right: 15px;
            h1 {
                transform: scale(0.8);
            }
        }
    }
    .userprofile {
        margin: 10px 30px;
        svg {
            width: 40px;
            height: 40px;
            fill: #D7D9F2;
        }
    }

    .userconnected {
        background: #f1f3f5;
        color: #5EBA7D;
        padding: 10px 15px;
        margin: 10px 30px;
        border-radius: 30px;
        display: flex;
        align-items: center;

        svg {
            margin-left: 15px;
        }

        @media screen and (max-width: 498px) {
            transform: scale(0.8);
        }
    }
`