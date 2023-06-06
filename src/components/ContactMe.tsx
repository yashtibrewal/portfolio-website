import Grid from '@mui/material/Grid';

function ContactMe() {
    return (
        <div id="contactMe">
            <Grid justifyContent={'center'} alignContent={'center'} container spacing={2}>
                <Grid item xs={12} sm={6} md={3} lg={2}>
                    <span className='pm'><a target="_blank" rel="noreferrer" className='pb' href='https://www.linkedin.com/in/yash-tibrewal/'>LinkedIn</a></span>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2}>
                    <span className='pm'><a target="_blank" rel="noreferrer" className='pb' href='https://github.com/yashtibrewal'>Github</a></span>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2}>
                    <span className='pm'><a className='pb' href='mailto:yashtibrewal.in@gmail.com'>Email</a></span>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2}>
                    <span className='pm'><a className='pb' href='tel:+13528713427'>Phone</a></span>
                </Grid>
            </Grid>
        </div>

    )
}

export default ContactMe;