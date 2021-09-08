import { useSelector, useDispatch } from "react-redux";
import { removeToWatchList } from "../../actions/cart.action";
import CartHeader from "../header/header.component";

const WatchList = () => {

    const dispatch = useDispatch();
    const { watchList, productlist } = useSelector(state => state.cartReducer);
    const items = watchList.map(id => productlist.find((item) => item.id === id));

    console.log(items)
    return (
        <>

            <CartHeader />
            <div className="wrapper">
                <div>
                    <h1>Watchlist</h1>
                    <div className="cart-list">
                        <div className="single-cart cart-head">
                            <div className="thumb">Product Image</div>
                            <div className="name">
                                Name
                            </div>
                            <div className="price">
                                Price
                            </div>
                        </div>

                        {
                            items.map(({ id, title, thumb_url, price }, index) => {
                                return (
                                    <div className="single-cart" key={index} >
                                        <span className="remove-item" onClick={() => dispatch(removeToWatchList(id))}>x</span>
                                        <img className="thumb" src={thumb_url} alt={title} />
                                        <div className="name">
                                            {title}
                                        </div>
                                        <div className="price">
                                            {price}
                                        </div>
                                    </div>
                                )
                            })
                        }






                    </div>
                </div>
            </div>
        </>
    )
}

export default WatchList;