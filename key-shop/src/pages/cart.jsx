import {Link} from "react-router-dom";

function Cart({cartitems}) {

    const totalAmount = cartitems.reduce((total, item) => total + item.price * item.quantity, 0);
     
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
             <button className="clearCartBtn">Clear Cart</button>
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
                            <button>
                                _
                            </button>
                            <span>{item.quantity}</span>
                            <button>
                                +
                            </button>
                           </div>

                        </div>
                             
                             <div className="carrtitemRight">
                                <strong>₹{item.price*item.quantity}</strong>
                                <button className="removeBtn">
                                    Remove
                                </button>
                             </div>


                       </div>

                    )
                }

            </div>

          </div>

    </section>)
}

export default Cart;