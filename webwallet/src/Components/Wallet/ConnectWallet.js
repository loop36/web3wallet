import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { injected } from "../Wallet/Connectors";
import { formatEther } from "@ethersproject/units";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import AccountTable from "./accountTable";
import close from '../../assets/close.png';

const ConnectWallet = (props) => {
  const { active, account, library, activate, deactivate, chainId } = useWeb3React();
  const [isTableOpen, setisTableOpen] = useState(false);
  const [accBalance, setAccBalance] = useState();
  useEffect(() => {
    console.log(active);
    if (account) {
      library.getBalance(account).then((balance) => {
        const bal = formatEther(balance);
        setAccBalance(bal);
      });
    }
  }, [library, account, isTableOpen]);
  async function connect() {
    try {
      await activate(injected);
      setisTableOpen(true);
    } catch (ex) {
      console.log(ex);
    } finally {
    }
  }
  async function disconnect() {
    try {
      deactivate();
      setisTableOpen(false);
    } catch (ex) {
      console.log(ex);
    }
  }
  return (
    <>
      <Modal>
        <Card>
          <div className=" w-80 h-30 flex flex-col gap-2">
            <div className="flex ">
              <h4 className=" flex-1 self-start text-left ml-3 font-bold">
                {" "}
                Wallet Details
              </h4>
              <span className=" self-end flex-none mb-5"><img src={close} alt="close" width="15px" onClick={props.close} /></span>
            </div>
            <p className="mb-4 text-left ml-3 text-red-600 font-light tracking-normal">
              {" "}
              Wallet not Connected . Please Click Connect now button
            </p>
            <div className="ml-3 flex justify-center w-96 gap-4 self-center">
              <Button click={connect}  color="bg-blue-500">
                <p className=" w-32">Connect</p>
              </Button>
              <Button click={props.close}  color="bg-red-600">
                <p className="w-24">Cancel</p>
              </Button>
            </div>
          </div>
        </Card>
      </Modal>
      {isTableOpen && active ? (
        <Modal>
          {" "}
          <AccountTable
            disconnect={disconnect}
            acc={account}
            balance={accBalance}
            chain={chainId}
          ></AccountTable>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};

export default ConnectWallet;
