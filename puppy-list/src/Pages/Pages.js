import React, { Component } from 'react';
import DogList from '../Components/DogList';
import { Routes, Route, Navigate } from 'react-router-dom';
import DogDetails from '../Components/DogDetails';

class Pages extends Component {
    render() {
        return (
            <Routes>
                <Route
                    exact
                    path='/dogs/'
                    element={<DogList dog={this.props.dogs} />}
                />
                <Route
                    exact
                    path='dogs/:name'
                    element={<DogDetails dogs={this.props.dogs} />}
                />
                <Route path='*' element={<Navigate to='/dogs' replace />} />
            </Routes>
        );
    }
}

export default Pages;
