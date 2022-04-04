
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function AptitudeTests() {
    return (
        <div id="aptitudeTests">
            <h1 className='logo'>Aptitute Tests</h1>
            <Grid container xs={12}>
                <Grid className='aptitutdeTestItems' item xs={3}>
                    <Card sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    GRE
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    AWA 3.5

                                    Quants 162

                                    Verbal 144
                                </Typography>
                            </CardContent>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image="gre.webp"
                            alt="Logo could not be loaded"
                        />
                    </Card>
                </Grid>
                <Grid className='aptitutdeTestItems' item xs={3}>
                    <Card sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    TOEFL
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    R:21

                                    L:27
                                    <br/>
                                    S:24

                                    W:23
                                </Typography>
                            </CardContent>
                        </Box>
                        <CardMedia
                            component="img"
                            image="/toefl.jpeg"
                            sx={{ width: 151 }}
                            alt="Logo could not be loaded"
                        />
                    </Card>
                </Grid>
                <Grid className='aptitutdeTestItems' item xs={3}>
                    <Card sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    CAT
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    Percentile 74.14
                                </Typography>
                            </CardContent>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image="https://digitallearning.eletsonline.com/wp-content/uploads/2019/01/CAT-2018-1000x600.jpg"
                            alt="Logo could not be loaded"
                        />
                    </Card>
                </Grid>
                <Grid className='aptitutdeTestItems' item xs={3}>
                    <Card sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    XAT
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    Percentile 59.102
                                </Typography>
                            </CardContent>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image="https://www.careerindia.com/img/2015/01/12-1421046089-xlri.jpg"
                            alt="Logo could not be loaded"
                        />
                    </Card>
                </Grid>
                <Grid className='aptitutdeTestItems' item xs={6}>
                    <Card sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    SDA Bocconi
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    Accepted with 40% Scholarship
                                </Typography>
                            </CardContent>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: 350 }}
                            image="https://assets.impactpool.org/logos/sda-bocconi-school-of-management-f767e790-86c2-42c6-868b-4db14579bf10.svg"
                            alt="Logo could not be loaded"
                        />
                    </Card>
                </Grid>
                <Grid className='aptitutdeTestItems' item xs={3}>
                    <Card sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    NMAT
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    Scaled Score 189
                                </Typography>
                            </CardContent>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: 150 }}
                            image="https://design.nmims.edu/images/nmims-logo.png"
                            alt="Logo could not be loaded"
                        />
                    </Card>
                </Grid>
                <Grid className='aptitutdeTestItems' item xs={3}>
                    <Card sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    SNAP
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    Percentile 54.1548
                                </Typography>
                            </CardContent>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: 150 }}
                            image="https://www.examsplanner.in/media/snap-exam.jpg"
                            alt="Logo could not be loaded"
                        />
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default AptitudeTests;