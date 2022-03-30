import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useMoralisWeb3Api, useMoralis } from "react-moralis";
import { APP_ID, SERVER_URL } from '../services/MoralisConfig';
import { IconCopy } from '../services/icons';

const History = () => {
  const Web3Api = useMoralisWeb3Api();
  const { Moralis } = useMoralis()
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    Moralis.start({serverUrl: SERVER_URL, appId: APP_ID})
    fetchTransactionHistory()

    // eslint-disable-next-line
  }, [])

  const fetchTransactionHistory = async () => {
    let options = {
      chain: "testnet",
    }
    Web3Api.account.getTransactions(options).then(transacts => {
      if(transacts.result.length > 0) {
        let newTransactions = []
        transacts.result.map(transaction => {
          newTransactions.push({
            hash: transaction.hash,
            sender: transaction.from_address,
            receiver: transaction.to_address,
            value: parseFloat(Moralis.Units.FromWei(transaction.value)).toFixed(3),
            status: transaction.receipt_status,
            timestamp: transaction.block_timestamp
          })  
        })
        setTransactions(newTransactions)
      }
    })
  };

  const handleCopy = (address) => {
    navigator.clipboard.writeText(address).then(() => {
      alert('Copied address to clipboard!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  }


  return (
    <HistoryContainer>
      <div className="table_responsive">
        <table>
          <thead>
            <tr>
              <th>Transaction Hash</th>
              <th>Sender Address</th>
              <th>Receiver Address</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Timestamp</th>
            </tr>
          </thead>

          {/* Table body */}
          <tbody>
            {transactions.length > 0?
              transactions.map(transaction => (
                <tr key={transaction.hash + transaction.timestamp}>
                  <td>
                    <div className='trans_address'>
                      {transaction.hash.slice(0, 6) + "..." + transaction.hash.slice(-4)} 
                      <button onClick={() => handleCopy(transaction.hash)}><IconCopy /></button>
                    </div>
                  </td>
                  <td>
                    <div className='trans_address'>
                      {transaction.sender.slice(0, 6) + "..." + transaction.sender.slice(-4)} 
                      <button onClick={() => handleCopy(transaction.sender)}><IconCopy /></button>
                    </div>
                  </td>
                  <td>
                    <div className='trans_address'>
                      {transaction.receiver.slice(0, 6) + "..." + transaction.receiver.slice(-4)} 
                      <button onClick={() => handleCopy(transaction.receiver)}><IconCopy /></button>
                    </div>
                  </td>
                  <td>{transaction.value} ETH</td>
                  <td>{transaction.status === "1"? <span className='success'>Successful</span> : <span className='Pending'>Pending</span> }</td>
                  <td>{new Date(transaction.timestamp).toUTCString()}</td>
                </tr>
              ))
            :
            <tr>
              <td colSpan="6">No transactions found</td>
            </tr>
            }
          </tbody>
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
      min-width: 150px;
    }
    
    .trans_address {
      display: flex;

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
    
    .success {
      font-size: 10px;
      background: #00aa0060;
      border-radius: 20px;
      padding: 3px 7px;
    }

    tr:nth-child(even) {
      background-color: #5A66F940;
    }
  }
`