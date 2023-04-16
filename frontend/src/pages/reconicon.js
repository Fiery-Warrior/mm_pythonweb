// import React from "react";
// import BasicCard from './Recon/reconIndiv';
// import SocialE from './Recon/reconSocial';
// import CompanyCard from './Recon/reconCompany';
// import ReconA from './Recon/reconActive';
// import ScanningCardW from './Recon/ScanningCard';
// import Bscanning from './Recon/reconBScan';

// const Recon = () => {
// return (
// 	<div>
// 		<BasicCard/>
// 		<CompanyCard/>
// 		<ReconA/>
// 		<ScanningCardW/>
// 		<SocialE/>
// 		<Bscanning/>

// 	</div>
// );
// };

// export default Recon;
import React, { useState, useEffect } from "react";
import BasicCard from './Recon/reconIndiv';
import SocialE from './Recon/reconSocial';
import CompanyCard from './Recon/reconCompany';
import ReconA from './Recon/reconActive';
import ScanningCardW from './Recon/ScanningCard';
import Bscanning from './Recon/reconBScan';

const About = () => {
  const [isScreenSizeSmall, setIsScreenSizeSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSizeSmall(window.innerWidth <= 1515);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <BasicCard />
      <CompanyCard />
      <ReconA />
      <ScanningCardW />
      <SocialE />
      {/* {!isScreenSizeSmall && <ScanningCardW />}
      {!isScreenSizeSmall && <SocialE />} */}
      <Bscanning />
    </div>
  );
};

export default About;
