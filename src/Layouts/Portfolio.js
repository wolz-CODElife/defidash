import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useMoralisWeb3Api, useMoralis } from "react-moralis";
import { LogosEthereum } from '../services/icons'
import { APP_ID, SERVER_URL } from '../services/MoralisConfig';

const Portfolio = () => {
  const Web3Api = useMoralisWeb3Api();
  const { Moralis } = useMoralis()
  const [tokenBal, setTokenBal] = useState([])

  useEffect(() => {
    Moralis.start({serverUrl: SERVER_URL, appId: APP_ID})
    fetchTokenBalances()

    
    // eslint-disable-next-line
  }, [])

  const fetchTokenBalances = () => {

    Web3Api.account.getTokenBalances().then(balances => {
    let newBalances = []
    balances.map(bal => (
      newBalances.push({
        token_name: bal.symbol,
        token_logo: bal.logo,
        balance: parseFloat(Moralis.Units.FromWei(bal.balance)).toFixed(2)
      })
      ))
      setTokenBal(newBalances)
    })
  }


  return (
    <PortfolioContainer>
      <div className="table_responsive">
        <table>
          <thead>
            <tr>
              <th>Token</th>
              <th>Balance</th>
            </tr>
          </thead>

          {/* Table body */}
          <tbody>
            {tokenBal.length > 0?
              tokenBal.map(bal => (
                <tr key={bal.token_name}>
                  <td className='token_name'>{bal.token_logo && <img src={bal.token_logo} alt={bal.token_name} />} {bal.token_name}</td>
                  <td>{bal.balance} ETH</td>
                </tr>
              ))
            :
            <tr>
              <td colSpan="2">No token found</td>
            </tr>
            }
          </tbody>
        </table>
      </div>
    </PortfolioContainer>
  )
}

export default Portfolio

const PortfolioContainer = styled.div`
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

    table {
      border-collapse: collapse;
      width: 100%;
      margin: 20px 0px;
    }

    td, th {
      border: 1px solid #5A66F965;
      text-align: left;
      padding: 8px;
    }

    .token_name {
      display: flex;

      img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-right: 15px;
      }
    }

    tr:nth-child(even) {
      background-color: #5A66F940;
    }
  }
`