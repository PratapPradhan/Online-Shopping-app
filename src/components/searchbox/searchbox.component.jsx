import SHOP_DATA from "../../shop-data.json";
import "./searchbox.styles.scss";
import Button from "../button/button.component";
import { useContext, useState } from "react";
import { CartContext } from "../context/cart.context";
const SearchBox = ({ products }) => {
  const [wordEntered, setWordEntered] = useState("");
  const [filterData, setFilterData] = useState(SHOP_DATA);

  const { addItemToCart } = useContext(CartContext);

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = products.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilterData(SHOP_DATA);
    } else {
      setFilterData(newFilter);
    }
  };

  return (
    <div className="search">
      <input
        className="searchBar"
        type="text"
        placeholder="Search...."
        value={wordEntered}
        onChange={handleFilter}
      />
      {filterData.length !== 0 && (
        <div>
          {filterData.slice(0, 15).map((product) => {
            const addProductToCart = () => addItemToCart(product);
            const { name, price, imageUrl } = product;
            return (
              <div className="product-card-container">
                <img src={imageUrl} alt={`${name}`} />
                <div className="footer">
                  <span className="name">{name}</span>
                  <span className="price">{price}</span>
                </div>
                <Button buttonType="inverted" onClick={addProductToCart}>
                  Add to card
                </Button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default SearchBox;
