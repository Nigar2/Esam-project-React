import React from "react";
import "./login.css";
import XidmetLogo from "../images/Xidmət Logo.png";
import Esamlogo from "../images/esam 1.png";
import { Link } from "react-router-dom";

const Login =()=>{
   
    return(
        <div className="container ">
            <div className="row">
                <div className="col-lg-6 mt-3">
                    <div className="logo">
                        <img src={XidmetLogo} alt="{XidmetLogo}" />
                    </div>
                    <div className="login_text">
                        <h1>Xoş gəlmisiniz!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetuer 
                    <br />   adipiscing elit, seddiam nonummy nibh eui</p>
                    </div>
                </div>
                <div className="col-lg-6 mt-5">
                    <div className="login_cards">
                        <form action="#">
                            <input type="text" placeholder="İstifadəçi adı" />
                            <br />
                            <input type="text" placeholder="Şifrə" />
                            <div className="validparol">
                                <a href="#">Şifrəni unutdum?</a>
                            </div>
                            <div className="loginbtn">
                                <button className="btn">Daxil ol</button>
                            </div>
                           
                                <div className="signuplink">
                                    <a href="">

                                <Link to ="/signup">Qeydiyyatdan keç</Link>
                                    </a>

                                </div>
                           
                        </form>
                    </div>
                </div>
                <div className="col-lg-12">
                    <ul className="ull">
                        <li>
                            <img src={Esamlogo} alt="" />
                        </li>
                        <li>
                            <a href="">

                            Məxfilik siyasəti
                            </a>
                        </li>
                        <li><a href="">

                           İstifadə qaydaları
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Login