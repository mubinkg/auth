'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../public/logo.png'
import Menu from '../icons/Menu'

const VerticalNav = () => {
    const [visible, setVisible] = useState(false)

    return (
        <div className="mobile-nav">
            <div
                style={{
                    display: 'flex',
                    justifyContent: "space-between",
                    backgroundColor: "rgba(255, 255, 255, 0.9)", // Add a semi-transparent white background
                    padding: "10px 30px", // Add 20px of padding to the top and bottom of the header
                    zIndex: "9999", // Ensure the header stays on top of other content
                    textAlign: "center",
                    color: "#080022", // Menu text color
                    fontFamily: "Roboto, sans-serif", // Font family set to Roboto
                    fontWeight: "700", // Font weight set to 700 (bold)
                    fontSize: "15px",
                    alignItems: "center",
                    alignContent: "center"
                }}
            >
                <Image src={logo} width={40} height={40} alt="logo" />
                <Menu onClick={() => setVisible((pre) => !pre)} isVisible={visible} />
                <div
                    style={{
                        position: "fixed",
                        top: 60,
                        left: 0,
                        backgroundColor: "#fff",
                        width: "80%",
                        height: "100vh",
                        zIndex: 1000,
                        marginLeft: `${visible ? '0px' : "-350px"}`,
                        transition: "all .5s ease-out"
                    }}
                >
                    <div
                        style={{
                            display:'flex',
                            flexDirection:"column",
                            gap:"5",
                            justifyContent:"start",
                            alignContent:"start",
                            alignItems:"start",
                            marginTop:"20px"
                        }}
                    >
                        <a href="#" style={{padding:"10px 20px", fontSize:"25px", display:"block"}}>Home</a>
                        <a href="#" style={{padding:"10px 20px", fontSize:"25px" ,display:"block"}}>Buy NFT</a>
                        <a href="#" style={{padding:"10px 20px", fontSize:"25px",display:"block"}}>Stake</a>
                        <a href="#" style={{padding:"10px 20px", fontSize:"25px",display:"block"}}>Back to Wushi Land</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerticalNav
