import React from 'react'
import Head from 'next/head'
import { Modal, useModal, Button, Text } from "@nextui-org/react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'


function Footer() {
    const [visible1, setVisible1] = React.useState(false);
    const handler1 = () => setVisible1(true);

    const closeHandler1 = () => {
        setVisible1(false);
        console.log("closed");
    };
    const [visible2, setVisible2] = React.useState(false);
    const handler2 = () => setVisible2(true);

    const closeHandler2 = () => {
        setVisible2(false);
        console.log("closed");
    };
    return (
        <>
            <div>
                <Head>
                    <title>Drishti 2023 | MESA | GCOEN </title>
                    <link rel="icon" href="https://i.postimg.cc/LXVx3CzZ/white-drishti-23.png" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

                </Head>

                <footer className=" px-10 pt-10 bg-[#0f0f0f;]    ">
                    <div >
                        {/* <img className='logos' src="https://i.postimg.cc/52CHR11d/whites-logo.png" alt="" /> */}
                        <img className='logos' src="https://i.postimg.cc/BZ86NBKF/whites-logo.webp" alt="" />
                        <br />
                    </div>
                    <div className='footer my-5'>
                        <iframe className='map' title="map-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119107.51863375082!2d79.03248347166964!3d21.1081819672118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4be5e617378eb%3A0x682e0bc768d22adb!2sGovernment%20Engineering%20College%2CNagpur!5e0!3m2!1sen!2sin!4v1669056837541!5m2!1sen!2sin" frameborder="0" class="map rounded-lg aspect-square min-h-[20rem] lg:aspect-video lg:w-[36rem] max-w-[100vw]"></iframe>


                        <div className='footer-section'>
                            <span className="footer-title">Information</span>
                            <a href='/event' className=" btn btn-ghost">Events</a>
                            {/* <a href='https://www.gcoen.ac.in/' className=" btn btn-ghost">Our College</a> */}
                            <a href='/About' className=" btn btn-ghost">About us</a>
                        </div>
                        <div className='footer-section'>
                            <span className="footer-title">Legal</span>
                            <Button className=" btn btn-ghost" >
                                <a href="/TermsCondition">
                                    Terms & Conditions</a>
                            </Button>

                            <Button className=" btn btn-ghost">
                                <a href="/PrivacyPolicy"> PRIVACY POLICY </a>
                            </Button>


                            <div className='w-100 gap-5 flex row mx-4 my-4'>
                                <a href="https://www.instagram.com/mesa_gcoen/">
                                    <img className='w-100 ' style={{ width: "50px" }} src="https://i.postimg.cc/8cWTGwRn/instagram-3.webp" alt="" /></a>
                                <a href="https://www.linkedin.com/in/shiwang-pandey/">

                                    <img className='w-100 ' style={{ width: "50px" }} src="https://i.ibb.co/9pwKpng/linkedin-1.png" alt="" />
                                </a>
                                {/* <a href="https://www.mesagcoen.org/"> */}

                                {/* <img className='w-100 ' style={{ width: "50px" }} src="https://i.ibb.co/bJHqt7w/web.png" alt="" /> */}
                                {/* </a> */}
                            </div>
                            {/* </div> */}

                        </div>

                    </div>
                    <hr className='bg-white' />
                    <p className='foot_copy'>Copyright © 2023 - All right reserved by MESA Ltd</p>
                </footer >
                <style jsx global >
                    {`
                 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&family=Russo+One&display=swap');
                 footer{
                    font-family: "Montserrat", sans-serif;
                    font-size: 2rem;
                    height: 100vh;
                    gap: 1rem;

                 }
                 .foot_copy{
                    text-align: center;
                    font-size: 1rem;
                   font-family: "Montserrat", sans-serif;
                    color: #fff;
                    margin-top: 2rem;
                    margin-bottom: 3rem;
                 }
                 .map{
                    width: 530px;
                    height: 265px;
                    border-radius: 15px;
                 }
                 .footer-section a, .footer-section span{
                    font-size: 1.3rem;
                    color: #fff;
                 }
                 .footer-section Button{
                    font-size: 1.3rem;
                    color: #fff;
                background: transparent;
                margin:0;
                }
                 .logos{
                        width: 200px;
                        margin: 2rem auto;
                 }
                  
        @media (max-width: 500px){
            .map{
                width: 280px;
                height: 165px;
                border-radius: 15px;
             }
             .footer-section a, .footer-section span{
                font-size: 1rem;
                color: #fff;
             }
             footer{
                font-family: "Montserrat", sans-serif;
                font-size: 1rem;
                height: 150vh;
                display: flex;
                flex-direction: column;
                align-items: center;

             }
             .footer{
                display: flex;
                flex-direction: column;
                align-items: center;
             }
             .footer-section{
                    display: flex;  
                    flex-direction: column;
                    align-items: center;
             }
             .logos{
                width: 200px;
                margin: 0rem auto;
         }
            }
                `}</style></div >
        </>

    )
}

export default Footer