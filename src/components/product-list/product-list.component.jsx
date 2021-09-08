import { useSelector } from 'react-redux';
import Product from '../product/product.component';


import "@fancyapps/ui/dist/fancybox.css";


const ProductList = (props) => {



    const { productlist } = useSelector(state => state.cartReducer);
    return (
        <>
            <div className="product-section">
                <div className="wrapper">
                    <div>
                        <div className="product-list">
                            {
                                productlist.map((item, index) => {
                                    return (
                                        <Product key={index} {...item} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}

export default ProductList;