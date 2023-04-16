import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { GrDomain } from 'react-icons/gr';
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
    <a href="http://127.0.0.1:8000/whois/" target="_blank">
    <Card
      sx={{
        minWidth: 455,
        width: '300px',
        height: '275px',
        position: 'absolute',
        top: '150px',
        left: '530px',
        '@media (max-width: 1515px)': {
          left: '465px',
          minWidth: 350,
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
                <GrDomain size={72} />
                <Typography variant="h5" component="div" className='title' sx={{ mt: 1 }}>
                  Domain
                </Typography>
              </>
            ) : (
              <GrDomain size={130} />
            )}
          </Box>
        </CardContent>
        {hovered && (
          <CardActions>
            <a href="http://127.0.0.1:8000/whois/" target="_blank">
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
// import { GrDomain } from 'react-icons/gr';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

// export default function CompanyCard() {
//   return (
//     <Card
//     sx={{
//       minWidth: 455,
//       width: '300px',
//       height: '275px',
//       position: 'absolute',
//       top: '150px',
//       left: '530px',
//       '@media (max-width: 1515px)': {
//         left: '465px',
//         minWidth: 350,
//         height: '230px',
//       },
//     }}
//     boxShadow='rgb(164, 20, 47) 0px 1px 5px 5px'

//     className="card"
//   >
//      {/* <Card sx={{  minWidth: 455, width: '300px', height: '275px', position: 'absolute', top: '150px', left: '545px' }} className="card"> */}
// <CardContent>
//   <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
//     <GrDomain size={72} />
//     <Typography variant="h5" component="div" className='title' sx={{ mt: 1 }}>
//       Domain
//     </Typography>
//   </Box>
// </CardContent>

//   <CardActions>
//     <Typography className='desc'>
//       Domain information
//     </Typography>
//   </CardActions>
// </Card>



//   );
// }