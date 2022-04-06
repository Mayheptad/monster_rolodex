import { Component } from "react";
import "./App.css";
import Cardlist from "./Components/Cardlist.components";
import { Heading } from "./Components/Heading.components";
import {Searchbox} from "./Components/Searchbox.components";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then( resp => resp.json())
      .then( monsters => this.setState({monsters}))
      .catch( _ => alert('shit happen'))
  }

  handleChange = evt => this.setState({searchField: evt.target.value}, _ => console.log(this.state.searchField))

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(
      eachMonster => eachMonster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <Heading />
        <Searchbox handleChange={this.handleChange}/>
        {filteredMonsters.length <= 0 && <h1>No Monsters seems to match your entry</h1>}
        <Cardlist monsters={filteredMonsters}/>
      </div>
    );
  }

}

export default App;
