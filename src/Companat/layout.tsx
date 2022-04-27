import React from 'react'
import ReactDOM from 'react-dom'
import {
  Mainnet,
  DAppProvider,
  useEtherBalance,
  useEthers,
  Config,
} from '@usedapp/core'
import { formatEther } from '@ethersproject/units'
import { getDefaultProvider } from 'ethers'
import WalletConnectProvider from '@walletconnect/ethereum-provider';
import {  Rinkeby } from '@usedapp/core';
import { Buffer } from 'buffer'
window.Buffer = Buffer
const shortenAddress = (addr: string | any[]) => `${addr.slice(0, 5)}...${addr.slice(-4)}`;



const ConnectWalletConnect24 = async () =>{
   try {
    const RPC_URLS = {
        56: 'https://bsc-dataseed1.binance.org'
    };
    const provider = new WalletConnectProvider({
        rpc: {
            // 1: RPC_URLS[1],
            // 4: RPC_URLS[4],
            56: RPC_URLS[56]
        },
        qrcode: true,
    });
    console.log('eeeeeeeeeee2');
    console.log(provider);
    
    console.log('eeeeeeeeeee3');
    

    console.log();
    
    

}catch (ex) {
    console.log(ex);
    //return;
}
}

export function Layout() {
    
 
    const config = {
        readOnlyChainId: Rinkeby.chainId,
        readOnlyUrls: {
          [Rinkeby.chainId]: getDefaultProvider('rinkeby'),
        },
      }

  return (
    <DAppProvider config={config}>
          <App2></App2>
    </DAppProvider>
  )
}

const App2 = () => {
  const { activateBrowserWallet, deactivate, account } = useEthers();
  return (
    <div className='container'>
      <h2>
        {!account ? "Please connect your wallet." : `Connected Wallet: ${shortenAddress(account)}`}
      </h2>
      {!account ? (
        <button className="button connect" onClick={() => activateBrowserWallet()}>
          Connect
        </button>
      ) : (
        <button className="button disconnect" onClick={() => deactivate()}>
          Disconnect
        </button>
      )}
    </div>
  );
}


