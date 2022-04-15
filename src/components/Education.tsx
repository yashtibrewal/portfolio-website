import Card from '@mui/material/Card'
import {List, ListItem, ListItemText, Grid } from '@mui/material'
import Degree from "../images/Degree.webp"

export default function Education() {
    return (
        <div id="education" className='education-bg'>
            <h3 className='note'>Presently pursuing Masters in Computer Science from <a href='https://www.ufl.edu/'>University of Florida.</a></h3>

            <h1 className="logo">Education 3.23/4</h1>
            <Grid container spacing={4}>
                <Grid item xs={11} sm={6}>
                    <img
                        className="degree"
                        src={Degree}
                        alt="Image failed to load"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    {/* <h2 className='logo'>Courses</h2> */}
                    <List>
                        <ListItem dense>
                            <ListItemText>Computer Programming I (A+)</ListItemText>
                        </ListItem>
                        <ListItem dense>
                            <ListItemText>Computer Programming II (A+)</ListItemText>
                        </ListItem>
                        <ListItem dense>
                            <ListItemText>Database Strucutre and Algorithms</ListItemText>
                        </ListItem>
                        <ListItem dense>
                            <ListItemText>Database Management System</ListItemText>
                        </ListItem>
                        <ListItem dense>
                            <ListItemText>Programming Workshop</ListItemText>
                        </ListItem>
                        <ListItem dense>
                            <ListItemText>Operating Systems</ListItemText>
                        </ListItem>
                        <ListItem dense>
                            <ListItemText >Computer Networks</ListItemText>
                        </ListItem>
                        <ListItem dense>
                            <ListItemText>Operating Systems</ListItemText>
                        </ListItem>
                        <ListItem dense>
                            <ListItemText >Distributed Computing</ListItemText>
                        </ListItem>
                        <ListItem dense>
                            <ListItemText >Software Engineering</ListItemText>
                        </ListItem>
                        <ListItem dense>
                            <ListItemText >UNIX Programming</ListItemText>
                        </ListItem>
                        <ListItem dense>
                            <ListItemText >Advanced Computer Networking</ListItemText>
                        </ListItem>
                        <ListItem dense>
                            <ListItemText >Object Oriented Analysis and Design (A+)</ListItemText>
                        </ListItem>
                        <ListItem dense>
                            <ListItemText >Parellel Computing</ListItemText>
                        </ListItem>
                        <ListItem dense>
                            <ListItemText >Programming for Analytics (A+)</ListItemText>
                        </ListItem>
                        <ListItem dense>
                            <ListItemText >Mobile Application Development(A+)</ListItemText>
                        </ListItem>
                        <ListItem dense>
                            <ListItemText >Artificial Intelligence</ListItemText>
                        </ListItem>
                        <ListItem dense>
                            <ListItemText >Data Warehousing and Mining(72/100)</ListItemText>
                        </ListItem>

                    </List>
                </Grid>
            </Grid>
            <Card >
            </Card>
        </div>
    )
}