import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip'
import Link from '@mui/material/Link'

function CompetitionCertificates() {
    return (
        <div id="compCert">
            <h2 className="logo">Hackathons</h2>
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <Card className="card">
                        <CardMedia
                            component="img"
                            height="100%"
                            image="/Certificates/Competition Certificates/Codeshastra DJ_page-0001.webp"
                            alt="Image could not be loaded"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Codeshastra Hackathon by <Link href='https://www.djsce.ac.in/'>DJSCE</Link>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                The hackathon was an open topic. I worked in a team of 2. Partner Aniketh Nair.
                            </Typography>
                        </CardContent>
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Competition" />
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="JavaScript" />
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="One Day" />

                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Card className="card">
                        <CardMedia
                            component="img"
                            height="100%"
                            image="/Certificates/Competition Certificates/Hack n code IET Hackathon_page-0001.webp"
                            alt="Image could not be loaded"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Hack n Code Hackathon
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                This hackathon was conducted by <Link href="https://www.theiet.org/">I.E.T</Link>
                            </Typography>
                        </CardContent>
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Competition" />
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Java" />
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="One Day" />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Card className="card">
                        <CardMedia
                            component="img"
                            height="100%"
                            image="/Certificates/Competition Certificates/ML Deep Blue Mastek_page-0001.webp"
                            alt="Image could not be loaded"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Deep Blue by <Link href="https://www.mastek.com/">Mastek</Link>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                TSolved real work problem. Team of 4: Devwrat Tanwar, Jhanvi Shah, Animesh Yadav.
                            </Typography>
                        </CardContent>
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Competition" />
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Machine Learning" />
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="3 Months" />
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default CompetitionCertificates;