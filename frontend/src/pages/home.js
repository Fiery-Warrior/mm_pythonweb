import { useState } from "react";

import { GiMagnifyingGlass } from "react-icons/gi";
import { IoPerson } from 'react-icons/io5';
import { CgWebsite } from 'react-icons/cg';
import { MdSignalWifiStatusbarConnectedNoInternet4 } from 'react-icons/md';
import { MdOutlinePhishing } from 'react-icons/md';

import { BsBluetooth } from 'react-icons/bs';
import username from './HomeCards/images/username.png';
import domain from './HomeCards/images/domain.png';
import ip from './HomeCards/images/ip.png';
import clone from './HomeCards/images/clone.png';



import { GiAnvilImpact } from "react-icons/gi";
import { TfiEmail } from "react-icons/tfi";
import { FaDownload } from "react-icons/fa"
import { IoLogoGameControllerB } from "react-icons/io"
import { BsFillDoorOpenFill } from "react-icons/bs"
import { FaLaptopCode } from "react-icons/fa"


import Card from "./HomeCards/homecards";



  

function Home() {

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    borderBottom: '1px solid yellow',
  };

  return (
    <div
      className="slim-container"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "flex-start",
        width: "100vw",
        maxWidth: "100%",
        padding: "20px",
      }}
    >


<Card
  icon={<GiMagnifyingGlass style={{ color: '#FF3B30' }}/>}
  title="Recon"
  className="card"
  description={
    <div>
      <Card
        // icon={<IoPerson />}
        icon={<IoPerson /> }
        title="Username"
        description={
          <div>
            <h3>This phase is about Username and their accounts.</h3>
            <br/>
            <p>If you have a username (such as from instagram), you can input that username and will receive 
              urls to numerous accounts that it is registered with: popular examples include: spotify, youtube, Buzzfeed, Quizlet, and
              other sites that will give an insight into the user's prefrences and lifestyle. </p>
            <br/> 
            <p>After finding information about the target an attacker may use this information to reach out to target on various platforms, assume their identity,
              craft phishing emails, etc...</p>
              <br/>
            <p>Backend & Database Powered by</p> <a href = "https://github.com/sherlock-project/sherlock.git" style={linkStyle} target="_blank">Sherlock</a>
          </div>
        }
        image= {username} className = "img-large"
        underImageDescription = "Inputted username: icecube and outputted accounts with that URL"
      />

      <Card
        icon={<CgWebsite />}
        
        title="Domain"
        description={
          <div>
            <h3>This phase is about analyzing Domains </h3>
            <br/>
            <p>If you have a domain (such as youtube.com), you can input that domain and will receive 
              data on it is registered with </p>
            <br/> 
            <p>After finding information about the domain an attacker may use this information</p>
              <br/>
            <p>Backend & Database Powered by whois</p> 
          </div>
        }
        image= {domain} className = "img-large"
        underImageDescription = "Inputted domain url: youtube.com and outputted data"
      />



      <Card
        icon={<MdSignalWifiStatusbarConnectedNoInternet4 />}
        title="IP Analysis"
        description={
          <div>
            <h3>This phase is about IP and its information </h3>
            <br/>
            <p>If you have an ip address (ping a domain if you want to find one) You can analyze who owns it and where it is specifically located</p>
            <br/> 
            <p>After finding information about the ip an attacker may use this information in various fashions such as knowing where someone lives</p>
              <br/>
          </div>
        }
        image= {ip} className = "img-large"
        underImageDescription = "Inputted domain ip 172.217.17.238"
      />


      <Card
        icon={<MdOutlinePhishing/>}
        title="Phishing"
        description={
          <div>
            <h3>This phase is about Website cloning and Phishing </h3>
            <br/>
            <p>Once the attacker has determined an individual's preferences he may craft a phishing email that the
              has a greater chance of the target clicking on it. See use case below:
            </p>
            <br/> 
            <p>The attacker may send a phishing email saying that it has detected an unauthorized login from --insert location where they are not-- and then
              it asks them to reset their login information following the below link (it is to the malicious social-media clone) after the target enters their information they will be redirected to the true social-media.com</p>
              <br/>
            <p>This is considered active recon, and is explained for educational purposes only. if it is used: The Creator (and all who helped with this project) are exempt from any blame</p> 
          </div>
        }
        image= {clone} className = "img-large" //image = "https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
        underImageDescription = "Due to copyright issues I have used the title of social-media instead of any actual site"
      />


      <Card
        icon={<BsBluetooth/>}
        title="Bluetooth"
        description={
          <div>
            <h3>This phase is about Bluetooth and its use for scanning nearby devices </h3>
            <br/>
            <p>If you have a domain (such as youtube.com), you can input that domain and will receive 
              data on it is registered with </p>
            <br/> 
            <p>After finding information about the domain an attacker may use this information</p>
              <br/>
            <p>Backend & Database Powered by whois</p> 
          </div>
        }
        image= {domain} className = "img-large"
        underImageDescription = "Inputted domain url: youtube.com and outputted data"
      />
    </div>
  }
/>

 {/*Recon Card end */}


    <Card
    icon={<GiAnvilImpact style={{ color: '#FF3B30' }}/>}
    title="Weapon"
    description="This section is about exploit and how it is important in cybersecurity."
    image="https://raw.githubusercontent.com/qeeqbox/osint/main/readme/osint_logo.png"
    />
    <Card
    icon={<TfiEmail style={{ color: '#FF3B30' }}/>}
    title="Delivery"
    description="This section is about phishing and how it is important in cybersecurity."
    image="https://images.unsplash.com/photo-1518458028783-6fbfbc7d017b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHwxfHx8fHx8Mnx8MTYyMzA0NTIyNg&ixlib=rb-1.2.1&q=80&w=1080"
    />
    <Card
    icon={<BsFillDoorOpenFill style={{ color: '#FF3B30' }}/>}
    title="Exploit"
    description="This section is about malware and how it is important in cybersecurity."
    image="https://images.unsplash.com/photo-1531191053094-64c3c8354b2e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHwxfHx8fHx8Mnx8MTYyMzA0NTI4Ng&ixlib=rb-1.2.1&q=80&w=1080"
    />
    <Card
    icon={<FaDownload style={{ color: '#FF3B30' }}/>}
    title="Install"
    description="This section is about install and how it is important in cybersecurity."
    image="https://images.unsplash.com/photo-1531191053094-64c3c8354b2e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHwxfHx8fHx8Mnx8MTYyMzA0NTI4Ng&ixlib=rb-1.2.1&q=80&w=1080"
    />    
    <Card
    icon={<IoLogoGameControllerB style={{ color: '#FF3B30' }}/>}
    title="Control"
    description="This phase is about receiving initial connections."
    image="https://images.unsplash.com/photo-1611550032916-1f032d19cda7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHwxfHx8fHx8Mnx8MTYyMzA0NTM5Nw&ixlib=rb-1.2.1&q=80&w=1080"
    />
    <Card
    icon={<FaLaptopCode style={{ color: '#FF3B30' }}/>}
    title="Objectives"
    description="This section is about making the target machine do your (the attacker's will on objective) and how malicious code is used"
    image="https://images.unsplash.com/photo-1611550032916-1f032d19cda7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHwxfHx8fHx8Mnx8MTYyMzA0NTM5Nw&ixlib=rb-1.2.1&q=80&w=1080"
    />
    </div>
  );
}

export default Home;
