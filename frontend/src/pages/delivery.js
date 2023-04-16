import React from "react";
import Email from './Delivery/Email';
import USB from './Delivery/USB';
import Bluetooth from './Delivery/Bluetooth';
import FTP from './Delivery/FTP';
import Link from './Delivery/Link';
import Text from './Delivery/Text';

const Delivery = () => {
return (
	<div>
		<Email/>
		<USB/>
		<Bluetooth/>
		<FTP/>
		<Link/>
		<Text/>

	</div>
);
};

export default Delivery;
