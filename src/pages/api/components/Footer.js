import React from 'react'
import Head from 'next/head'
import { Modal, useModal, Button, Text } from "@nextui-org/react";

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
                    <title>Next.js + Tailwind CSS</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

                </Head>

                <footer className=" p-10 bg-gradient-to-b from-sky-800 via-blue-600 to-slate-900 bg-opacity-50  ">
                    <div >
                        <img className='logos' src="https://see.fontimg.com/api/renderfont4/7BPoE/eyJyIjoiZnMiLCJoIjo4NSwidyI6MTI1MCwiZnMiOjY4LCJmZ2MiOiIjRkRGREZEIiwiYmdjIjoiIzAwMDAwMCIsInQiOjF9/RHJpc2h0aQ/race-guard.png" alt="" />
                        <br />
                    </div>
                    <div className='footer my-5'>
                        <iframe className='map' title="map-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119107.51863375082!2d79.03248347166964!3d21.1081819672118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4be5e617378eb%3A0x682e0bc768d22adb!2sGovernment%20Engineering%20College%2CNagpur!5e0!3m2!1sen!2sin!4v1669056837541!5m2!1sen!2sin" frameborder="0" class="map rounded-lg aspect-square min-h-[20rem] lg:aspect-video lg:w-[36rem] max-w-[100vw]"></iframe>


                        <div className='footer-section'>
                            <span className="footer-title">Information</span>
                            <a href='/event' className=" btn btn-ghost">Events</a>
                            <a href='https://www.gcoen.ac.in/' className=" btn btn-ghost">Our College</a>
                            <a href='/About' className=" btn btn-ghost">About us</a>
                        </div>
                        <div className='footer-section'>
                            <span className="footer-title">Legal</span>
                            <Button className=" btn btn-ghost" onPress={handler1}>
                                <a href="/TermsCondition">
                                    Terms & Conditions</a>
                            </Button>
                            {/* <Modal
                                scroll
                                width="600px"
                                aria-labelledby="modal-title"
                                aria-describedby="modal-description"
                                open={visible1}
                                onClose={closeHandler1}
                            >
                                <Modal.Header>
                                    <Text id="modal-title" size={10}>
                                        The Terms and Conditions are as follows :
                                    </Text>
                                </Modal.Header>
                                <Modal.Body>
                                    <Text id="modal-description" className='leading-9 font-semibold	'>
                                       
                                    </Text>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button auto flat color="error" onPress={() => setVisible1(false)}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal> */}
                            <Button className=" btn btn-ghost">
                                <a href="/PrivacyPolicy"> PRIVACY POLICY </a>
                            </Button>
                            {/* <Modal
                                scroll
                                width="600px"
                                aria-labelledby="modal-title"
                                aria-describedby="modal-description"
                                open={visible2}
                                onClose={closeHandler2}
                            >
                                <Modal.Header>
                                    <Text id="modal-title" size={18}>
                                        Modal with a lot of content
                                    </Text>
                                </Modal.Header>
                                <Modal.Body>
                                    <Text id="modal-description" className='leading-9 font-semibold	'>
                                        <h1> Privacy Policy</h1> <br />
                                        <p>We take your privacy seriously. To better protect your privacy we provide this privacy policy notice explaining the way your personal information is collected and used.</p>
                                        <h1>Collection of Routine Information</h1>
                                        <p>This website tracks basic information about their users. This information includes, but is not limited to, IP addresses, browser details, timestamps and referring pages. None of this information can personally identify specific users to this website. The information is tracked for routine administration and maintenance purposes.
                                        </p>


                                        <h1>Collection of Personal Information</h1>
                                        <p>We collect personal information from you when you register with us, subscribe to our newsletter, respond to a survey or fill out a form. When registering with us, you provide us with your name, email address, password, and a phone number. You may, however, choose to provide us with other information including address, billing information, or other data that maybe linked directly or indirectly to your account.
                                        </p>
                                        <h1>Cookies</h1>
                                        <p>Where necessary, this website uses cookies to store information about a visitor's preferences and history in order to better serve the user and/or present the user with customized content.
                                        </p>
                                        <h1>Advertisement and Other Third Parties</h1>
                                        <p>Advertising partners and other third parties may use cookies, scripts and/or web beacons to track user activities on this website in order to display advertisements and other useful information. Such tracking is done directly by the third parties through their own servers and is subject to their own privacy policies. This website has no access or control over these cookies, scripts and/or web beacons that may be used by third parties. Learn how to [opt out of Google's cookie usage](http://www.google.com/policies/technologies/ads/).
                                        </p>
                                        <h1>Links to Third Party Websites</h1>
                                        <p>We have included links on this website for your use and reference. We are not responsible for the privacy policies on these websites. You should be aware that the privacy policies of these websites may differ from our own.
                                        </p>
                                        <h1>Security</h1>
                                        <p>We have put in place appropriate security measures to prevent your personal information from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal information to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal information on our instructions and they are subject to a duty of confidentiality.
                                        </p>
                                        <h1>How We Use Information</h1>
                                        <p>We use the information that we collect from you to provide our services. In addition to this we may use the information for one or more of the following purposes:
                                        </p>
                                        <ul>
                                            <li>To provide information to you that you request from us relating to our products or services.</li>
                                            <li>To provide information to you relating to other products that may be of interest to you. Such additional information will only be provided where you have consented to receive such information.</li>
                                            <li>To inform you of any changes to our website, services or goods and products.</li>

                                        </ul>
                                        <h1>Controlling Your Personal Information</h1>
                                        <p>You may choose to restrict the collection or use of your personal information in the following ways:
                                        </p>
                                        <ul>
                                            <li>Whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes</li>
                                            <li>If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at [email protected]</li>

                                        </ul>

                                        <p>We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.
                                        </p>

                                        <p>You may request details of personal information which we hold about you under the Data Protection Act 1998. A small fee will be payable. If you would like a copy of the information held on you please write to [email protected]
                                        </p>

                                        <p>If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible, at the above address. We will promptly correct any information found to be incorrect.
                                        </p>

                                        <h1>Disclaimer</h1>
                                        <p>MESA and GCOEN are not responsible for any loss or damage of any kind incurred as a result of the use of the information contained on this website or provided through this website. This includes, but is not limited to, loss or damage caused by reliance on any information obtained through this website, or that results from mistakes, omissions, interruptions, deletion of files or email, errors, defects, viruses, delays in operation or transmission, or any failure of performance, whether or not resulting from acts of God, communications failure, theft, destruction or unauthorized access to MESA and GCOEN's records, programs or services.
                                        </p>
                                        For any questions or concerns regarding the privacy policy, please send us an email to gcoenmesa@gmail.com.
                                        Drishti 2023 | MESA | GCOEN
                                    </Text>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button auto flat color="error" onPress={() => setVisible2(false)}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal> */}
                            <div className='flex flex-row gap-8 my-5'>
                                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                            </div>
                        </div>

                    </div>
                    <hr className='bg-white' />
                    <p className='foot_copy'>Copyright © 2023 - All right reserved by MESA Ltd</p>
                </footer>
                <style jsx global >
                    {`
                 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&family=Russo+One&display=swap');
                 footer{
                    font-family: 'Russo One', sans-serif;
                    font-size: 2rem;
                    height: 84vh;
                    gap: 1rem;

                 }
                 .foot_copy{
                    text-align: center;
                    font-size: 1rem;
                    font-family: 'Poppins', sans-serif;
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
                font-family: 'Russo One', sans-serif;
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
                `}</style></div>
        </>

    )
}

export default Footer