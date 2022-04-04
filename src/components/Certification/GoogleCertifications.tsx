import Grid from '@mui/material/Grid'

export default function GoogleCertifications() {
    return (
        <div id="googleCertifications">
            <h1 className='logo'>Google Competitions</h1>
            <Grid container xs={12}>
                <Grid item xs={6}>
                    <img
                        className='certificate'
                        src="/Certificates/Google/Code Jam 2022_page-0001.jpg"
                        alt="Image could not be loaded"
                    />
                </Grid>
                <Grid item xs={6}>
                    <img
                        className='certificate'
                        src="/Certificates/Google/Code Jam 2021_page-0001.jpg"
                        alt="Image could not be loaded"
                    />
                </Grid>
            </Grid>
            <Grid container xs={12}>
                <Grid item xs={4}>
                    <img
                        className='certificate'
                        src="/Certificates/Google/KickStart 2019_page-0001.jpg"
                        alt="Image could not be loaded"
                    />
                </Grid>
                <Grid item xs={4}>
                    <img
                        className='certificate'
                        src="/Certificates/Google/KickStart 2020_page-0001.jpg"
                        alt="Image could not be loaded"
                    />
                </Grid>
                <Grid item xs={4}>
                    <img
                        className='certificate'
                        src="/Certificates/Google/KickStart 2021_page-0001.jpg"
                        alt="Image could not be loaded"
                    />
                </Grid>
            </Grid>

        </div>
    )
}