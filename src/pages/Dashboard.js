import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import History from '../Layouts/History'
import NFTs from '../Layouts/NFTs'
import Portfolio from '../Layouts/Portfolio'
import { IconCopy } from '../services/icons'

const Dashboard = ({connected, setConnected}) => {
  const address = "0xcdx13p34xw4036q7870x9089p79y8y97"
  const addressInput = useRef(null)
  const [activeTab, setActiveTab] = useState('Portfolio')
  const tabs = ["Portfolio", "NFTs", "History"]
  const navigate = useNavigate()


  useEffect(() => {
    if(!connected){
        navigate("/connectwallet")        
    }
}, [connected, navigate])

  const handleCopy = () => {
    let text = addressInput.current.value
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied address to clipboard!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  }

  const handleDisconnectWallet = () => {
    localStorage.removeItem('conntected')
    setConnected(false)
  }
  return (
    <DashContainer>
      <h1 className='overview'>Overview <button onClick={handleDisconnectWallet}>Disconnect Wallet</button></h1>
      <div className="header">
        <img src="https://i.postimg.cc/VsGFzCqn/image.png" alt="fakeqr" />
        <span>{address.slice(0, 8) + "..." + address.slice(-4)}</span>
        <button onClick={handleCopy}><IconCopy /></button>
        <input type="hidden" defaultValue={address} ref={addressInput} />
      </div>

      <div className="tabs">
        <div className="head">
          {tabs.map(menu => (
            <button key={menu} className={activeTab === menu? "active" : ""} onClick={() => setActiveTab(menu)}>{menu}</button>
          ))}
        </div>
        <div className="body">
          {activeTab === tabs[0] ?
            <Portfolio />
            :
            activeTab === tabs[1] ?
            <NFTs />
            :
            <History />
          }
        </div>
      </div>
    </DashContainer>

  )
}

export default Dashboard

const DashContainer = styled.div`
    padding: 100px;
    
    .overview {
      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
        background: none;
        border: 1px solid #FF0000A6;
        padding: 8px 15px;
        border-radius: 6px;
        cursor: pointer;

        &:hover {
          background: #FF0000A6;
          color: #FFFFFF;
          border: none;
        }
      }
    }

    .header {
      display: flex;
      align-items: center;

      img {
        border-radius: 50%;
        width: 40px;
        height: 40px;
        margin-right: 10px;
      }

      span {
        color: #8a8a8a;
        font-size: 15px;
      }

      button {
        color: #8a8a8a;
        background: none;
        border: none;
        outline: none;
        cursor: pointer;

        svg {
          width: 15px;
          height: 15px;
        }
      }
    }

    .tabs {
      margin: 30px 0px;

      .head {
        background: #FFFFFF;

        button {
          border: none;
          outline: none;
          cursor: pointer;
          padding: 10px 15px;
          background: none;

          &:hover {
            border-bottom: 2px solid #5A66F960;
          }

          &.active {
            border-bottom: 2px solid #5A66F9;
          }
        }
      }

      .body {
        padding: 20px;
      }
    }
`
