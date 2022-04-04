
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
                            image="data:image/jpeg;base64,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"
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

                                    S:24

                                    W:23
                                </Typography>
                            </CardContent>
                        </Box>
                        <CardMedia
                            component="img"
                            image="https://yt3.ggpht.com/ytc/AKedOLTHh6PM-4-qTnoMXd3M6cTOx52vTcRVZG8ndunMTA=s900-c-k-c0x00ffffff-no-rj"
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