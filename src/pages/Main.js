import { Outlet, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles.css";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import styles from './Main.module.css'

const Main = () => {
    useEffect(() => {
        var txt = document.querySelectorAll('h1');
        for (var i = 0; i < txt.length; i++) {
            if (txt[i].innerHTML.length > 16) {
                var txt2 = document.createElement('h2');
                txt2.style.fontSize = '1.75em';
                txt2.appendChild(document.createTextNode("Rich Dad Poor Dad"));
                txt2.style.padding = '3%';
                txt[i].parentNode.insertBefore(txt2, txt[i]);
                txt[i].parentNode.removeChild(txt[i]);
            }
        }
    }, []);
    const [points, setPoints] = useState(100);
    function redeem(data) {
        if (data <= points) {
            setPoints(points - data);
        }
        else {
            toast.error("Not enough points!")
        }
    }
    return (
        <div className={styles.body}>
            <nav className={styles.navStyle}>
                <ul className={styles.ulStyle}>
                    {/* <li style={{ paddingTop: "0.05vh", marginLeft: "1vw", paddingLeft: "1vw" }}> */}
                    <li style={{ paddingTop: 0 }}>
                        <img src={require('../imgs/logo-removebg-preview.jpg')} alt="Logo" width="55vw" height="57.5vh" />
                    </li>
                    <li>
                        <div className={styles.linkStyle}><NavLink style={{ textDecoration: "none" }} to="/">Home</NavLink></div>
                    </li>
                    <li>
                        <div className={styles.linkStyle}><NavLink style={{ textDecoration: "none" }} to="/blogs">Blogs</NavLink></div>
                    </li>
                    <li style={{ marginRight: 0 }}>
                        <div className={styles.linkStyle}><NavLink style={{ textDecoration: "none" }} to="/contact">Contact</NavLink></div>
                    </li>
                    {/* <li style={{ marginRight: 0, right: 0, paddingRight: 0, paddingTop: "0.5vh", marginLeft: 0, paddingLeft: "0vw" }}> */}
                    <li style={{ paddingTop: "1vh", paddingLeft: "1vw" }}>
                        <img style={{ paddingTop: 0 }} src={require('../imgs/user-removebg-preview.png')} alt="user" width={60} height={45} />
                    </li>
                    {/* <li style={{ marginLeft: "0", paddingTop: "0.5vh", marginRight: 0, paddingRight: 0, fontSize: "1.1em", paddingLeft: 0 }}> */}
                    <li style={{ paddingLeft: 0, paddingRight: "2vw" }}>
                        {points} points
                    </li>
                </ul >
            </nav >

            <ToastContainer />

            <div style={{ display: "grid", gridTemplate: "1fr 1fr 1fr/ 1fr 1fr 1fr", marginTop: "15vh", marginLeft: "5vw" }}>

                <div className="card">
                    <img src={require('../imgs/atomic.jpeg')} alt="Atomic" width={100} height={150} />
                    <h1>Atomic Habits</h1>
                    <p className="price">10 points</p>
                    <p>A supremely practical and useful book. James Clear distils the most fundamental information about habit formation, so you can accomplish more by focusing on less.</p>
                    <p><button onClick={() => redeem(10)}>Redeem</button></p>
                </div>
                <div className="card">
                    <img src={require('../imgs/alchemist.png')} alt="Alchemist" width={100} height={150} />
                    <h1>Alchemist</h1>
                    <p className="price">100 points</p>
                    <p>The Alchemist is a novel by Brazilian author Paulo Coelho which was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller</p>
                    <p><button onClick={() => redeem(100)}>Redeem</button></p>
                </div>
                <div className="card">
                    <img src={require('../imgs/dad.png')} alt="Denim Jeans" width={100} height={150} />
                    <h1>Rich Dad Poor Dad</h1>
                    <p className="price">50 points</p>
                    <p>A supremely practical and useful book. James Clear distils the most fundamental information about habit formation, so you can accomplish more by focusing on less.</p>
                    <p><button onClick={() => redeem(50)}>Redeem</button></p>
                </div>
                <div className="card">
                    <img src={require('../imgs/ikigai.png')} alt="Denim Jeans" width={100} height={150} />
                    <h1>Ikigai</h1>
                    <p className="price">200 points</p>
                    <p>A supremely practical and useful book. James Clear distils the most fundamental information about habit formation, so you can accomplish more by focusing on less.</p>
                    <p><button onClick={() => redeem(200)}>Redeem</button></p>
                </div>
                <div className="card">
                    <img src={require('../imgs/power.png')} alt="Denim Jeans" width={100} height={150} />
                    <h1>Power of Now</h1>
                    <p className="price">50 points</p>
                    <p>A supremely practical and useful book. James Clear distils the most fundamental information about habit formation, so you can accomplish more by focusing on less.</p>
                    <p><button onClick={() => redeem(50)}>Redeem</button></p>
                </div>
                <div className="card">
                    <img src={require('../imgs/courage.png')} alt="Denim Jeans" width={100} height={150} />
                    <h1>Courage</h1>
                    <p className="price">500 points</p>
                    <p>A supremely practical and useful book. James Clear distils the most fundamental information about habit formation, so you can accomplish more by focusing on less.</p>
                    <p><button onClick={() => redeem(500)}>Redeem</button></p>
                </div>

                {/* <div style={{ border: "1px solid black", width: "200px", height: "300px", marginLeft: "100px" }}>
                    <img src={require('../imgs/atomic.jpeg')} alt="user" width={100} height={100} />
                </div> */}
                <Outlet />
            </div>

        </div>
    )
};

export default Main;