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
import toast, {Toaster} from 'react-hot-toast';


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
        //console.log("Products already incart:" ,productAlreadyInCart);
        return previousCartItems.map((item) => {
         return item.id == product.id ? { ...item, quantity: item.quantity + 1 } : item
      });
      }
         console.log(product);
      return [...previousCartItems, {...product,quantity: 1}]; 
    });
  
    // Quantity of one product
     const quantity = cartitems.find(item => item.id === product.id)?.quantity ?? 0;



     console.log(`Quantity of product ${product.id}:${quantity}`);

     // Total Quantity of all products
     const cartCount = cartitems.reduce((total, item) => total + item.quantity, 0);
   // product.quantity = product.quantity ? product.quantity + 1 : 1;
   // console.log(product);


    if(product.stock < quantity + 1){
      toast.error(`Sorry, ${product.name} is out of stock`,{
        id:"cart-toast"
      });
    }else{
    toast.success(`${product.name} worth ₹${product.price} added to cart`,{
      id:"cart-toast"
    });
         }
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
         <Toaster
           position="top-center"
           reverseOrder={false}
           gutter={30}
             toastOptions={{
             // Define default options
                className: '',
                duration: 5000,
                removeDelay: 1000,
               style: {
                   background: '#363636',
                   color: '#fff',
                 },

                 // Default options for specific types
                   success: {
                     duration: 3000,
                         iconTheme: {
                             primary: 'green',
                             secondary: 'black',
                      },
                       },
                        error: {
                            style: {
                              background: 'red',
                                   },
                                   },
                      }}
                     />

        <main>
          <Routes>
            <Route path="/" element={<Home addtocart={addtocart} />} />
            <Route path="/products" element={<Products addtocart={addtocart} />} />
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