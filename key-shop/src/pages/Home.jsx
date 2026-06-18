import { useState } from 'react';



function Home() {
const [Counter, setCounter] = useState(0);
const [btnText,setBtnText] = useState("Hello");

return (
<div className="page">
<div className="hero">
    <div className="heroText">
        <h2>Beautiful Key Chains</h2>
        <p> Explore our premium collection of stylish and customized key chains that add a personal touch to your keys. </p>
        <button>Shop Now</button>
    </div>
    <div className="heroImage">
   <img src="/images/keychain.webp" height = "99%" width = "99%" radius = "30px"/>
    </div>
</div>
{/*Products Section*/}
    <section className="products">
        <h2>Featured Products</h2>
        <div className="productGrid">
            <div className="card">
                <div classname="image-box">
                     image
                </div>
           
            <h3>Cartton key chain</h3>
            <p>Nice clean design</p>
            <p>Price: $10</p>
            <button className="btn">Add to Cart</button>
            </div>

             <div className="card">
                <div classname="image-box">
                     image
                </div>
            <h3>Green key chain</h3>
            <p>Nice clean design</p>
            <p>Price: $10</p>
            <button className="btn">Add to Cart</button>
                </div>
             
            <div className="card">
              <div classname="image-box">
                     image
                </div>
            <h3>Leatrher key chain</h3>
            <p>Nice clean design</p>
            <p>Price: $10</p>
            <button className="btn">Add to Cart</button>
            </div>
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