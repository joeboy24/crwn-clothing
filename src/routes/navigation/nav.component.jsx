import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as crwnlogo } from "../../assets/logo.svg";
// import logo from '../../assets/logo.svg';
import './navigation.styles.scss';
import crwnlogo2 from '../../assets/crown.svg';
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../Components/CartIcon/cart-icon.component";
import CartDropdown from "../../Components/CartDropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

const Nav = () => {
    const { currentUser } = useContext(UserContext);
    // console.log(currentUser);
    const { isCartOpen } = useContext(CartContext)

    const signOutHandler = async () => {
        await signOutUser();
        // setCurrentUser(null);
        alert('Sign Out Successful..!');
    }

    return ( 
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    {/* <crwnlogo2  className="logo" /> */}
                    <img className="logo" src={crwnlogo2} alt="crwnlogo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>Shop</Link>
                    { currentUser ? (
                        <span className="nav-link" onClick={signOutHandler}>Sign Out</span>
                    ) : (
                        <Link className="nav-link" to='/sign-in'>Sign In</Link>
                    )}
                    <Link className="nav-link" to='/item-details'>Details</Link>
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
     );
  }

export default Nav;