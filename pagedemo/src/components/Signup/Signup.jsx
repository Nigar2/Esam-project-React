import React from "react";
import "./signup.css"
import XidmetLogo from "../images/Xidmət Logo.png";
import Esamlogo from "../images/esam 1.png";


const Signup =()=>{
    return(
        <div className="container">
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
                    <div className="signup_cards">
                        <form action="#">
                            <input type="text" placeholder="Ad" />
                            <br />
                            <input type="text" placeholder="Soyad" />
                            <input type="text" placeholder="E-mail" />
                            <br />
                            <input type="text" placeholder="Şifrəni təyin et" />
                            <input type="text" placeholder="Şifrəni təkrarla" />
                            <br />
                            <input type="text" placeholder="Şifrə" />
                            
                            <div className="loginbtn">
                                <button className="btn">Qeydiyyatdan keç</button>
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

export default Signup