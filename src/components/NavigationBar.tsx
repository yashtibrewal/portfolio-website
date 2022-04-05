import Grid from '@mui/material/Grid'

function NavigationBar() {
    return (
        <div id="navigationBar">
            <a className="list-item" href="#aboutMe">About Me</a>
            <a className="list-item" href="#certificates">Certificates</a>
            <a className="list-item" href="#professionalCertificates">Work</a>
            <a className="list-item" href="#aptitudeTests">Apitutude Tests</a>
            <a className="list-item" href="#education">Education</a>
            <a className="list-item" href="#googleCertificates">Google Certificates</a>
            <a className="list-item" href="#workshopCertificates">Workshop Certificates</a>
        </div>

    );
}

export default NavigationBar