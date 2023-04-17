import React, { useEffect, useState } from "react";
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
import { BsGithub } from "react-icons/bs"
import { MdMenu } from "react-icons/md"
import { NavLink } from "./NavbarElements";
import { SiTorproject } from "react-icons/si"
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import logo from './logo.png';

import './hambar.css';
const StyledTooltip = styled(({ className, ...props }) => (
	<Tooltip {...props} classes={{ popper: className }} />
  ))`
	& .MuiTooltip-tooltip {
	  background: #FF3B30;
	  font-size: 18px;
	}
  `;

const Navbar = () => {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
	  const handleResize = () => setWidth(window.innerWidth);
	  window.addEventListener("resize", handleResize);
	  return () => window.removeEventListener("resize", handleResize);
	}, []);

	
	const openNav = () => {
		document.getElementById("mySidepanel").style.width = "250px";
	}
	
	const closeNav = () => {
		document.getElementById("mySidepanel").style.width = "0";
	}
return (
	<div className="App">
		<div className='flex-container-top'>


		{/* <a
                className="App-link"
                href="http://127.0.0.1:8000/web-terminal/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Moriarty
            </a> */}
			<img src={logo} alt="logo" style={{width: '200px', height: '35px'}} className='logo-moriarty'/>




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
				<a href="http://127.0.0.1:8000/hambar#section-2">Recon</a>
				<a href="http://127.0.0.1:8000/hambar/#section-2">Weapon</a>
				<a href="http://127.0.0.1:8000/hambar/#section-2">Delivery</a>
				<a href="#">Exploit</a>
				<a href="#">Install</a>
				<a href="#">Control</a>
				<a href="#">Actions-Obj</a>
				<a href="#">Ip Map</a>


			</div>






            <a href="http://127.0.0.1:8000">
            <AiFillHome className='icon-house' id = 'home' />
            </a>


			<a href= "https://tor.calyxinstitute.org/" target="_blank">
              <SiTorproject className='icon-tor' id ='tor'/>
            </a>

			<>

			<a href= "https://github.com/Fiery-Warrior/moriarty-matrix" target="_blank">
				<BsGithub className='icon-circle' id ='clock'/>
			</a>


				<StyledTooltip  title="Recon">
					<NavLink to="/reconicon" activeStyle>
						<GiMagnifyingGlass className='icon' id ='recon'/>
					</NavLink>
				</StyledTooltip >

				<StyledTooltip  title="Weapon">
					<NavLink to="/weapon" activeStyle>
						<GiAnvilImpact className='icon' id ='weaponization'/>
					</NavLink>
				</StyledTooltip >

				<StyledTooltip  title="Delivery">
					<NavLink to="/delivery" activeStyle>
						<TfiEmail className='icon' id ='delivery'/>
					</NavLink>
				</StyledTooltip >

				<StyledTooltip  title="Exploit">
					<NavLink to="/exploit" activeStyle>
						<BsFillDoorOpenFill className='icon' id ='exploitation'/>
					</NavLink>
				</StyledTooltip >


				<StyledTooltip  title="Install">
					<NavLink to="/install" activeStyle>
						<FaDownload className='icon' id ='install'/>
					</NavLink>
				</StyledTooltip >

				<StyledTooltip  title="Control">
					{/* <NavLink to="/control" activeStyle> */}
					<a href="http://127.0.0.1:8000/connections/"> {/** onClick={() => window.location.reload()} */}

						<IoLogoGameControllerB className='icon' id ='command-control'/>
						  </a>

					{/* </NavLink> */}
				</StyledTooltip >

				<StyledTooltip  title="Objective">
					<NavLink to="/objectives" activeStyle>
						<FaLaptopCode className='icon' id ='actions-on-objective'/>
					</NavLink>
				</StyledTooltip >

			</>

			<a
				href="http://127.0.0.1:8000/web-terminal/"
				target="_blank"
				style={{ display: width > 1515 ? "block" : "none" }}
			>
				<CgTerminal className="terminal-icon" id="terminal" />
			</a>
			<BsPersonCircle
				className="profile"
				id="profile"
				style={{ display: width > 1515 ? "block" : "none" }}
			/>

			{/* <a href="http://127.0.0.1:8000/web-terminal/" target="_blank">
            <CgTerminal className= 'terminal-icon' id = 'terminal' />
            </a>
            <BsPersonCircle className='profile' id = 'profile'/> */}

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

