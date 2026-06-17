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
</div>
);
}


export default Home;