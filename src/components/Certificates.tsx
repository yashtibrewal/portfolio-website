
import HackerRankCertificates from './Certification/HackerRankCertificates';
import SkillCertifications from './Certification/SkillCertificates';
import CourseraCertificates from './Certification/CourseraCertificates';
import CompetitionCertificates from './Certification/CompetitionCertificates'

function Certificates() {
    return (
        <div id="certificates">
            <h1 className='logo'>Certifications</h1><br/>
            <SkillCertifications></SkillCertifications>
            <HackerRankCertificates></HackerRankCertificates>
            <CourseraCertificates></CourseraCertificates>
            <CompetitionCertificates></CompetitionCertificates>
        </div>
    )
}

export default Certificates;