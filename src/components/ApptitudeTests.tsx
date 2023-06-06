
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

function AptitudeTests() {
  return (
    <div>
      <h1 className='logo'>Aptitude Tests</h1>
      <div>
        <Grid justifyContent={'center'} container spacing={2}>
          <Grid xs={6} sm={4} md={3} lg={2} item>
            <Card className='pm'>
              <Typography>
                GRE: 310/340
              </Typography>
            </Card>
          </Grid>
          <Grid xs={6} sm={4} md={3} lg={1} item >
            <Card className='pm'>
              <Typography>
                CAT
              </Typography>
            </Card>
          </Grid>
          <Grid xs={6} sm={4} md={3} lg={2} item>
            <Card className='pm'>
              <Typography>
                TOEFL: 95/120
              </Typography>
            </Card>
          </Grid>
          <Grid xs={6} sm={4} md={3} lg={1} item >
            <Card className='pm'>
              <Typography>SNAP</Typography>
            </Card>
          </Grid>
          <Grid xs={6} sm={4} md={3} lg={1} item >
            <Card className='pm'>
              <Typography>XAT</Typography>
            </Card>
          </Grid>
          <Grid xs={6} sm={4} md={3} lg={2} item >
            <Card className='pm'>
              <Typography>SDA Bocconi: 100%</Typography>
            </Card>
          </Grid>
          <Grid xs={6} sm={4} md={3} lg={1} item >
            <Card className='pm'>
              <Typography>NMAT</Typography>
            </Card>
          </Grid>

        </Grid>
      </div>
    </div>
  );
}

export default AptitudeTests;