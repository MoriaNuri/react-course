import React, { useState } from "react";
import products from "../../../mock.json";
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";
import "./cart.css";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  // const handleSearch=(event)=>{
  //     event.preventDefault();
  //     console.log(event);
  //     console.log(event.target.elements['search'].value);
  //     // console.log(event.target.elements['search'].value)
  //     setSearchQuery(event.target.elements['search'].value)
  // }
  const handleClear = (event) => {
    event.preventDefault();
    setSearchQuery("");
  };
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <form>
        <label>Search</label>
        <input
          type="text"
          placeholder="Search item"
          id="search"
          onChange={(event) => setSearchQuery(event.target.value)}
          value={searchQuery}
        />
        {/* <input type="text" placeholder='name' id="fullName" name="fullName"/> */}
        <button onClick={handleClear}>Clear</button>
        {/* <button type="submit">Search</button> */}
      </form>
      <div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts?.map((product) => (
            <div key={product.id} className="item">
              <div>
              <img
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
              />
                <h3 className="title">{product.title}</h3>
                <p>{product.price} $</p>
              </div>
              <button onClick={() => dispatch(addToCart(product))}>
                Add to cart
              </button>
            </div>
          ))
        ) : (
          <h1>No products found</h1>
        )}
      </div>
    </div>
  );
};

export default Products;
