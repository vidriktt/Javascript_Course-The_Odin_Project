import { Component } from "react";
import '../styles/Forms.css';

class Forms extends Component {
    render() {
        const {
            infoName, infoTitle, email, phone, location, about, educationList, workName, workTitle, workFrom, workTo, workAbout
        } = this.props.state;

        const { onChangeGeneral, onChangeEducation, onChangeEducationAdd, onClickRemove, onClickAdd } = this.props;

        return (
            <div id="form">
                <section id="general-info-section">
                    <h3>General info</h3>

                    <input id="form-infoName" type="text" placeholder="Name" value={infoName} onChange={e => onChangeGeneral(e.target)}></input>
                    <input id="form-infoTitle" type="text" placeholder="Title" value={infoTitle} onChange={e => onChangeGeneral(e.target)}></input>
                    <input id="form-email" type="text" placeholder="Email" value={email} onChange={e => onChangeGeneral(e.target)}></input>
                    <input id="form-phone" type="text" placeholder="Phone number" value={phone} onChange={e => onChangeGeneral(e.target)}></input>
                    <input id="form-location" type="text" placeholder="Location" value={location} onChange={e => onChangeGeneral(e.target)}></input>
                    <span id="form-about" contentEditable="true" suppressContentEditableWarning={true} onInput={e => onChangeGeneral(e.target)}>{about}</span>
                </section>

                <section>
                    <h3>Education</h3>

                    {educationList.map((item) => {
                        return <div key={item.schoolID} className="education-div">
                            <input id={`schoolName- ${item.schoolID}`} type="text" placeholder="Institution" value={item.schoolName} onChange={e => onChangeEducation(e.target)}></input>
                            <input id="form-schoolTitle" type="text" placeholder="Title" value={item.schoolTitle} onChange={e => onChangeEducation(e.target)}></input>
                            <input id="form-schoolFrom" type="text" placeholder="From" value={item.schoolFrom} onChange={e => onChangeEducation(e.target)}></input>
                            <input id="form-schoolTo" type="text" placeholder="To" value={item.schoolTo} onChange={e => onChangeEducation(e.target)}></input>

                            <button onClick={e => onClickRemove(e.target)}>Remove</button>
                        </div>
                    })}

                    <div className="education-div">
                        <input id="form-schoolName" type="text" placeholder="Institution" onChange={e => onChangeEducationAdd(e.target)}></input>
                        <input id="form-schoolTitle" type="text" placeholder="Title" onChange={e => onChangeEducationAdd(e.target)}></input>
                        <input id="form-schoolFrom" type="text" placeholder="From" onChange={e => onChangeEducationAdd(e.target)}></input>
                        <input id="form-schoolTo" type="text" placeholder="To" onChange={e => onChangeEducationAdd(e.target)}></input>

                        <button onClick={e => onClickAdd(e.target)}>Add</button>
                    </div>

                    {/* <div>
                        <input id="form-schoolName" type="text" value={schoolName} onChange={e => onChangeEducation(e.target)}></input>
                        <input id="form-schoolTitle" type="text" value={schoolTitle} onChange={e => onChangeEducation(e.target)}></input>
                        <input id="form-schoolFrom" type="text" value={schoolFrom} onChange={e => onChangeEducation(e.target)}></input>
                        <input id="form-schoolTo" type="text" value={schoolTo} onChange={e => onChangeEducation(e.target)}></input>

                        <div className="buttons-div">
                            <button onClick={e => onClickRemove(e.target)}>Remove</button>
                            <button onClick={e => onClickAdd(e.target)}>Add</button>
                        </div>
                    </div> */}
                </section>

                <section>
                    <h3>Work experience</h3>
                    <input id="form-workName" type="text" value={workName}></input>
                    <input id="form-workTitle" type="text" value={workTitle}></input>
                    <input id="form-workFrom" type="text" value={workFrom}></input>
                    <input id="form-workTo" type="text" value={workTo}></input>
                    <span id="form-workAbout" contentEditable="true" suppressContentEditableWarning={true} onInput={e => onChangeGeneral(e.target)}>{workAbout}</span>
                </section>
            </div>
        );
    }
}

export default Forms;
