import "./ProductCard.css";
import { IProduct } from "../../model/product";
import Button from "../Button/Button";

function ProductCard(props: any) {
  const { title, body, id, userId, img, price }: IProduct = props.data;
  const onAddToCart = (id: number) => {
    console.log(id);
  };
  return (
    <>
      <div className="product">
        <div className="card-img-wrapper">
          <img src={img} className="card-img" alt="" />
        </div>
        <p className="card-name">{title}</p>
        <p className="card-details">{body}</p>
        <p>{price}$</p>
        <Button
          btnClass={"btn btn-primary"}
          onClickBtn={() => onAddToCart(id)}
        />
      </div>
    </>
  );
}

export default ProductCard;
