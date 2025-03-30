import { useState } from 'react'




const Filter = (props) => {
  return (
    <div>
       <br />
     filter with: <input  value = {props.value} onChange={props.onChange}/>
      <br />
    </div>
  )

}

const PersonForm = (props) => {
  return (
    <>
    <form onSubmit={props.onSubmit}>
        <div>
          name: <input  value = {props.nameValue} onChange={props.onNameChange}/>
          <br />
          phone: <input  value = {props.phoneValue} onChange={props.onPhoneChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  )
}

const FilteredPersons = (props) => {
  return (
    <div>
      {
      props.persons.map( person => (
        <div key={person.name}>
          <p>{person.name} - {person.number}</p>
        </div>

      ))
      }
    </div>
  )
}

const App = () => {


  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: 1111
     },
     { name: 'Roshi ',
      number: 2222
     },
  ]) 


  const addPerson = (event) => {
    event.preventDefault()

    const exists = () =>(

      persons.some(person=> person.name === newName)
    )

    if(exists()){
      alert(`${newName} is already added in the phonebook.`)
      return;
    }

    const newPerson = {
      name: newName,
      number: newPhone
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewPhone('')

  }

  const [search, setSearch] = useState('')
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const handleSearch = (event) =>{
    setSearch(event.target.value)
  }

  const filteredPersons = persons.filter(person=>person.name.toLowerCase().startsWith(search.toLowerCase()))

  const addNewName = (event) =>{
    
    setNewName(event.target.value)
  }

  const addNewPhone = (event) =>{
    setNewPhone(event.target.value)
  } 

  return (
    <div>
      <h2>Phonebook</h2>
     
      <Filter value = {search} onChange = {handleSearch} />
      <PersonForm onSubmit = {addPerson} nameValue = {newName} phoneValue = {newPhone} onNameChange = {addNewName} onPhoneChange = {addNewPhone} />
      
      <h2>Numbers</h2>
      <FilteredPersons persons = {filteredPersons}/>
      ...
    </div>
  )
}

export default App