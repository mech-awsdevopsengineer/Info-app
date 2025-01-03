import React from 'react';
import { Carousel } from 'antd';
import { Box} from '@mui/material';
import hands from '../images/hands.png';
import rk from '../images/rk.png';
import sr from '../images/sr.png';
import sp from '../images/sp.png';

const contentStyle = {
  height: '400px',
  color: '#fff',
  lineHeight: '380px',
  textAlign: 'bottom',
  
};

const Home = () => {
  return (
    <Box sx={{ height: 500, width: 950, marginLeft: 8}}>
      <Carousel autoplay arrows autoplaySpeed={2000}>
      <div>
        <h3 style={contentStyle}><img src={hands} alt='hands'/></h3>
        
      </div>
      <div>
        <h3 style={contentStyle}><img src={rk} alt='rk'/></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img src={sr} alt='sr'/></h3>
      </div>
      <div>
        <h3 style={contentStyle}><img src={sp} alt='sp'/></h3>
      </div>
    </Carousel> 
    <div>
      <h4 align="center">Art</h4>
      <p align="left">
        testing about this page
      </p>
    </div>
    </Box>
  )
}

export default Home;