import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
function AboutMe() {
    return (
        <div id="aboutMe" >
            <h1 className='logo'>About Me</h1>
            <Grid container>
                <Grid item xs={12} sm={12} md={5}>
                    <Card className="m-5" sx={{ minWidth: 300 }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Quick Learner
                            </Typography>
                            <Typography variant="body2">
                                I train my brain based on feedback, just like a Nueral Network ;)
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={1}>
                </Grid>
                <Grid item xs={12} sm={12} md={5}>
                    <Card className="m-5" sx={{ minWidth: 300 }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Full Stack Development
                            </Typography>
                            <Typography variant="body2">
                                I have worked on multiple full stack development projects. They were very difficult, but I completed them.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={1}>
                </Grid>
                <Grid item xs={12} sm={12} md={5}>
                    <Card className="m-5" sx={{ minWidth: 300 }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                ML exposure
                            </Typography>
                            <Typography variant="body2">
                                I respected the opportunity given my Mastek for Deep Blue competition. My team ranked 25 out of 1000s.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={1}>
                </Grid>
                <Grid item xs={12} sm={12} md={5}>
                    <Card className="m-5" sx={{ minWidth: 300 }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Interests
                            </Typography>
                            <Typography variant="body2">
                                I am looking to be paid. My UPI is 8879034882@airtel. However my contact number is different.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={1}>
                </Grid>
            </Grid>
            {/* <Link href="https://drive.google.com/file/d/1eu9h2_ARaKmhLounU2pirZKYZoL537tR/view?usp=sharing">Resume</Link> */}
        </div>
    )
}

export default AboutMe;