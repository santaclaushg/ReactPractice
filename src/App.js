import React, { useState } from "react";
import "./App.css";
import Person from "components/person/person";
import UserInput from "components/userInput/userInput";
import UserOutput from "components/userOutput/userOutput";
import Validation from "components/validation/validation";
import Char from "components/char/char";

function App() {
  const [personState, setPersonState] = useState({
    persons: [
      { id: 0, name: "Max", age: 28 },
      { id: 1, name: "Manu", age: 26 },
      { id: 2, name: "Stephanie", age: 27 }
    ],
    showPersons: true
  });
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  var inlineStyle = {
    backgroundColor: "green",
    color: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "lightgreen",
      color: "black"
    }
  };
  const onHandleClick = num => {
    setPersonState({
      persons: [
        ...personState.persons.map(person => {
          return { name: person.name, age: person.age + num };
        })
      ],
      plusState: "ahihi"
    });
  };
  const onTogglePersonsHandler = () => {
    setPersonState(prevPersonState => {
      return {
        ...personState,
        showPersons: !prevPersonState.showPersons
      };
    });
    console.log(inlineStyle.backgroundColor);
  };
  const onDeletePerson = personIndex => {
    const persons = [...personState.persons];
    persons.splice(personIndex, 1);
    setPersonState({
      ...personState,
      persons: [...persons]
    });
  };
  const onHandleChangeName = (e, id) => {
    console.log(e.target.value);
    const personIndex = personState.persons.findIndex(person => {
      return person.id === id;
    });
    // const person = {
    //   ...personState[personIndex]
    // };

    const person = Object.assign({}, personState.persons[personIndex]);
    person.name = e.target.value;
    const persons = [...personState.persons];
    persons[personIndex] = person;
    setPersonState({
      ...personState,
      persons: persons
    });
  };
  const onOutputLength = e => {
    setText(e.target.value);
  };
  const onHandleDeleteChar = index => {
    console.log(index);
    const textArr = text.split("");
    textArr.splice(index, 1);
    const newText = textArr.join("");
    setText(newText);
  };

  // console.log(text);
  const lengthText = text.length;
  const { persons, showPersons } = personState;
  const classes = [];
  console.log(personState.persons.length);
  if (personState.persons.length <= 2) {
    classes.push("red");
  }
  if (personState.persons.length <= 1) {
    classes.push("bold");
  }

  return (
    <div className="App">
      <p className={classes.join(" ")}>This is really working!</p>
      <button style={inlineStyle} onClick={onTogglePersonsHandler}>
        Toggle persons
      </button>
      {showPersons && (
        <div className="m-10">
          {persons.map(({ name, age, id }, index) => {
            inlineStyle.backgroundColor = "red";
            inlineStyle[":hover"] = {
              backgroundColor: "salmon",
              color: "black"
            };
            return (
              <Person
                click={() => onDeletePerson(index)}
                name={name}
                age={age}
                index={id}
                key={index}
                changed={e => onHandleChangeName(e, id)}
              />
            );
          })}
        </div>
      )}
      <br />
      <br />
      <UserInput onChangeName={onHandleChangeName} username={name} />
      <UserOutput username={name} />
      <UserOutput />
      <UserOutput />
      <input type="text" value={text} onChange={onOutputLength} />
      {lengthText === 0 ? <p>No input</p> : <p>{lengthText}</p>}
      <Validation textLength={lengthText} />
      {text.split("").map((char, index) => (
        <Char
          letter={char}
          key={index}
          click={() => onHandleDeleteChar(index)}
        />
      ))}
    </div>
  );
}
export default App;
