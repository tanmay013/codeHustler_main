// import React, { useState } from "react";
// import "../CompCSS/Login.css";
// import logimage from '../images/log.svg';
// import regimage from '../images/register.svg';
// import googleImage from '../images/google.svg';

// function Login(props){

//     var [loginToggle, setLoginToggle] = useState(props.showLogin);

//     const handleLoginClick = () => {
//         setLoginToggle(!loginToggle);
//     }

//     return(
//         <div className={ loginToggle ? "Logincontainer" : "Logincontainer sign-up-mode" }>
//             <div className="LoginBackButton">
//                 <a href="/"><li className="prevBtn"><span></span></li></a>
//             </div>
//             <div className="forms-container">
//                 <div className="signin-signup">
//                     <form action="#" className="sign-in-form">
//                         <h2 className="Logintitle">Log in</h2>
//                         <div className="input-field">
//                             <i className="fas fa-user"></i>
//                             <input type="text" placeholder="Username" />
//                         </div>
//                             <div className="input-field">
//                             <i className="fas fa-lock"></i>
//                             <input type="password" placeholder="Password" />
//                         </div>
//                         <input type="submit" value="Login" className="btn solid" />
//                         <p className="social-text">Or Sign in with Google</p>
//                         <div className="social-media">
//                             <a href="#" className="social-icon">
//                                 <img src={googleImage}></img>
//                             </a>
//                         </div>
//                     </form>
//                     <form action="#" className="sign-up-form">
//                         <h2 className="Logintitle">Sign up</h2>
//                         <div className="input-field">
//                             <i className="fas fa-user"></i>
//                             <input type="text" placeholder="Username" />
//                         </div>
//                         <div className="input-field">
//                             <i className="fas fa-envelope"></i>
//                             <input type="email" placeholder="Email" />
//                         </div>
//                         <div className="input-field">
//                             <i className="fas fa-lock"></i>
//                             <input type="password" placeholder="Password" />
//                         </div>
//                         <input type="submit" className="btn" value="Sign up" />
//                         <p className="social-text">Or Sign up with Google</p>
//                         <div className="social-media">
//                             <a href="#" className="social-icon">
//                                 <img src={googleImage}></img>
//                             </a>
//                         </div>
//                     </form>
//                 </div>
//         </div>

//         <div className="panels-container">
//             <div className="panel left-panel">
//                 <div className="content">
//                     <h3>New here ?</h3>
//                     <p>
//                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
//                     ex ratione. Aliquid!
//                     </p>
//                     <button className="btn transparent" id="sign-up-btn" onClick={handleLoginClick}>
//                     Sign up
//                     </button>
//                 </div>
//                 <img src={logimage} className="image" alt="" />
//             </div>
//             <div className="panel right-panel">
//                 <div className="content">
//                     <h3>One of us ?</h3>
//                     <p>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
//                     laboriosam ad deleniti.
//                     </p>
//                     <button className="btn transparent" id="sign-in-btn"  onClick={handleLoginClick}>
//                     Log in
//                     </button>
//                 </div>
//                 <img src={regimage} className="image" alt="" />
//             </div>
//         </div>
//     </div>
//     );
// }

// export default Login;