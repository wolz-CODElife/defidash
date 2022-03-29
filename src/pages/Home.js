import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { IconArrowRightThin, IconCheckCircle, IconLink } from '../services/icons'

const Home = ({connected}) => {
  return (
    <HomeContainer>
      <div className="board">
        <div className='content'>
          <div className='text'>
            <h1>The best defi dashboard analytics platform</h1>
            <h4>Connect wallet and track your cross-chain exchanges!</h4>

            {!connected?
              <div className='connectedlinks'>
                <Link to='/connectwallet' className='connect_link'>Connect Wallet <IconLink /></Link>
              </div>
              :
              <div className='connectedlinks'>
                <span className='userconnected'>Connected <IconCheckCircle /></span>
                <Link to='/dashboard' className='connect_link'>Go To Dashboard <IconArrowRightThin /></Link>
              </div>
            }
          </div>
          <div className="hero_img">
            <img src="https://i.postimg.cc/KjLTQj9z/Revenue-bro.png" alt="illsutration" />
          </div>
        </div>
      </div>
    </HomeContainer>
  )
}

export default Home

const HomeContainer = styled.div`
    padding: 100px;

    @media screen and (max-width: 656px) {
      padding: 100px 30px;
    }

    .board {
      background: #555ECD;
      height: max-content;
      position: relative;
      border-radius: 14px;

      .content {
        background-image: url('https://i.postimg.cc/mkkknqXn/image.png');
        background-size: cover;
        background-repeat: no-repeat;
        padding: 32px;
        color: #FFFFFF;
        display: flex;
        justify-content: space-around;
        align-items: center;

        @media screen and (max-width: 1021px) {
          flex-direction: column-reverse;
        }
        
        .text {
          .connect_link{
            background: #F7FAFA60;
            padding: 10px 15px;
            width: max-content;
            display: flex;
            align-items: center;
            text-decoration: none;
            color: #000000;
            transition: 0.4s ease;
            border-radius: 2px;

            svg{
              width: 20px;
              height: 20px;
              margin-left: 15px;
            }

            &:hover {
              background: #000000;
              color: #FFFFFF;
            }
          }       

          .connectedlinks {
            margin-top: 100px;
            display: flex;

            @media screen and (max-width: 1021px) {
              justify-content: space-between;
            }
            
            @media screen and (max-width: 500px) {
              flex-direction: column;
              align-items: center;
            }

            .userconnected {
              background: #f1f3f5;
              color: #5EBA7D;
              padding: 10px 15px;
              border-radius: 30px;
              display: flex;
              align-items: center;
              width: max-content;
              align-items: center;
              margin-right: 20px;
            
              @media screen and (max-width: 500px) {
                margin-bottom: 20px;
              }
              
              svg {
                margin-left: 15px;
              }
            }
          }
        }

        .hero_img {
          background: #F7FAFA60;
          width: 300px;
          max-width: 80%;
          padding: 15px;
          border-radius: 10px;

          @media screen and (max-width: 1021px) {
            margin: 30px 0px;
          }
          
          img {
            width: 330px;
            max-width: 100%;
            object-fit: contain;
            background: #FFFFFF;
            border-radius: 10px;
          }
        }
      }
    }

`