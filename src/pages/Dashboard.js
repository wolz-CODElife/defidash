import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import History from '../Layouts/History'
import Portfolio from '../Layouts/Portfolio'
import { IconCopy, LogosEthereum } from '../services/icons'
import { useMoralisWeb3Api, useMoralis } from "react-moralis";
import { APP_ID, SERVER_URL } from '../services/MoralisConfig'


const Dashboard = ({connected, setConnected}) => {
  const [address, setAddress] = useState("")
  const addressInput = useRef(null)
  const [nativeBal, setNativeBal] = useState("")
  const [activeTab, setActiveTab] = useState('Portfolio')
  const tabs = ["Portfolio", "History"]
  const navigate = useNavigate()
  const Web3Api = useMoralisWeb3Api();
  const { user, logout, Moralis } = useMoralis();


  
  useEffect(() => {
    Moralis.start({serverUrl: SERVER_URL, appId: APP_ID})
    if(!connected){
        navigate("/connectwallet")        
    }
    else{
      setAddress(user.get("ethAddress"))
      fetchNativeBalances()
    }
    // eslint-disable-next-line
}, [connected, navigate, user])

  const handleCopy = () => {
    let text = addressInput.current.value
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied address to clipboard!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  }

  const fetchNativeBalances = async () => {
    let options = {
      chain: "ropsten"
    }
    Web3Api.account.getNativeBalance(options).then(balance => {
      console.log(balance);
      let newNativeBalance = parseFloat(Moralis.Units.FromWei(balance.balance)).toFixed(2)
      setNativeBal(newNativeBalance)
    })
  };

  const HandleDisconnectWallet = () => {
    logout().then(() => {
      setConnected(false)
    })
  }
  return (
    <DashContainer>
      <h1 className='overview'>Overview <button onClick={HandleDisconnectWallet}>Disconnect Wallet</button></h1>
      <div className="header">
        <img src="https://i.postimg.cc/VsGFzCqn/image.png" alt="fakeqr" />
        <span>{address.slice(0, 5) + "..." + address.slice(-4)}</span>
        <button onClick={handleCopy}><IconCopy /></button>
        <input type="hidden" defaultValue={address} ref={addressInput} />
      </div>
      <div className="sub_header">
        <LogosEthereum />
        <h1>{nativeBal || 0} ETH</h1>
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

    @media screen and (max-width: 768px) {
      padding: 100px 50px;
    }

    @media screen and (max-width: 498px) {
      padding: 100px 25px;
    }
    
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
        
        @media screen and (max-width: 498px) {
          transform: scale(0.8);  
        }

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

    .sub_header {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 20px 0px;
    }

    .tabs {
      margin: 30px 0px;
      box-shadow: 2px 2px 20px #D7D9F2C0;
      border-radius: 10px;
      
      .head {
        background: #FFFFFF;
        border-radius: 10px 10px 0px 0px;
        
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
        background: #FFFFFFA5;
        padding: 20px;
        border-radius: 0px 0px 10px 10px;
      }
    }
`
