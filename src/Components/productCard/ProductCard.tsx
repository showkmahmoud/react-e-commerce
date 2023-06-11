import "./ProductCard.css";
import { IProduct } from "../../model/product";
import Button from "../Button/Button";
import { useContext } from "react";
import { Store } from "../../shared/shared context/counterContext";

function ProductCard(props: any) {
  const { title, body, id, userId, img, price }: IProduct = props.data;
  // to use the shared store
  const store = useContext(Store);
  const onAddToCart = (product: IProduct) => {
    // to add initial value to the product quantity
    product.quantity = product.quantity ? product.quantity : 1;
    const itemIndex: number = store.cart.cartItems.findIndex(
      (item: IProduct) => item.id === id
    );
    // if the items not exist before
    if (itemIndex === -1) {
      store.setCart({
        ...store.cart,
        cartCounter: store.cart.cartCounter + 1,
        cartItems: [...store.cart.cartItems, { ...product, quantity: 1 }],
      });
      console.log(store.cart);
    } else {
      // if else
      store.setCart({
        ...store.cart,
        cartCounter: store.cart.cartCounter + 1,
        cartItems: [
          ...store.cart.cartItems,
          { ...product, quantity: product.quantity + 1 },
        ],
      });
    }
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
          onClickBtn={() => onAddToCart(props.data)}
        />
      </div>
    </>
  );
}

export default ProductCard;
