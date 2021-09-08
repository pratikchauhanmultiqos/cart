import { Link } from "react-router-dom";

import { useSelector } from 'react-redux';
import CartList from "../cart-list/cart-list.component";
import { useState } from "react";

const CartHeader = () => {

    const { cartItems } = useSelector(state => state.cartReducer);
    // const { isLogin, loginID, users } = useSelector(state => state.userReducer);
    const totalCartItems = cartItems.length > 0 && cartItems.reduce((totalCartItems, item) => totalCartItems + item.total, 0)

    const [toggle, setToggle] = useState(false);



    return (
        <>
            <div className="header">
                <div className="header_inner">
                    <ul>
                        <li><Link to="/cart">Home</Link></li>
                        <li><Link to="/category">category</Link></li>
                    </ul>
                    <div className="cart-wrap">
                        <Link className="btn" to="/watchlist">Watch List</Link>
                        <div className="cartBudget" onClick={() => setToggle(!toggle)}>
                            {
                                totalCartItems && <span>{totalCartItems}</span>
                            }
                            <img alt="header logo" src="https://image.flaticon.com/icons/png/512/833/833314.png" />
                        </div>
                        {totalCartItems && toggle && <CartList cartItems={cartItems} />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartHeader;