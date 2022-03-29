import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const ConnectWallet = ({connected, setConnected}) => {
    const navigate = useNavigate()

    useEffect(() => {
        if(connected){
            navigate("/dashboard")        
        }
    }, [connected, navigate])

    const handleWalletConnection = () => {
        localStorage.setItem("connected", 'true')
        setConnected(true)
    }
  return (
    <SigninForm>
        <div className="title">
            <h1>Connect your wallet</h1>
            <p>Connect your wallet and know everything about NFT👉</p>
        </div>
        <div className="wallets">
            <button onClick={handleWalletConnection}>
                <img src="https://i.postimg.cc/C1v3V2Zp/image.png" alt="Meta Mask" />
                <h2>MetaMask</h2>
            </button>
            <button onClick={handleWalletConnection}>
                <img src="https://i.postimg.cc/tChHs2wW/image.png" alt="Meta Mask" />
                <h2>Wallet Connect</h2>
            </button>
            <button onClick={handleWalletConnection}>
                <img src="https://i.postimg.cc/PxBBxwMS/image.png" alt="Meta Mask" />
                <h2>Coinbase Wallet</h2>
            </button>
            <a href="https://metamask.io/download" target="_blank" rel="noopener noreferrer">I don't have a wallet</a>
        </div>
    </SigninForm>
  )
}

export default ConnectWallet

const SigninForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px;

    @media screen and (max-width: 648px) {
        padding: 100px 50px;
    }

    @media screen and (max-width: 420px) {
        padding: 100px 25px;
    }

    .title {
        text-align: center;

        p {
            font-size: 18px;
        }
    }

    .wallets {
        display: flex;
        flex-direction: column;
        margin-top: 56px;

        button {
            height: 72px;
            width: 452px;
            padding: 24px;
            border: 1px solid #D7D9F2;
            display: flex;
            flex-direction: row;
            align-items: center;
            background: none;
            margin-bottom: 16px;
            border-radius: 14px;
            cursor: pointer;
            transition: all ease 0.4s;

            @media screen and (max-width: 550px) {
                width: 350px;
                padding: 15px;
            }

            @media screen and (max-width: 410px) {
                width: 250px;
                h2 {
                    font-size: 15px;
                }
            }

            img {
                width: 48px;
                height: 48px;
                margin: 0px 48px;

                @media screen and (max-width: 550px) {
                    margin: 0px;
                    margin-right: 20px;
                }
            }

            &:hover {
                border: 1px solid #5A66F9;
                background: #F7FAFA;
            }
        }

        a {
            text-decoration: none;
            color: #111119;
            flex: 1;
            text-align: center;
            font-size: 18px;
            margin: 24px 0px;

            &:hover {
                color: #8A92FF;
            }
        }
    }
`