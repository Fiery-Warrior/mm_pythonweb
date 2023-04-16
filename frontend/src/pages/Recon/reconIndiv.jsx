import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { IoPerson } from 'react-icons/io5';
import { IoMdInformationCircle } from 'react-icons/io';
import Tooltip from '@mui/material/Tooltip';

import './recon.css';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  const [hovered, setHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <a href="http://127.0.0.1:8000/sherlock/search/" target="_blank">
      <Card
        sx={{
          minWidth: 455,
          width: '300px',
          height: '275px',
          position: 'absolute',
          top: '150px',
          left: '50px',
          '@media (max-width: 1515px)': {
            minWidth: 350,
            left: '80px',
            height: '230px',
          },
        }}
        className="card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            {hovered ? (
              <>
                <IoPerson size={72} />
                <Typography variant="h5" component="div" className='title' sx={{ mt: 1 }}>
                  Username
                </Typography>
              </>
            ) : (
              <IoPerson size={130} />
            )}
          </Box>
        </CardContent>
        {hovered && (
          <CardActions>
            <a href="http://127.0.0.1:8000/sherlock/search/" target="_blank">
            </a>
          </CardActions>
        )}
      </Card>
    </a>
  );
}




// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import { IoPerson } from 'react-icons/io5';
// import { IoMdInformationCircle } from 'react-icons/io';
// import Tooltip from '@mui/material/Tooltip';

// import './recon.css';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

// export default function BasicCard() {
//   return (
//     <a href="http://127.0.0.1:8000/sherlock/search/" target="_blank">

//     <Card
//       sx={{
//         minWidth: 455,
//         width: '300px',
//         height: '275px',
//         position: 'absolute',
//         top: '150px',
//         left: '50px',
//         '@media (max-width: 1515px)': {
//           minWidth: 350,
//           left: '80px',
//           height: '230px',
//         },
//       }}
//       className="card"
//     >
//       <CardContent>

//         <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

//           <IoPerson size={72} />
//           <Typography variant="h5" component="div" className='title' sx={{ mt: 1 }}>
//             Username
//           </Typography>
        
//         </Box>


//       </CardContent>
//       {/* <CardActions>
//         <a href="http://127.0.0.1:8000/sherlock/search/" target="_blank">
//           <Typography className='desc'>
//             Input Username output account urls
//           </Typography>
//         </a>
//       </CardActions> */}
//     </Card>
//     </a>
//   );
// }




// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import { IoPerson } from 'react-icons/io5';


// import './recon.css';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

// export default function BasicCard() {
//   return (

//     <Card
//     sx={{
//       minWidth: 455,
//       width: '300px',
//       height: '275px',
//       position: 'absolute',
//       top: '150px',
//       left: '50px',
//       '@media (max-width: 1515px)': {
//         minWidth: 350,
//         left: '80px',
//         height: '230px',

//       },
//     }}
//     className="card"
//   >
//     {/* <Card sx={{  minWidth: 455, width: '300px', height: '275px', position: 'absolute', top: '150px', left: '50px' }} className="card"> */}
//   {/* <CardContent>
//     <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//     </Typography>
//     <Typography variant="h5" component="div" className='title'>
//       Username
//     </Typography>
//   </CardContent> */}
//   <CardContent>
//   <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
//     <IoPerson size={72} />
//     <Typography variant="h5" component="div" className='title' sx={{ mt: 1 }}>
//       Username
//     </Typography>
//   </Box>
// </CardContent>

//   <CardActions>
//     <a href="http://127.0.0.1:8000/sherlock/search/" target="_blank">
//     <Typography className='desc'>
//       Input Username output account urls
      
//       {/* ,<br/> phone-number, home-address  */}
//     </Typography>
//   </a>
//   </CardActions>
// </Card>



//   );
// }