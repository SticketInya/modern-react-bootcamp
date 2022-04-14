import React, { Component } from 'react';
import Cell from './Cell';
import '../Styles/Board.css';

class Board extends Component {
    static defaultProps = {
        nrows: 5,
        ncols: 5,
        chanceLightStartsOn: 0.25,
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
                const isLit = Math.random() < this.props.chanceLightStartsOn;
                row.push(isLit);
            }
            board.push(row);
        }

        return board;
    };

    flipCellsAround = (coord) => {
        let { ncols, nrows } = this.props;
        let board = this.state.board;
        let [row, col] = coord.split('-').map(Number);

        function flipCell(row, col) {
            if (col >= 0 && col < ncols && row >= 0 && row < nrows) {
                board[row][col] = !board[row][col];
            }
        }

        flipCell(row, col);
        flipCell(row - 1, col);
        flipCell(row + 1, col);
        flipCell(row, col - 1);
        flipCell(row, col + 1);

        const hasWon = board.filter((row) => row.indexOf(true) > -1)[0]
            ? false
            : true;

        this.setState({ board, hasWon });
    };

    restartGame = () => {
        this.setState({
            hasWon: false,
            board: this.createBoard(),
        });
    };

    render() {
        const fields = Array.from({ length: this.props.nrows }).map((_, i) => {
            return (
                <tr className={'Board__row'} key={i}>
                    {Array.from({
                        length: this.props.ncols,
                    }).map((_, j) => {
                        const coord = `${i}-${j}`;
                        return (
                            <Cell
                                key={coord}
                                isLit={this.state.board[i][j]}
                                flipCellsAroundMe={() =>
                                    this.flipCellsAround(coord)
                                }
                            />
                        );
                    })}
                </tr>
            );
        });

        const winner = (
            <div>
                <h2 className='Board__winner'>Congratulations! You won!</h2>
                <button className='Board__restart' onClick={this.restartGame}>
                    Play again!
                </button>
            </div>
        );

        return (
            <div className='Board'>
                <h1 className='Board__title'>Lights Out</h1>
                <table>
                    <tbody>{this.state.hasWon ? winner : fields}</tbody>
                </table>
            </div>
        );
    }
}

export default Board;
