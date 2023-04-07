import React from 'react'
import Head from 'next/head'
import Footer from './api/components/Footer'

function Contactus() {
    return (
        <>
            <div className='body1'>
                <Head>
                    <title>Drishti 2k23</title>
                    <link rel="icon" href="/favicon.ico" />
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
                <div class="relative flex items-top justify-center min-h-screen bg-white dark:bg-gray-900 sm:items-center sm:pt-0">
                    <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
                        <div class="mt-8 overflow-hidden">
                            <div class="grid grid-cols-1 md:grid-cols-2">
                                <div class="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                                    <h1 class="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                                        Get in touch
                                    </h1>
                                    <p class="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                                        Fill in the form to start a conversation
                                    </p>

                                    <div class="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                            Sector-27, Mihan Rehabilitation Colony

                                            Khapri, Nagpur - 441108


                                        </div>
                                    </div>

                                    <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                            8459795840
                                        </div>
                                    </div>

                                    <div class="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                            gcoenmesa@gmail.com
                                        </div>
                                    </div>
                                </div>

                                <form action="https://formsubmit.co/gcoenmesa@gmail.com"
                                    method="POST" class="p-6 flex flex-col justify-center ">
                                    <div class="flex flex-col">
                                        <label for="name" class="hidden">Full Name</label>
                                        <input type="name" name="name" id="name" placeholder="Full Name" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-white font-semibold focus:border-indigo-500 focus:outline-none" />
                                    </div>

                                    <div class="flex flex-col mt-2">
                                        <label for="email" class="hidden">Email</label>
                                        <input type="email" name="email" id="email" placeholder="Email" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-white font-semibold focus:border-indigo-500 focus:outline-none" />
                                    </div>

                                    <div class="flex flex-col mt-2">
                                        <label for="tel" class="hidden">Number</label>
                                        <input type="tel" name="tel" id="tel" placeholder="Telephone Number" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-white font-semibold focus:border-indigo-500 focus:outline-none" />
                                    </div>
                                    <div class="flex flex-col mt-2">
                                        <label for="message" class="hidden">Message</label>
                                        <textarea name="message" id="message" rows="5" placeholder="Message" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-white font-semibold focus:border-indigo-500 focus:outline-none "></textarea>
                                    </div>

                                    <button type="submit" class="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300">
                                        Submit
                                    </button>
                                    <input type="hidden" name="_next"
                                        value="https://thankyou-drishti.netlify.app/" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
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
        </>
    )
}

export default Contactus