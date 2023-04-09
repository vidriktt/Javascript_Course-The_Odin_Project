import { Component } from "react";
import './styles/App.css';
import Forms from "./components/Forms";
import Output from "./components/Output";
import uniqid from "uniqid";

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

            educationList: [{
                schoolID: uniqid(),
                schoolName: "University of London",
                schoolTitle: "Informatics",
                schoolFrom: "2018",
                schoolTo: "2021",
            },
            {
                schoolID: uniqid(),
                schoolName: "University of London",
                schoolTitle: "Informatics",
                schoolFrom: "2018",
                schoolTo: "2021",
            }],
            educationListItem: {
                schoolID: uniqid(),
                schoolName: "",
                schoolTitle: "",
                schoolFrom: "",
                schoolTo: "",
            },

            workName: "Microsoft",
            workTitle: "Web Developer",
            workFrom: "2021",
            workTo: "Present",
            workAbout: "Irure dolor incididunt sint et ullamco. Commodo laboris amet aliquip incididunt do ut est exercitation reprehenderit magna sit laboris est mollit."
        }

        this.onChangeGeneral = this.onChangeGeneral.bind(this);
        this.onChangeEducation = this.onChangeEducation.bind(this);
        this.onChangeEducationAdd = this.onChangeEducationAdd.bind(this);
        this.onClickRemove = this.onClickRemove.bind(this);
        this.onClickAdd = this.onClickAdd.bind(this);
    }

    onChangeGeneral(target) {
        let targetName = target.id.split("-")[1];

        if (targetName !== "about") {
            this.setState({ [targetName]: target.value });
        } else {
            this.setState({ [targetName]: target.textContent });
        }
    }

    onChangeEducation(target) {
        let targetArr = target.id.split("-");

        let newEducationList = this.state.educationList.map(item => {
            if (item.schoolID.replace(/\s+/g, "") === targetArr[1].replace(/\s+/g, "")) {
                console.log(...item);
                this.setState({
                    [item]: { ...[item], [targetArr[0]]: target.value }
                })
            }
            console.log(item);
            return item;
        })

        this.setState({ educationList: newEducationList });
    }

    onChangeEducationAdd(target) {
        let targetName = target.id.split("-")[1];
        this.setState({ educationListItem: { ...this.state.educationListItem, [targetName]: target.value } });
    }

    onClickRemove(target) {

    }

    onClickAdd(target) {
        this.setState({
            educationList: [...this.state.educationList, this.state.educationListItem],
            educationListItem: {
                schoolID: uniqid(),
                schoolName: "",
                schoolTitle: "",
                schoolFrom: "",
                schoolTo: "",
            },
        });
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
