import "./ProductItems.css"

function ProductItems(props) {
  return (
    <div className="productItems">
      <div>
        <img src={props.image} alt="" width={60} height={60} />
      </div>
      <div>
        <h3>{props.title}</h3>
        <p>{props.count} Products</p>
      </div>
    </div>
  );
}

export default ProductItems
