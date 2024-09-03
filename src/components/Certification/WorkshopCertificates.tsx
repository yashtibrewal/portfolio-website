/**
 * Need to add to present website
 */

import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip'
import Link from '@mui/material/Link'

export default function WorkshopCertificates() {
    return (
        <div id="workshopCertificates">
            <h1 className="logo">Workshops</h1>
            <Grid container>
                <Grid item xs={12} sm={6} md={3}>
                    <Card className="card">
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
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Android Workshop by 
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
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Member of 
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