import React from "react";
import "../CompCSS/LoginPopup.css";
import popupTop from "../images/loginPopupTop.svg";
import popupBottom from "../images/LoginPopupBottom.svg";
import GoogleLogo from "../images/GoogleLogo.svg";
import { usePreviousProps } from "@mui/utils";
import CrossIcon from "../images/close.png";

function LoginPopup(props){
    return(
        <div className="LoginPopupMain">
            <div className="PopupBackdrop" onClick={() => { props.toggleLogin() }}></div>
            <div className={props.signup ? "PopupMain long" : "PopupMain" }>
                <img src={popupTop} />
                <img onClick={() => {props.toggleLogin() }} className="CrossButton" src={CrossIcon} />
                {props.login && <div className="PopupContent">
                    <h1>Welcome back!</h1>
                    <div className="PopupInputs">
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <span className="termsspan"><a href="#"> Forgot Password ? </a></span>
                        <button className="LoginButton"  style={{'marginTop':'40px'}}>Login</button>
                        <span>Or</span>
                        <button className="SignUpButton"> <div> <img className="LogoImage" src={GoogleLogo} /> <span>Continue With Google </span> </div> </button>
                    </div>  
                </div>}
                {props.signup && <div className="PopupContent">
                    <h1 style={{'paddingTop':'8vh'}}>Create Account</h1>
                    <div className="PopupInputs">
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Confirm Password" />
                        <span className="termsspan" style={{'justifyContent':'center', 'margin':'16px 0'}}>By registering, you agree to our &nbsp; <a href="#" style={{'textDecoration':'underline'}}> Terms of Use.</a></span>
                        <button className="LoginButton" style={{'marginTop':'24px'}}>Sign Up</button>
                        <span>Or</span>
                        <button className="SignUpButton"> <div> <img className="LogoImage" src={GoogleLogo} /> <span>Continue With Google </span> </div> </button>
                    </div>  
                </div>}
                <img src={popupBottom} />
            </div>
        </div>
    );
}

export default LoginPopup;