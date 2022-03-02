import {useState, useEffect} from 'react';
import {ethers, utils} from 'ethers';
import abi from './contracts/PullContract.json';

function App() {
  const [isOwner, setIsOwner] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const contractAddress = '0xe0B043FC157F110c5D997CA2CC3Ac35D5EF7DB76';
  const contractABI = abi.abi;

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
