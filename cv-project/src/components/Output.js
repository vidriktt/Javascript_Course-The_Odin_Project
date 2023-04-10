import { Component } from "react";
import '../styles/Output.css';

class Output extends Component {
    render() {
        const { name, title, email, phone, location, about, educationList, workList } = this.props;

        return (
            <div id="output">
                <div id="general-section">
                    <div id="general-left">
                        <h1>{name.toUpperCase()}</h1>
                        <h3>{title}</h3>
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
                        {educationList.map((item) => {
                            return <div key={item.id}>
                                <h5>{item.title}</h5>
                                <p>
                                    <span>{item.name}</span><span>{item.from} - {item.to}</span>
                                </p>
                            </div>
                        })}
                    </div>

                    <h4>WORK EXPERIENCE</h4>
                    <div id="work-section">
                        {workList.map((item) => {
                            return <div key={item.id}>
                                <h5>{item.title}</h5>
                                <p>
                                    <span>{item.name}</span><span>{item.from} - {item.to}</span>
                                </p>
                                <p className="about-p">{item.about}</p>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Output;
