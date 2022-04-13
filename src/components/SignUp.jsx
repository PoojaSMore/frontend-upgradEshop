import React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Container, Typography, Stack, FormControl, TextField, Button, Link} from '@mui/material';
import { Box } from '@mui/system';

const formControlStyle = { margin: 1, width: 300 }; // style for the inputs

// main SignUp component
function SignUpPage() {
    return ( <>
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2 }}> 
            <Stack sx={{ justifyContent: 'center', alignItems: 'center', padding: 2, backgroundColor: 'whitesmoke' }}>
                {/* Lock Icon at the top of Sign Up Page */}
                <Avatar sx={{ display: 'div', backgroundColor: 'secondary.dark', textAlign: 'center', m:1 }}>
                    <LockOutlinedIcon sx={{ color: 'white', margin: 'auto'}}></LockOutlinedIcon>
                </Avatar>
                <Typography sx={{ fontWeight: 'bold', fontFamily: 'revert', mb: 1}}>Sign Up</Typography>
            
                {/* Form Inputs */}
                <FormControl id='firstname' sx={formControlStyle}>
                    <TextField label="First Name*" variant="outlined" size="small"></TextField>
                </FormControl>
                <FormControl id='lastname' sx={formControlStyle}>
                    <TextField label="Last Name *" variant="outlined" size="small"></TextField>
                </FormControl>
                <FormControl id='emailadd' sx={formControlStyle}>
                    <TextField label="Email Address *" variant="outlined" size="small"></TextField>
                </FormControl>
                <FormControl id='password' sx={formControlStyle}>
                    <TextField label="Password *" variant="outlined" size="small"></TextField>
                </FormControl>
                <FormControl id='confirmpass' sx={formControlStyle}>
                    <TextField label="Confirm Password *" variant="outlined" size="small"></TextField>
                </FormControl>
                <FormControl id='contactnumber' sx={formControlStyle}>
                    <TextField label="Contact Number *" variant="outlined" size="small"></TextField>
                </FormControl>

                {/* Sign Up button */}
                <Button variant="contained" sx={{ width: 300, mt: 1}}>SIGN UP</Button>

                {/* Link below the button to SIGN IN */}
                <Box sx={{ display:'flex', width: 300, flexDirection: 'row-reverse' }}>
                    <Link href='login' sx={{ mt: 1, fontSize: 14 }}>Already have an account? Sign In</Link>
                </Box>
            </Stack>
        </Container>
    </> );
}

export default SignUpPage;