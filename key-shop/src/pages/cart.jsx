import {Link} from "react-router-dom";

function Cart({cartitems}) {

    const totalAmount = cartitems.reduce((total, item) => total + item.price * item.quantity, 0);
     
    if(cartitems.length == 0) {
        return ( <section className="cartPage emptyCart">
            <h1>Cart is Empty</h1>
            <p>Looks like you haven't added anything to your cart yet.</p>

           <button><Link to="/" className="continueshoppingbtn">Shop Now</Link></button>
            </section>
        )
    }


return (
    <section>
     <h1>Under Processing</h1>
    </section>)
}

export default Cart;