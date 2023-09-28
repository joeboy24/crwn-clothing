import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import ItemDetails from "../ItemDetails/item-details.component";

const CategoryItem = (props) => {
const {title, imageUrl} = props.category;

    return (
        <Fragment>
            <Link to='/item-details'>
                <div className="category-body-container" style={{backgroundImage: `url(${imageUrl})`}}>
                    <h2>{title}</h2>
                    <p>Shop Now</p>
                </div>
            </Link>
        </Fragment>
    ) 
}


export default CategoryItem;