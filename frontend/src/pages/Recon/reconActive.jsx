import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { MdSignalWifiStatusbarConnectedNoInternet4 } from 'react-icons/md';
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
    <a href="http://127.0.0.1:8000/filedisplayip/" target="_blank">
      <Card
      sx={{
        minWidth: 455,
        width: '300px',
        height: '275px',
        position: 'absolute',
        top: '465px',
        left: '530px',
        '@media (max-width: 1515px)': {
          left: '465px',
          minWidth: 350,
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
                <MdSignalWifiStatusbarConnectedNoInternet4 size={72} />
                <Typography variant="h5" component="div" className='title' sx={{ mt: 1 }}>
                  IP Identity
                </Typography>
              </>
            ) : (
              <MdSignalWifiStatusbarConnectedNoInternet4 size={130} />
            )}
          </Box>
        </CardContent>
        {hovered && (
          <CardActions>
            <a href="http://127.0.0.1:8000/filedisplayip/" target="_blank">
            </a>
          </CardActions>
        )}
      </Card>
    </a>
  );
}