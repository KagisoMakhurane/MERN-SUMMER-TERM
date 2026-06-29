import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import './App.css';

function App() {
 // const [cartCount,setCartCount] = useState(0);

 const [cartitems, setCartItems] = useState([]);
  function addtocart(product) {
    if(!product){
      return;
    }
    setCartItems((previousCartItems) =>
    { const productAlreadyInCart = previousCartItems.find((item) => item.id == product.id);

      if (productAlreadyInCart) {
        console.log("Products already incart:" ,productAlreadyInCart);
        return previousCartItems.map((item) => {
         return item.id == product.id ? { ...item, quantity: item.quantity + 1 } : item
      });
      }
      return [...previousCartItems, {...product,quantity: 1}]; 
    });
  }
  function increaseQuantity(productId){
    setCartItems((previousCartItems) => {
       return  previousCartItems.map((item)=>{
       return  item.id == productId ? {...item,  quantity: item.quantity + 1 } : item;
      });
  });
  }
 function decreaseQuantity(productId) {
  setCartItems((previousCartItems) => {
    return previousCartItems.map((item) =>{
       return item.id == productId ? {...item, quantity: item.quantity - 1 } : item;
   }).filter((item) => item.quantity>0 )
  })
  }

  function clearCart(){
    setCartItems([]);
  }

  const cartCount = cartitems.reduce((total, item) => total + item.quantity, 0);

  return (
    <BrowserRouter>
      <div className="App">
        <Header cartCount={cartCount} />

        <main>
          <Routes>
            <Route path="/" element={<Home addtocart={addtocart} />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart cartitems={cartitems} increaseQuantity={increaseQuantity} 
            decreaseQuantity={decreaseQuantity} clearCart={clearCart} />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;