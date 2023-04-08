import { Component } from "react";
import './styles/App.css';
import Forms from "./components/Forms";
import Output from "./components/Output";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Forms />
                <Output />
            </div>
        );
    }
}

export default App;
