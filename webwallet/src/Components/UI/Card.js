const Card = (props) => {
    return (
        <div className="bg-secondaryColor justify-center self-center p-3 text-center   shadow-2xl text-primaryColor rounded-lg  tracking-wide">
            {props.children}
        </div>
    )
}

export default Card
