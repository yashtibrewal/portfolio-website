import Button from '@mui/material/Button'
import Link from '@mui/material/Link'

function ContactMe(){
    return (
        <div>
            <Link href="#contactMe"><Button sx={{margin:2}} variant="outlined">Contact Me</Button></Link>
        </div>
    )
}

export default ContactMe;