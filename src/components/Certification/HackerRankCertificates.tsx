import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip'
import Link from '@mui/material/Link'

function HackerRankCertificates() {
    return (
        <div id="hackerCert">
            <h2 className="logo"><Link href='https://www.hackerrank.com/yashtibrewal?hr_r=1'>HackerRank   Profile</Link></h2>
            <Grid container>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="card">
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
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="card">
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
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="card">
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

export default HackerRankCertificates;