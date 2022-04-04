import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip'

function ProfesionalCertificates() {
    return (
        <div>
            <h1 className="logo">Professional Work Acknowledgements</h1>
            <Grid container xs={12}>
                <Grid item xs={4}>
                    <Card className="card">
                        <CardMedia
                            component="img"
                            height="100%"
                            image="Certificates/Hacker Rank Certifications/PSB.png"
                            alt="Image could not be loaded"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Problem Solving
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                I have experienced problem solving skills by attempting multiple coding challenges over time on multiple platforms.
                            </Typography>
                        </CardContent>
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Skill" />
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="HackerRank" />

                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card className="card">
                        <CardMedia
                            component="img"
                            height="100%"
                            image="Certificates/Hacker Rank Certifications/CBasic.png"
                            alt="Image could not be loaded"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Language C Basic
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Althought I find C programming difficult, I made an attempt to solve coding challenges in C.
                            </Typography>
                        </CardContent>
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Skill" />
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="HackerRank" />
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card className="card">
                        <CardMedia
                            component="img"
                            height="100%"
                            image="Certificates/Hacker Rank Certifications/CIntermediate.png"
                            alt="Image could not be loaded"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Language C Intermediate
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                After solving multiple coding challeneges in C, I tried and achieved the intermeditate Certificate.
                            </Typography>
                        </CardContent>
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Skill" />
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="HackerRank" />
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProfesionalCertificates;