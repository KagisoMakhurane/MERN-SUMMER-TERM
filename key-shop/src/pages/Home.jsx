import { useState } from 'react';



function Home({addtocart}) {
const [Counter, setCounter] = useState(0);
const [btnText,setBtnText] = useState("Hello");
const products = [
    {
        id:101,
        name: 'Cartoon Key Chain',
        description: 'Colorful and cute design.',
        price: 99,
        image: '/images/panda-key-chain.jpg',
        stock: 10

    },
    {
        id:102,
        name: 'Name Key Chain',
        description: 'Customized with your name.',
        price: 149,
        image: '/images/car-keychain.webp',
        stock: 5
    },
    {
        id:103,
        name: 'Leather Key Chain',
        description: 'Premium and classy look.',
        price: 199,
        image: '/images/leather-keychain.webp',
        stock: 8
    },
    {
        id:104,
        name: 'Avengers Key Chain',
        description: 'Your super hero key chain.',
        price: 210,
        image: '/images/panda-key-chain.jpg',
        stock: 12
    }
];


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