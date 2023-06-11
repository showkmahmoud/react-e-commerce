import "./ProductCard.css";
import { IProduct } from "../../model/product";
import Button from "../Button/Button";
import { useContext } from "react";
import { Store } from "../../shared/shared context/counterContext";

function ProductCard(props: any) {
  const { title, body, id, img, price, quantity }: IProduct =
    props.data;
  // to use the shared store
  const store = useContext(Store);
  // Add to cart function
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
    } else {
      // if else
      const data: any[] = store.cart.cartItems.map((item: IProduct) => {
        if (item.id === product.id) {
          item.quantity = item.quantity ? item.quantity : 1;
          return { ...item, quantity: item.quantity + 1 };
        }
      });
      store.setCart({
        ...store.cart,
        cartCounter: store.cart.cartCounter + 1,
        cartItems: [...data],
      });
    }
  };

  // increase Quantity
  const increaseItem = (productId: number) => {
    const data: any[] = store.cart.cartItems.map((item: IProduct) => {
      if (item.id === productId) {
        item  = { ...item, quantity: (item.quantity ? item.quantity : 1) + 1 };
      }
      return item 
    });
    store.setCart({
      ...store.cart,
      cartCounter: store.cart.cartCounter + 1,
      cartItems: [...data],
    });
  };
  // decreasing Quantity
  const  decreaseItem = (productId: number) => {
    
    const data: any[] = store.cart.cartItems.map((item: IProduct) => {
      if (item.id === productId) {
        item.quantity =  item.quantity ? item.quantity : 0;
        item  = { ...item, quantity: item.quantity > 0 ? item.quantity  - 1 : null  };
      }
      return item 
    });
    store.setCart({
      ...store.cart,
      cartCounter: store.cart.cartCounter > 0 ? store.cart.cartCounter - 1 : 0,
      cartItems: [...data],
    });
  }
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
            <div className="decrease-btn" onClick={() => decreaseItem(id)}>
              <p>-</p>
            </div>
            {/* quantity value */}
            <p className="m-0 quantity-value fs-5 fw-bold">
              {store.cart.cartItems.find((item) => item.id === id)?.quantity}
            </p>
            
            {/* increase Q btn */}
            <div className="increase-btn" onClick={() => increaseItem(id)}>
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
