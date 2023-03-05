import React from "react";
import BasicCard from './Weapon/Rshell';
import SocialE from './Weapon/Worm';
import CompanyCard from './Weapon/Keylogger';
import ReconA from './Weapon/DoS';
import ScanningCardW from './Weapon/Virus';
import Bscanning from './Weapon/Bjacking';

const Weapon = () => {
return (
	<div>
		<BasicCard/>
		<CompanyCard/>
		<ReconA/>
		<ScanningCardW/>
		<SocialE/>
		<Bscanning/>

	</div>
);
};


export default Weapon;
