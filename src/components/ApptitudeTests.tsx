
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';

function AptitudeTests() {
    return (
        <div id="aptitudeTests">
            <h1 className='logo'>Aptitude Tests</h1>
            <Grid container spacing={2}>
                <Grid xs={6} sm={4} md={3} lg={2} item>
                    <Card>
                        <CardMedia
                            component="img"
                            image="gre.webp"
                            alt="Logo could not be loaded"
                        />
                    </Card>
                </Grid>
                <Grid  xs={6} sm={4} md={3} lg={2} item >
                    <Card>
                        <CardMedia
                            component="img"
                            image="/apptitude/CAT-2018-1000x600.webp"
                            alt="Logo could not be loaded"
                        />
                    </Card>
                </Grid>
                <Grid  xs={6} sm={4} md={3} lg={2} item>
                    <Card>
                        <CardMedia
                            component="img"
                            image="/apptitude/TOEFL.webp"
                            alt="Logo could not be loaded"
                        />
                    </Card>
                </Grid>
                <Grid xs={6} sm={4} md={3} lg={2} item >
                    <Card>
                        <CardMedia
                            component="img"
                            image="/apptitude/snap.webp"
                            alt="Logo could not be loaded"
                        />
                    </Card>
                </Grid>
                <Grid  xs={6} sm={4} md={3} lg={2} item >
                    <Card>
                        <CardMedia
                            component="img"
                            image="/apptitude/XAT.webp"
                            alt="Logo could not be loaded"
                        />
                    </Card>
                </Grid>
                <Grid  xs={6} sm={4} md={3} lg={2} item >
                    <Card >
                        <CardMedia
                            component="img"
                            image="/apptitude/SDA.webp"
                            alt="Logo could not be loaded"
                        />
                    </Card>
                </Grid>
                <Grid  xs={6} sm={4} md={3} lg={2} item >
                    <Card>
                        <CardMedia
                            component="img"
                            image="/apptitude/MukeshPatelSchoolLogo.webp"
                            alt="Logo could not be loaded"
                        />
                    </Card>
                </Grid>
                
            </Grid>
        </div>
    );
}

export default AptitudeTests;