
import React from 'react';
import './App.css';
import axios from 'axios';
import PeopleList from './person/PeopleList'
import PeopleForm from './person/PeopleForm';
import PersonSingle from './person/PersonSingle';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      currentPerson: {},
    }
    this.updateCurrentPerson = this.updateCurrentPerson.bind(this);
  }


  componentDidMount() {
    const url = 'http://localhost:3000';
    axios.get(url)
      .then((Response) => {
        this.setState({
          people: Response.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  updateCurrentPerson(item) {
    this.setState({
      currentPerson: item,
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col s12">Menu</div>
        </div>
        <div className="row">
          <div className="col s3"><PeopleForm /></div>
          <div className="col s9"><PeopleList people={this.state.people}
            updateCurrentPerson={this.updateCurrentPerson} /></div>
        </div>
        <div className="row">

          <div className="col s12"><PersonSingle /></div>
        </div>
      </div>
    );
  }
}


export default App;
