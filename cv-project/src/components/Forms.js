import { Component } from "react";
import '../styles/Forms.css';

class Forms extends Component {
    render() {
        const {
            infoName, infoTitle, email, phone, location, about, schoolName, schoolTitle, schoolFrom, schoolTo, workName, workTitle, workFrom, workTo, workAbout
        } = this.props.state;

        const { onChangeGeneral } = this.props;

        return (
            <div id="form">
                <section>
                    <h3>General info</h3>
                    <input id="form-infoName" type="text" value={infoName} onChange={e => onChangeGeneral(e.target)}></input>
                    <input id="form-infoTitle" type="text" value={infoTitle} onChange={e => onChangeGeneral(e.target)}></input>
                    <input id="form-email" type="text" value={email} onChange={e => onChangeGeneral(e.target)}></input>
                    <input id="form-phone" type="text" value={phone} onChange={e => onChangeGeneral(e.target)}></input>
                    <input id="form-location" type="text" value={location} onChange={e => onChangeGeneral(e.target)}></input>
                    <span id="form-about" contenteditable="true" onInput={e => onChangeGeneral(e.target)}>{about}</span>
                </section>

                <section>
                    <h3>Education</h3>
                    <input id="form-schoolName" type="text" value={schoolName}></input>
                    <input id="form-schoolTitle" type="text" value={schoolTitle}></input>
                    <input id="form-schoolFrom" type="text" value={schoolFrom}></input>
                    <input id="form-schoolTo" type="text" value={schoolTo}></input>
                </section>

                <section>
                    <h3>Work experience</h3>
                    <input id="form-workName" type="text" value={workName}></input>
                    <input id="form-workTitle" type="text" value={workTitle}></input>
                    <input id="form-workFrom" type="text" value={workFrom}></input>
                    <input id="form-workTo" type="text" value={workTo}></input>
                    <span id="form-workAbout" contenteditable="true" onInput={e => onChangeGeneral(e.target)}>{workAbout}</span>
                </section>
            </div>
        );
    }
}

export default Forms;
