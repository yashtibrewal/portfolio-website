import Grid from '@mui/material/Grid'

export default function GoogleCertifications() {
    return (
        <div id="googleCertificates">
            <h1 className='logo'>Google Competitions</h1>
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <img
                        className='certificate'
                        src="/Certificates/Google/Code Jam 2022_page-0001.webp"
                        alt="Image could not be loaded"
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <img
                        className='certificate'
                        src="/Certificates/Google/Code Jam 2021_page-0001.webp"
                        alt="Image could not be loaded"
                    />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} sm={12} md={4}>
                    <img
                        className='certificate'
                        src="/Certificates/Google/KickStart 2019_page-0001.webp"
                        alt="Image could not be loaded"
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <img
                        className='certificate'
                        src="/Certificates/Google/KickStart 2020_page-0001.webp"
                        alt="Image could not be loaded"
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <img
                        className='certificate'
                        src="/Certificates/Google/KickStart 2021_page-0001.webp"
                        alt="Image could not be loaded"
                    />
                </Grid>
            </Grid>

        </div>
    )
}