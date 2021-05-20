import React from 'react';

const PersonDetails = (props) => {
    console.log(props.selectedPerson[0]);
    const selectedPerson = props.selectedPerson[0];
    const {gender, name, location, email, picture, nat} = selectedPerson;
    return (
        <div>
            <h1>PersonDetails</h1>
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img className="rounded-circle" src={picture.medium} alt={name.last} />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{name.title} {name.first} {name.last}</h5>
                            <p class="card-text">{location.street.number}, {location.street.name}, {location.city}, {location.state}, {location.country}, {location.postcode}</p>
                            <p class="card-text">{location.timezone.offset}, {location.timezone.description}</p>
                            <p class="card-text"><small class="text-muted">{gender}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonDetails;