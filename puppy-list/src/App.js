import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Pages from './Pages/Pages';

class App extends Component {
    static defaultProps = {
        dogs: [
            {
                name: 'Whiskey',
                age: 5,
                src: 'https://media.4-paws.org/1/e/d/6/1ed6da75afe37d82757142dc7c6633a532f53a7d/VIER%20PFOTEN_2019-03-15_001-2886x1999-1920x1330.jpg',
                facts: [
                    'Whiskey loves eating popcorn.',
                    'Whiskey is a terrible guard dog.',
                    'Whiskey wants to cuddle you!',
                ],
            },
            {
                name: 'Hazel',
                age: 3,
                src: 'https://images.squarespace-cdn.com/content/v1/53a60116e4b0488fb14d69d8/1597336605370-5BEYBPCYKAZEMWC4J7KQ/image-asset.jpeg?format=1000w',
                facts: [
                    'Hazel loves eating popcorn.',
                    'Hazel is a terrible guard dog.',
                    'Hazel wants to cuddle you!',
                ],
            },
            {
                name: 'Tubby',
                age: 4,
                src: 'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=cbe66879ae8c0ac09975d945f39137f6',
                facts: [
                    'Tubby loves eating popcorn.',
                    'Tubby is a terrible guard dog.',
                    'Tubby wants to cuddle you!',
                ],
            },
        ],
    };
    render() {
        return (
            <div className='App'>
                <Navbar dogs={this.props.dogs} />
                <Pages dogs={this.props.dogs} />
            </div>
        );
    }
}

export default App;
