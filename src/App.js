import React, { Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    post:{}
  }

  componnentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        setTimeout(() => {
        this.setState({post: result})
      }, 1500);
      })
  }

    render(){
      return (
        <div className="App">
        <h1>Notre article :</h1>
        {(this.state.post.title) ? this.state.post.title : <p>Chargement...</p>}
      </div>
    );
  }
}

export default App;
