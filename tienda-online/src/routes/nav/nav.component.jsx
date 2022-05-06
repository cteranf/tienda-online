import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import  './nav.style.scss';
const Navigation = () => {
    return(

    <Fragment>
        <div className="navigation">
            <Link className="logo-container" to ="/" >
                <CrwnLogo className='logo'></CrwnLogo>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to="/comprar" >
                    Comprar
                </Link>
                <Link className="nav-link" to="/login" >
                    Login
                </Link>
            </div>   
        </div>
        <Outlet></Outlet>
    </Fragment>
    )
}

export default Navigation;