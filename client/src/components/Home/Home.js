import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';


const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='Home-Page  text-white container-fluid d-flex justify-content-center align-items-center' style={{background:"#f9eced"}} >
             <div className="black-line"></div>
        <div className='row container '>
            <div className='col-lg-6 d-flex justify-content-center align-items-start flex-column text-black'  style={{height:"91.6vh"}}>
              <h1 style={{fontSize:"80px"}}>BLOOD BANK</h1>
              {/* <h3 style={{fontSize:"50px"}}>BLOOD</h3> */}
              <h3 className='mb-0'>MANAGEMENT SYSTEM </h3>
              {/* <Link to="/login" className='viewBook my-3 '>Login</Link>
              <Link to="/register" className='viewBook my-3 '>SignUp/Register Now</Link> */}
            </div>
            <div className='col-lg-6 d-flex justify-content-center align-items-end flex-column'  style={{height:"91.6vh"}}>
              <img className="img-fluid homeimg" src="https://img.freepik.com/free-photo/great-view-red-ink-drop_1112-477.jpg?w=740&t=st=1705176010~exp=1705176610~hmac=319e5fe9447f899debbf7bd892cb74b06d27c200dc6394371ab6de896a148173"></img>
            </div>
        </div>
       
  
    </div>
  
   
    <Footer/>
    </>
  )
}

export default Home;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
    // <div className="Home-Page text-white">
    //   <nav className="navbar navbar-expand-lg" style={{ background: '#023020', borderBottom: '1px solid white' }}>
    //     <div className="container-fluid d-flex justify-content-center align-items-center">
    //       <div className="black-line"></div>
    //       <div className="row container">
    //         <div className="col-lg-6 d-flex justify-content-center align-items-start flex-column" style={{ height: '91.6vh' }}>
    //           <h2 style={{ fontSize: '80px' }}>BLOOD BANK</h2>
    //           <p className="mb-0">MANAGEMENT SYSTEM</p>
    //           <Link to="/login" className="viewBook my-3">
    //             Login
    //           </Link>
    //           <Link to="/register" className="viewBook my-3">
    //             SignUp / Register Now
    //           </Link>
    //         </div>
    //         <div className="col-lg-6 d-flex justify-content-center align-items-end flex-column" style={{ height: '91.6vh' }}>
    //           <img
    //             className="img-fluid homeimg"
    //             src="https://img.freepik.com/free-photo/front-view-girl-with-book-looking-away_23-2148260147.jpg?w=360&t=st=1700685128~exp=1700685728~hmac=2971d9a12ccb66e6fe7293455f8cb8c7c36d5926de643ed7b9090ab1a2d881f2"
    //             alt="Home"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </nav>

   
    // </div>
//   );
// };

// export default Home;
