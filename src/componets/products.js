import React from 'react';
import "./products.css"
import pro1 from "D:/papa_ki_website/my-app/src/images/Screenshot 2024-06-28 140330.png"
import pro2 from "D:/papa_ki_website/my-app/src/images/Screenshot 2024-06-28 141311.png"
import pro3 from "D:/papa_ki_website/my-app/src/images/Screenshot 2024-06-28 141951.png"
function Products() {
  return (
    <div className='ok'>
        <h1 className='home_h2'>OUR PRODUCT LINE</h1>
        <div className='abt1'>
        
        <diV className="Products">
        <img  src={pro1} width={300} height={300}/ >
        <h3>Rotary Air Lock</h3>
        <h3>₹22,000</h3>
        </diV>
        <div className='Products'>
          <img src={pro2} width={300} height={300}/>
          <h3>Bran Finisher</h3>
          <h3>₹2,50,000</h3>
        </div>
        <div className='Products'>
          <img src={pro3} width={300} height={300}/>
          <h3>Bran Finisher</h3>
          <h3>₹3,75,000</h3>
        </div>
      </div>
    </div>
  );
}

export default Products;
