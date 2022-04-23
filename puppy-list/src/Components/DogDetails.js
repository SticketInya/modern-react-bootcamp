import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';

function DogDetails(props) {
    const params = useParams();
    const currentDog = props.dogs.find(
        (dog) => dog.name.toLowerCase() === params.name.toLowerCase(),
    );

    return (
        <div className='DogDetails'>
            <div className='container'>
                <div className='row justify-content-center mt-5'>
                    <div className='col-11 col-lg-5'>
                        <div className='DogDetails__card card'>
                            <img
                                src={currentDog.src}
                                alt={currentDog.name}
                                className='card-img-top'
                            />
                            <div className='card-body'>
                                <h2 className='card-title'>
                                    {currentDog.name}
                                </h2>
                                <h4 className='card-subtitle text-muted'>
                                    {currentDog.age} years old
                                </h4>
                            </div>
                            <ul className='list-group list-group-flush'>
                                {currentDog.facts.map((fact, i) => (
                                    <li className='list-group-item' key={i}>
                                        {fact}
                                    </li>
                                ))}
                            </ul>
                            <div className='card-body'>
                                <Link to='/dogs' className='btn btn-info'>
                                    Go Back
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DogDetails;
