import CategoryItem from "../categoryItem/CategoryItem";
import "./Categories.css";
import {categoriesData} from "../../data/CategoryData";

function Categories() {
  return (
    <div className="categories">
        {
          categoriesData.map((categorydata) => {
            return <CategoryItem image={categorydata.image} title={categorydata.title} />
        }
        )}
    </div>
  );
}

export default Categories;
