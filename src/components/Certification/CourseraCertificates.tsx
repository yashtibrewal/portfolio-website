import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip'
import Link from '@mui/material/Link'

function CourseraCertificates() {
    return (
        <div id="courseraCert">
            <h2 className="logo"><Link href='https://www.coursera.org/user/b66ffe392694af9fbba1a4b58a8c948b'>Coursera Profile</Link></h2>
            <Grid container xs={12}>
                <Grid item xs={4}>
                    <Card className="card">
                        <CardMedia
                            component="img"
                            height="100%"
                            image="/Certificates/Coursera Certications/Python Basics.jpg"
                            alt="Image could not be loaded"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Python Basics
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                This course is offered by University of Michigan. Course contains basics for Python.
                            </Typography>
                        </CardContent>
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Skill" />
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Coursera" />

                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card className="card">
                        <CardMedia
                            component="img"
                            height="100%"
                            image="/Certificates/Coursera Certications/Python DS.jpg"
                            alt="Image could not be loaded"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Python Data Structures
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                This course is offered by University of Michigan. The course certificate is obtained post an exam.
                            </Typography>
                        </CardContent>
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Skill" />
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Coursera" />
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card className="card">
                        <CardMedia
                            component="img"
                            height="100%"
                            image="/Certificates/Coursera Certications/Python WC.jpg"
                            alt="Image could not be loaded"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Using Python to access the Web
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                This course is offered by University of Michigan. It invloves web crawling assignemnts and exams.
                            </Typography>
                        </CardContent>
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Skill" />
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Coursera" />
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default CourseraCertificates;