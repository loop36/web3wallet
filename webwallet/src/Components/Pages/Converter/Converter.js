import { useState } from "react";
import Input from "../../UI/Input";
import ConnectWallet from "../../Wallet/ConnectWallet";
import Card from "../../UI/Card";
import Modal from "../../UI/Modal";

const Converter = () => {
  const [nep, setNep] = useState();
  const [bnb, setBnb] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const nepUpdateHandle = (e) => {
    var bnbVal;
    var nepVal = e.target.value;
    bnbVal = (nepVal * 3).toFixed(2);
    setNep(nepVal);
    setBnb(bnbVal);
  };
  const bnbUpdateHandle = (e) => {
    var nepVal;
    var bnbVal = e.target.value;
    nepVal = parseFloat(bnbVal / 3).toFixed(2);
    setNep(nepVal);
    setBnb(bnbVal);
  };
  const closeHandle =()=>{
    setIsOpen(false)
  }
  return (
    // <div className="py-10 bg-primaryColor w-1/2 h-2/3 flex text-center flex-col">
    <>
      <Card>
        
      <div className=" w-60 md:w-96 mx-4 h-80 text-center">
        <h2 className=" font-semibold text-2xl ">Crypto Converter</h2>
        <Input
          type="text"
          title="NEP"
          id="NEP"
          pHolder="0.00"
          val={nep}
          onChangeHandle={nepUpdateHandle}
        />
        <Input
          type="text"
          title="BNB"
          id="BNB"
          pHolder="0.00"
          val={bnb}
          onChangeHandle={bnbUpdateHandle}
        />

        <p style={{ color: "blue", cursor: "pointer" }} onClick={( ) => {setIsOpen(true)}}>
          {" "}
          Check Wallet Detail
        </p>

        {/* <></ConnectWallet> */}
        
    </div>
      </Card>
      {isOpen ? 
      <ConnectWallet close={closeHandle}/> : ""}
    </>
  );
};

export default Converter;
