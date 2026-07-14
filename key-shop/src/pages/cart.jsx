import {Link} from "react-router-dom";
import {useState} from "react";


function Cart({cartitems, increaseQuantity, decreaseQuantity,clearCart}) { 

    const totalAmount = cartitems.reduce((total, item) => total + item.price * item.quantity, 0);
     const totalItems = cartitems.reduce((total,item)=>total+item.quantity,0);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showItemConfirmation, setShowItemConfirmation] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    if(cartitems.length == 0) {
        return ( <section className="cartPage emptyCart">
            <h1>Cart is Empty</h1>
            <p>Looks like you haven't added anything to your cart yet.</p>

           <Link to="/" className="continueshoppingbtn">Shop Now</Link>
            </section>
        )
    }
       
   const handleClearCart = () => {
    const confirmClear = window.confirm("Are you sure you want to clear the cart?");
    if (confirmClear) {
      clearCart();
    }}

    const handleDecreaseQuantity = (item) => {
        if (item.quantity === 1) {
            setSelectedItem(item);
            setShowItemConfirmation(true);
        } else {
            decreaseQuantity(item.id);
        }
    }
        

return (
    <section className="cartPage">
        <div className="cartHeading">
             <h1>Your Shopping Cart</h1>
             <button className="clearCartBtn" onClick={() => setShowConfirmation(true)}>Clear Cart</button>
        </div>
    
          <div className="cartLayout">

            <div className="cartitems">
                
                {
                    cartitems.map((item) => 
                       <div className="cartitem">
                        <img src={item.image} alt = {item.name}/>
                        <div className = "cartitemDetails">
                            <h3>{item.name}</h3>
                            <p>₹{item.price} each</p>

                           <div className="quantityBox">
                            <button onClick={()=>handleDecreaseQuantity(item)} >
                               -
                            </button>
                            <span>{item.quantity}</span>
                            <button onClick={()=>increaseQuantity(item.id)}>
                                +
                            </button>
                           </div>

                        </div>
                             
                             <div className="cartitemRight">
                                <strong>₹{item.price*item.quantity}</strong>
                                <button className="removeBtn">
                                    Remove
                                </button>
                             </div>


                       </div>

                    )
                }

            </div>
            
            <div className="cartSummary">
            <h2>Order Summary</h2>
            
            <div className="summaryRow">
              <span>Total Items: </span>
              <strong>{cartitems.length}</strong>
            </div>
            <div className="summaryRow totalRow">
             <span>Total Amount: </span>
             <strong>₹{totalAmount}</strong>
            </div>

            <button className="checkOutBtn">Proceed To Checkout</button>
            <Link to="/" className="continueLink">Continue Shopping</Link>

            </div> 

          </div>
      {/*confirmation Modal for clearing cart*/}
          {showConfirmation && (
            <div className="modal">
                <div className="modal-content">
                    <h2>Confirm Clear Cart</h2>
                    <p>Are you sure you want to clear the cart?</p>
                    
                    <button onClick={() => {
                        clearCart();
                        setShowConfirmation(false); }}
                        >
                            Yes
                        </button>

                    <button onClick={() => setShowConfirmation(false)}>
                        No
                    </button>
                </div>
            </div>
          )
        };
      {/*confirmation Modal for clearing item*/}
            {showItemConfirmation && (
            <div className="modal">
                <div className="modal-content">
                    <h2>Confirm Clear Item</h2>
                    <p>Are you sure you want to remove <strong>{selectedItem?.name}</strong> from the cart?</p>
                    
                    <button onClick={() => {
                        decreaseQuantity(selectedItem.id);
                        setShowItemConfirmation(false); }}
                        >
                            Yes
                        </button>

                    <button onClick={() => setShowItemConfirmation(false)}>
                        No
                    </button>
                </div>
            </div>
          )
        };

              

           
          
          
    </section>)
}

export default Cart;