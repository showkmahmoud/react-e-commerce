import "./ProductCard.css";
import { IProduct } from "../../model/product";
import Button from "../Button/Button";
import { useContext, useEffect } from "react";
import { Store } from "../../shared/shared context/counterContext";

function ProductCard(props: any) {
  const { title, body, id, userId, img, price, quantity }: IProduct =
    props.data;
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
  useEffect(() => {
    console.log(store.cart.cartItems);
  }, [store.cart.cartItems]);

  return (
    <>
      <div className="product">
        <div className="card-img-wrapper">
          <img src={img} className="card-img" alt="" />
        </div>
        <p className="card-name">{title}</p>
        <p className="card-details text-secondary">{body}</p>
        <div className="d-flex justify-content-between mb-3 px-1">
          <p className="text-secondary fw-bold">Price: </p>
          <p className="text-secondary fw-bold">{price}$</p>
        </div>
        {/* if the quantity exist or not */}
        {quantity ? (
          <div className=" quantity-box d-flex justify-content-between align-items-center">
            {/* decrease Q btn */}
            <div className="decrease-btn">
              <p>-</p>
            </div>
            {/* quantity value */}
            <p className="m-0 quantity-value fs-5 fw-bold">{quantity}</p>
            {/* increase Q btn */}
            <div className="increase-btn">
              <p>+</p>
            </div>
          </div>
        ) : (
          <Button
            btnClass={"btn btn-primary w-75 mt-3"}
            onClickBtn={() => onAddToCart(props.data)}
          />
        )}
      </div>
    </>
  );
}

export default ProductCard;
