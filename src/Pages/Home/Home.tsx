import { IProduct } from "../../model/product";
import "./Home.css";
import ProductCard from "../../Components/productCard/ProductCard";
import { staticProducts } from "../../shared/Static Data/Products";
const Home = () => {
  // const [products, setProducts] = useState([]);
  // const getProductsHandler = () => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((result) => {
  //       setProducts(result.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setProducts([]);
  //     });
  // };
  const products: IProduct[] = staticProducts;
  // useEffect(() => {
  //   // getProductsHandler();
  // }, []);

  return (
    <>
      <div className="container">
        <h2 className="text-center mt-2">E-Commerce</h2>
        {/* products */}
        <div className="row justify-content-between align-items-stretch">
          {products.map((item: IProduct) => (
            <div className="product-card" key={item.id}>
              <ProductCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
