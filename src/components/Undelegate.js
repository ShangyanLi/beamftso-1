import React, { useState, useEffect } from "react";
import Web3 from "web3";
import abi from "../utils/abi.json";
import { contractAddress } from "../utils/config";

export default function Undelegate() {
  const [account, setAccount] = useState("");
  const [delegationInfo, setDelegationInfo] = useState(null);
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(abi, contractAddress);

  useEffect(() => {
    async function init() {
      const _account = await web3.eth.getAccounts();
      const chainId = await window.ethereum.request({ method: "eth_chainId" });
      setAccount(_account);
      if (_account && (chainId === "0x13" || chainId === 19)) {
        const delegate_info = await contract.methods
          .delegatesOf(_account[0])
          .call();
        setDelegationInfo(delegate_info);
      }
    }
    init();
  }, delegationInfo);

  const undelegation = async () => {
    await contract.methods
      .undelegateAll()
      .send({
        from: account[0],
      })
      .then(async (res) => {
        if (res.status === true) {
          setDelegationInfo(null);
        }
      });
  };
  return (
    <>
      <div className="shadow-2xl flex flex-col bg-black w-1/2 mx-10 mx-auto my-10 h-auto p-10 mx-10 border-collapse border border-red-100 rounded-md">
        <label className="m-10 md:w-auto  mx-auto text-2xl text-white">
          Your Delegation
        </label>
        {delegationInfo &&
          delegationInfo["_delegateAddresses"].map(function (item, i) {
            return (
              <label>
                {item} : {delegationInfo["_bips"][i]}
              </label>
            );
          })}
        <div>&nbsp</div>
        <button
          className="glow-on-hover h-9 w-2/3 mx-auto p-1 border-collapse border border-white rounded-3xl bg-black"
          onClick={undelegation}
        >
          Undelegate All
        </button>
      </div>
    </>
  );
}
