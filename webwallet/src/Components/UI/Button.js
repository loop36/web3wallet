const Button = (props) => {
    return (
        <div className=" ">
        <button className="rounded-md bg-blue-500 px-4 py-2 text-white" onClick={props.click}>
            {props.children}   
        </button>
        </div>
    )
}

export default Button
