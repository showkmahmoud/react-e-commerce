import "./ProductCard.css";
import { IProduct } from "../../model/product";

function ProductCard(props: any) {
  const { title, body, id, userId, img, price }: IProduct = props.data;
  return (
    <>
      <div className="product">
        <img src={img} className="card-img" alt="" />
        <p className="card-name">{title}</p>
        <p className="card-details">{body}</p>
        <p>{price}$</p>
        <button className="primary-btn">Add To Cart</button>
      </div>
    </>
  );
}

export default ProductCard;
