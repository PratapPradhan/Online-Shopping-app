import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as ElectroLogo } from "../../assests/Online-Store-Open-English.svg";

import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../components/context/cart.context";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import "./navigation.styles (1).scss";

const Navigation = () => {
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <ElectroLogo className="logo" />
        </Link>

        <div className="links-container">
          <div>
            <Link className="nav-link" to="/shop">
              SHOP
            </Link>
          </div>
          <div>
            <Link className="nav-link" to="/sign-in">
              SIGN IN
            </Link>
          </div>
          <div>
            <CartIcon />
          </div>
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />;
    </Fragment>
  );
};
export default Navigation;
