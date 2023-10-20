import Head from 'next/head'
import React from "react";
import Img from 'next/image'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import Layout from './api/components/Layout'
import data from "./data.json"
import Script from 'next/script'
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import Link from "next/link";
import { Card, Code, Col, Text } from "@nextui-org/react";
import { Modal, useModal, Button, Image } from "@nextui-org/react";
// import { Grid } from "@nextui-org/react";
import cad from './cad.svg';
import Footer from './api/components/Footer';
import Eyes from './Eyes';
import robo from './robo.svg';
import treasure from './treasure.svg';
import cnc from './cnc.svg';
import film from './film.svg';
import game from './game.svg';
import ai from './ai.svg';
import interview from './interview.svg';
const inter = Inter({ subsets: ['latin'] });


export default function Home() {
  const root = useRef();
  const [active, setActive] = useState([false, false, false, false, false]);
  const isSomeActive = active.some((element) => element);
  const handleClick = () => {
    isSomeActive
      ? setActive([false, false, false, false, false])
      : setActive([true, true, true, true, true, true]);
  };



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
    setVisible4(false);
    console.log("closed");
  };
  const [visible5, setVisible5] = React.useState(false);
  const handler5 = () => setVisible5(true);

  const closeHandler5 = () => {
    setVisible5(false);
    console.log("closed");
  };
  const [visible6, setVisible6] = React.useState(false);
  const handler6 = () => setVisible6(true);

  const closeHandler6 = () => {
    setVisible6(false);
    console.log("closed");
  };
  const [visible7, setVisible7] = React.useState(false);
  const handler7 = () => setVisible7(true);

  const closeHandler7 = () => {
    setVisible7(false);
    console.log("closed");
  };
  const [visible8, setVisible8] = React.useState(false);
  const handler8 = () => setVisible8(true);

  const closeHandler8 = () => {
    setVisible8(false);
    console.log("closed");
  };





  return (
    <>
      {/* 
    } */}
      <div className='body1'>
        <Head>
          <title>Drishti 2023 | MESA | GCOEN </title>
          <link rel="icon" href="https://i.postimg.cc/LXVx3CzZ/white-drishti-23.png" />
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
            <h1 class="logo"> <img src="https://i.postimg.cc/BZ86NBKF/whites-logo.webp" alt="" /></h1>
          </div>
        </nav>
        {/* background: ur(""); */}
        <div className="container ">
          <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <main className="flex flex-col items-center justify-center w-full flex-1 px-0 lg:px-20 text-center">
              {/* <div className='main_bg h-screen w-screen'> */}
              <div className="page h-screen items-center main_image" ref={root}>
                <div class="wrapper ">

                  {/* <div class="glow " data-text="Glow">Drishti</div>
                  <div class="glow-shadow" aria-hidden="true">Drishti</div> */}

                  <Eyes />
                  <div className='flex items-center'>
                    <div className="boxer">
                      <h3 className=' text-4xl lg:text-5xl lg:font-medium drishtifont leading-snug	text-white	  '>
                        {/* We Are Live */}
                        Welcome to Drishti 2023
                      </h3>
                    </div>
                  </div>

                </div>
                {/* <a href="https://ibb.co/6gLP95s"><img src={drishti} alt="asdfhj" border="0" /></a> */}
              </div>
              <div className="my-20" id='about'>
                <h1 className="text-6xl  mb-20 text-white tracking-wide"> ABOUT </h1>
                <div className="max-w-md w-full lg:max-w-full lg:flex border-0  aboutt ">
                  <div className=" h-auto lg:h-[17rem] lg:w-[30rem] aspect-video flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden about_img" title="Drishti 2023">
                  </div>
                  <div className="  border-0 h- rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal  about__drishti">
                    <div className="">

                      <p className="text-gray-700 text-base ">"Rooted in our collective spirit, Drishti symbolizes the drive for excellence achieved through teamwork. With the unity of all participants, this tech fest is coming back stronger than ever.

                        With renewed energy, Drishti offers a diverse range of events, workshops, and exciting prizes for everyone to enjoy. Get ready for an unforgettable experience that's open to all.

                        We can't wait to welcome everyone to this celebration!"</p>

                    </div>
                  </div>
                </div>
              </div>
              <div className="" id='event'>
                <h1 className="text-6xl  mb-20 text-white tracking-wide"> EVENTS </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] lg:gap-[10rem] aboutt">
                  <div className="bg-white shadow-md rounded-lg overflow-hidden w-[19rem]">
                    <div className="bg-cover h-[18rem] p-4 " style={{ backgroundImage: "url('https://i.postimg.cc/J42bwG5N/low-poly-grid-haikei.png')" }}>
                      <Img className='w-[10rem] h-[16rem] m-auto'
                        src={cad}
                        width={200} height={180} quality={100}
                      />
                    </div>
                    <div className="p-4 card_content">
                      <h1 className="capitalize text-2xl font-bold text-gray-700">Incadibles</h1>
                      <p className="mt-2 text-gray-600 my-7"></p>
                      <Button color="secondary" role="button" onPress={handler} >
                        Explore
                      </Button>
                      <div>
                        <Modal
                          closeButton
                          // scroll
                          blur
                          width='80%'
                          aria-labelledby="modal-title"
                          aria-describedby="modal-description"
                          open={visible}
                          onClose={closeHandler}
                        >
                          <div className='event_modal'>
                            <Image
                              showSkeleton
                              src="https://i.postimg.cc/qMXZmyWv/new-cad.png"
                              width={4000}
                              height={490}

                            />
                            <div>
                              <Modal.Header>
                                <Text id="modal-title" className='font-black' size={18}>
                                  Incadibles
                                </Text>
                              </Modal.Header>
                              <Modal.Body>
                                <Text id="modal-description" >
                                  <h1 className='font-bold'>Date: 25th OCT 2023</h1> <br />

                                  <p className='font-semibold'>“Incadibles” is an exciting event that celebrates the incredible world of
                                    AutoCAD. This event is gathering of enthusiast and anyone passionate about
                                    AutoCAD (computer-aided design).</p>

                                </Text>
                              </Modal.Body>
                              <Modal.Footer className='mt-10 mr-5'>
                                <Link href='https://drive.google.com/file/d/1CgOAFg4AB-MjIoNPZZKqY-IijXHNub9P/view?usp=sharing'>
                                  <Button className='m-0' color="secondary" role="button" auto flat>
                                    learn more
                                  </Button>
                                </Link>
                                <Link href='https://forms.gle/jg1VKCbBefxvUMPP6'>
                                  <Button className='m-0' color="secondary" role="button" auto >
                                    Register (Single) [&#8377;69]
                                  </Button></Link>

                              </Modal.Footer>
                            </div>
                          </div>
                        </Modal>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden w-[19rem] ">
                    <div className="bg-cover h-[18rem] p-4 " style={{ backgroundImage: "url('https://i.postimg.cc/J42bwG5N/low-poly-grid-haikei.png')" }}>
                      <Img className='w-[10rem] h-[16rem] m-auto'
                        src={interview}
                        width={200} height={180} quality={100}
                      />
                    </div>
                    <div className="p-4 card_content">
                      <h1 className="capitalize text-2xl font-bold text-gray-700">VIRTU- RECRUIT </h1>
                      <p className="mt-2 text-gray-600 my-7"></p>
                      <Button color="secondary" role="button" onPress={handler1} >
                        Explore
                      </Button>
                      <div>
                        <Modal
                          closeButton
                          // scroll
                          blur
                          width='80%'
                          aria-labelledby="modal-title"
                          aria-describedby="modal-description"
                          open={visible1}
                          onClose={closeHandler1}
                        >
                          <div className='event_modal'>
                            <Image
                              showSkeleton
                              src="https://i.postimg.cc/cLFkWZxq/Virtu-Recruit-Recovered-1.png"
                              width={4000}
                              height={490}

                            />
                            <div>
                              <Modal.Header>
                                <Text id="modal-title" className='font-black' size={18}>
                                  VIRTU- RECRUIT
                                </Text>
                              </Modal.Header>
                              <Modal.Body>
                                <Text id="modal-description" >
                                  <h1 className='font-bold'>Date: 25ᵗʰ OCT 2023</h1> <br />

                                  <p className='font-semibold'>An opportunity for students to prepare for the dream placement well in advance. This
                                    will help candidates to self evaluate and boost their confidence to perform their best
                                    on the D-day. The virtual placement will polish your essential communication and
                                    presentation skills required to grab your coveted job.</p>

                                </Text>
                              </Modal.Body>
                              <Modal.Footer className='mt-10 mr-5'>
                                <Link href='https://drive.google.com/file/d/1AvjhTrOz59yj9v1hMOq8sJykVifmBqzL/view?usp=sharing'>
                                  <Button className='m-0' color="secondary" role="button" auto flat>
                                    learn more
                                  </Button>
                                </Link>
                                <Link href='https://forms.gle/egHvCdD9xxN5gh8i8'>
                                  <Button className='m-0' color="secondary" role="button" auto >
                                    Register (Single) [&#8377;69]
                                  </Button></Link>


                              </Modal.Footer>
                            </div>
                          </div>
                        </Modal>

                      </div>

                    </div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden w-[19rem] ">
                    <div className="bg-cover h-[18rem] p-4 " style={{ backgroundImage: "url('https://i.postimg.cc/J42bwG5N/low-poly-grid-haikei.png')" }}>
                      <Img className='w-[10rem] h-[16rem] m-auto'
                        src={ai}
                        width={200} height={180} quality={100}
                      />
                    </div>
                    <div className="p-4 card_content">
                      <h1 className="capitalize text-2xl font-bold text-gray-700"> Web3 and AI workshop </h1>
                      <p className="mt-2 text-gray-600 my-7"></p>
                      <Button color="secondary" role="button" onPress={handler8} >
                        Explore
                      </Button>
                      <div>
                        <Modal
                          closeButton
                          // scroll
                          blur
                          width='80%'
                          aria-labelledby="modal-title"
                          aria-describedby="modal-description"
                          open={visible8}
                          onClose={closeHandler8}
                        >
                          <div className='event_modal'>
                            <Image
                              showSkeleton
                              src="https://i.postimg.cc/kXtpWLvK/AI-worshop-01-1.png"
                              width={4000}
                              height={490}

                            />
                            <div>
                              <Modal.Header>
                                <Text id="modal-title" className='font-black' size={18}>
                                  Web3 + AI Workshop
                                </Text>
                              </Modal.Header>
                              <Modal.Body>
                                <Text id="modal-description" >
                                  <h1 className='font-bold'>Date: 25ᵗʰ Nov 2023</h1> <br />

                                  <p className='font-semibold'>Agenda:

                                    Evolution of Internet,
                                    Web1, Web2, Web3,
                                    Blockchain, AI, and Tools for Efficiency,
                                    Free Web3 Learning Platform for Students,
                                    Career Insights,
                                    Join Tanmay Tarte for a dynamic workshop on the future of the internet, AI, and Web3 technology, and discover valuable tools and career insights. Plus, exciting giveaways for attendees!</p>

                                </Text>
                              </Modal.Body>
                              <Modal.Footer className='mt-10 mr-5'>
                                <Link href='https://drive.google.com/file/d/1G4oDg0ULLC98VyxQ06bnVUQmK4FTJZs-/view?usp=drivesdk'>
                                  <Button className='m-0' color="secondary" role="button" auto flat>
                                    learn more
                                  </Button>
                                </Link>
                                <Link href='https://forms.gle/wpWcLmHZphfs7kes9'>
                                  <Button className='m-0' color="secondary" role="button" auto >
                                    Register (Single) [&#8377;49]
                                  </Button></Link>


                              </Modal.Footer>
                            </div>
                          </div>
                        </Modal>

                      </div>

                    </div>
                  </div>

                  <div className="bg-white shadow-md rounded-lg overflow-hidden w-[19rem]">
                    <div className="bg-cover h-[18rem] p-4 " style={{ backgroundImage: "url('https://i.postimg.cc/J42bwG5N/low-poly-grid-haikei.png')" }}>
                      <Img className='w-[10rem] h-[16rem] m-auto'
                        src={robo}
                        width={200} height={180} quality={100}
                      />
                    </div>
                    <div className="p-4 card_content">
                      <h1 className="capitalize text-2xl font-bold text-gray-700">Robo Ace</h1>
                      <p className="mt-2 text-gray-600 my-7"></p>
                      <Button color="secondary" role="button" onPress={handler3} >
                        Explore
                      </Button>



                      <div>
                        <Modal
                          closeButton
                          // scroll
                          blur
                          width='80%'

                          aria-labelledby="modal-title"
                          aria-describedby="modal-description"
                          open={visible3}
                          onClose={closeHandler3}
                        >
                          <div className='event_modal'>
                            <Image
                              showSkeleton
                              src="https://i.postimg.cc/XYSDLxsh/roborace-1-Recovered-21.png"
                              width={4000}
                              height={490}

                            />
                            <div>
                              <Modal.Header>
                                <Text id="modal-title" className='font-black' size={18}>
                                  Robo Ace
                                </Text>
                              </Modal.Header>
                              <Modal.Body>
                                <Text id="modal-description" >
                                  <h1 className='font-bold'>Date: 25th OCT 2023</h1> <br />

                                  <p className='font-semibold'>Robo Ace is an open robot race event for students. Bots will be provided at the venue, ensuring a level playing field for all participants. Any college or institute can send multiple entries. Join us for this thrilling robotics competition!</p>

                                </Text>
                              </Modal.Body>
                              <Modal.Footer className='mt-10 mr-5'>
                                <Button color="secondary" role="button" auto flat >
                                  learn more
                                </Button>
                                <Link href='https://forms.gle/33rXMWDNx3ZXRucN6'>
                                  <Button color="secondary" role="button" auto >
                                    Register [&#8377;79]
                                  </Button></Link>

                              </Modal.Footer>
                            </div>
                          </div>
                        </Modal>

                      </div>

                    </div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden w-[19rem]">
                    <div className="bg-cover h-[18rem] p-4 " style={{ backgroundImage: "url('https://i.postimg.cc/J42bwG5N/low-poly-grid-haikei.png')" }}>
                      <Img className='w-[10rem] h-[16rem] m-auto'
                        src={game}
                        width={200} height={180} quality={100}
                      />
                    </div>
                    <div className="p-4 card_content">
                      <h1 className="capitalize text-2xl font-bold text-gray-700">Revive</h1>
                      <p className="mt-2 text-gray-600 my-7"></p>
                      <Button color="secondary" role="button" onPress={handler4} >
                        Explore
                      </Button>



                      <div>
                        <Modal
                          closeButton
                          // scroll
                          blur
                          width='80%'
                          aria-labelledby="modal-title"
                          aria-describedby="modal-description"
                          open={visible4}
                          onClose={closeHandler4}

                        >
                          <div className='event_modal'>
                            <Image
                              showSkeleton
                              src="https://i.postimg.cc/xCJ4g7Vw/REVIVE-Recovered-21.png"
                              width={4000}
                              height={490}

                            />
                            <div>
                              <Modal.Header>
                                <Text id="modal-title" className='font-black' size={18}>
                                  Revive
                                </Text>
                              </Modal.Header>
                              <Modal.Body>
                                <Text id="modal-description" >
                                  <h1 className='font-bold'>Date: 25th Oct 2023</h1> <br />

                                  <p className='font-semibold'>Revive is a dynamic and exciting gaming event that brings together gamers, esports enthusiasts, and chess aficionados in a thrilling competitive environment. Organized by Drishti (the organizing entity), Revive offers a platform for participants to showcase their skills, connect with like-minded individuals, and compete in their favorite games.</p>

                                </Text>
                              </Modal.Body>
                              <Modal.Footer className='mt-10 mr-5'>
                                <Link href='https://drive.google.com/file/d/1y1v0c-yrnoRNNeUiBZBqdtgbD2BRUW0S/view?usp=sharing' >
                                  <Button className='m-0' color="secondary" role="button" auto flat>
                                    learn more
                                  </Button>
                                </Link>
                                <Link href='https://forms.gle/JeHn1555Hcyga5u3A'>
                                  <Button className='m-0 ' color="secondary" role="button" auto style={{ fontSize: "small" }}>
                                    Register (VALORANT - Team of 5) [&#8377;249]
                                  </Button></Link>
                                <Link href='https://forms.gle/XvqHvgqy1eR2qEYR6'>
                                  <Button className='m-0' color="secondary" role="button" auto >
                                    Register (CHESS - Single) [&#8377;49]
                                  </Button></Link>
                                <Link href='https://forms.gle/CEEn1d4JXvh5NptQ6'>
                                  <Button className='m-0' color="secondary" role="button" auto >
                                    Register (BGMI  - Team of 4) [&#8377;239]
                                  </Button></Link>
                              </Modal.Footer>
                            </div>
                          </div>
                        </Modal>

                      </div>

                    </div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden w-[19rem]">
                    <div className="bg-cover h-[18rem] p-4 " style={{ backgroundImage: "url('https://i.postimg.cc/J42bwG5N/low-poly-grid-haikei.png')" }}>
                      <Img className='w-[10rem] h-[16rem] m-auto'
                        src={treasure}
                        width={200} height={180} quality={100}
                      />
                    </div>
                    <div className="p-4 card_content">
                      <h1 className="capitalize text-2xl font-bold text-gray-700">Treasure Trackers</h1>
                      <p className="mt-2 text-gray-600 my-7"></p>
                      <Button color="secondary" role="button" onPress={handler5} >
                        Explore
                      </Button>



                      <div>
                        <Modal
                          closeButton
                          // scroll

                          blur
                          width='80%'
                          // className='modals'
                          aria-labelledby="modal-title"
                          aria-describedby="modal-description"
                          open={visible5}
                          onClose={closeHandler5}

                        >
                          <div className='event_modal'>
                            <Image
                              showSkeleton
                              src="https://i.postimg.cc/k5D1XZG2/tt-post-new-Recovered.png"
                              width={4000}
                              height={490}

                            />
                            <div>
                              <Modal.Header>
                                <Text id="modal-title" className='font-black text-3xl capitalize' size={18}>
                                  Treasure Trackers
                                </Text>
                              </Modal.Header>
                              <Modal.Body>
                                <Text id="modal-description" >
                                  <h1 className='font-bold'>Date: 25th OCT 2023</h1> <br />

                                  <p className='font-semibold'>A Event is about solving the riddle, hunt for the Clues and Overcome all obstacle to unveil the
                                    treasure.</p>

                                </Text>
                              </Modal.Body>
                              <Modal.Footer className='mt-10 mr-5'>
                                <Link href='https://drive.google.com/file/d/1CfIfiN6qxBA4_YaNrtxBcPgStucEAnIW/view?usp=sharing' >
                                  <Button className='m-0' color="secondary" role="button" auto flat>
                                    learn more
                                  </Button>
                                </Link>
                                <Link href='https://forms.gle/JpegtV66kwSyFXF99'>
                                  <Button className='m-0' color="secondary" role="button" auto >
                                    Register [&#8377;199] (team of 4)

                                  </Button></Link>

                              </Modal.Footer>
                            </div>
                          </div>
                        </Modal>

                      </div>

                    </div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden w-[19rem]">
                    <div className="bg-cover h-[18rem] p-4 " style={{ backgroundImage: "url('https://i.postimg.cc/J42bwG5N/low-poly-grid-haikei.png')" }}>
                      <Img className='w-[10rem] h-[16rem] m-auto'
                        src={cnc}
                        width={200} height={180} quality={100}
                      />
                    </div>
                    <div className="p-4 card_content">
                      <h1 className="capitalize text-2xl font-bold text-gray-700">CLEATS N COURT</h1>
                      <p className="mt-2 text-gray-600 my-7"></p>
                      <Button color="secondary" role="button" onPress={handler6} >
                        Explore
                      </Button>



                      <div>
                        <Modal
                          closeButton
                          // scroll
                          blur
                          width='80%'
                          aria-labelledby="modal-title"
                          aria-describedby="modal-description"
                          open={visible6}
                          onClose={closeHandler6}

                        >
                          <div className='event_modal'>
                            <Image
                              showSkeleton
                              src="https://i.postimg.cc/t4qv87Ht/C-N-C-new.png"
                              width={4000}
                              height={490}

                            />
                            <div>
                              <Modal.Header>
                                <Text id="modal-title" className='font-black' size={18}>
                                  CLEATS N COURT
                                </Text>
                              </Modal.Header>
                              <Modal.Body>
                                <Text id="modal-description" >
                                  <h1 className='font-bold'>Date: 3rd Nov 2023</h1> <br />

                                  <p className='font-semibold'>CLEATS N COURT is a fast-paced soccer, hard court with teams of five + two players on
                                    each side. The game focuses on skill, quick passes, and close ball control.</p>

                                </Text>
                              </Modal.Body>
                              <Modal.Footer className='mt-10 mr-5'>
                                <Link href='https://drive.google.com/file/d/135K0f2bmyvoRcWTl_dtKujpMYdVy9LVG/view?usp=sharing'>
                                  <Button className='m-0' color="secondary" role="button" auto flat>
                                    learn more
                                  </Button>
                                </Link>
                                <Link href='https://forms.gle/n255UMsJakRDiKhN7'>
                                  <Button className='m-0' color="secondary" role="button" auto >
                                    Register (Team of 5 & 2 optional) [&#8377;499]
                                  </Button></Link>

                              </Modal.Footer>
                            </div>
                          </div>
                        </Modal>

                      </div>

                    </div>
                  </div>
                  <div className="bg-white shadow-md rounded-lg overflow-hidden w-[19rem]">
                    <div className="bg-cover h-[18rem] p-4 " style={{ backgroundImage: "url('https://i.postimg.cc/J42bwG5N/low-poly-grid-haikei.png')" }}>
                      <Img className='w-[10rem] h-[16rem] m-auto'
                        src={film}
                        width={200} height={180} quality={100}
                      />
                    </div>
                    <div className="p-4 card_content">
                      <h1 className="capitalize text-2xl font-bold text-gray-700">Webies</h1>
                      <p className="mt-2 text-gray-600 my-7"></p>
                      <Button color="secondary" role="button" onPress={handler7} >
                        Explore
                      </Button>



                      <div>
                        <Modal
                          closeButton
                          // scroll
                          blur
                          width='80%'
                          aria-labelledby="modal-title"
                          aria-describedby="modal-description"
                          open={visible7}
                          onClose={closeHandler7}

                        >
                          <div className='event_modal'>
                            <Image
                              showSkeleton
                              src="https://i.postimg.cc/y6RGZwP9/webies.png"
                              width={4000}
                              height={490}

                            />
                            <div>
                              <Modal.Header>
                                <Text id="modal-title" className='font-black' size={18}>
                                  Webies
                                </Text>
                              </Modal.Header>
                              <Modal.Body>
                                <Text id="modal-description" >
                                  <h1 className='font-bold'>Date: 25th OCT 2023</h1> <br />

                                  <p className='font-semibold'>Webbies is a fun-filled quiz event based on web series. It consists of three rounds:
                                    Level Up, Elimination, and Rapid Fire.</p>

                                </Text>
                              </Modal.Body>
                              <Modal.Footer className='mt-10 mr-5'>
                                <Link href='https://drive.google.com/file/d/1F1-O7eGf9A_7NPyn1PqVArK2dRQQyD6h/view?usp=sharing'>
                                  <Button className='m-0' color="secondary" role="button" auto flat>
                                    learn more
                                  </Button>
                                </Link>
                                <Link href='https://forms.gle/jPemRaUmBa7xZKCg9'>
                                  <Button className='m-0' color="secondary" role="button" auto >
                                    Register (Single) [&#8377;69]
                                  </Button></Link>
                                <Link href='https://forms.gle/5GzJRnesGgWjQSRm7'>
                                  <Button className='m-0' color="secondary" role="button" auto >
                                    Register (Duo) [&#8377;89]
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
              <div className='grid place-items-center w-full'>
                <Layout
                  handleClick={handleClick}
                  isSomeActive={isSomeActive}
                  data={data}
                  turn={active}
                  setTurn={setActive}
                />
              </div>


              {/* <div className="my-20" id='sponsor'>
                <h1 className="text-6xl  mb-20 text-white tracking-wide"> SPONSORS </h1>
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
         font-family: "Montserrat", sans-serif;
          font-weight: 600;
        }
        .event_modal p{
           font-family: "Montserrat", sans-serif;
          font-weight: 300;
        }
        #modal-title{
          font-size: 1.8rem;
           font-family: "Montserrat", sans-serif;
          font-weight: 600;
        }
        #modal-description h1{
          font-size: 1.2rem;
        }

        #modal-description p{
          font-size:1em;
        }
.about__drishti p{
  color: white;
  line-height: 34px;
  font-size: larger;
  text-align: justify;
  font-family: "Montserrat", sans-serif;

}
.card_content h1{
  font-family: "Montserrat", sans-serif;
}
.about__drishti{
  background: #44146b;
}
ul li a{
  font-family: "Montserrat", sans-serif;
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
  background-image: url(https://i.postimg.cc/xCPbmkft/drishti-bgg.png);
  background-image: url(https://i.postimg.cc/qqBNMP7Z/drishti-bgg-1.webp);
  background-color: rgba(0, 0, 0, 0.6);
  background-blend-mode: hard-light;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100vw 100vh;
  aspect-ratio: 16/9;
  position: relative;
  width: 99vw;
  height: 100%;
  border-radius: 15px;
  padding-block-end: 2rem;
  padding-inline: 2rem;
  overflow-x: clip;
   font-family: "Montserrat", sans-serif;
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
@font-face {
  font-family: myFirstFont;
  src: url(drishti.otf);
}

.drishtifont {
  font-family: myFirstFont;
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


.about_img{
//  background-image: url('https://s6.gifyu.com/images/S4Xmu.gif');
//  background-image: url('https://i.postimg.cc/Kv632MxV/ezgifcom-optimize-1.gif');
 background-image: url('https://i.postimg.cc/G90CtYLg/ezgif-com-gif-to-webp.webp');
}
.drishti{
  color:white;
}
        .body1{background-image: linear-gradient( 202deg, hsl(270deg 100% 7%) 0%, hsl(260deg 89% 10%) 6%, hsl(249deg 80% 14%) 13%, hsl(239deg 71% 18%) 19%, hsl(228deg 63% 22%) 25%, hsl(218deg 56% 26%) 31%, hsl(208deg 50% 31%) 37%, hsl(197deg 44% 36%) 44%, hsl(187deg 38% 41%) 50%, hsl(177deg 33% 47%) 56%, hsl(166deg 32% 53%) 63%, hsl(156deg 34% 59%) 69%, hsl(145deg 37% 66%) 75%, hsl(135deg 41% 73%) 81%, hsl(125deg 47% 80%) 87%, hsl(114deg 58% 87%) 94%, hsl(104deg 100% 95%) 100% );
        
          background: linear-gradient(to top, rgb(14 14 14), rgb(88, 28, 135),rgb(15, 23, 42),rgb(0 0 0), rgb(23 23 23));
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
  // background: url(https://i.postimg.cc/xCPbmkft/drishti-bgg.png);
  background: url(https://i.postimg.cc/qqBNMP7Z/drishti-bgg-1.webp);
  background-size: cover;
  background-repeat: no-repeat;
  width: 99VW;
  margin-left: -6px;
  height: 100vh;
}
        .page {
          font-family: Avenir, Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-align: center;
          color: #2c3e50;
          // margin-top: 60px;
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
        button{
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
            width: 100%;
            margin: auto;
        }
        
        .navbar{
            // box-shadow: 0px 5px 10px 0px black;
            position: fixed;
            width: 100%;
         background: #0f0f0f;
        //  bakground: transparent;
            color: #fff;
            opacity: 0.85;
            z-index: 100;
            animation: navbar 2.4s ease-in-out;
        }

        @keyframes navbar {
          from {
            top: -100%;
          }
          to {
            top: 0%;
          }
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
          
          width: 180px;
          height: 70px;

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
        .boxer{
          position: absolute;
          position: absolute;
          opacity: 0;
          right: 7%;
          animation: welcome 1.5s alternate forwards ease-in-out;
          animation-delay: 0.8s;
        }

        @keyframes welcome {
          from {
            top: 0%;
            opacity: 0;
          }
          to {
            opacity: 1;
            top: 40%;
          }
        }
        .button-72 {
          align-items: center;
          background-color: initial;
          background-image: linear-gradient(rgba(179, 132, 201, .84), rgba(57, 31, 91, .84) 50%);
          border-radius: 42px;
          border-width: 0;
          box-shadow: rgba(57, 31, 91, 0.24) 0 2px 2px,rgba(179, 132, 201, 0.4) 0 8px 12px;
          color: #FFFFFF;
          cursor: pointer;
          display: flex;
          font-family: Quicksand,sans-serif;
          font-size: 18px;
          font-weight: 700;
          justify-content: center;
          letter-spacing: .04em;
          line-height: 16px;
          margin: 0;
          padding: 18px 18px;
          text-align: center;
          text-decoration: none;
          text-shadow: rgba(255, 255, 255, 0.4) 0 0 4px,rgba(255, 255, 255, 0.2) 0 0 12px,rgba(57, 31, 91, 0.6) 1px 1px 4px,rgba(57, 31, 91, 0.32) 4px 4px 16px;
          user-select: none;
          -webkit-user-select: none;
          touch-action: manipulation;
          vertical-align: baseline;
          margin: auto;
        }
        
        .button-72:hover {
          background-image: linear-gradient(#B384C9, #391F5B 50%);
        }


        @media (max-width: 768px){
      
     
          .button-72 {
            font-size: 21px;
            padding: 18px 34px;
          }
          .boxer{
            position: absolute;
            
            opacity: 0;
            animation: welcomee 2s alternate forwards ease-in-out;
            animation-delay: 1.5s;
          }

          @keyframes welcomee {
            from {
              top: 0%;
              opacity: 0;
            }
            to {
              opacity: 1;
              top: 50%;
            }
          }
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
                
                background: #0f0f0f;
                height: 100vh;
                // max-width: 300px;
                transform: translate(-150%);
                display: flex;
                flex-direction: column;
                margin-left: -40px;
                padding-left: 40px;
                transition: transform 0.5s ease-in-out;
                // box-shadow:  5px 0px 10px 0px #aaa;
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
          height: 100%;
        }
        Modal{
          width: 100%;
        }
        .event_modal div{
          width: 100%;
          height: 80%;
          padding: 2px;
          margin: 0;
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
          width: 168px;
          position: relative;
          left: 11px;
          bottom: 11px;
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
