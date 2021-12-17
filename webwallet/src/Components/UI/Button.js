const Button = (props) => {
    return (
        <div className=" ">
            
        <button className={`rounded-md ${props.color} px-4 py-2 text-white` }onClick={props.click}>
            {props.children}   
        </button>
        </div>
    )
}

export default Button
