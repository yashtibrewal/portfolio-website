import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip'

function CourseraCertificates() {
    return (
        <div id="courseraCert">
            <h2 className="logo">Coursera Courses</h2>
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
                                Using Python to access the Web Data
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