import { Component } from "react";
import '../styles/Forms.css';

class Forms extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Name Surname",
            title: "Web Developer",
            email: "email@email.com",
            phone: "1234 567",
            location: "London, UK",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

            school: "University of London",
            studyTitle: "Informatics",
            from: "2018",
            to: "2021",
        }
    }

    render() {
        const { name, title, email, phone, location, about, school, studyTitle, from, to } = this.state;

        return (
            <form>
                <section>
                    <h2>General info</h2>
                    <input id="form-general-name" type="text" value={name}></input>
                    <input id="form-general-title" type="text" value={title}></input>
                    <input id="form-general-email" type="text" value={email}></input>
                    <input id="form-general-phone" type="text" value={phone}></input>
                    <input id="form-general-location" type="text" value={location}></input>
                    <input id="form-general-about" type="text" value={about}></input>
                </section>

                <section>
                    <h2>Education</h2>
                    <input id="form-education-school" type="text" value={school}></input>
                    <input id="form-education-title" type="text" value={studyTitle}></input>
                    <input id="form-education-from" type="text" value={from}></input>
                    <input id="form-education-to" type="text" value={to}></input>
                </section>
            </form>
        );
    }
}

export default Forms;
