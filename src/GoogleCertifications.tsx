import Grid from '@mui/material/Grid'
import GoogleCodeJam2022_001 from "./images/Certificates/Google/Code Jam 2022_page-0001.webp"
import GoogleCodeJam2021_001 from "./images/Certificates/Google/Code Jam 2021_page-0001.webp"
import KickStart2019_001 from "./images/Certificates/Google/KickStart 2019_page-0001.webp"
import KickStart2020_001 from "./images/Certificates/Google/KickStart 2020_page-0001.webp"
import KickStart2021_001 from "./images/Certificates/Google/KickStart 2021_page-0001.webp"

export default function GoogleCertifications() {
    return (
        <div id="googleCertificates">
            <h1 className='logo'>Google Competitions</h1>
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <img
                        className='certificate'
                        src={GoogleCodeJam2022_001}
                        alt="Certificate"
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <img
                        className='certificate'
                        src={GoogleCodeJam2021_001}
                        alt="Certificate"
                    />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} sm={12} md={4}>
                    <img
                        className='certificate'
                        src={KickStart2019_001}
                        alt="Certificate"
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <img
                        className='certificate'
                        src={KickStart2020_001}
                        alt="Certificate"
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <img
                        className='certificate'
                        src={KickStart2021_001}
                        alt="Certificate"
                    />
                </Grid>
            </Grid>

        </div>
    )
}