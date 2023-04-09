import { Component } from "react";
import './styles/App.css';
import Forms from "./components/Forms";
import Output from "./components/Output";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            infoName: "Name Surname",
            infoTitle: "Web Developer",
            email: "email@email.com",
            phone: "0123 4567",
            location: "London, UK",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

            schoolName: "University of London",
            schoolTitle: "Informatics",
            schoolFrom: "2018",
            schoolTo: "2021",

            workName: "Microsoft",
            workTitle: "Web Developer",
            workFrom: "2021",
            workTo: "Present",
            workAbout: "Irure dolor incididunt sint et ullamco. Commodo laboris amet aliquip incididunt do ut est exercitation reprehenderit magna sit laboris est mollit."
        }

        this.onChangeGeneral = this.onChangeGeneral.bind(this);
    }

    onChangeGeneral(target) {
        let targetName = target.id.split("-")[1];

        if (targetName !== "about") {
            this.setState({ [targetName]: target.value });
        } else {
            this.setState({ [targetName]: target.textContent });
        }
    }

    render() {
        return (
            <div id="content">
                <Forms {...this} />
                <Output {...this.state} />
            </div>
        );
    }
}

export default App;
