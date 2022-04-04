import Link from '@mui/material/Link';

function NavigationBar() {
    return (
        <div id="navigationBar">
            <Link className="list-item" href="#aboutMe">About Me</Link>
            <Link className="list-item" href="#certificates">Certificates</Link>
            <Link className="list-item" href="#professionalCertificates">Work</Link>
            <Link className="list-item" href="#aptitudeTests">Apitutude Tests</Link>
        </div>
    );
}

export default NavigationBar