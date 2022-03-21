import React from 'react'
import styled from 'styled-components'

const ConnectWallet = () => {
  return (
    <SigninForm>
        <div className="title">
            <h1>Connect your wallet</h1>
            <p>Connect your wallet and know everything about NFT👉</p>
        </div>
        <div className="wallets">
            <button>
                <img src="https://i.postimg.cc/C1v3V2Zp/image.png" alt="Meta Mask" />
                <h2>MetaMask</h2>
            </button>
            <button>
                <img src="https://i.postimg.cc/tChHs2wW/image.png" alt="Meta Mask" />
                <h2>Wallet Connect</h2>
            </button>
            <button>
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
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 0px;

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

            img {
                width: 48px;
                height: 48px;
                margin: 0px 48px;
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

    
    // ==============================================================
    // Media-query
    // ==============================================================
    @media only screen and (min-width: 329px){
        display: none;
    }
    @media only screen and (min-width: 768px){
        display: flex;
    }
    @media only screen and  (min-width: 1200px){
        display: flex;
    }

`