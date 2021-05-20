import React from 'react';

const Person = (props) => {
    const {gender, name, nat, email} = props.person;
    return (
        <div>
            <div class="col">
                <div class="card h-100" onClick={() => props.personDetails(props.person)}>
                    <div class="card-body">
                        <p>{gender} . {nat}</p>
                        <h4>{name.title} {name.first} {name.last}</h4>
                        <p>{email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Person;