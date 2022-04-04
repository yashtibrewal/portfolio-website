import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
function ContactMe() {
    return (
        <div id="contactMe">
            <PermPhoneMsgIcon className='pm'></PermPhoneMsgIcon><div className='pm'> +91 88790 34882</div>
            <EmailIcon className='pm'></EmailIcon><div className='pm'>yashtibrewal@ufl.edu</div>
            <EmailIcon className='pm'></EmailIcon><div className='pm'>yashkush.tibrewal@gmail.com</div>
            <InstagramIcon className='pm'></InstagramIcon><div className='pm'><a className='pb' href='https://www.instagram.com/yash.tibrewal.17/'>Instagram</a></div>
            <LinkedInIcon className='pm'></LinkedInIcon><div className='pm'><a className='pb' href='https://www.linkedin.com/in/yash-tibrewal/'>LinkedIn</a></div>
            <GitHubIcon className='pm'></GitHubIcon><div className='pm'><a className='pb' href='https://github.com/yashtibrewal'>Github</a></div>
        </div>
    )
}

export default ContactMe;