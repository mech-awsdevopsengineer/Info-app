import React from 'react';
import Box from '@mui/material/Box';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';
import { orange, red, lightBlue, lightGreen } from '@mui/material/colors';
import { Form, FormGroup, FormControl, FormLabel, Row, FloatingLabel } from 'react-bootstrap';
import '../styles/Contact.css';


const Contact = () => {


    const sendEmail = (e) => {
        e.preventDefault();

        const service_id = 'YOUR_SERVICE_ID';
        const template_id = 'template_aq16tgs';
        const user_id = '8JzeNtGbNWVRuiDzT';
    
        emailjs.sendForm(service_id, template_id, user_id, e.target)
        .then((result) => {
            alert('Message Sent Successfully', result)
        },
        (error) => {
            alert('Something went wrong, please try again later or try with social media', error)
        }
        );
        e.target.reset();
    
    };

    

    return (
        <Box sx={{ 
            width: 550, 
            height: 520, 
            borderRadius: 2, 
            boxShadow: 4,
            border: 1, 
            bgcolor: 'background.paper',
            marginLeft: 25

            }}>
            <page>
                <Form onSubmit={sendEmail}>
                    <h2>Contact Me</h2>
                    <Form.Group  >
                        <FloatingLabel label="Name" / >
                        <Form.Control type='text' name='from_name' required />
                    </Form.Group>
                    <Form.Group  >
                        <FloatingLabel label="Email" / >
                        <Form.Control   type='email' placeholder='name@gmail.com' name='from_email' required />
                    </Form.Group>
                    <Form.Group >
                        <FloatingLabel label="Message" / >
                        <Form.Control  as={'textarea'} rows={3} name='message' required  />
                    </Form.Group>
                    <Button variant="contained" endIcon={<SendIcon />} type='submit' value='Send' >Send</Button>
                </Form>
                {/* <h1>Contact Me</h1>
                <TextField id="outlined-basic" label="Name" variant="outlined" type='text' name='user_name' size='small'/><br/><br/>
                <TextField id="outlined-basic" label="Email" variant="outlined" type='email' placeholder='name@gmail.com' name='user_email' size='small' /><br/><br/>
                <TextField id="outlined-multiline-static" label="Message"  name='message' multiline rows={4} size='small' /><br/><br/>
                <Button variant="contained" endIcon={<SendIcon />} type='submit' value='Send' >Send</Button> */}
            </page>
            <page >
                <h5>--------------------or--------------------</h5>
               <h2>Social Media</h2>
               <a href="https://www.instagram.com/abishek.m_vd/" ><InstagramIcon fontSize='large' sx={{ color: orange[500] }}/></a>
               <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" ><EmailIcon fontSize='large' sx={{ color: red[500] }}/></a>
               <a href="https://www.instagram.com/abishek.m_vd/" ><FacebookIcon fontSize='large' sx={{ color: lightBlue[500] }} /></a>
               <a href="https://www.instagram.com/abishek.m_vd/" ><WhatsAppIcon fontSize='large' sx={{ color: lightGreen[500] }}/></a>
            </page>
        </Box>
    )
}

export default Contact;