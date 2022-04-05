
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function AptitudeTests() {
    return (
        <div id="aptitudeTests">
            <h1 className='logo'>Aptitude Tests</h1>
            <Grid container>
                <Grid xs={12} sm={12} md={4} className='aptitutdeTestItems' item >
                    <Card>
                        <CardMedia
                            component="img"
                            sx={{ width: 300 }}
                            image="gre.webp"
                            alt="Logo could not be loaded"
                        />
                        <CardContent className="fs2rem">
                            310
                        </CardContent>

                    </Card>
                </Grid>
                <Grid xs={12} className='aptitutdeTestItems' item >
                    <Card>
                        <CardMedia
                            className='aptitudeItem'
                            component="img"
                            image="/apptitude/TOEFL.webp"
                            sx={{ width: 300 }}
                            alt="Logo could not be loaded"
                        />
                        <CardContent className='fs2rem'>
                            95
                        </CardContent>

                    </Card>
                </Grid>
                <Grid xs={12} sm={12} md={4} className='aptitutdeTestItems' item >
                    <Card>
                        <CardMedia
                            component="img"
                            sx={{ width: 300 }}
                            image="/apptitude/CAT-2018-1000x600.webp"
                            alt="Logo could not be loaded"
                        />
                        <CardContent className="fs2rem">
                            Percentile 74.14
                        </CardContent>

                    </Card>
                </Grid>
                <Grid xs={12} sm={12} md={4} className='aptitutdeTestItems' item >
                    <Card>
                        <CardMedia
                            component="img"
                            sx={{ width: 300 }}
                            image="/apptitude/XAT.webp"
                            alt="Logo could not be loaded"
                        />
                        <CardContent className="fs2rem">
                            Percentile 59.102
                        </CardContent>

                    </Card>
                </Grid>
                <Grid xs={12} sm={12} md={4} className='aptitutdeTestItems' item >
                    <Card >
                        <CardMedia
                            component="img"
                            sx={{ width: 300 }}
                            image="/apptitude/SDA.webp"
                            alt="Logo could not be loaded"
                        />
                        <CardContent className="fs2rem">
                            40% Scholarship
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={12} sm={12} md={4} className='aptitutdeTestItems' item >
                    <Card>
                        <CardMedia
                            component="img"
                            sx={{ width: 300 }}
                            image="/apptitude/MukeshPatelSchoolLogo.webp"
                            alt="Logo could not be loaded"
                        />
                        <CardContent className="fs2rem">
                            Scaled Score 189
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={12} sm={12} md={4} className='aptitutdeTestItems' item >
                    <Card>
                        <CardMedia
                            component="img"
                            sx={{ width: 300 }}
                            image="/apptitude/snap.webp"
                            alt="Logo could not be loaded"
                        />
                        <CardContent className="fs2rem">
                            Percentile 54.1548
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default AptitudeTests;