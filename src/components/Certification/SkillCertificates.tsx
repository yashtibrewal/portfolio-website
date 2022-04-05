import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'


function SkillCertifications() {

    return (
        <div id="skillCert">
            <h2 className="logo">Skills Certifications</h2>
            <Grid container xs={12}>
                <Grid item xs={4}>
                    <Card className="card">
                        <CardMedia
                            component="img"
                            height="100%"
                            image="Certificates/Skills/OCAP.webp"
                            alt="Image Could not be loaded"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Oracle Certification
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.
                            </Typography>
                        </CardContent>
                        
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Skill" />
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Professional" />
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card className="card">
                        <CardMedia
                            component="img"
                            height="100%"
                            image="Certificates/Skills/SAS.webp"
                            alt="Image Could not be loaded"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                SAS Certification
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                SAS is a statistical software suite developed by SAS Institute for data management, advanced analytics, multivariate analysis, business intelligence, criminal investigation, and predictive analytics.
                            </Typography>
                        </CardContent>
                        
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Skill" />
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Professional" />
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card  className="card">
                        <CardMedia
                            component="img"
                            height="100%"
                            image="Certificates/Skills/UdemyJS.webp"
                            alt="Image Could not be loaded"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                JavaScript Certification
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.
                            </Typography>
                        </CardContent>
                        
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Skill" />
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Udemy" />
                    </Card>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}></Grid>
            </Grid>

        </div>
    )
}

export default SkillCertifications;