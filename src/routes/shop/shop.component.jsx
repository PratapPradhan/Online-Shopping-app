import SHOP_DATA from "../../shop-data.json";
import "./shop.styles.scss";
// import ProductCard from "../../components/product-card/product-card.component";
import SearchBox from "../../components/searchbox/searchbox.component";

const Shop = () => {
  return (
    <div>
      <SearchBox products={SHOP_DATA} />
      {/* <div className="products-container">
        {SHOP_DATA.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Shop;
