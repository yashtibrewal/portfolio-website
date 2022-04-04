import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link';

function NavigationBar() {
    return (
        <div id="navigationBar">
            <Link className="list-item" href="#aboutMe">About Me</Link>
            <Link className="list-item" href="#certificates">Certificates</Link>
            <Link className="list-item" href="#apptitudeTests">Apptitude Tests</Link>
            <Link className="list-item" href="#projects">Project</Link>
        </div>
    );
}

export default NavigationBar