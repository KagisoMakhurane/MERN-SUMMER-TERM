import {Link} from "react-router-dom";

function Cart({cartitems, increaseQuantity, decreaseQuantity,clearCart}) {

    const totalAmount = cartitems.reduce((total, item) => total + item.price * item.quantity, 0);
     const totalItems = cartitems.reduce((total,item)=>total+item.quantity,0);

    if(cartitems.length == 0) {
        return ( <section className="cartPage emptyCart">
            <h1>Cart is Empty</h1>
            <p>Looks like you haven't added anything to your cart yet.</p>

           <Link to="/" className="continueshoppingbtn">Shop Now</Link>
            </section>
        )
    }


return (
    <section className="cartPage">
        <div className="cartHeading">
             <h1>Your Shopping Cart</h1>
             <button className="clearCartBtn" onClick={clearCart}>Clear Cart</button>
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
                            <button onClick={()=>decreaseQuantity(item.id)} >
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
             
              

           
          
          
    </section>)
}

export default Cart;