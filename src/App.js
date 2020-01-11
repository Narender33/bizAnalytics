import React, {Component} from 'react';
import './App.css'
import Stories from './dashboard/Stories';
import Title from './dashboard/Title'

class App extends Component {
  state = {
    stories : {
      options : [],
      value: []
    }
  }
  async componentDidMount(){
    const url = "https://moneytor.in/resources/data/sample.json";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({stories: {options: [...new Set(data.map(d=>d.status))], value: data}})
  }
  render(){
    return (
      <div className="App">
       <Title/>
       <Stories stories={this.state.stories}/>
      </div>
    );
  }
}

export default App;
