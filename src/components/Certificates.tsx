
import HackerRankCertificates from './Certification/HackerRankCertificates';
import SkillCertifications from './Certification/SkillCertificates';
import Grid from '@mui/material/Grid'
import CourseraCertificates from './Certification/CourseraCertificates';
import CompetitionCertificates from './Certification/CompetitionCertificates'

function Certificates() {
    return (
        <div id="certificates">
            <Grid container item xs={12} >
                <h1 className='logo'>Certifications</h1>
            </Grid>
            <SkillCertifications></SkillCertifications>
            <HackerRankCertificates></HackerRankCertificates>
            <CourseraCertificates></CourseraCertificates>
            <CompetitionCertificates></CompetitionCertificates>
        </div>
    )
}

export default Certificates;