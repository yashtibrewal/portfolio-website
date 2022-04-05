import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from '@mui/material/Grid';

function ContactMe() {
    return (
        <div id="contactMe">
            <Grid container>
                <Grid item xs={12} sm={6} md={3} lg={2}>
                    <PermPhoneMsgIcon className='pm'></PermPhoneMsgIcon><span className='pm'> +91 88790 34882</span>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2}>
                    <EmailIcon className='pm'></EmailIcon><span className='pm'>yashtibrewal@ufl.edu</span>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2}>
                    <InstagramIcon className='pm'></InstagramIcon><span className='pm'><a className='pb' href='https://www.instagram.com/yash.tibrewal.17/'>Instagram</a></span>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2}>
                    <EmailIcon className='pm'></EmailIcon><span className='pm'>yashkush.tibrewal@gmail.com</span>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2}>
                    <LinkedInIcon className='pm'></LinkedInIcon><span className='pm'><a className='pb' href='https://www.linkedin.com/in/yash-tibrewal/'>LinkedIn</a></span>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2}>
                    <GitHubIcon className='pm'></GitHubIcon><span className='pm'><a className='pb' href='https://github.com/yashtibrewal'>Github</a></span>
                </Grid>
            </Grid>
        </div>

    )
}

export default ContactMe;