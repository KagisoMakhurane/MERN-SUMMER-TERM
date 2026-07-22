import { useEffect, useState } from 'react';



function Home({addtocart}) {
const [Counter, setCounter] = useState(0);
const [btnText,setBtnText] = useState("Hello");
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
    const fetchProducts = async () => {
        try{
           const response = await fetch("http://localhost:3000/api/products");
           if (!response.ok) {
            throw new Error("Failed to fetch products");
          }
          const data = await response.json();
          setProducts(data.products);
        }
        catch(error) {
            console.error("Product API error:", error);
            setError("Failed to load products try again later");
        }
        finally {
            setLoading(false);}
    };
    fetchProducts();
}, []);




return (
<div className="app">
<div className="hero">
    <div className="heroText">
        <h2>Beautiful Key Chains</h2>
        <p> Explore our premium collection of stylish and customized key chains that add a personal touch to your keys. </p>
        <button onClick={addtocart}>Shop Now</button>
    </div>
    <div className="heroImage">
   <img src="/images/keychain.webp" height="100%" width="100%"/>
    </div>
</div>
{/*Products Section*/}
    <section className="products">
        <h2>Featured Products</h2>
        {loading && (
            <p>Loading products...</p>
        )};
        {error && (
            <p className="error">{error}</p>
        )};
        {!loading && !error && products.length === 0 && (
            <p>No products available.</p>
        )};
        
        <div className="productGrid">
            
            {products.map((product,index) => (

            <div className="card">
            <div className="image-box">
           <img src={product.image}/>
            </div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button className="btn" onClick={()=>addtocart(product)}>Add to Cart</button>
            </div>

           ))};
        </div>

    </section>
    {/*About Section*/}
    <section className="about">
        <h2>About Us</h2>
        <p>At Key Chains, we are passionate about creating unique and stylish key chains that reflect your personality. Our collection features a wide range of designs, from minimalist to vibrant, ensuring there's something for everyone. We take pride in our craftsmanship and use high-quality materials to ensure durability and style. Whether you're looking for a personalized key chain or a trendy accessory, we've got you covered. Explore our collection and find the perfect key chain to express yourself!</p>
    </section>
</div>

);
}

export default Home;