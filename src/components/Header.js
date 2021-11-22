import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo.png";

let address;
export default function Header() {

  async function switchSongBird() {
    await window.ethereum
    .request({
      method: "wallet_switchEthereumChain",
      params: [{chainId: "0x13"}]
    });
    
  }
  useEffect(() => { 
    window.ethereum.on('networkChanged', function () {
      const _chainId = window.ethereum.request({method: "eth_chainId"});
      if (_chainId !== 13){
        switchSongBird();
      }
    })
  }, []);

  const [connectedWallet, setConnectedWallet] = useState(null);
  const connectMetamask = async () => {
    const connected_wallet = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const chainId = await window.ethereum.request({ method: "eth_chainId" });
    
    //alert('gg='+chainId +" connected = " + connected_wallet);

    if (connected_wallet) {
      address =
        connected_wallet[0].substr(0, 7) +
        "..." +
        connected_wallet[0].substr(
          connected_wallet[0].length - 7,
          connected_wallet[0].length
        );
      if (chainId !== "0x13") {
        switchSongBird();
        address = address + " | Wrong Network";
        document.getElementById('connectBtnId').style.width = "350px";
      }
      setConnectedWallet(address);
    }
  };

  window.ethereum.on("connect", (info) => {
    connectMetamask();
  });

  return (
    <div className="bg-gradient-to-t to-black from-white bg-size-200 bg-pos-0 hover:bg-pos-100
    flex justify-between bg-black pt-7 text-white">
      
      <div className="grid grid-cols-2 gap-1 place-items-cente w-48 ml-0 text-center text-3xl text-white font-serif font-bold">
        <div><img src={logo} className="w-14 ml-1 -mt-3" alt="logo" /></div>
        <div className="w-48 -ml-10 text-transparent bg-clip-text bg-gradient-to-t from-gray-900 to-gray-50">BeamFTSO</div>
      </div>
      <div className="flex ml-20">
        <p className="md:text-lg pt-9 w-24 font-serif font-bold">
          <NavLink to="/">Home</NavLink>
        </p>
        <p className="md:text-lg pt-9 p-3 w-24 font-serif font-bold">
          <NavLink to="/wrap">Wrap</NavLink>
        </p>
        <p className="md:text-lg pt-9 p-3 w-24 font-serif font-bold">
          <NavLink to="/unwrap">Unwrap</NavLink>
        </p>
        {/* <p className="md:text-lg pt-9 p-3 w-24">
          <NavLink to="/delegate">Delegate</NavLink>
        </p> */}
        <p className="md:text-lg pt-9 p-3 w-27 font-serif font-bold">
          <NavLink to="/undelegate">Your Delegation</NavLink>
        </p>
        <p className="md:text-lg pt-9 p-3 w-27 font-serif font-bold">
          <NavLink to="/reward">Claim Reward</NavLink>
        </p>
      </div>
      
      <div className="flex justify-between md:text-lg mr-5 font-serif font-bold">
        <button id="connectBtnId"
          className="glow-on-hover m-10 pr-5 pl-5 border-collapse border border-white rounded-3xl hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
          onClick={connectMetamask}
        >
          {connectedWallet ? connectedWallet : "Connect Metamask"}
        </button>
      </div>
    </div>
  );
}
