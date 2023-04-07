import React from 'react'
import Head from 'next/head'
import Link from "next/link";
import { Card, Col, Text } from "@nextui-org/react";
import { Modal, useModal, Button, Image } from "@nextui-org/react";
import Footer from './Footer';

function About() {
	return (
		<div> <div className='body1'>
			<Head>
				<title>Drishti 2k23</title>
				<link rel="icon" href="https://see.fontimg.com/api/renderfont4/7BPoE/eyJyIjoiZnMiLCJoIjo4NSwidyI6MTI1MCwiZnMiOjY4LCJmZ2MiOiIjRkRGREZEIiwiYmdjIjoiIzAwMDAwMCIsInQiOjF9/RHJpc2h0aQ/race-guard.png" />
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
						<li>
							<a className='btn btn-ghost' href="/">Home</a></li>
						<li>
							<a className='btn btn-ghost' href="/Event">
								Event</a></li>
						{/* <li><a className='btn btn-ghost' href="#">Gallery</a></li> */}
						<li><a className='btn btn-ghost' href="/Team">Team</a></li>
						<li><a className='btn btn-ghost' href="/Contactus">Contact Us</a></li>
					</ul>
					<h1 class="logo"> <img src="https://see.fontimg.com/api/renderfont4/7BPoE/eyJyIjoiZnMiLCJoIjo4NSwidyI6MTI1MCwiZnMiOjY4LCJmZ2MiOiIjRkRGREZEIiwiYmdjIjoiIzAwMDAwMCIsInQiOjF9/RHJpc2h0aQ/race-guard.png" alt="" /></h1>
				</div>
			</nav>

			<div className="container mx-auto">
				<div className="flex flex-col items-center justify-center min-h-screen py-2">
					<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
						<div className="my-20" id='about'>
							<h1 className="text-6xl font-bold mb-5 text-white"> <img className='events' src="https://see.fontimg.com/api/renderfont4/BWPLV/eyJyIjoiZnMiLCJoIjo4NSwidyI6MTI1MCwiZnMiOjY4LCJmZ2MiOiIjRkRGREZEIiwiYmdjIjoiIzAwMDAwMCIsInQiOjF9/QWJvdXQ/race-sport.png" alt="" /> </h1>
							<div className="max-w-md w-full lg:max-w-full lg:flex border-0 my-10 aboutt ">
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
					</main>
				</div>
			</div>
			<Footer />
		</div>
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
	   
	   .body1{background-image: linear-gradient( 202deg, hsl(270deg 100% 7%) 0%, hsl(260deg 89% 10%) 6%, hsl(249deg 80% 14%) 13%, hsl(239deg 71% 18%) 19%, hsl(228deg 63% 22%) 25%, hsl(218deg 56% 26%) 31%, hsl(208deg 50% 31%) 37%, hsl(197deg 44% 36%) 44%, hsl(187deg 38% 41%) 50%, hsl(177deg 33% 47%) 56%, hsl(166deg 32% 53%) 63%, hsl(156deg 34% 59%) 69%, hsl(145deg 37% 66%) 75%, hsl(135deg 41% 73%) 81%, hsl(125deg 47% 80%) 87%, hsl(114deg 58% 87%) 94%, hsl(104deg 100% 95%) 100% );

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
	   
	   
			   .about_img{
				 background-image: url('https://img.freepik.com/free-photo/close-up-recording-video-with-smartphone-during-concert_1153-7310.jpg?w=996&t=st=1680473772~exp=1680474372~hmac=7934c62f3f2399fdb0cff4954cb7e46ccd4e4dd702b74b54647040143c911583"')
				 
			   }
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
							width: 200px;
							height: 200px;
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
								background: #333;
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
						}`}</style>
		</div>
	)
}

export default About