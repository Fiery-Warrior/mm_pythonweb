import React from 'react';
import BasicCard from './Control/Rshell';
import SocialE from './Control/Worm';
import CompanyCard from './Control/Keylogger';
import ReconA from './Control/DoS';
import ScanningCardW from './Control/Virus';
import Bscanning from './Control/Bjacking';
/*<iframe src="http://127.0.0.1:8000/run_command/" width="100%" height="500" allowFullScreen allow="http://127.0.0.1:8000/"></iframe>*/

const Control = () => {
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

export default Control;
