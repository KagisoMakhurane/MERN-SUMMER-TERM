
import { useState } from "react";



function Products({addtocart}) {

    const products = [
    {
        name: 'Cartoon Key Chain',
        description: 'Colorful and cute design.',
        price: 99,
        image: '/images/panda-key-chain.jpg'
    },
    {
        name: 'Name Key Chain',
        description: 'Customized with your name.',
        price: 149,
        image: '/images/car-keychain.webp'
    },
    {
        name: 'Leather Key Chain',
        description: 'Premium and classy look.',
        price: 199,
        image: '/images/leather-keychain.webp'
    },
    {
        name: 'Avengers Key Chain',
        description: 'Your super hero key chain.',
        price: 210,
        image: '/images/panda-key-chain.jpg'
    }
];
    const [searchText, setSearchText] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const filteredProducts = products.filter((product) => {
    const matchesSearchText = product.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearchText && matchesCategory;


    return matchesCategory && matchesSearchText;
  });


return (
<section className="productsPage">
    <div  className="productsBanner">
        <h1>Our Products</h1>
        <p>Explore our wide range of key chains and accessories.</p>
    </div>


    </section>
);
}


export default Products;