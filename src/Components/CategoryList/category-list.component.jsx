
import CategoryItem from '../CategoryItem/category-item.component';

const CategoryList = ({categories}) => {
 
    return (
        <div className="container categories-container">

            {categories.map((category) => (
            <div key={category.id} className="category-container">
                {/* <div key={category.id} className="category-container col-md-4"> */}
                {/* <img alt={category.title} src={category.imageUrl} style={{backgroundImage: `url(${category.imageUrl})`}}></img> */}
                {/* <img alt={category.title}></img> */}
                <CategoryItem category={category}/>
            </div>
            ))}
            
            {/* <p>List Component</p> */}
        </div>
    );

}

export default CategoryList;