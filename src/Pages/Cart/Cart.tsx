import React, { useContext } from "react";
import { Store } from "../../shared/shared context/counterContext";
import { IProduct } from "../../model/product";
import ProductCard from "../../Components/productCard/ProductCard";
import './Cart.css'
const Cart = () => {
  const store = useContext(Store)
  return <>
  <div className="container">
        <h2 className="text-center mt-2">E-Commerce</h2>
        {/* products */}
        <div className="row justify-content-between align-items-stretch">
          {store.cart.cartItems.map((item: IProduct) => (
            <div
              className="product-card  col-sm-12 col-md-6 col-lg-4"
              key={item.id}
            >
              <ProductCard data={item} />
            </div>
          ))}
        </div>
      </div>
  </>;
};

export default Cart;
