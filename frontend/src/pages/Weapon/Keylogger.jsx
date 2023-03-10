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

export default function Keylogger() {
  return (

    <Card sx={{  minWidth: 455, width: '300px', height: '275px', position: 'absolute', top: '150px', left: '545px' }} className="card">
  <CardContent>
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    </Typography>
    <Typography variant="h5" component="div" className='title'>
      Keylogger
    </Typography>
    <Typography className ='provide'>
      Provide: email, or IP
    </Typography>
  </CardContent>
  <CardActions>
    <Typography className='desc'>
      Logs targets keystrokes, screenshots, and passwords<br/> Saves gathered data on target machine or send back
    </Typography>
  </CardActions>
</Card>



  );
}