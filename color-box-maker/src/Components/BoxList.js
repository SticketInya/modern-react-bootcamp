import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import '../Styles/BoxList.css';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [],
        };
    }

    addNewBox = (box) => {
        const newBox = { ...box, id: uuid() };
        const newBoxes = [...this.state.boxes, newBox];
        this.setState({ boxes: newBoxes });
    };

    removeBox = (id) => {
        const newBoxes = this.state.boxes.filter((box) => box.id !== id);
        this.setState({ boxes: [...newBoxes] });
    };

    render() {
        const boxes = this.state.boxes.map((box) => (
            <Box
                color={box.color}
                width={box.width}
                height={box.height}
                key={box.id}
                removeBox={() => this.removeBox(box.id)}
            />
        ));
        return (
            <div className='BoxList'>
                <NewBoxForm addNewBox={this.addNewBox} />
                <div className='Boxes'>{boxes}</div>
            </div>
        );
    }
}

export default BoxList;
