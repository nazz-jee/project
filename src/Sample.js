// import React from 'react'
// // import Container from 'react-bootstrap/Container';
// // import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { Link, Outlet } from "react-router-dom";
// import  { useState } from 'react';


// function Sample(props) {
//   const [currentImg, setCurrentImg] = useState(false);
//     return (
//      < 
//      onMouseEnter={() => setCurrentImg(true)} 
//      onMouseLeave={() => setCurrentImg(false)} 
//      >
//         <Col md lg xl ="4">
//         <Link to="/Page2">   <img className='' src = {props.imgUrl} alt='description img' /> </Link>
//              <h1 className='mt-3'style={{fontSize:'30px', fontWeight:''}} >{props.title}</h1>
//              <Link to="/Page2">   <button  className="bg-black-500 text-white px-4 py-2 text-lg mt-3" style={{fontSize:'20px',backgroundColor:'black', border:'2px solid white'}}>SHOP NOW</button> </Link>
//         </Col>

   
//       <Outlet />
//     </>

//     )
// }

// export default Sample
import React, { useState } from 'react';
import { Link, Outlet } from "react-router-dom";

function Sample(props) {
  const [currentImg, setCurrentImg] = useState(false);

  return (
    <div 
      onMouseEnter={() => setCurrentImg(true)} 
      onMouseLeave={() => setCurrentImg(false)}
       
    >
 
        <Link to="/Page2">
          <img 
            className={`transition-transform duration-500 ${currentImg ? 'transform scale-110' : ''}`} 
            src={props.imgUrl} 
            alt='description img' 
          />
        </Link>
        <h1 className='mt-3' style={{ fontSize: '30px', fontWeight: '' }}>
          {props.title}
        </h1>
        <Link to="/Page2">
          <button 
            className="bg-black text-white px-4 py-2 text-lg mt-3"
            style={{ fontSize: '20px', backgroundColor: 'black', border: '2px solid white' }}
          >
            SHOP NOW
          </button>
        </Link>
      

      <Outlet />
    </div>
  );
}

export default Sample;
