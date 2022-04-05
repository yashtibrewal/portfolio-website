import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip'
import Link from '@mui/material/Link'
import IETLink from '../Utilities/IET';

export default function WorkshopCertificates() {
    return (
        <div id="workshopCertificates">
            <h1 className="logo">Workshops</h1>
            <Grid container>
                <Grid item xs={12} sm={6} md={3}>
                    <Card className="card">
                        <CardMedia
                            component="img"
                            height="100%"
                            image="/Certificates/General Certificates/Campus_Connect-0.webp"
                            alt="Image could not be loaded"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Campus Connect by <Link href='https://www.infosys.com/'>Infosys</Link>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                A workshop conducted by Infosys with interest to teach the industry standards.
                            </Typography>
                        </CardContent>
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="2 Week" />
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Industry Connect" />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card className="card">
                        <CardMedia
                            component="img"
                            height="100%"
                            image="/Certificates/Workshop Certificates/Android_Workshop.webp"
                            alt="Image could not be loaded"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Android Workshop by <IETLink></IETLink>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                I took this workshop along with my classes to polish my Android skills.
                            </Typography>
                        </CardContent>
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="2 day" />
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Android" />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card className="card">
                        <CardMedia
                            component="img"
                            height="100%"
                            image="/Certificates/Workshop Certificates/Artificial_Intelligence_Workshop_IIT_B.webp"
                            alt="Image could not be loaded"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Artificial Intelligence by <Link href="https://www.iitb.ac.in/">I.I.T Bombay</Link>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                A workshop conducted to implement M.L. algorithms.
                            </Typography>
                        </CardContent>
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="2 Day" />
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Python" />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card className="card">
                        <CardMedia
                            component="img"
                            height="100%"
                            image="/Certificates/General Certificates/IET Certificate.webp"
                            alt="Image could not be loaded"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Member of <IETLink></IETLink>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                I was awarded for working in the I.E.T commity in college. My tasks broadly including working on posters and digital work.
                            </Typography>
                        </CardContent>
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="1 Year" />
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Photoshop" />
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}