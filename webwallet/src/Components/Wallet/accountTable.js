
import Button from "../UI/Button";
import Card from "../UI/Card";
import close from '../../assets/close.png';
const AccountTable = (props) => {
  return (
    <Card>
    <div className="w-96 flex gap-4 flex-col p-4">
        <div className="flex mb-2">
      <h3 className="text-xl font-bold text-left flex-1 "> Wallet Details</h3> <span className="text-right flex-none "><img src={close} alt="close" width="20px" onClick={props.disconnect} /></span>
      </div>
      <table className="self-center mx-auto justify-center text-center h-52  w-80 mb-5 " >
        <tr className=" border-b-2 mb-12 ">
          <th className="w-1/2 text-left">Key</th>
          <th className="text-right" > Value</th>
        </tr>
        <tr className=" border-b-2 mb-3 p-3">
          <td className="text-left">Account </td>
              <td className="text-right" >{props.acc.substr(0, (3 + 2))}${3 < 42 ? '...' : ''}${props.acc.substr(42 - 4, 42)}</td>
        </tr>
        <tr className=" border-b-2 mb-3 ">
          <td className="text-left">Chain ID</td>
          <td className="text-right" >{props.chain}</td>
        </tr>
        <tr className=" border-b-2 mb-3 ">
          <td className="text-left" >Balance</td>
          <td className="text-right" >{props.balance}</td>
        </tr>
      </table>
      <Button click={props.disconnect} color="bg-red-500"> Disconnect</Button>
      </div>
    </Card>
  );
};

export default AccountTable;
