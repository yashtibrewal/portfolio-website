import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
function AboutMe() {
    return (
        <div id="aboutMe" >
            <h1 className='logo'>About Me</h1>
            <Grid container>
                <Grid item xs={6}>
                    <Card className="item m-5" sx={{ minWidth: 300 }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Quick Learner
                            </Typography>
                            <Typography variant="body2">
                                I am a quick learner, and a logical thinker. My present interest lies in the field of Machine Learning, Full Stack Development, Software Development domains. I would like to work for a company that has an established technology team and would like to work under a mentor who could guide me in my path of technology learning.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card className="item m-5" sx={{ minWidth: 300 }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Full Stack Development
                            </Typography>
                            <Typography variant="body2">
                                Working on full stack development projects gave a good understanding of Model View Controller projects. The API development in the Node js environment was part of my role with implementing the given designs for frontend using the Vuejs technology and consuming the apis with the frontend interface. I also worked on GraphQL technology which helped me to decrease the network bandwidth which a standard api call would consume assuming the same requirement.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card className="m-5" sx={{ minWidth: 300 }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                ML exposure
                            </Typography>
                            <Typography variant="body2">
                                I liked working on Machine Learning projects during my undegraduate, especially the Deep Blue competition by Mastek. It helped me gauze my skillset against the best that was present. I learned how to create cascade files which would help me recognize faces based on training over 1000 images. It was important to create the cascade instead of using an existing one because the problem statement had patients with eye patch after cataract eye operations. Me and my team were able to finish the project and were awarded a certificate of completion.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card className="m-5" sx={{ minWidth: 300 }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Interests
                            </Typography>
                            <Typography variant="body2">
                                Based on my past experiences I would love to work in the Machine Learning or Full Stack Development or a Software Development Role in future and am actively looking for internships in the United States for Summer 2022.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            {/* <Link href="https://drive.google.com/file/d/1eu9h2_ARaKmhLounU2pirZKYZoL537tR/view?usp=sharing">Resume</Link> */}
        </div>
    )
}

export default AboutMe;