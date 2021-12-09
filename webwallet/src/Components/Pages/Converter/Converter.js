import logo from '../../../assets/logo.svg';
import {useState} from 'react';
import Input from '../../UI/Input';
const Converter = () => {
    const [nep,setNep] =useState();
    const [bnb,setBnb] =useState();

    const nepUpdateHandle = (e)=>{
        var bnbVal;
        var nepVal= e.target.value;
        bnbVal = (nepVal*3).toFixed(2);
        setNep(nepVal);
        setBnb(bnbVal);
    }
    const bnbUpdateHandle = (e)=>{
        var nepVal;
        var bnbVal= e.target.value;
        nepVal =parseFloat(bnbVal/3).toFixed(2);
        setNep(nepVal);
        setBnb(bnbVal);
    }
  return (
    <div >
        <img src={logo} alt="Logo"></img>
      <form className>
        <h2>Crypto Converter</h2>
        <Input type="text" title="NEP" id="NEP" pHolder ="0.00" val={nep} onChangeHandle={nepUpdateHandle}/>
        <Input type="text" title="BNB" id="BNB" pHolder ="0.00" val={bnb} onChangeHandle={bnbUpdateHandle}/>
        
      </form>

      <p style={{color:'blue', cursor:'pointer'}} onClick={()=>{}}> Check Wallet Detail</p>
    </div>
  );
};

export default Converter;
