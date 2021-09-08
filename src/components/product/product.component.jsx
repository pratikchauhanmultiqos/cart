import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { addCart, addToWatchList, removeToWatchList } from '../../actions/cart.action';


import { faHeart as faFillHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import Fancybox from '../fancybox';

const Product = (props) => {
    const dispatch = useDispatch();
    const { watchList } = useSelector(state => state.cartReducer);
    const { brand, category, price, thumb_url, title, id } = props;
    const [modelOpen, setModelOpen] = useState(false)

    const openHandle = (val) => {
        console.log(val)
        setTimeout(() => {
            setModelOpen(false)
        }, 2000)
    }
    useEffect(() => {

    }, []);

    return (
        <>
            <div className="product-box">
                <Fancybox openHandle={(val) => openHandle(val)}>
                    <div data-fancybox data-src={`#popup-${id}`} onClick={() => setModelOpen(true)} className=""> View More </div>
                </Fancybox>

                {
                    modelOpen ? <ProductPopup data={props} /> : ""
                }



                <div className="watch-btn">
                    {
                        watchList.find((item) => item === id) ? <FontAwesomeIcon className="fill" onClick={() => dispatch(removeToWatchList(id))} icon={faFillHeart} /> : <FontAwesomeIcon onClick={() => dispatch(addToWatchList(id))} icon={faHeart} />
                    }
                </div>
                <img alt={title} src={thumb_url} />
                <h4>
                    <Link to={`/product/${id}`}>{title}</Link>
                </h4>
                <span>{price}</span>
                <h5>Brand: {brand}</h5>
                <div className="category">
                    {

                        category.map((item, index) => (
                            <span key={index}> {index !== 0 && "|"} {item} </span>
                        ))
                    }
                </div>
                <div className="action-btns">
                    <button onClick={() => dispatch(addCart(id))}>Add to Cart</button>

                </div>
            </div>
        </>
    )
}


const ProductPopup = (props) => {
    const { brand, price, thumb_url, title, id } = props.data;
    return (
        <>
            <div className="product-popup" id={`popup-${id}`}>
                <div className="inner">
                    <img src={thumb_url} alt={title} />
                    <h4>{title}</h4>
                    <span>{price}</span>
                    <div className="brand">{brand}</div>
                </div>
            </div>
        </>
    )
}

export default Product;