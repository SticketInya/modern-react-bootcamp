import './App.css';
import Lottery from './Components/Lottery';

function App() {
    return (
        <div className='App'>
            <Lottery title={'Narancs'} numBalls={3} maxNum={5} />
        </div>
    );
}

export default App;
