import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from '@mui/material/Grid';

function ContactMe() {
    return (
        <div id="contactMe">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3} lg={2}>
                    <span className='pm'><a className='pb' href='https://www.instagram.com/yash.tibrewal.17/'><InstagramIcon className='pm'></InstagramIcon>Instagram</a></span>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2}>
                    <span className='pm'><a className='pb' href='https://www.linkedin.com/in/yash-tibrewal/'><LinkedInIcon className='pm'></LinkedInIcon>LinkedIn</a></span>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2}>
                    <span className='pm'><a className='pb' href='https://github.com/yashtibrewal'><GitHubIcon className='pm'></GitHubIcon>Github</a></span>
                </Grid>
            </Grid>
        </div>

    )
}

export default ContactMe;