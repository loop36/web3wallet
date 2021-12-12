import Card from "./Card"

const Modal = (props) => {
    return (
        <div className="fixed z-10 overflow-y-auto top-0 w-full text-center pt-auto bg-transparent h-screen left-0 " id="modal">
        <div className="absolute flex justify-center self-center z-30 h-screen w-screen ">
        {props.children}  
         </div>
         <div className="fixed z-0 w-screen h-screen bg-primaryColor opacity-80 ">
         
         </div>

             
        </div>
    )
}

export default Modal
