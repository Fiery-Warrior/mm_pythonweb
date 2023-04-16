import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { BsVirus2  } from 'react-icons/bs';
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
    <a href="http://127.0.0.1:8000/filedisplayvirus/" target="_blank">
      <Card
      sx={{
        minWidth: 455,
        width: '300px',
        height: '275px',
        position: 'absolute',
        top: '150px',
        right: '50px',
        '@media (max-width: 1515px)': {
          minWidth: 350,
          right: '80px',
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
                <BsVirus2  size={72} />
                <Typography variant="h5" component="div" className='title' sx={{ mt: 1 }}>
                  Virus
                </Typography>
              </>
            ) : (
              <BsVirus2  size={130} />
            )}
          </Box>
        </CardContent>
        {hovered && (
          <CardActions>
            <a href="http://127.0.0.1:8000/filedisplayvirus/" target="_blank">
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
// import './recon.css';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

// export default function Virus() {
//   return (
//     <Card
//     sx={{
//       minWidth: 455,
//       width: '300px',
//       height: '275px',
//       position: 'absolute',
//       top: '150px',
//       right: '50px',
//       '@media (max-width: 1515px)': {
//         minWidth: 350,
//         right: '80px',
//         height: '230px',

//       },
//     }}
//     className="card"
//   >
//     {/* <Card sx={{  minWidth: 455, width: '300px', height: '275px', position: 'absolute', top: '150px', right: '50px' }} className="card"> */}
//   <CardContent>
//     <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//     </Typography>
//     <Typography variant="h5" component="div" className='title'>
//       Virus
//     </Typography>
//     {/* <Typography className ='provide'>
//       Provide email
//     </Typography> */}
//   </CardContent>
//   <CardActions>
//   <a href="http://127.0.0.1:8000/filedisplayvirus/" target="_blank">

//     <Typography className='desc'>
//       Attach itself to files and can slow down machine
//     </Typography>
//     </a>

//   </CardActions>
// </Card>



//   );
// }