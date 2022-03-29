import React from 'react'
import styled from 'styled-components'
import { LogosAvalanche, LogosBSC, LogosEthereum, LogosMatic } from '../services/icons'

const NFTs = () => {
  return (
    <NFTContainer>
      <div className="table_responsive">
        <div className="header">
          <LogosEthereum /> Ethereum Mainnet
        </div>
        <div className="collections">
          <div className="card">
            <img src="https://i.postimg.cc/pdMZpCN9/image.png" alt="bigape" />
            <h3>Big Ape</h3>
            <p>10.892ETH</p>
          </div>
          <div className="card">
            <img src="https://i.postimg.cc/28vTmMMp/image.png" alt="Onion Head" />
            <h3>Onion Head</h3>
            <p>0.2ETH</p>
          </div>
          <div className="card">
            <img src="https://i.postimg.cc/bwmnjRyc/image.png" alt="rolling sport" />
            <h3>Rolling sport</h3>
            <p>0.892ETH</p>
          </div>
          <div className="card">
            <img src="https://i.postimg.cc/KY75LTF0/image.png" alt="Conisson pass" />
            <h3>Conisson pass</h3>
            <p>0.2ETH</p>
          </div>
        </div>
      </div>
      <div className="table_responsive">
        <div className="header">
          <LogosMatic /> Polygon
        </div>
        <div className="collections">
          <div className="card">
            <img src="https://i.postimg.cc/bwmnjRyc/image.png" alt="rolling sport" />
            <h3>Rolling sport</h3>
            <p>0.892ETH</p>
          </div>
        </div>
      </div>
      <div className="table_responsive">
        <div className="header">
          <LogosBSC /> Binance Smart Chain
        </div>
        <div className="collections">
          <div className="card">
            <img src="https://i.postimg.cc/442QzskR/image.png" alt="eathe head" />
            <h3>Earth Head</h3>
            <p>10.892ETH</p>
          </div>
          <div className="card">
            <img src="https://i.postimg.cc/28vTmMMp/image.png" alt="Onion Head" />
            <h3>Onion Head</h3>
            <p>0.2ETH</p>
          </div>
        </div>
      </div>
      <div className="table_responsive">
        <div className="header">
          <LogosAvalanche /> Avalanche Mainnet
        </div>
        <div className="collections">
        </div>
      </div>
    </NFTContainer>
  )
}

export default NFTs

const NFTContainer = styled.div`
  .table_responsive {
    width: 100%;
    overflow-x: auto;

    .header {
      display: flex;
      align-items: center;

      svg {
        margin-right: 10px;
        width: 40px;
        height: 40px;
      }
    }

    .collections {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      margin: 20px 0px;

      .card {
        width: 20%;
        margin: 20px;
        background: #FFFFFF;
        border-radius: 10px;
        padding-bottom: 10px;
        box-shadow: 2px 2px 10px #D7D9F240;

        @media screen and (max-width: 768px){
          width: 40%;
        }

        @media screen and (max-width: 490px){
          width: 80%;
        }

        img {
          width: 100%;
          object-fit: contain;
          border-radius: 10px 10px 0px 0px;
        }

        h3, p {
          margin: 0px;
          padding: 0px 10px;
          font-size: 15px;
        }
      } 
    }
  }
`