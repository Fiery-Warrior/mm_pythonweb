import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { GiEarthWorm } from 'react-icons/gi';

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
    <a href="http://127.0.0.1:8000/filedisplayworm/" target="_blank">
      <Card
      sx={{
        minWidth: 455,
        width: '300px',
        height: '275px',
        position: 'absolute',
        top: '465px',
        right: '50px',
        '@media (max-width: 1515px)': {
          minWidth: 350,
          right: '80px',
          height: '230px',
          top: '405px',

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
                <GiEarthWorm size={72} />
                <Typography variant="h5" component="div" className='title' sx={{ mt: 1 }}>
                  Worm
                </Typography>
              </>
            ) : (
              <GiEarthWorm size={130} />
            )}
          </Box>
        </CardContent>
        {hovered && (
          <CardActions>
            <a href="http://127.0.0.1:8000/filedisplayworm/" target="_blank">
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

// export default function Worm() {
//   return (
//     <Card
//     sx={{
//       minWidth: 455,
//       width: '300px',
//       height: '275px',
//       position: 'absolute',
//       top: '465px',
//       right: '50px',
//       '@media (max-width: 1515px)': {
//         minWidth: 350,
//         right: '80px',
//         height: '230px',
//         top: '405px',

//       },
//     }}
//     className="card"
//   >
//     {/* <Card sx={{  minWidth: 455, width: '300px', height: '275px', position: 'absolute', top: '475px', right: '50px' }} className="card"> */}
//   <CardContent>
//     <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//     </Typography>
//     <Typography variant="h5" component="div" className='title'>
//       Worm
//     </Typography>
//     {/* <Typography className ='provide'>
//       Provide: email
//     </Typography> */}
//   </CardContent>
//   <CardActions>
//   <a href="http://127.0.0.1:8000/filedisplayworm/" target="_blank">

//     <Typography className='desc'>
//       Consume memory, slow down machine, and more
//     </Typography>
//   </a>

//   </CardActions>
// </Card>



 
// );
// }