import "./Products.css"
import ProductItems from "../productItems/ProductItems";
import { productsData } from "../../data/ProductsData";


function Products() {
  return (
    <div className="products">

      <h1>CATEGORIES</h1>

      <div className="product-container">
        {
        productsData.map((productdata) => {
          return (
            <ProductItems
              image={productdata.image}
              title={productdata.title}
              count={productdata.count}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products
