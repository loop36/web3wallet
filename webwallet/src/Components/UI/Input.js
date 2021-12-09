const Input = (props) =>{

    return(<div>
        <label for={props.id}>{props.title}</label>
        <input id={props.id} type={props.type} placeholder={props.pHolder} value={props.val} onChange={props.onChangeHandle}/>
    </div>)
}
export default Input;