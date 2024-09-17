import { LOGO_URL } from "../../utils/constant";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import userContext from "../../utils/userContext";
import { useSelector } from "react-redux";
const Header = () => {
  const {loggedInUser} = useContext(userContext);
  const [btnNameReact, setBtnNameReact] = useState("Login");
  // if dependency array is empty === [] => useEffect is called on initial render(just once)
  const onlineStatus = useOnlineStatus();
  // subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items)
  // if dependency array is not empty === [i.e if there is value here] => useEffect is called every time the dependency changes.
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              Online Status: {onlineStatus ? "🟢":"🔴"}
            </li>
            <li className="mr-8">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
            <li className="px-4">
            <Link to="/grocery">Grocery</Link>
            </li>
            <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
            </li>
            <button className="login" onClick={() => {
              btnNameReact === "Login" ? setBtnNameReact("Logout") :
              setBtnNameReact("Logout");
            }}>{btnNameReact}</button>
            <li className="px-4">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;