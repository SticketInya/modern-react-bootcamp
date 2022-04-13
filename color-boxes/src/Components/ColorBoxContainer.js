import React, { Component, setState } from 'react';
import ColorBox from './ColorBox';
import '../Styles/ColorBoxContainer.css';

class ColorBoxContainer extends Component {
    static defaultProps = {
        nBoxes: 18,
        allColors: [
            'nyanza',
            'turquoise-green',
            'turquoise-green-2',
            'ocean-green',
            'mint',
            'illuminating-emerald',
            'bottle-green',
            'msu-green',
            'dark-jungle-green',
        ],
    };

    constructor(props) {
        super(props);
        this.state = {
            boxes: this.getDefaultState(),
        };
    }

    getDefaultState() {
        const newState = Array.from({ length: this.props.nBoxes }, (_, i) => {
            const randColor = this.getRandomColor(this.state.allColors);
            return { [i]: randColor };
        });
        console.log(newState);
        return newState;
    }

    getRandomColor = (colors) => {
        const randIndex = Math.floor(Math.random() * colors.length);
        return colors[randIndex];
    };

    getArrayFrom = (start, stop, step) =>
        Array.from(
            { length: (stop - start) / step + 1 },
            (_, i) => start + i * step,
        );

    handleClick = (e) => {
        const randomColor = this.getRandomColor(this.props.allColors);
        // setState({ color: randomColor });
        // e.target.style.backgroundColor = `${randomColor}`;
        console.log('clicked' + randomColor);
    };

    render() {
        const boxes = this.state.boxes.map((num) => {
            console.log(num);
            return (
                <ColorBox
                    key={num[0].toString()}
                    onclick={this.handleClick}
                    color={num[1]}
                />
            );
        });
        return <div className='ColorBoxContainer'>{boxes}</div>;
    }
}

export default ColorBoxContainer;
