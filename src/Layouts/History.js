import React from 'react'
import styled from 'styled-components'

const History = () => {
  return (
    <HistoryContainer>
      <div className="table_responsive">
        <table>
          <tr>
            <th>Transaction Address</th>
            <th>Sender Address</th>
            <th>Receiver Address</th>
            <th>Value</th>
            <th>Timestamp</th>
          </tr>

          {/* Table body */}
          <tr>
            <td>{"0x057Ec652A4F150f7FF94f089A38008f49a0DF88e".slice(0, 6) + "..." + "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e".slice(-4)}</td>
            <td>{"0xd4a3BebD824189481FC45363602b83C9c7e9cbDf".slice(0, 6) + "..." + "0xd4a3BebD824189481FC45363602b83C9c7e9cbDf".slice(-4)}</td>
            <td>{"0x62AED87d21Ad0F3cdE4D147Fdcc9245401Af0044".slice(0, 6) + "..." + "0x62AED87d21Ad0F3cdE4D147Fdcc9245401Af0044".slice(-4)}</td>
            <td>1ETH</td>
            <td>{new Date('2021-04-02T10:07:54.000Z').toUTCString()}</td>
          </tr>
          <tr>
            <td>{"0x057Ec652A4F150f7FF94f089A38008f49a0DF88e".slice(0, 6) + "..." + "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e".slice(-4)}</td>
            <td>{"0xd4a3BebD824189481FC45363602b83C9c7e9cbDf".slice(0, 6) + "..." + "0xd4a3BebD824189481FC45363602b83C9c7e9cbDf".slice(-4)}</td>
            <td>{"0x62AED87d21Ad0F3cdE4D147Fdcc9245401Af0044".slice(0, 6) + "..." + "0x62AED87d21Ad0F3cdE4D147Fdcc9245401Af0044".slice(-4)}</td>
            <td>1ETH</td>
            <td>{new Date('2021-06-04T16:00:15').toUTCString()}</td>
          </tr>
          <tr>
            <td>{"0x057Ec652A4F150f7FF94f089A38008f49a0DF88e".slice(0, 6) + "..." + "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e".slice(-4)}</td>
            <td>{"0xd4a3BebD824189481FC45363602b83C9c7e9cbDf".slice(0, 6) + "..." + "0xd4a3BebD824189481FC45363602b83C9c7e9cbDf".slice(-4)}</td>
            <td>{"0x62AED87d21Ad0F3cdE4D147Fdcc9245401Af0044".slice(0, 6) + "..." + "0x62AED87d21Ad0F3cdE4D147Fdcc9245401Af0044".slice(-4)}</td>
            <td>1ETH</td>
            <td>{new Date('2021-12-10T17:04:09.775Z').toUTCString()}</td>
          </tr>
        </table>
      </div>
    </HistoryContainer>
  )
}

export default History

const HistoryContainer = styled.div`
  .table_responsive {
    width: 100%;
    overflow-x: auto;

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