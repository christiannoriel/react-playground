import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
// import Radium, { StyleRoot } from 'radium';
import Person from './components/Person/Person';

const StyledButton = styled.button`
    background-color: ${props => props.alt ? 'red' : 'green'};
    color: #fff;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;
    
    &:hover {
      background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
      color: black;
    }
    `;

class App extends Component {

  state = {
    persons: [
      { id: 1, name: 'Christian', age: 32 },
      { id: 2, name: 'Lorence', age: 25 },
      { id: 3, name: 'Isaiah', age: 1 }
    ],
    showPersons: false
  }

  // FUNCTION EXPRESSIONS
  // const [personsState, setPersonState] = useState({
  //   persons: [
  //     { name: 'Christian', age: 32 },
  //     { name: 'Lorence', age: 25 },
  //     { name: 'Isaiah', age: 1 }
  //   ],
  //   otherState: 'some value'
  // });

  // const switchNameHandler = () => {
  //   // console.log('clicked');
  //   setPersonState({
  //     persons: [
  //       { name: 'Christian Noriel', age: 33 },
  //       { name: 'Lorence Calilung', age: 26 },
  //       { name: 'Christen Isaiah', age: 2 }
  //     ]
  //   })
  // }


  // switchNameHandler = (newName) => {
  //   //   // console.log('clicked');
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 33 },
  //       { name: 'Lorence Calilung', age: 26 },
  //       { name: 'Christen Isaiah', age: 2 }
  //     ]
  //   })
  // };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                key={person.id}
                id={person.id}
                click={this.deletePersonHandler.bind(this, index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            })
          }
        </div>
      );

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      // <StyleRoot>
      <div className="App" >
        <h1>React App</h1>
        <p className={classes.join(' ')}>How are you?</p>
        <StyledButton
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >Toggle Persons
        </StyledButton>
        {persons}
      </div>
      // </StyleRoot>
    );
  }
}

// export default Radium(App);
export default App;
