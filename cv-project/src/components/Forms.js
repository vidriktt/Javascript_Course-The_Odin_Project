import { Component } from "react";
import '../styles/Forms.css';

class Forms extends Component {
    render() {
        const { name, title, email, phone, location, about, educationList, workList } = this.props.state;
        const { onChangeGeneral, onChange, onChangeAdd, onClickRemove, onClickAdd } = this.props;

        return (
            <div id="form">
                <section id="general-info-section">
                    <h3>General info</h3>

                    <input id="form-name" type="text" placeholder="Name" value={name} onChange={e => onChangeGeneral(e.target)}></input>
                    <input id="form-title" type="text" placeholder="Title" value={title} onChange={e => onChangeGeneral(e.target)}></input>
                    <input id="form-email" type="text" placeholder="Email" value={email} onChange={e => onChangeGeneral(e.target)}></input>
                    <input id="form-phone" type="text" placeholder="Phone number" value={phone} onChange={e => onChangeGeneral(e.target)}></input>
                    <input id="form-location" type="text" placeholder="Location" value={location} onChange={e => onChangeGeneral(e.target)}></input>
                    <span id="form-about" contentEditable="true" suppressContentEditableWarning={true} onInput={e => onChangeGeneral(e.target)}>{about}</span>
                </section>

                <section>
                    <h3>Education</h3>

                    {educationList.map((item) => {
                        return <div key={item.id} className="education-div">
                            <input id={`name-${item.id}`} type="text" placeholder="Institution" value={item.name} onChange={e => onChange(e.target, "educationList")}></input>
                            <input id={`title-${item.id}`} type="text" placeholder="Title" value={item.title} onChange={e => onChange(e.target, "educationList")}></input>
                            <input id={`from-${item.id}`} type="text" placeholder="From" value={item.from} onChange={e => onChange(e.target, "educationList")}></input>
                            <input id={`to-${item.id}`} type="text" placeholder="To" value={item.to} onChange={e => onChange(e.target, "educationList")}></input>

                            <button id={`remove-${item.id}`} onClick={e => onClickRemove(e.target, "educationList")}>Remove</button>
                        </div>
                    })}

                    <div id="add-education" className="education-div">
                        <input id="form-school-name" type="text" placeholder="Institution" onChange={e => onChangeAdd(e.target, "educationList")}></input>
                        <input id="form-school-title" type="text" placeholder="Title" onChange={e => onChangeAdd(e.target, "educationList")}></input>
                        <input id="form-school-from" type="text" placeholder="From" onChange={e => onChangeAdd(e.target, "educationList")}></input>
                        <input id="form-school-to" type="text" placeholder="To" onChange={e => onChangeAdd(e.target, "educationList")}></input>

                        <button onClick={e => onClickAdd("educationList")}>Add</button>
                    </div>
                </section>

                <section>
                    <h3>Work experience</h3>

                    {workList.map((item) => {
                        return <div key={item.id} className="work-div">
                            <input id={`name-${item.id}`} type="text" placeholder="Company" value={item.name} onChange={e => onChange(e.target, "workList")}></input>
                            <input id={`title-${item.id}`} type="text" placeholder="Title" value={item.title} onChange={e => onChange(e.target, "workList")}></input>
                            <input id={`from-${item.id}`} type="text" placeholder="From" value={item.from} onChange={e => onChange(e.target, "workList")}></input>
                            <input id={`to-${item.id}`} type="text" placeholder="To" value={item.to} onChange={e => onChange(e.target, "workList")}></input>
                            <span id={`about-${item.id}`} contentEditable="true" suppressContentEditableWarning={true} data-placeholder="About" onInput={e => onChange(e.target, "workList")}>{item.about}</span>

                            <button id={`remove-${item.id}`} onClick={e => onClickRemove(e.target, "workList")}>Remove</button>
                        </div>
                    })}

                    <div id="add-work" className="work-div">
                        <input id="form-work-name" type="text" placeholder="Company" onChange={e => onChangeAdd(e.target, "workList")}></input>
                        <input id="form-work-title" type="text" placeholder="Title" onChange={e => onChangeAdd(e.target, "workList")}></input>
                        <input id="form-work-from" type="text" placeholder="From" onChange={e => onChangeAdd(e.target, "workList")}></input>
                        <input id="form-work-to" type="text" placeholder="To" onChange={e => onChangeAdd(e.target, "workList")}></input>
                        <span id="form-work-about" contentEditable="true" suppressContentEditableWarning={true} data-placeholder="About" onInput={e => onChangeAdd(e.target, "workList")}></span>

                        <button onClick={e => onClickAdd("workList")}>Add</button>
                    </div>
                </section>
            </div>
        );
    }
}

export default Forms;
