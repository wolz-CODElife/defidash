import React from 'react'
import styled from 'styled-components'
import { LogosAvalanche, LogosBSC, LogosEthereum, LogosMatic } from '../services/icons'

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <div className="table_responsive">
        <div className="header">
          <LogosEthereum /> Ethereum Mainnet
        </div>
        <table>
          <thead>
            <tr>
              <th>Token</th>
              <th>Balance</th>
              <th>USD Value</th>
            </tr>
          </thead>

          {/* Table body */}
          <tbody>
            <tr>
              <td>Eth</td>
              <td>0.03</td>
              <td>$110.86</td>
            </tr>
            <tr>
              <td>Eth</td>
              <td>0.03</td>
              <td>$110.86</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="table_responsive">
        <div className="header">
          <LogosMatic /> Polygon
        </div>
        <table>
          <thead>
            <tr>
              <th>Token</th>
              <th>Balance</th>
              <th>USD Value</th>
            </tr>
          </thead>

          {/* Table body */}
          <tbody>
            <tr>
              <td>MATIC</td>
              <td>0.03</td>
              <td>$110.86</td>
            </tr>
            <tr>
              <td>WETH</td>
              <td>0.03</td>
              <td>$110.86</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="table_responsive">
        <div className="header">
          <LogosBSC /> Binance Smart Chain
        </div>
        <table>
          <thead>
            <tr>
              <th>Token</th>
              <th>Balance</th>
              <th>USD Value</th>
            </tr>
          </thead>

          {/* Table body */}
          <tbody>
            <tr>
              <td>BNB</td>
              <td>0.03</td>
              <td>$110.86</td>
            </tr>
            <tr>
              <td>Cake</td>
              <td>0.03</td>
              <td>$110.86</td>
            </tr>
            <tr>
              <td>REEF</td>
              <td>0.03</td>
              <td>$110.86</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="table_responsive">
        <div className="header">
          <LogosAvalanche /> Avalanche Mainnet
        </div>
        <table>
          <thead>
            <tr>
              <th>Token</th>
              <th>Balance</th>
              <th>USD Value</th>
            </tr>
          </thead>

          {/* Table body */}
          <tbody>
            <tr>
              <td>AVAX</td>
              <td>0.03</td>
              <td>$110.86</td>
            </tr>
            <tr>
              <td>JOE</td>
              <td>0.03</td>
              <td>$110.86</td>
            </tr>
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

    tr:nth-child(even) {
      background-color: #5A66F940;
    }
  }
`