import React from 'react';
import './Home.css';
import im from 'D:/papa_ki_website/my-app/src/images/Screenshot 2024-06-28 040731.png';
function Home() {
  return (
    <div className='ok'>
        <h1 className='home_h1'>ABOUT US</h1>
        <div className='abt1'>
      {/*<img src={im} width={300} height={300}/>*/}
       <p className='p1'>

        JHA Milling Solutions stands as a beacon of progress in the milling industry, delivering cutting-edge machines that redefine precision and efficiency.<br></br> Under the visionary leadership of Mr. Ashok Kumar Jha,<br></br> our company has become synonymous with excellence.<br></br>
        
      </p>
      
      </div>
      <h1 className='home_h2'>ABOUT OUR FOUDER</h1>
      <br></br>
      <div className='abt1'>
      <p className='p1'>
      Ashok Kumar Jha, born on July 7, 1964, in Bihar, spent several years as a consultant, honing his expertise.<br></br> Leveraging his experience, he eventually founded Jha Milling Solutions, a company dedicated to innovative milling solutions.<br></br> His journey from consultancy to entrepreneurship reflects his commitment to excellence and industry leadership.
      </p>
      </div>
    </div>
  );
}

export default Home;
