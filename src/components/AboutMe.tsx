
import Grid from '@mui/material/Grid';

function AboutMe() {
  return (
    <div id="aboutMe" >
      <h1 className='logo'>About Me</h1>
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <div className="aboutMetText">
            <br />
            <div>
              <p>
                I hold a <span className="semi_bold">Masters of Science in Computer Science</span> from the University of Florida, Gainesville, USA. Throughout my academic and professional journey, I have acquired a robust skill set in various domains of software development, <span className="semi_bold">full stack development</span>, including Android development, database management, website design (UI/UX), and machine learning.
              </p>

              <h3>2021-2023</h3>
              <p>
                During my master's program, I engaged in mini-projects, applying newly acquired skills in practical scenarios. My mini-projects included a <span className="semi_bold">backend development in Java</span> for mini bit-torrent project in computer networking and a survey paper in an advanced computer networking course. I also opted for subjects that involved hands-on coding using machine learning libraries, enhancing my proficiency in the field.
              </p>
            </div>
            <div>
              <h3>2020-2021</h3>
              <p>
                Amidst the challenges posed by the COVID-19 pandemic, I secured a technical intern position at Stylabs, initially focusing on <span className="semi_bold"> backend development</span> including <span className="semi_bold">NodeJs, ExpressJs, MongoDB</span> and expanding my role to include <span className="semi_bold">frontend development in VueJS, Vuex</span> to create admin portals. Within five months, my dedication led to a promotion to <span className="semi_bold">junior full-stack developer</span>.
              </p>
            </div>
            <div>
              <h3>2019-2020</h3>
              <p>
                Following my bachelor's degree, I explored freelance opportunities, utilizing my web design expertise to create static websites for clients. I collaborated with NeuralTechSoft, where I applied Python to analyze stock market data. In a team of two, designed, hosted website for Empeetex company, including email configuration from GMail.
              </p>
              <h3>2015-2019</h3>
              <p>
                I completed my <span className='semi_bold'>Bachelors of Technology in Information Technology</span> from NMIMS, Mumbai. My professional experience began with an technical internship at IIFL Finance, where I contributed to the creation of a stock market data display in native Android Canvas API.
              </p>
            </div>
            <div>
              <p>
                My academic and professional experiences have equipped me with a comprehensive understanding of software development and communication skills. I am eager to contribute my skills as a full-stack developer to a forward-thinking company, making processes more efficient and creating innovative solutions.
              </p>
            </div>
            <br />
          </div>
        </Grid>
        {/* <Grid item xs={1}></Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Card className="m-5" sx={{ minWidth: 300 }}>
            <CardContent>
              <Typography variant="h6" component="div">
                Quick Learner
              </Typography>
              <Typography variant="body2">
                As a programmer, I prioritize feedback and constantly strive to optimize the structure of my work. I am particularly obsessed with linting, ensuring clean and standardized code practices throughout my projects.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={1}>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Card className="m-5" sx={{ minWidth: 300 }}>
            <CardContent>
              <Typography variant="h6" component="div">
                Full Stack Development
              </Typography>
              <Typography variant="body2">

                I am currently seeking full-time roles in the field of Software Development, with availability to start in January 2024. I am eager to apply my skills and contribute to a dynamic and innovative organization.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={1}>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Card className="m-5" sx={{ minWidth: 300 }}>
            <CardContent>
              <Typography variant="h6" component="div">
                ML exposure
              </Typography>
              <Typography variant="body2">
                I highly valued the opportunity provided by Mastek to participate in the Deep Blue competition Season 3. I am proud to mention that my team achieved an impressive rank of 25 out of thousands of participants, showcasing our skills and dedication.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={1}>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Card className="m-5" sx={{ minWidth: 300 }}>
            <CardContent>
              <Typography variant="h6" component="div">
                Interests
              </Typography>
              <Typography variant="body2">

                I am currently seeking full-time roles in the field of Software Development, with availability to start in January 2024. I am eager to apply my skills and contribute to a dynamic and innovative organization.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={1}>
        </Grid> */}
      </Grid>
    </div>
  )
}

export default AboutMe;