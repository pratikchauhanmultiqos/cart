import { useParams } from "react-router";
import CartHeader from "../header/header.component";
import Product from "../product/product.component";
import { useSelector } from 'react-redux'

const SingleProduct = (props) => {
    const { id } = useParams();

    const { productlist } = useSelector(state => state.cartReducer);
    const product = productlist.find((item) => item.id === parseInt(id))


    console.log(id, productlist, product)
    return (
        <>
            <CartHeader />
            <div className="single-product-section">
                <div className="wrapper">
                    <Product {...product} />
                </div>
            </div>
        </>
    )
}

export default SingleProduct;