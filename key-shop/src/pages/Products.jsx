
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
    const [selectedPrice, setSelectedPrice] = useState('all');
    function clearFilters() {
        setSearchText('');
        setSelectedCategory('all');
        setSelectedPrice('all');
    }
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
       <div className="productsFilter">
        <input type = "text" placeholder="Search products..."
         value={searchText} onChange={(event) => setSearchText(event.target.value)}
         className="Product Search" />



        <select value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)}
         className="Product Category"> <option value="all">All Categories</option>
         <option value="cartoon">Cartoon</option>
         <option value="name">Name</option>
         <option value="leather">Leather</option>
         <option value="Metal">Metal</option>
        </select>

        <select value={selectedPrice} onChange={(event) => setSelectedPrice(event.target.value)}
         className="Product Price">
            <option value="all">All Prices</option>
            <option value="0-100">₹0 - ₹100</option>
            <option value="101-200">₹101 - ₹200</option>
            <option value="201-300">₹201 - ₹300</option>
            <option value="Above 300">Above ₹300</option>
        </select>
       
        <button type="button" className="clearFiltersBtn"
         onClick={clearFilters}>
            Clear Filters
         </button>
          </div>  
          <div className="productResults">
            <p>Showing <strong>{filteredProducts.length}</strong> products</p>
          </div>
    </section>
);
}


export default Products;