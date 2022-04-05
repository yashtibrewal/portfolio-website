import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { Box, CardContent, Typography, List, ListItem, ListItemText, Grid } from '@mui/material'

export default function Education() {
    return (
        <div id="education" className='education-bg'>
            <h3 className='note'>Presently pursuing Masters in Computer Science from <a href='https://www.ufl.edu/'>University of Florida.</a></h3>

            <h1 className="logo">Education 3.23/4</h1>
            <Grid container>
                <Grid item xs={12}>
                    <Card>
                        <CardMedia
                            className="degree"
                            component="img"
                            sx={{ width: 275 }}
                            image="/Degree.webp"
                            alt="Image failed to load"
                        />
                    </Card>
                    <CardContent>
                        <h2 className='logo'>Courses</h2>
                        <List>
                            <ListItem>
                                <ListItemText>Computer Programming I (A+)</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>Computer Programming II (A+)</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>Database Strucutre and Algorithms</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>Database Management System</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>Programming Workshop</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>Operating Systems</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText >Computer Networks</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>Operating Systems</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText >Distributed Computing</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText >Software Engineering</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText >UNIX Programming</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText >Advanced Computer Networking</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText >Object Oriented Analysis and Design (A+)</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText >Parellel Computing</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText >Programming for Analytics (A+)</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText >Mobile Application Development(A+)</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText >Artificial Intelligence</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText >Data Warehousing and Mining(72/100)</ListItemText>
                            </ListItem>

                        </List>
                    </CardContent>
                </Grid>
            </Grid>
            <Card >
            </Card>
        </div>
    )
}