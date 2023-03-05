import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './recon.css';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Bscanning() {
  return (

    <Card sx={{  minWidth: 455, width: '300px', height: '275px', position: 'absolute', top: '475px', left: '50px' }} className="card">
  <CardContent>
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    </Typography>
    <Typography variant="h5" component="div" className='title'>
      Blu. Scanning
    </Typography>
    <Typography className ='provide'>
      Provide ≥ 1
    </Typography>
  </CardContent>
  <CardActions>
    <Typography className='desc'>
      IP, MAC, WiFI, Others
    </Typography>
  </CardActions>
</Card>



  );
}