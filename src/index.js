import React from "react";
import ReactDOM from "react-dom";
import Search from "./search";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PythonField from "./pythonfield";
import FullStackField from "./fullstackfield";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      records: []
    };
  }
  componentDidMount() {
    fetch(
      "https://api.airtable.com/v0/appEV6FndnWfTqz0E/Table%201?api_key=keyxV8TiVBBweSkZ5"
    )
      .then(res => res.json())

      .then(data => this.setState({ ...this.state, records: data.records }));
  }

  handleInputChange = e => {
    this.setState({ searchInput: e.target.value });
  };

  render() {
    const { records, searchInput } = this.state;
    return (
      <div className="App">
        <h1>Engineeru</h1>
        <h2>
          Reverse Engineering Your Career Path
          <br />
          Hudson Valley, NY
        </h2>
        <Search onInputChange={this.handleInputChange} field={searchInput} />
        <ul>
          {records.map((tag, i) => {
            return <li key={i}>{tag.fields.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/paths/python" component={PythonField} />
        <Route path="/paths/fullstack" component={FullStackField} />
      </Switch>
    </Router>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Routes />, rootElement);
