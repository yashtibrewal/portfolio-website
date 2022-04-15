import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip'
import Link from '@mui/material/Link'

function ProfesionalCertificates() {
    return (
        <div id="professionalCertificates">
            <h1 className="logo">Professional Acknowledgements</h1>
            <Grid container>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="card">
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Internship at <Link href="https://www.indiainfoline.com/">IIFL</Link>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Developing chart library for stock market in various forms including candle stick, line graphs with different timings.
                            </Typography>
                        </CardContent>
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Android" />
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Java" />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="card">
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Internship at <Link 
                                href="https://www.empeetex.com"
                            >Empeetex</Link>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Developing and hosting for the company with email integration via GMail.
                            </Typography>
                        </CardContent>
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Full Stack" />
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Hosting" />
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="PHP" />
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="GMail" />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="card">
                        
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Internship at <Link href="https://neuraltechsoft.com/">NueralTechSoft</Link>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Developed a demo website. Worked on stock data analysis for insights as supervised by Dr. Mahendra Mehta.
                            </Typography>
                        </CardContent>
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Stocks" />
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Python" />
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Web Development" />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="card">
                        
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Freelance Work
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Backend Development
                            </Typography>
                        </CardContent>
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Node" />
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="MongoDB" />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="card">
                        
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Internship at <Link href="https://stylabs.in/">Stylabs</Link>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Backened Development
                            </Typography>
                        </CardContent>
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Javascript" />
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Node" />
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="MongoDB" />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="card">
                        
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Junior Full Stack at <Link href="https://stylabs.in/">Stylabs</Link>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Trained and worked in various latest technologies.
                            </Typography>
                        </CardContent>
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="TypeScript" />
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="GraphQL" />
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Vue" />
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Node" />
                    </Card>
                </Grid>

            </Grid>
            </div>
    )
}

export default ProfesionalCertificates;