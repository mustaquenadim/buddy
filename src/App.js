
import React, { useEffect, useState } from 'react';
import './App.css';
import Person from './components/Person/Person';
import PersonDetails from './components/PersonDetails/PersonDetails';

function App() {
    const [persons, setPersons] = useState([]);
    const [selectedPerson, setSelectedPerson] = useState();
    useEffect(() => {
        fetch('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20')
        .then(response => response.json())
        .then(data => {
            setPersons(data.results);
            console.log(data.results);
        })
    }, [])
    const personDetails = person => {
        const showDetails = [person];
        setSelectedPerson(showDetails);
    }
    return (
        <div className="container">
            <h1>Hello, Buddies!</h1>
            <div className="container">
                {
                    selectedPerson && <PersonDetails selectedPerson={selectedPerson}></PersonDetails>
                }
            </div>
            <div class="row row-cols-1 row-cols-md-4 g-4">
            {
                persons.map(person => (<Person person={person} personDetails={personDetails}></Person>))
            }
            </div>
        </div>
    );
}

export default App;
