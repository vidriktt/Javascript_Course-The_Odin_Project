import { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listItem: {
                text: "",
                id: uniqid()
            },
            list: []
        };
        this.listAdd = this.listAdd.bind(this);

        this.handleClick = this.handleClick.bind(this);
    }

    listAdd(add) {
        this.setState({
            listItem: {
                text: add,
                id: this.state.listItem.id,
            },
        });
    }

    handleClick() {
        this.setState({
            list: [...this.state.list, this.state.listItem],
            listItem: {
                text: "",
                id: uniqid()
            },
        });
    }

    render() {
        return (
            <div>
                <input type="text" onChange={e => this.listAdd(e.target.value)} />
                <button onClick={this.handleClick}>Add to list</button>

                <Overview listItems={this.state.list} />
            </div>
        );
    }
}

export default App;
