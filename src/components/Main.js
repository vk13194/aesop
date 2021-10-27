import React from 'react'
import './Main.css'
import { AiOutlineArrowRight } from 'react-icons/ai';

const Main = () => {
    return (
        <div className="container">
            <div className="card">
                <div className="sop_text">
                    <h2> Aesop</h2>
                </div>
                <div className="main_card">
                    <div className="left_card">
                        <p className="left_header1">For devotees of the metropolis</p>
                        <h3 className="left_header2">Introducing Parsley <br /> Seed Anti-Oxidant Intense <br /> Serum</h3>
                        <p className="left_header3">Potent fortification with a weightless texture: a <br /> barely-there film to guard against airborne <br /> particulates.</p>
                        <button className="left_button">Discover the formulation <span className="arrow"> <AiOutlineArrowRight /></span></button>
                    </div>
                    <div className="right_card">
                        <video loop={true} autoPlay={true} muted={true} style={{ height: "100vh", width: "" }}>
                            <source src="https://www.aesop.com/u1nb1km7t5q7/5gT8RXj0BNEagauRmtmDOo/892c656185230849ccaf049a6a6238e9/Aesop_PSAOIS_2021_Web_Homepage_Primary_V2_50-50_Mobile_640x400px.mp4" type="video/mp4" />
                        </video>
                        <div className="right_card_image">
                            <img src="https://images.ctfassets.net/u1nb1km7t5q7/1CT25CcvFle4zBVIBZQ7U7/06907ca7f36f8521dc6221359570968c/Aesop_PSAOIS_2021_Web_Homepage_Primary_Product_Overlay_Desktop_Tablet_640x640px.png" alt="update" style={{ height: '400px' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
