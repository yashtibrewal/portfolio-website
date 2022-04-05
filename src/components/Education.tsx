import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { Box, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material'

export default function Education() {
    return (
        <div id="education" className='education-bg'>
            <h1 className="logo">Education</h1>
            <Card  sx={{ display: 'flex' }}>
                <CardMedia
                    className="degree"
                    component="img"
                    sx={{ width: 700 }}
                    image="/Degree.webp"
                    alt="Image failed to load"
                />
                <Box className="education-bg" sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            Courses
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            <List>
                                <ListItem>
                                    <ListItemText>Computer Programming I</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>Computer Programming II</ListItemText>
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
                                    <ListItemText >Object Oriented Analysis and Design*</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText >Parellel Computing</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText >Programming for Analytics</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText >Mobile Application Development</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText >Artificial Intelligence</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText >Data Warehousing and Mining(72/100)</ListItemText>
                                </ListItem>

                            </List>
                        </Typography>
                    </CardContent>
                </Box>
                <Box className="education-bg" sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            Scores (3.23/4.0)
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            <List>
                                <ListItem>
                                    <ListItemText>(47/50)* A+</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>(47/50)* A+</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>(85/100)</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>(78/100)</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>(40/50)</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>(75/100)</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText >(71/100)</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>(75/100)</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText >(69/100)</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText >(69/100)</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText >(46/50)* A+</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText >(71/100)</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText >(83/100)* A+</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText >(87/100)</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText >(46/50)* A+</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText >(46/50)* A+</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText >(80/100)</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText >(72/100)</ListItemText>
                                </ListItem>

                            </List>
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
            <h3 className='note'>Presently pursuing Masters in Computer Science from <a href='https://www.ufl.edu/'>University of Florida.</a></h3>
        </div>
    )
}