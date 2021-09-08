import CartHeader from "../header/header.component";
import { useSelector, useDispatch } from 'react-redux'
import { removeCart, removeCartDec, updateCart } from "../../actions/cart.action";
import { Link } from "react-router-dom";
const UpdateCart = () => {
    const dispatch = useDispatch();
    const { cartItems } = useSelector(state => state.cartReducer)

    const totalCost = cartItems.reduce((accum, item) => (accum + (item.total * item.price)), 0);
    return (
        <>
            <CartHeader />
            <div className="wrapper">
                {
                    cartItems.length > 0 ? <div>
                        <h1>Cart Update</h1>
                        <div className="cart-list">
                            <div className="single-cart cart-head">
                                <div className="thumb">Product Image</div>
                                <div className="name">
                                    Name
                                </div>
                                <div className="price">
                                    Price
                                </div>
                                <div className="cart-action">
                                    Quantity
                                </div>
                                <div className="single-total">
                                    Total
                                </div>
                            </div>

                            {
                                cartItems.map(({ id, title, thumb_url, price, total }, index) => {
                                    return (
                                        <div key={index} className="single-cart">
                                            <span onClick={() => dispatch(removeCart(id))} className="remove-item">x</span>
                                            <img className="thumb" src={thumb_url} alt={title} />
                                            <div className="name">
                                                {title}
                                            </div>
                                            <div className="price">
                                                {price}
                                            </div>
                                            <div className="cart-action">
                                                <span onClick={() => dispatch(removeCartDec(id))}>-</span>
                                                <input type="text" readOnly value={total} />
                                                <span onClick={() => dispatch(updateCart(id))}>+</span>
                                            </div>
                                            <div className="single-total">
                                                {price * total}
                                            </div>
                                        </div>
                                    )
                                })
                            }


                            <div className="single-cart cart-head">
                                <div className="thumb">Total</div>
                                <div className="name">

                                </div>
                                <div className="price">

                                </div>
                                <div className="cart-action">

                                </div>
                                <div className="single-total">
                                    {totalCost}
                                </div>
                            </div>

                        </div>
                    </div> : <div className="empty-text">
                        <h2>Cart is empty</h2>
                        <Link to="/cart">Go to Product List</Link>
                    </div>
                }
            </div>

        </>
    )
}

export default UpdateCart;