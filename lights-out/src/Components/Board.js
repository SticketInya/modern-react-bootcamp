import React, { Component } from 'react';
import Cell from './Cell';
import '../Styles/Board.css';

class Board extends Component {
    static defaultProps = {
        nrows: 5,
        ncols: 5,
        chanceLightStartsOn: 0.2,
    };

    constructor(props) {
        super(props);

        this.state = {
            hasWon: false,
            board: this.createBoard(),
        };
    }

    createBoard = () => {
        let board = [];

        for (let i = 0; i < this.props.nrows; i++) {
            let row = [];
            for (let j = 0; j < this.props.ncols; j++) {
                const isLit = Math.random() <= this.props.chanceLightStartsOn;
                row.push(isLit);
            }
            board.push(row);
        }

        return board;
    };

    flipCellsAround(coord) {
        let { ncols, nrows } = this.props;
        let board = this.state.board;
        let [y, x] = coord.split('-').map(Number);

        function flipCell(y, x) {
            if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
                board[y][x] = !board[y][x];
            }
        }

        // this.setState({ board, hasWon });
    }

    render() {
        const fields = Array.from({ length: this.props.nrows }).map((_, i) => {
            return (
                <tr className={'Board__row'} key={i}>
                    {Array.from({
                        length: this.props.ncols,
                    }).map((_, j) => {
                        return (
                            <Cell
                                key={`${i}-${j}`}
                                isLit={this.state.board[i][j]}
                            />
                        );
                    })}
                </tr>
            );
        });
        return (
            <div className='Board'>
                <h1 className='Board__title'>Lights Out</h1>
                <table>
                    <tbody>{fields}</tbody>
                </table>
            </div>
        );
    }
}

export default Board;
