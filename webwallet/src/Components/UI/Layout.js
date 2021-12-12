
import logo from '../../assets/logo.svg';
const Layout = (props) => {
    
    return (
        <div className="flex flex-col w-screen h-screen  bg-primaryColor ">
             <img src={logo} alt="Logo" className='flex-shrink w-60 md:w-96 self-center m-10'></img>
            {props.children}
        </div>
    )
}

export default Layout
