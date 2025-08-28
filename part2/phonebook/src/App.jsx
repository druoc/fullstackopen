import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", id: 0 }]);
  const [newPerson, setNewPersons] = useState("");

  const addPerson = (e) => {
    e.preventDefault();
    const nameObject = {
      name: newPerson,
      id: String(persons.length + 1),
    };
    setPersons(persons.concat(nameObject));
    setNewPersons("");
  };

  const handleNameChange = (e) => {
    setNewPersons(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newPerson} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
