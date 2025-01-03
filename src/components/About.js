import React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


const disableRightClick = (event) => {
    if (event.button === 2) {
      event.preventDefault();
      return false;
    }
}
  

const About = () => {
    return (
        <><Stack direction="row" spacing={3} marginLeft={8} mt={10}  onContextMenu={disableRightClick} >
            <DemoPaper square={false} border="5">
                <h3 align="center">Family Details</h3>
                <p>
                    Suram Name: Mothukuri<br />
                    Cast: BC-B(Goud's)<br />
                    Name: Abishek<br />
                    Father Name: Thirupathi<br />
                    Mother Name: Srilatha<br />
                    YoungerBrother Name: Sujith Sai<br />
                    Location: Godavarikhani
                </p>
            </DemoPaper>
            <DemoPaper square={false}>
                <h3 align="center">Brith Details</h3>
                <p>
                    BOD: 05-Nov-1996<br />
                    TOB: 12:45pm afternoon<br />
                    Day: Tuesday<br />
                    Rashi: Leo<br />
                    Nakshatra: Magha<br />
                    Height: 5.6<br />
                </p>
            </DemoPaper>
            <DemoPaper square={false}>
                <h3 align="center">Career Details</h3>
                <p>
                    Education: B-Tech(Mechanical Eng)<br />
                    POY: 2019<br />
                    Job: Software Engineer<br />
                    Father Occupation: Business<br />
                    Mother Occupation: Teacher<br />
                    Brother Occupation: MS<br />
                </p>
            </DemoPaper>
        </Stack><Stack sx={{ width: '100%' }} spacing={2} mt={7} >
        <marquee behavior="scroll" direction="left" color="red">If you like to know more about me, Please contact me...!</marquee>
        </Stack></>
    )
}

const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 300,
    height: 300,
    border: 5,

    padding: theme.spacing(3),
    ...theme.typography.body2,
    textAlign: 'left',
  }));
  

export default About;