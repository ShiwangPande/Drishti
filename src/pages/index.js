import Head from 'next/head'
import React from "react";
import Img from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Script from 'next/script'
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import Link from "next/link";
import { Card, Col, Text } from "@nextui-org/react";
import { Modal, useModal, Button, Image } from "@nextui-org/react";
import { Grid } from "@nextui-org/react";
import Footer from './api/components/Footer'

const inter = Inter({ subsets: ['latin'] });


export default function Home() {
  const root = useRef();


  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      gsap.to(".box", { rotation: 0, y: 250, duration: 2 });
    }, root);

    return () => ctx.revert();
  }, []);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      gsap.to(".box2", { rotation: 360, x: -230, duration: 2 });
    }, root);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      gsap.to(".glow", { rotation: 0, y: 60, duration: 5 });
    }, root);

    return () => ctx.revert();
  }, []);


  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
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
  const [visible3, setVisible3] = React.useState(false);
  const handler3 = () => setVisible3(true);

  const closeHandler3 = () => {
    setVisible3(false);
    console.log("closed");
  };
  const [visible4, setVisible4] = React.useState(false);
  const handler4 = () => setVisible4(true);

  const closeHandler4 = () => {
    setVisible(false);
    console.log("closed");
  };
  const [visible5, setVisible5] = React.useState(false);
  const handler5 = () => setVisible5(true);

  const closeHandler5 = () => {
    setVisible(false);
    console.log("closed");
  };





  return (
    <>
      {/* 
    } */}
      <div className='body1'>
        <Head>
          <title>Drishti 2k23</title>
          <link rel="icon" href="https://i.ibb.co/JyhW9p8/Untitled-design-9.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

        </Head>

        <nav class="navbar">
          <div class="navbar-container container">
            <input type="checkbox" name="" id="" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>
            <ul class="menu-items">
              <li><a className='btn btn-ghost' href="/">Home</a>        </li>
              <li><a className='btn btn-ghost' href="/event">Event</a>  </li>
              {/* <li><a className='btn btn-ghost' href="#">Gallery</a>     </li> */}
              <li><a className='btn btn-ghost' href="/Team">Team</a>    </li>
              <li><a className='btn btn-ghost' href="/Contactus">Contact Us</a>  </li>
            </ul>
            <h1 class="logo"> <img src="https://see.fontimg.com/api/renderfont4/7BPoE/eyJyIjoiZnMiLCJoIjo4NSwidyI6MTI1MCwiZnMiOjY4LCJmZ2MiOiIjRkRGREZEIiwiYmdjIjoiIzAwMDAwMCIsInQiOjF9/RHJpc2h0aQ/race-guard.png" alt="" /></h1>
          </div>
        </nav>
        {/* background: ur(""); */}
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
              {/* <div className='main_bg h-screen w-screen'> */}
              <div className="page h-screen items-center main_image" ref={root}>
                <div class="wrapper ">

                  <div class="glow " data-text="Glow">Drishti</div>
                  <div class="glow-shadow" aria-hidden="true">Drishti</div>
                  <div className='flex items-center'>
                    <div className="box  lg:invisible">
                      <img src="https://i.ibb.co/Lv8S3qy/imgbin-robot-gear-mechanical-engineering-mechanism-png.png" alt="" />
                    </div>
                  </div>

                </div>
                {/* <a href="https://ibb.co/6gLP95s"><img src="https://i.ibb.co/Hn3zwQg/asdfhj.png" alt="asdfhj" border="0"></a> */}
              </div>
              <div className="my-20" id='about'>
                <h1 className="text-6xl font-bold mb-5 text-white"> <img className='events' src="https://see.fontimg.com/api/renderfont4/BWPLV/eyJyIjoiZnMiLCJoIjo4NSwidyI6MTI1MCwiZnMiOjY4LCJmZ2MiOiIjRkRGREZEIiwiYmdjIjoiIzAwMDAwMCIsInQiOjF9/QWJvdXQ/race-sport.png" alt="" /> </h1>
                <div className="max-w-md w-full lg:max-w-full lg:flex border-0  aboutt ">
                  <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden about_img" title="Woman holding a mug">
                  </div>
                  <div className="  border-0 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal  about__drishti">
                    <div className="mb-8">

                      <p className="text-gray-700 text-base ">Drishti is a mechanical fest organized by Government College of Engineering Nagpur, which was first held in 2020 in online mode due to the COVID-19 pandemic. However, the fest was not organized in 2021 and 2022.

                        Now, in 2023, Drishti is set to make a comeback in offline mode at the Government College of Engineering Nagpur. The fest promises to be a platform for mechanical enthusiasts to showcase their skills and knowledge through various events and competitions. It will provide an opportunity for participants to interact with industry experts and gain valuable insights into the field of mechanical engineering.</p>

                    </div>
                  </div>
                </div>
              </div>
              <div className="" id='event'>
                <h1 className="text-6xl font-bold mb-10 text-white"> <img className='events' src="https://see.fontimg.com/api/renderfont4/BWPLV/eyJyIjoiZnMiLCJoIjo4NSwidyI6MTI1MCwiZnMiOjY4LCJmZ2MiOiIjRkRGREZEIiwiYmdjIjoiIzAwMDAwMCIsInQiOjF9/RXZlbnRz/race-sport.png" alt="" />  </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 aboutt">
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="bg-cover h-56 p-4 " style={{ backgroundImage: "url('https://i.pinimg.com/564x/09/1f/40/091f403b6ac07c5fc31eeb6fd2a22150.jpg')" }}></div>
                    <div className="p-4 card_content">
                      <h1 className="text-xl font-bold text-gray-700">Incadibles</h1>
                      <p className="mt-2 text-gray-600 my-2"></p>
                      <Button auto shadow onPress={handler} class="bg-blue-500 m-auto hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Explore
                      </Button>
                      <div>
                        <Modal
                          closeButton
                          // scroll
                          blur
                          width="800px"
                          aria-labelledby="modal-title"
                          aria-describedby="modal-description"
                          open={visible}
                          onClose={closeHandler}
                        >
                          <div className='event_modal'>
                            {/* <Image
                              showSkeleton
                              src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                              width={1000}
                              height={490}


                            /> */}
                            <div>
                              <Modal.Header>
                                <Text id="modal-title" className='font-black' size={18}>
                                  Incadibles
                                </Text>
                              </Modal.Header>
                              <Modal.Body>
                                <Text id="modal-description" >
                                  <h1 className='font-bold'>Date: 3 Nov 2023</h1> <br />

                                  <p className='font-semibold'>Step into a world of extraordinary powers, family bonds, and thrilling adventures as we bring you "The Incredibles Event" – an unforgettable celebration of the beloved Pixar superhero family!.</p>

                                </Text>
                              </Modal.Body>
                              <Modal.Footer className='mt-10 mr-5'>
                                <Button auto flat >
                                  learn more
                                </Button>
                                <Link href=''>
                                  <Button auto >
                                    Register  [&#8377;60/-]
                                  </Button></Link>

                              </Modal.Footer>
                            </div>
                          </div>
                        </Modal>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="bg-cover h-56 p-4" style={{ backgroundImage: "url('https://i.pinimg.com/564x/09/1f/40/091f403b6ac07c5fc31eeb6fd2a22150.jpg')" }}></div>
                    <div className="p-4 card_content">
                      <h1 className="text-xl font-bold text-gray-700">Virtual Placements </h1>
                      <p className="mt-2 text-gray-600 my-2">"  "</p>
                      <Button auto shadow onPress={handler1} class="bg-blue-500 m-auto hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Explore
                      </Button>
                      <div>
                        <Modal
                          closeButton
                          // scroll
                          blur
                          width="800px"
                          aria-labelledby="modal-title"
                          aria-describedby="modal-description"
                          open={visible1}
                          onClose={closeHandler1}
                        >
                          <div className='event_modal'>
                            {/* <Image
                              showSkeleton
                              src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                              width={1000}
                              height={490}


                            /> */}
                            <div>
                              <Modal.Header>
                                <Text id="modal-title" className='font-black' size={18}>
                                  Virtual Placements
                                </Text>
                              </Modal.Header>
                              <Modal.Body>
                                <Text id="modal-description" >
                                  <h1 className='font-bold'>Date: 3ᵗʰ Nov 2023</h1> <br />

                                  <p className='font-semibold'>Are you ready to embark on a transformative journey that bridges the gap between education and real-world experience? Welcome to the Virtual Placements Showcase, an innovative event designed to connect students, educators, and employers in a dynamic online environment.</p>

                                </Text>
                              </Modal.Body>
                              <Modal.Footer className='mt-10 mr-5'>
                                <Button auto flat >
                                  learn more
                                </Button>
                                <Link href=''>
                                  <Button auto >
                                    Register [&#8377;60]</Button>
                                </Link>

                              </Modal.Footer>
                            </div>
                          </div>
                        </Modal>

                      </div>

                    </div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="bg-cover h-56 p-4" style={{ backgroundImage: "url('https://i.pinimg.com/564x/09/1f/40/091f403b6ac07c5fc31eeb6fd2a22150.jpg')" }}></div>
                    <div className="p-4 card_content">
                      <h1 className="text-xl font-bold text-gray-700">Ai workshop</h1>
                      <p className="mt-2 text-gray-600 my-2"></p>
                      <Button auto shadow onPress={handler2} class="bg-blue-500 m-auto hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Explore
                      </Button>



                      <div>
                        <Modal
                          closeButton
                          // scroll
                          blur
                          width="800px"
                          aria-labelledby="modal-title"
                          aria-describedby="modal-description"
                          open={visible2}
                          onClose={closeHandler2}
                        >
                          <div className='event_modal'>
                            {/* <Image
                              showSkeleton
                              src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                              width={1000}
                              height={490}


                            /> */}
                            <div>
                              <Modal.Header>
                                <Text id="modal-title" className='font-black' size={18}>
                                  Ai workshop
                                </Text>
                              </Modal.Header>
                              <Modal.Body>
                                <Text id="modal-description" >
                                  <h1 className='font-bold'>Date: 3rd Nov 2023</h1> <br />

                                  <p className='font-semibold'>Join us for a transformative experience at our AI Workshop event, where you'll delve into the fascinating world of Artificial Intelligence (AI). Whether you're a beginner or an AI enthusiast looking to expand your knowledge, this workshop is designed to provide you with practical insights, hands-on experience, and a deeper understanding of AI's limitless possibilities.</p>

                                </Text>
                              </Modal.Body>
                              <Modal.Footer className='mt-10 mr-5'>
                                <Button auto flat>
                                  learn more
                                </Button>
                                <Link href=''>
                                  <Button auto >
                                    Register [&#8377;30](solo)
                                  </Button></Link>


                              </Modal.Footer>
                            </div>
                          </div>
                        </Modal>

                      </div>

                    </div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="bg-cover h-56 p-4" style={{ backgroundImage: "url('https://i.pinimg.com/564x/09/1f/40/091f403b6ac07c5fc31eeb6fd2a22150.jpg')" }}></div>
                    <div className="p-4 card_content">
                      <h1 className="text-xl font-bold text-gray-700">Robocon Competition</h1>
                      <p className="mt-2 text-gray-600 my-2"></p>
                      <Button auto shadow onPress={handler3} class="bg-blue-500 m-auto hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Explore
                      </Button>



                      <div>
                        <Modal
                          closeButton
                          // scroll
                          blur
                          width="800px"
                          aria-labelledby="modal-title"
                          aria-describedby="modal-description"
                          open={visible3}
                          onClose={closeHandler3}
                        >
                          <div className='event_modal'>
                            {/* <Image
                              showSkeleton
                              src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                              width={1000}
                              height={490}


                            /> */}
                            <div>
                              <Modal.Header>
                                <Text id="modal-title" className='font-black' size={18}>
                                  Robocon Competition
                                </Text>
                              </Modal.Header>
                              <Modal.Body>
                                <Text id="modal-description" >
                                  <h1 className='font-bold'>Date: 3rd Nov 2023</h1> <br />

                                  <p className='font-semibold'>"The Robocon Competition is a thrilling and highly anticipated event that showcases the cutting-edge technology, engineering prowess, and creative innovation of teams from around the world. This annual robotics competition brings together passionate robotics enthusiasts, engineers, and students who design and build robots to compete in a challenging and exciting series of games."</p>

                                </Text>
                              </Modal.Body>
                              <Modal.Footer className='mt-10 mr-5'>
                                <Button auto flat >
                                  learn more
                                </Button>
                                <Link href='https://rzp.io/l/7ocYriQzlv'>
                                  <Button auto >
                                    Register [&#8377;70]
                                  </Button></Link>

                              </Modal.Footer>
                            </div>
                          </div>
                        </Modal>

                      </div>

                    </div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="bg-cover h-56 p-4" style={{ backgroundImage: "url('https://i.pinimg.com/564x/09/1f/40/091f403b6ac07c5fc31eeb6fd2a22150.jpg')" }}></div>
                    <div className="p-4 card_content">
                      <h1 className="text-xl font-bold text-gray-700">Chess</h1>
                      <p className="mt-2 text-gray-600 my-2"></p>
                      <Button auto shadow onPress={handler4} class="bg-blue-500 m-auto hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Explore
                      </Button>



                      <div>
                        <Modal
                          closeButton
                          // scroll
                          blur
                          width="800px"
                          aria-labelledby="modal-title"
                          aria-describedby="modal-description"
                          open={visible4}
                          onClose={closeHandler4}

                        >
                          <div className='event_modal'>
                            {/* <Image
                              showSkeleton
                              src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                              width={1000}
                              height={490}


                            /> */}
                            <div>
                              <Modal.Header>
                                <Text id="modal-title" className='font-black' size={18}>
                                  chess
                                </Text>
                              </Modal.Header>
                              <Modal.Body>
                                <Text id="modal-description" >
                                  <h1 className='font-bold'>Date: 3rd Nov 2023</h1> <br />

                                  <p className='font-semibold'>Step into the world of strategy, intellect, and competition as we present "Grandmasters Clash: The Ultimate Chess Spectacle." This extraordinary chess event promises to be a celebration of the timeless game that has enthralled minds for centuries. Whether you're a seasoned chess aficionado or a novice eager to witness the brilliance of the world's finest chess players, this event is tailored to captivate and inspire.</p>

                                </Text>
                              </Modal.Body>
                              <Modal.Footer className='mt-10 mr-5'>
                                <Button auto flat>
                                  learn more
                                </Button>
                                <Link href=''>
                                  <Button auto >
                                    Register (Duo) [&#8377;100]
                                  </Button></Link>

                              </Modal.Footer>
                            </div>
                          </div>
                        </Modal>

                      </div>

                    </div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="bg-cover h-56 p-4" style={{ backgroundImage: "url('https://i.pinimg.com/564x/09/1f/40/091f403b6ac07c5fc31eeb6fd2a22150.jpg')" }}></div>
                    <div className="p-4 card_content">
                      <h1 className="text-xl font-bold text-gray-700">treasure hunt</h1>
                      <p className="mt-2 text-gray-600 my-2"></p>
                      <Button auto shadow onPress={handler4} class="bg-blue-500 m-auto hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Explore
                      </Button>



                      <div>
                        <Modal
                          closeButton
                          // scroll
                          blur
                          width="800px"
                          aria-labelledby="modal-title"
                          aria-describedby="modal-description"
                          open={visible4}
                          onClose={closeHandler4}

                        >
                          <div className='event_modal'>
                            {/* <Image
                              showSkeleton
                              src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                              width={1000}
                              height={490}


                            /> */}
                            <div>
                              <Modal.Header>
                                <Text id="modal-title" className='font-black' size={18}>
                                  treasure hunt
                                </Text>
                              </Modal.Header>
                              <Modal.Body>
                                <Text id="modal-description" >
                                  <h1 className='font-bold'>Date: 3rd Nov 2023</h1> <br />

                                  <p className='font-semibold'>Get ready for an adventure of a lifetime as we invite you to join us for the most exciting and thrilling event of the year - the "X Marks the Spot: Treasure Hunt Extravaganza"! This treasure hunt promises an unforgettable experience that will test your wits, teamwork, and exploration skills while uncovering hidden treasures and solving intriguing mysteries.</p>

                                </Text>
                              </Modal.Body>
                              <Modal.Footer className='mt-10 mr-5'>
                                <Button auto flat>
                                  learn more
                                </Button>
                                <Link href=''>
                                  <Button auto >
                                    Register (Duo) [&#8377;60]
                                  </Button></Link>
                                <Link href=''>
                                  <Button auto >
                                    Register (Team) [&#8377;120]
                                  </Button></Link>

                              </Modal.Footer>
                            </div>
                          </div>
                        </Modal>

                      </div>

                    </div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="bg-cover h-56 p-4" style={{ backgroundImage: "url('https://i.pinimg.com/564x/09/1f/40/091f403b6ac07c5fc31eeb6fd2a22150.jpg')" }}></div>
                    <div className="p-4 card_content">
                      <h1 className="text-xl font-bold text-gray-700">Slow Football</h1>
                      <p className="mt-2 text-gray-600 my-2"></p>
                      <Button auto shadow onPress={handler4} class="bg-blue-500 m-auto hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Explore
                      </Button>



                      <div>
                        <Modal
                          closeButton
                          // scroll
                          blur
                          width="800px"
                          aria-labelledby="modal-title"
                          aria-describedby="modal-description"
                          open={visible4}
                          onClose={closeHandler4}

                        >
                          <div className='event_modal'>
                            {/* <Image
                              showSkeleton
                              src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                              width={1000}
                              height={490}


                            /> */}
                            <div>
                              <Modal.Header>
                                <Text id="modal-title" className='font-black' size={18}>
                                  Slow Football
                                </Text>
                              </Modal.Header>
                              <Modal.Body>
                                <Text id="modal-description" >
                                  <h1 className='font-bold'>Date: 3rd Nov 2023</h1> <br />

                                  <p className='font-semibold'>Step onto the pitch and prepare to experience the beautiful game in a whole new light at our "Slo-Mo Soccer Spectacle" event. Slow Football, as we affectionately call it, is an extraordinary twist on the world's most popular sport that will leave you both mesmerized and utterly delighted.</p>

                                </Text>
                              </Modal.Body>
                              <Modal.Footer className='mt-10 mr-5'>
                                <Button auto flat>
                                  learn more
                                </Button>
                                <Link href=''>
                                  <Button auto >
                                    Register (Team) [&#8377;250]
                                  </Button></Link>
                              </Modal.Footer>
                            </div>
                          </div>
                        </Modal>

                      </div>

                    </div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="bg-cover h-56 p-4" style={{ backgroundImage: "url('https://i.pinimg.com/564x/09/1f/40/091f403b6ac07c5fc31eeb6fd2a22150.jpg')" }}></div>
                    <div className="p-4 card_content">
                      <h1 className="text-xl font-bold text-gray-700">Webies</h1>
                      <p className="mt-2 text-gray-600 my-2"></p>
                      <Button auto shadow onPress={handler4} class="bg-blue-500 m-auto hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Explore
                      </Button>



                      <div>
                        <Modal
                          closeButton
                          // scroll
                          blur
                          width="800px"
                          aria-labelledby="modal-title"
                          aria-describedby="modal-description"
                          open={visible4}
                          onClose={closeHandler4}

                        >
                          <div className='event_modal'>
                            {/* <Image
                              showSkeleton
                              src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                              width={1000}
                              height={490}


                            /> */}
                            <div>
                              <Modal.Header>
                                <Text id="modal-title" className='font-black' size={18}>
                                  Webies
                                </Text>
                              </Modal.Header>
                              <Modal.Body>
                                <Text id="modal-description" >
                                  <h1 className='font-bold'>Date: 3rd Nov 2023</h1> <br />

                                  <p className='font-semibold'>Webies is an annual celebration of the digital world that brings together the brightest minds, innovators, and enthusiasts from the vast landscape of the internet. This captivating event serves as a nexus where technology, creativity, and the digital community converge to explore, learn, and celebrate the ever-evolving web ecosystem.</p>

                                </Text>
                              </Modal.Body>
                              <Modal.Footer className='mt-10 mr-5'>
                                <Button auto flat>
                                  learn more
                                </Button>
                                <Link href=''>
                                  <Button auto >
                                    Register (Single) [&#8377;70]
                                  </Button></Link>
                                <Link href=''>
                                  <Button auto >
                                    Register (Duo) [&#8377;100]
                                  </Button></Link>
                              </Modal.Footer>
                            </div>
                          </div>
                        </Modal>

                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="my-20" id='sponsor'>
                <h1 className="text-6xl font-bold mb-5 text-white"> <img className='spons' src="https://see.fontimg.com/api/renderfont4/BWPLV/eyJyIjoiZnMiLCJoIjo4NSwidyI6MTI1MCwiZnMiOjY4LCJmZ2MiOiIjRkRGREZEIiwiYmdjIjoiIzAwMDAwMCIsInQiOjF9/c3BvbnNvcnM/race-sport.png" alt="" /> </h1>
                <div className="grid grid-cols-3 gap-20 sponss">
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <Link href="https://www.google.com/">
                      <div className="bg-cover h-56 w-80 p-4 hover:scale-125" style={{ backgroundImage: "url('https://www.linkpicture.com/q/1.jpg')" }}></div>
                    </Link>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <Link href="https://www.google.com/">
                      <div className="bg-cover h-56 w-80 p-4 hover:scale-125" style={{ backgroundImage: "url('https://www.linkpicture.com/q/1.jpg')" }}></div>
                    </Link>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <Link href="https://www.google.com/">
                      <div className="bg-cover h-56 w-80 p-4 hover:scale-125" style={{ backgroundImage: "url('https://www.linkpicture.com/q/1.jpg')" }}></div>
                    </Link>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <Link href="https://www.google.com/">
                      <div className="bg-cover h-56 w-80 p-4 hover:scale-125" style={{ backgroundImage: "url('https://www.linkpicture.com/q/1.jpg')" }}></div>
                    </Link>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <Link href="https://www.google.com/">
                      <div className="bg-cover h-56 w-80 p-4 hover:scale-125" style={{ backgroundImage: "url('https://www.linkpicture.com/q/1.jpg')" }}></div>
                    </Link>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <Link href="https://www.google.com/">
                      <div className="bg-cover h-56 w-80 p-4 hover:scale-125" style={{ backgroundImage: "url('https://www.linkpicture.com/q/1.jpg')" }}></div>
                    </Link>
                  </div>
                </div>

              </div> */}
            </main>
          </div>
        </div >
        <Footer />
        {/* https://www.linkpicture.com/q/imgbin_robot-gear-mechanical-engineering-mechanism-png.png */}
        <style jsx global > {`
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&family=Russo+One&display=swap');
         #event{
        font-family: 'Poppins', sans-serif;
          font-weight: 600;
        }
        .event_modal p{
          font-family: 'Poppins', sans-serif;
          font-weight: 300;
        }
        #modal-title{
          font-size: 1.8rem;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
        }
        #modal-description h1{
          font-size: 1.2rem;
        }

        #modal-description p{
          font-size:1em;
        }
.about__drishti p{
  font-family: 'Russo One', sans-serif;
  color: white;
  line-height: 28px;

}
.card_content h1{
  font-family: 'Russo One', sans-serif;
}
.about__drishti{
  background-image: linear-gradient( 180deg, hsl(207deg 84% 19%) 0%, hsl(215deg 84% 34%) 39%, hsl(216deg 84% 32%) 61%, hsl(213deg 88% 6%) 100% );
}
ul li a{
  font-family: 'Russo One', sans-serif;
}

        .events{
          width: 250px;
          margin: 1rem auto;
        }
        .sponss{
          
          margin: 0 auto;
          width: 72.5vw;
        }
        .spons{
          width: 315px;
          margin: 1rem auto;
        }
.wrapper {
  background-image: url(https://www.linkpicture.com/q/Premium-Photo-_-Technology-digital-wave-background.jpeg);
  background-color: rgba(0, 0, 0, 0.6);
  background-blend-mode: color;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100vw 100vh;
  aspect-ratio: 16/9;
  position: relative;
  width: 100vw;
  height: 100%;
  border-radius: 15px;
  padding-block-end: 2rem;
  padding-inline: 2rem;
  overflow-x: clip;
  font-family: 'Poppins', sans-serif;
  font-weight: 900;
  font-size: clamp(1.5rem, 15vw, 15rem);
  font-weight: 700;
  text-transform: uppercase;
  perspective: 2.5em;
}



.glow, 
.glow-shadow {
  position: absolute;
  inset: 0;
  display: grid;
  place-content: center;
}
.glow{
  position: relative;
  top: 100px;
}
.glow {
  --glow-color: hsl(248, 16%, 39%);
  background: inherit;
  background-size: cover;
  background-position: center;
  background-clip: text;
  -webkit-background-clip: text;
  color: rgba(0, 0, 0, 0);
  mix-blend-mode: plus-lighter;
  -webkit-text-stroke: 0.012em rgba(241, 240, 255, 0.384);
  filter: drop-shadow(0px 0px 5px var(--glow-color)) 
    drop-shadow(0px 0px 10px var(--glow-color));
}


.glow-shadow {
  color: hsl(20, 100%, 98%);
  mix-blend-mode: soft-light;
  filter: brightness(2);
  transform:translateY(10%)                 
    rotateX(81deg) 
    scaleY(-1)                               
    translateY(-15%) scaleY(1.35)
}   


        // .about_img{
        //   background-image: url('https://img.freepik.com/free-photo/close-up-recording-video-with-smartphone-during-concert_1153-7310.jpg?w=996&t=st=1680473772~exp=1680474372~hmac=7934c62f3f2399fdb0cff4954cb7e46ccd4e4dd702b74b54647040143c911583"')
          
        // }
.drishti{
  color:white;
}
        .body1{background-image: linear-gradient( 202deg, hsl(270deg 100% 7%) 0%, hsl(260deg 89% 10%) 6%, hsl(249deg 80% 14%) 13%, hsl(239deg 71% 18%) 19%, hsl(228deg 63% 22%) 25%, hsl(218deg 56% 26%) 31%, hsl(208deg 50% 31%) 37%, hsl(197deg 44% 36%) 44%, hsl(187deg 38% 41%) 50%, hsl(177deg 33% 47%) 56%, hsl(166deg 32% 53%) 63%, hsl(156deg 34% 59%) 69%, hsl(145deg 37% 66%) 75%, hsl(135deg 41% 73%) 81%, hsl(125deg 47% 80%) 87%, hsl(114deg 58% 87%) 94%, hsl(104deg 100% 95%) 100% );

        }

        .event_modal{
          display: flex;
          flex-direction: row;
          margin: 1rem;
         
        }
        .mesa_logo{
          width: 65px;
          height: 65px;
        }
.main_image{
  background: url('https://www.linkpicture.com/q/Premium-Photo-_-Technology-digital-wave-background.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  width: 98.5vw;
  margin-left: -6px;
  height: 100vh;
}
        .page {
          font-family: Avenir, Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-align: center;
          color: #2c3e50;
          margin-top: 60px;
          display: flex;
        }
        .footer_button{
          margin: 4rem;
          gap:2rem
        }
        .box1 {
          width: 80px;
          height: 80px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-weight: 600;
          color: #fff;
          margin: 0 auto;
        }
        Button{
          margin: 1rem auto;
        }
        .event_img{
          margin: auto 1rem;
        }
        .box3 {
          width: 80px;
          height: 80px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-weight: 600;
          color: #fff;
          margin: 0 auto;
        }

        .box {
          width: 400px;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-weight: 600;
          color: #fff;
          margin: 0 auto;
        }
        .box2 {
          width: 200px;
          height: 200px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-weight: 600;
          color: #fff;
          margin: 0 auto;
          position: relative;
          left: 20px;
        }
        
        *,
        *::after,
        *::before{
            box-sizing: border-box;
            padding: 0;
            margin: 0;
        }
        
        .html{
            font-size: 62.5%;
        }
        
        .navbar input[type="checkbox"],
        .navbar .hamburger-lines{
            display: none;
        }
        
        .container{
            max-width: 1200px;
            width: 90%;
            margin: auto;
        }
        
        .navbar{
            box-shadow: 0px 5px 10px 0px black;
            position: fixed;
            width: 100%;
            background: linear-gradient(to right, rgb(0 114 255), rgb(22 54 105), rgb(0 0 0));;
            color: #fff;
            opacity: 0.85;
            z-index: 100;
        }
        
        .navbar-container{
            display: flex;
            justify-content: space-between;
            height: 64px;
            align-items: center;
        }
        
        .menu-items{
            order: 2;
            display: flex;
        }
        .logo{
            order: 1;
            font-size: 1.3rem;
        }
        .logo img{
          
    width: 159px;
    height: 40px;

        }
        .menu-items li a{
            list-style: none;
            margin-left: 1.5rem;
            font-size: 1.3rem;
        }
        
        .navbar a{
            color: #fff;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease-in-out;
        }
        
        .navbar a:hover{
            color: #117964;
        }
        
        @media (max-width: 768px){
          .box {
           
    width: 250px;
    height: 300px;

            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-weight: 600;
            color: #fff;
            margin: 0 auto;
          }
          .box2{
            width: 80px;
            height: 80px;
            border-radius: 12px;
            display: flex;
            position: relative;
            left: 30px;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-weight: 600;
            color: #fff;
            margin: 0 auto;
          }
    
            .navbar{
                opacity: 0.95;
            }
        
            .navbar-container input[type="checkbox"],
            .navbar-container .hamburger-lines{
                display: block;
            }
        
            .navbar-container{
                display: block;
                position: relative;
                height: 64px;
            }
        
            .navbar-container input[type="checkbox"]{
                position: absolute;
                display: block;
                height: 32px;
                width: 30px;
                top: 20px;
                left: 20px;
                z-index: 5;
                opacity: 0;
                cursor: pointer;
            }
        
            .navbar-container .hamburger-lines{
                display: block;
                height: 28px;
                width: 35px;
                position: absolute;
                top: 20px;
                left: 20px;
                z-index: 2;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
        
            .navbar-container .hamburger-lines .line{
                display: block;
                height: 4px;
                width: 100%;
                border-radius: 10px;
                background: #fff;
            }
            
            .navbar-container .hamburger-lines .line1{
                transform-origin: 0% 0%;
                transition: transform 0.3s ease-in-out;
            }
        
            .navbar-container .hamburger-lines .line2{
                transition: transform 0.2s ease-in-out;
            }
        
            .navbar-container .hamburger-lines .line3{
                transform-origin: 0% 100%;
                transition: transform 0.3s ease-in-out;
            }
        
            .navbar .menu-items{
                padding-top: 100px;
                
            background: linear-gradient(to right, rgb(29, 78, 216), rgb(30, 64, 175), rgb(17, 24, 39));
                height: 100vh;
                max-width: 300px;
                transform: translate(-150%);
                display: flex;
                flex-direction: column;
                margin-left: -40px;
                padding-left: 40px;
                transition: transform 0.5s ease-in-out;
                box-shadow:  5px 0px 10px 0px #aaa;
                overflow: scroll;
            }
        
            .navbar .menu-items li{
                margin-bottom: 1.8rem;
                font-size: 1.1rem;
                font-weight: 500;
            }
        
            .logo{
                position: absolute;
                top: 10px;
                right: 15px;
                font-size: 2.5rem;
            }
        
            .navbar-container input[type="checkbox"]:checked ~ .menu-items{
                transform: translateX(0);
            }
        
            .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line1{
                transform: rotate(45deg);
            }
        
            .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line2{
                transform: scaleY(0);
            }
        
            .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line3{
                transform: rotate(-45deg);
            }
        
        }
        
        @media (max-width: 500px){
            .navbar-container input[type="checkbox"]:checked ~ .logo{
                display: none;
            }
            
        .event_modal{
          display: flex;
          flex-direction: column;
        }
        .footer_button{
          margin:0 0 4rem 0;
          gap:4rem
        }
        .aboutt{
          width: 80vw;
        }
        .sponss{
            grid-template-columns: repeat(1, minmax(0, 1fr));
            width: 80vw;
        }
        .logo img{
          width: 112px;
          position: relative;
          bottom: -15px;
        }
        .glow{
          font-size: 4.8rem;
        }
        .glow-shadow{
          transform: translatey(-24%)rotatex(22deg)scaley(-1)translatey(-17%)scaley(1.4);
        }
        }
      `}</style >



      </div >



    </>

  )
}
