import { useWeb3React } from "@web3-react/core";
import { useEffect,useState } from "react";
import { injected } from "../Wallet/Connectors";
import { formatEther } from "@ethersproject/units";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import AccountTable from "./accountTable";

const ConnectWallet = (props) => {
  const { active, account, library, connector, activate, deactivate, chainId } =
    useWeb3React();
  const [isTableOpen,setisTableOpen]=useState(false); 
  useEffect(() => {
    if (account) {
      library
        .getBalance(account)
        .then((balance) =>
          console.log("$ " + formatEther(balance) + " chain id " + chainId)
        );
    }
  }, [library, account]);
  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <>
    <Modal>
      <Card >
        <div className=" w-80 h-30 flex flex-col gap-2">
        <div className="flex ">
          <h4 className=" flex-1 self-start text-left ml-3 font-bold"> Wallet Details</h4>
        <span className=" self-end flex-none mb-5">X</span>
        </div>
        <p className="mb-4 text-left ml-3 text-red-600 font-light tracking-normal"> Wallet not Connected . Please Click Connect now button</p>
        <div className="ml-3 flex justify-center w-96 gap-4 self-center">
        <Button click={connect}><p className=" w-32">Connect</p></Button>
        <Button click={props.close} > 
        <p className="w-24">Cancel</p></Button>
        </div>
        </div>
      </Card>

    </Modal>
    {/* <Modal>
      
        <Card>
        <h3 className="text-2xl"> Wallet Details</h3>
        <AccountTable></AccountTable>
        </Card>
      </Modal> */}
    </>
  );
};

export default ConnectWallet;
