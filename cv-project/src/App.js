import { Component } from "react";
import './styles/App.css';
import Forms from "./components/Forms";
import Output from "./components/Output";
import uniqid from "uniqid";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Name Surname",
            title: "Fullstack Developer",
            email: "email@email.com",
            phone: "0123 4567",
            location: "London, UK",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

            educationList: [{
                id: uniqid(),
                name: "University of London",
                title: "Informatics",
                from: "2018",
                to: "2021",
            }, {
                id: uniqid(),
                name: "Javascript Course",
                title: "The Odin Project",
                from: "2019",
                to: "2020",
            }],
            educationListItem: {
                id: uniqid(),
                name: "",
                title: "",
                from: "",
                to: "",
            },

            workList: [{
                id: uniqid(),
                name: "Microsoft",
                title: "Fullstack Developer",
                from: "2022",
                to: "Present",
                about: "Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat."
            }, {
                id: uniqid(),
                name: "Bandcamp",
                title: "Junior Web Developer",
                from: "2021",
                to: "2022",
                about: "Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim."
            }, {
                id: uniqid(),
                name: "Various Clients",
                title: "Freelance Web Developer",
                from: "2019",
                to: "2021",
                about: "Irure dolor incididunt sint et ullamco. Commodo laboris amet aliquip incididunt do ut est exercitation reprehenderit magna sit laboris est mollit."
            }],
            workListItem: {
                id: uniqid(),
                name: "",
                title: "",
                from: "",
                to: "",
                about: ""
            }
        }

        this.onChangeGeneral = this.onChangeGeneral.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onChangeAdd = this.onChangeAdd.bind(this);
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

    onChange(target, listName) {
        let targetArr = target.id.split("-");

        for (let i = 0; i < this.state[listName].length; i++) {
            if (this.state[listName][i].id === targetArr[1]) {
                if (listName === "educationList") {
                    this.setState(({ educationList }) => ({
                        educationList: [
                            ...educationList.slice(0, i),
                            {
                                ...educationList[i],
                                [targetArr[0]]: target.value
                            },
                            ...educationList.slice(i + 1)
                        ]
                    }));
                } else {
                    this.setState(({ workList }) => ({
                        workList: [
                            ...workList.slice(0, i),
                            {
                                ...workList[i],
                                [targetArr[0]]: target.value
                            },
                            ...workList.slice(i + 1)
                        ]
                    }));
                }
            }
        }
    }

    onChangeAdd(target, listName) {
        let targetName = target.id.split("-")[2];
        this.setState({ [listName + "Item"]: { ...this.state[listName + "Item"], [targetName]: target.value } });
    }

    onClickRemove(target, listName) {
        for (let i = 0; i < this.state[listName].length; i++) {
            if (this.state[listName][i].id === target.id.split("-")[1]) {
                if (listName === "educationList") {
                    this.setState(({ educationList }) => ({
                        educationList: [
                            ...educationList.slice(0, i),
                            ...educationList.slice(i + 1)
                        ]
                    }));
                } else {
                    this.setState(({ workList }) => ({
                        workList: [
                            ...workList.slice(0, i),
                            ...workList.slice(i + 1)
                        ]
                    }));
                }
            }
        }
    }

    onClickAdd(listName) {
        this.setState({
            [listName]: [...this.state[listName], this.state[listName + "Item"]],
            [listName + "Item"]: {
                id: uniqid(),
                name: "",
                title: "",
                from: "",
                to: "",
            },
        });

        for (let c of document.getElementById("add-" + listName.split("L")[0]).children) {
            c.value = "";
        }
        // if (listName === "educationList") {
        //     this.setState({
        //         educationList: [...this.state.educationList, this.state.educationListItem],
        //         educationListItem: {
        //             id: uniqid(),
        //             name: "",
        //             title: "",
        //             from: "",
        //             to: ""
        //         },
        //     });
        // } else {
        //     this.setState({
        //         workList: [...this.state.workList, this.state.workListItem],
        //         workListItem: {
        //             id: uniqid(),
        //             name: "",
        //             title: "",
        //             from: "",
        //             to: "",
        //             about: ""
        //         },
        //     });
        // }
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
