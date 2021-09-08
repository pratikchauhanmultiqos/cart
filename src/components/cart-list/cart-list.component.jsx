import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeCart } from '../../actions/cart.action';

const CartList = ({ cartItems }) => {

    const dispatch = useDispatch();

    const totalCartValue = cartItems.reduce((accume, item) => accume + (item.price * item.total), 0);
    return (
        <>
            <div className="cart-item-list">
                <ul>
                    {
                        cartItems.map(({ id, title, thumb_url, total, price }, index) => {
                            return (
                                <li key={index}>
                                    <span onClick={() => dispatch(removeCart(id))} className="remove-cart">X</span>
                                    <img alt={title} src={thumb_url} />
                                    <div className="item-data">
                                        <h4>{title}</h4>
                                    </div>
                                    <strong>{price} * {total} = {total * price}</strong>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="totla-cart">
                    <span>Total Cart
                        <Link to="/update-cart">Update Cart</Link>
                    </span>
                    <div>{totalCartValue}</div>
                </div>
            </div>
        </>
    )
}

export default CartList;