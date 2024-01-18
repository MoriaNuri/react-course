import React, {useState} from 'react';
import products from './mock.json'


const Products=()=>{
    const [searchQuery, setSearchQuery] = useState('')
    // const handleSearch=(event)=>{
    //     event.preventDefault();
    //     console.log(event);
    //     console.log(event.target.elements['search'].value);
    //     // console.log(event.target.elements['search'].value)
    //     setSearchQuery(event.target.elements['search'].value)
    // }
const handleClear=(event)=>{
    event.preventDefault();
    setSearchQuery('')
}
    const filteredProducts=products.filter((product)=>product.title.toLowerCase().includes(searchQuery.toLowerCase()))
  
    return(
        <div>
            <form >
                <label>Search</label>
                <input type="text" placeholder='Search item' id="search" onChange={(event)=>setSearchQuery(event.target.value)} value={searchQuery}   />
                {/* <input type="text" placeholder='name' id="fullName" name="fullName"/> */}
                <button onClick={handleClear}>Clear</button>
                {/* <button type="submit">Search</button> */}
            </form>
            {filteredProducts.length>0?
            filteredProducts?.map((product)=>(
          <div key={product.id}>
          <h1>{product.title}</h1>
          <h2>{product.price}</h2>
          <img src={product.image} alt={product.title} width={200} height={200}/>
          </div>
          ))
        :<h1>No products found</h1>
        }
        </div>
    )
}

export default Products;