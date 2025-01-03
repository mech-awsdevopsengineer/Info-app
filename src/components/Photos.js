import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import me1 from '../images/me1.png';
import me2 from '../images/me2.png';
import me3 from '../images/me3.png';

const disableRightClick = (event) => {
  if (event.button === 2) {
    event.preventDefault();
    return false;
  }
}


const Info = () => {
  return (
    <Box sx={{ width: 800, height: 500, overflowY: 'scroll', marginLeft: 8 }} onContextMenu={disableRightClick} >
      <ImageList variant="masonry" cols={3} gap={8} onContextMenu={disableRightClick} >
        <ImageListItem key={me1}>
          <img onContextMenu={disableRightClick} 
            srcSet={`${me1}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${me1}?w=248&fit=crop&auto=format`}
            alt={me1}
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem key={me2}>
          <img onContextMenu={disableRightClick} 
            srcSet={`${me2}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${me2}?w=248&fit=crop&auto=format`}
            alt={me2}
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem key={me3}>
          <img onContextMenu={disableRightClick} 
            srcSet={`${me3}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${me3}?w=248&fit=crop&auto=format`}
            alt={me3}
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem key={me1}>
          <img onContextMenu={disableRightClick} 
            srcSet={`${me1}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${me1}?w=248&fit=crop&auto=format`}
            alt={me1}
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem key={me2}>
          <img onContextMenu={disableRightClick} 
            srcSet={`${me2}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${me2}?w=248&fit=crop&auto=format`}
            alt={me2}
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem key={me3}>
          <img onContextMenu={disableRightClick} 
            srcSet={`${me3}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${me3}?w=248&fit=crop&auto=format`}
            alt={me3}
            loading="lazy"
          />
        </ImageListItem>
      </ImageList>
    </Box>
  );
}


export default Info;