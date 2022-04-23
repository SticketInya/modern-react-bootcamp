import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/DogList.css';

class DogList extends Component {
    render() {
        return (
            <div className='DogList'>
                <h1 className='display-1 text-center'>Bachelor Puppies</h1>
                <div className='container'>
                    <div className='row'>
                        {this.props.dog.map((dog) => (
                            <div
                                key={dog.name}
                                className='DogList__dog col-md-6 col-lg-4 text-center'
                            >
                                <img
                                    className='DogList__img'
                                    src={dog.src}
                                    alt={dog.name}
                                />
                                <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default DogList;
