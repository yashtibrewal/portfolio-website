import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from '@mui/material';
function AboutMe() {
    return (
        <div id="aboutMe" >
            <h1 className='logo'>About Me</h1>
            <Grid container>
                <Grid item xs={12} sm={12} md={5}>
                    <Card className="m-5" sx={{ minWidth: 300 }}>
                        <CardContent>
                            <Typography variant="h6" component="div">
                                Quick Learner
                            </Typography>
                            <Typography variant="body2">
                                I train my brain based on feedback, just like a Nueral Network. My recent IQ test score is 105.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={1}>
                </Grid>
                <Grid item xs={12} sm={12} md={5}>
                    <Card className="m-5" sx={{ minWidth: 300 }}>
                        <CardContent>
                            <Typography variant="h6" component="div">
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
                            <Typography variant="h6" component="div">
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
                            <Typography variant="h6" component="div">
                                Interests
                            </Typography>
                            <Typography variant="body2">
                                If you have the power to hire me for the upcoming Summer 2022 or Fall 2022 as an SDE Intern, please email me.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={1}>
                </Grid>
            </Grid>
            <Link href="https://docs.google.com/document/d/1A5-oEQUGPRjOjUd2fBdAv2RaDEF6vLK0/edit?usp=sharing&ouid=118000387691405484239&rtpof=true&sd=true">Resume</Link>
        </div>
    )
}

export default AboutMe;