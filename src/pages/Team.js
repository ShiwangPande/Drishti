import React from 'react'
import Head from 'next/head'
import Footer from './api/components/Footer'

function Team() {
	return (
		<>
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
							<li>
								<a className='btn btn-ghost' href="/">Home</a></li>
							<li>
								<a className='btn btn-ghost' href="/event">
									Event</a></li>
							{/* <li><a className='btn btn-ghost' href="#">Gallery</a></li> */}
							<li><a className='btn btn-ghost' href="/Team">Team</a></li>
							<li><a className='btn btn-ghost' href="/Contactus">Contact Us</a></li>
						</ul>

						<h1 class="logo"> <img src="https://i.postimg.cc/BZ86NBKF/whites-logo.webp" alt="" /></h1>
					</div>
				</nav>
				<div class=" min-h-screen bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  sm:items-center sm:pt-0">
					<div class="">
						<div class="">

							<ul class="honeycomb" lang="es">
								<li class="honeycomb-cell">
									<img class="honeycomb-cell__image" src="https://i.postimg.cc/Kv3dWcq5/1.png" />
									<div class="honeycomb-cell__title">Maurya Khandait <small>President</small> </div>
								</li>
								<li class="honeycomb-cell">
									<img class="honeycomb-cell__image" src="https://i.postimg.cc/rwS78nL0/2.png" />
									<div class="honeycomb-cell__title">Shiwang Pandey <small>Vice President</small></div>
								</li>
								<li class="honeycomb-cell">
									<img class="honeycomb-cell__image" src="https://i.postimg.cc/T2mZ0KC0/parth.png" />
									<div class="honeycomb-cell__title">Parth Tirmare<small>Vice President</small></div>
								</li>
								<li class="honeycomb-cell">
									<img class="honeycomb-cell__image" src="https://i.postimg.cc/MHNgGgTR/4.png" />
									<div class="honeycomb-cell__title">Ketaki Mahalle <small>Secretary</small></div>
								</li>
								<li class="honeycomb-cell">
									<img class="honeycomb-cell__image" src="https://i.postimg.cc/XvLh5rqn/5.png" />
									<div class="honeycomb-cell__title">Sushrut Kohale<small>Joint Secretary</small></div>
								</li>
								<li class="honeycomb-cell">
									<img class="honeycomb-cell__image" src="https://i.postimg.cc/XvLh5rqn/5.png" />
									<div class="honeycomb-cell__title">Pushpak Khotele<small>Organisation Head</small></div>
								</li>
								<li class="honeycomb-cell">
									<img class="honeycomb-cell__image" src="https://i.postimg.cc/d1SxWgGX/6.png" />
									<div class="honeycomb-cell__title">Rutuja Nimbalkar<small>Organization Co Head</small></div>
								</li>
								<li class="honeycomb-cell">
									<img class="honeycomb-cell__image" src="https://i.postimg.cc/Kc1GZ2p1/7.png" />
									<div class="honeycomb-cell__title">Varun Dudhane <small>Organization Co head</small></div>
								</li>
								<li class="honeycomb-cell">
									<img class="honeycomb-cell__image" src="https://i.postimg.cc/prh13kZd/8.png" />
									<div class="honeycomb-cell__title">Ayush Khangar  <small>Organization Co head</small></div>
								</li>
								<li class="honeycomb-cell">
									<img class="honeycomb-cell__image" src="https://i.postimg.cc/GtTz2263/Untitled-design-18.png" />
									<div class="honeycomb-cell__title">Vedant Nimgade<small>Sports Coordinator</small></div>
								</li>
								<li class="honeycomb-cell">
									<img class="honeycomb-cell__image" src="https://i.postimg.cc/NGZgFzZp/9.png" />
									<div class="honeycomb-cell__title">Virendra Rathod<small>Sports Head</small></div>
								</li>
								<li class="honeycomb-cell">
									<img class="honeycomb-cell__image" src="https://i.postimg.cc/wMCbzJfQ/10.png" />
									<div class="honeycomb-cell__title">Prasad Sawalkar<small>Sports Head</small></div>
								</li>
								<li class="honeycomb-cell">
									<img class="honeycomb-cell__image" src="https://i.postimg.cc/PrZdwMjh/11.png" />
									<div class="honeycomb-cell__title">Ameya Moharil<small>Sports Co head</small></div>
								</li>
								<li class="honeycomb-cell">
									<img class="honeycomb-cell__image" src="https://i.postimg.cc/Bn04c1SF/12.png" />
									<div class="honeycomb-cell__title">Nilay Pathak<small>sports co head</small></div>
								</li>
								<li class="honeycomb-cell">
									<img class="honeycomb-cell__image" src="https://i.postimg.cc/52S1PNyR/13.png" />
									<div class="honeycomb-cell__title">Shlok Tajne<small>Treasurer</small></div>
								</li>
								<li class="honeycomb-cell">
									<img class="honeycomb-cell__image" src="https://i.postimg.cc/wBxzn8sT/14.png" />
									<div class="honeycomb-cell__title">Aditya Muddamwar <small>Joint Treasurer</small></div>
								</li>
								<li class="honeycomb-cell">
									<img class="honeycomb-cell__image" src="https://i.postimg.cc/tgrbjShd/15.png" />
									<div class="honeycomb-cell__title">Nikita Rahangdale <small>Ladies representative</small></div>
								</li>
								<li class="honeycomb-cell">
									<img class="honeycomb-cell__image" src="https://i.postimg.cc/ZRCSK8cG/16.png" />
									<div class="honeycomb-cell__title">Radhika Pimple <small>Ladies representative</small></div>
								</li>
								<li class="honeycomb-cell">
									<img class="honeycomb-cell__image" src="https://i.postimg.cc/1XF1DybM/17.png" />
									<div class="honeycomb-cell__title">Asmita Suryavanshi <small>Ladies representative</small></div>
								</li>
								<li class="honeycomb-cell">
									<img class="honeycomb-cell__image" src="https://i.postimg.cc/d1pK7hNL/18.png" />
									<div class="honeycomb-cell__title">Arnav Gadpayle<small>Tech Head</small></div>
								</li>
								<li class="honeycomb-cell">
									<img class="honeycomb-cell__image" src="https://i.postimg.cc/G2MZW4nX/19.png" />
									<div class="honeycomb-cell__title">Ranashashank Ambad <small>Technical Co head</small></div>
								</li>
								<li class="honeycomb-cell">
									<img class="honeycomb-cell__image" src="https://i.postimg.cc/HnVfdTpd/20.png" />
									<div class="honeycomb-cell__title">Mitali Stephen <small>Technical co head</small></div>
								</li>
								<li class="honeycomb-cell">
									<img class="honeycomb-cell__image" src="https://i.postimg.cc/htFHRFNR/21.png" />
									<div class="honeycomb-cell__title">Sushant Gujar<small>Executive Member</small></div>
								</li>
								<li class="honeycomb-cell">
									<img class="honeycomb-cell__image" src="https://i.postimg.cc/1RjkMVHt/22.png" />
									<div class="honeycomb-cell__title">Anurag Darvatkar <small>Executive Member</small></div>
								</li>
								<li class="honeycomb-cell">
									<img class="honeycomb-cell__image" src="https://i.postimg.cc/Hk4NMR6n/IMG-20230726-170900-834.jpg" />
									<div class="honeycomb-cell__title">Prajwal Akarte <small>Executive Member</small></div>
								</li>
								<li class="honeycomb-cell honeycomb__placeholder"></li>
							</ul>
						</div>
					</div>

				</div>
				<Footer />
			</div >
			<style jsx global > {`
			    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&family=Russo+One&display=swap');
                @import url("https://fonts.googleapis.com/css?family=Montserrat:400,700");
body {
  font-family: "Montserrat", sans-serif;
  background: #121212;
}


.honeycomb {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  transform: translateY(34.375px);
  padding-top: 140px;
  padding-bottom: 140px;
}
.honeycomb-cell {
  flex: 0 1 250px;
  max-width: 250px;
  height: 137.5px;
  margin: 65.4761904762px 12.5px 25px;
  position: relative;
  padding: 0.5em;
  text-align: center;
  z-index: 1;
}
.honeycomb-cell__title {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  -webkit-hyphens: auto;
      -ms-hyphens: auto;
          hyphens: auto;
  word-break: break-word;
  text-transform: uppercase;
  color: #fff;
  font-weight: 700;
  font-size: 1.75em;
  transition: opacity 350ms;
}
.honeycomb-cell__title > small {
  font-weight: 300;
  margin-top: 0.25em;
}
.honeycomb-cell__image {
  -o-object-fit: contain;
     object-fit: contain;
  -o-object-position: center;
     object-position: center;
     backgourd: transparent;
}
.honeycomb-cell::before, .honeycomb-cell::after {
  content: "";
}
.honeycomb-cell::before, .honeycomb-cell::after, .honeycomb-cell__image {
  top: -50%;
  left: 0;
  width: 100%;
  height: 200%;
  display: block;
  position: absolute;
  -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  z-index: -1;
}
.honeycomb-cell::before {
  background: #fff;
  transform: scale(1.055);
}
.honeycomb-cell::after {
  background: #121212;
  opacity: 0.5;
  transition: opacity 350ms;
}
.honeycomb-cell:hover .honeycomb-cell__title {
  opacity: 0;
}
.honeycomb-cell:hover::before {
//   background: #72f88e;
  background: #0f0f0f;
}
.honeycomb-cell:hover::after {
  opacity: 0;
}
.honeycomb__placeholder {
  display: none;
  opacity: 0;
  width: 250px;
  margin: 0 12.5px;
}

@media (max-width: 550px) {
  .honeycomb-cell {
    margin: 81.25px 25px;
  }
}
@media (min-width: 550px) and (max-width: 825px) {
  .honeycomb-cell:nth-child(3n) {
    margin-right: calc(50% - 125px);
    margin-left: calc(50% - 125px);
  }

  .honeycomb__placeholder:nth-child(3n+5) {
    display: block;
  }
}
@media (min-width: 825px) and (max-width: 1100px) {
  .honeycomb-cell:nth-child(5n+4) {
    margin-left: calc(50% - 275px);
  }

  .honeycomb-cell:nth-child(5n+5) {
    margin-right: calc(50% - 275px);
  }

  .honeycomb__placeholder:nth-child(5n), .honeycomb__placeholder:nth-child(5n+3) {
    display: block;
  }
}
@media (min-width: 1100px) {
  .honeycomb-cell:nth-child(7n+5) {
    margin-left: calc(50% - 400px);
  }

  .honeycomb-cell:nth-child(7n+7), .honeycomb-cell:nth-child(7n+5):nth-last-child(2) {
    margin-right: calc(50% - 400px);
  }

  .honeycomb__placeholder:nth-child(7n+7), .honeycomb__placeholder:nth-child(7n+9), .honeycomb__placeholder:nth-child(7n+11) {
    display: block;
  }
}

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
	opacity: 0;
	right: 7%;
	animation: welcome 3s alternate forwards ease-in-out;
	animation-delay: 1.5s;
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
  }`}</style>
		</>
	)
}

export default Team