/*import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { GiMagnifyingGlass } from "react-icons/gi";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/about" activeStyle>
			<GiMagnifyingGlass/>
		</NavLink>
		<NavLink to="/contact" activeStyle>
			Contact Us
		</NavLink>
		<NavLink to="/blogs" activeStyle>
			Blogs
		</NavLink>
		<NavLink to="/sign-up" activeStyle>
			Sign Up
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;*/


import React from "react";
import { GiMagnifyingGlass } from "react-icons/gi";
import { GiAnvilImpact } from "react-icons/gi";
import { TfiEmail } from "react-icons/tfi";
import { FaDownload } from "react-icons/fa"
import { IoLogoGameControllerB } from "react-icons/io"
import { BsFillDoorOpenFill } from "react-icons/bs"
import { BsPersonCircle } from "react-icons/bs"
import { FaLaptopCode } from "react-icons/fa"
import { CgTerminal } from "react-icons/cg"
import { AiFillHome } from "react-icons/ai"
import { AiFillClockCircle } from "react-icons/ai"
import { MdMenu } from "react-icons/md"
import { NavLink } from "./NavbarElements";
import { SiTorproject } from "react-icons/si"
import './hambar.css';


const Navbar = () => {

	const openNav = () => {
		document.getElementById("mySidepanel").style.width = "250px";
	}
	
	const closeNav = () => {
		document.getElementById("mySidepanel").style.width = "0";
	}
return (
	<div className="App">
		<div className='flex-container-top'>


		<a
                className="App-link"
                href="http://127.0.0.1:8000/web-terminal/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Moriarty
            </a>




			{/**
            <section className='icon-hamburger-menu' id ='ham-menu'>
              <MdMenu/>
            </section>**/}
			<button className='icon-hamburger-menu' onClick={openNav}>
				☰
			</button> 

			<div id="mySidepanel" className="sidepanel">
				<a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
					x
				</a>
				<a href="http://127.0.0.1:8000/hambar/">Iphone</a>
				<a href="#">Resources</a>
				<a href="#">Commands</a>
				<a href="#">Antiforensics</a>
				<a href="#">Anonymity</a>

			</div>






            <a href="http://127.0.0.1:8000">
            <AiFillHome className='icon-house' id = 'home' />
            </a>


			<a href= "https://tor.calyxinstitute.org/" target="_blank">
              <SiTorproject className='icon-tor' id ='tor'/>
            </a>

			<>
				<NavLink to="/freq" activeStyle>
					<AiFillClockCircle className='icon-circle' id ='clock'/>
				</NavLink>

				<NavLink to="/reconicon" activeStyle>
					<GiMagnifyingGlass className='icon' id ='recon'/>
					<span className='tooltiptext'>Recon</span>
				</NavLink>

				<NavLink to="/weapon" activeStyle>
					<GiAnvilImpact className='icon' id ='weaponization'/>
					<span className='tooltiptext'>Weapon</span>
				</NavLink>

				<NavLink to="/delivery" activeStyle>
					<TfiEmail className='icon' id ='delivery'/>
					<span className='tooltiptext'>Delivery</span>
				</NavLink>

				<NavLink to="/exploit" activeStyle>
					<BsFillDoorOpenFill className='icon' id ='exploitation'/>
					<span className='tooltiptext'>Exploiting</span>
				</NavLink>

				<NavLink to="/install" activeStyle>
					<FaDownload className='icon' id ='install'/>
					<span className='tooltiptext'>Installing</span>
				</NavLink>

				<NavLink to="/control" activeStyle>
					<IoLogoGameControllerB className='icon' id ='command-control'/>
					<span className='tooltiptext'>Control</span>
				</NavLink>

				<NavLink to="/objectives" activeStyle>
					<FaLaptopCode className='icon' id ='actions-on-objective'/>
					<span className='tooltiptext'>Objectives</span>
				</NavLink>
			</>


			<a href="http://127.0.0.1:8000/web-terminal/" target="_blank">
            <CgTerminal className= 'terminal-icon' id = 'terminal' />
            </a>
            <BsPersonCircle className='profile' id = 'profile'/>

		</div>
		{/*<footer className="footer">
        <div className="logo-m">
          <h1>Moriarty</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </nav>
		</footer>*/}
	</div>
);
};

export default Navbar;

