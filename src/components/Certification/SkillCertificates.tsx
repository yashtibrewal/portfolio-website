import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'
import { Link } from '@mui/material';


function SkillCertifications() {

    return (
        <div id="skillCert">
            <h2 className="logo">Skills Certifications</h2>
            <Grid container>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="card">
                        
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                <Link href="https://www.oracle.com/in/index.html">Oracle</Link> Certification
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                I was introduced to Java during my high school wanted to do more than just knowing it.
                            </Typography>
                        </CardContent>
                        
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Skill" />
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Professional" />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="card">
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                <Link href="https://www.sas.com/en_us/home.html">SAS</Link> Certification
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Programming in Analytics including generating reports in SAS. I wanted to push the limits beyond the coursework.
                            </Typography>
                        </CardContent>
                        
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Skill" />
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Professional" />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card  className="card">
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                <Link href="https://www.javascript.com/">JavaScript</Link> Certification
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                I felt unsure about my JavaScript skills. This certificate boosted my confidence.
                            </Typography>
                        </CardContent>
                        
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Skill" />
                        <Chip sx={{ justifySelf: 'end', m: 1 }} variant="outlined" label="Udemy" />
                    </Card>
                </Grid>
            </Grid>

        </div>
    )
}

export default SkillCertifications;