import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartHeader from "../header/header.component";
import Product from "../product/product.component";

const Category = () => {
    const { productlist } = useSelector(state => state.cartReducer);
    const [state, setstate] = useState({
        category: "category-1",
        list: []
    });

    let uniqueCategory = [];
    productlist.map(item => {
        item.category.map(cat => cat).forEach((cat) => {
            if (!uniqueCategory.includes(cat)) {
                uniqueCategory.push(cat)
            }
        });
    });

    const getCategoryWiseList = (category) => {

        const List = productlist.filter((item) => {
            return item.category.find((cat) => cat === state.category);
        });
        setstate({
            category: category,
            list: [...List]
        })
    }


    useEffect(() => {
        getCategoryWiseList(state.category)
    }, [])



    return (
        <>
            <CartHeader />
            <div className="wrapper">
                <div className="filter-list">
                    <select onChange={(e) => getCategoryWiseList(e.target.value)} name="category-filter" defaultValue={state.category}>
                        {
                            uniqueCategory.map((item, index) => {
                                return (
                                    <option value={item} key={index}>{item.replace('-', ' ')}</option>
                                )
                            })
                        }
                    </select>
                </div>

                <div>
                    <div className="product-list">
                        {
                            state.list.map((item, index) => (
                                <Product key={index} {...item} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category;