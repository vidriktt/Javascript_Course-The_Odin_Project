import { Component } from "react";
import '../styles/Output.css';

class Output extends Component {
    render() {
        const {
            infoName, infoTitle, email, phone, location, about, schoolName, schoolTitle, schoolFrom, schoolTo, workName, workTitle, workFrom, workTo, workAbout
        } = this.props;

        return (
            <div id="output">
                <div id="general-section">
                    <div id="general-left">
                        <h1>{infoName.toUpperCase()}</h1>
                        <h3>{infoTitle}</h3>
                    </div>
                    <p id="general-right">
                        {email}<br />
                        {phone}<br />
                        {location}
                    </p>
                </div>

                <div id="general-content">
                    <p>{about}</p>

                    <h4>EDUCATION</h4>
                    <div id="education-section">
                        <div>
                            <h5>{schoolTitle}</h5>
                            <p>
                                <span>{schoolName}</span><span>{schoolFrom} - {schoolTo}</span>
                            </p>
                        </div>
                    </div>

                    <h4>WORK EXPERIENCE</h4>
                    <div id="work-section">
                        <div>
                            <h5>{workTitle}</h5>
                            <p>
                                <span>{workName}</span><span>{workFrom} - {workTo}</span>
                            </p>
                            <p>{workAbout}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Output;
