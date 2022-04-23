import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import VendingMachine from './Components/VendingMachine';
import Nutbar from './Components/Nutbar';
import Coke from './Components/Coke';
import Chips from './Components/Chips';

function App() {
    return (
        <div className='App'>
            <NavBar />
            <Routes>
                <Route exact path='/' element={<VendingMachine />} />
                <Route exact path='/coke' element={<Coke />} />
                <Route exact path='/chips' element={<Chips />} />
                <Route exact path='/nutbar' element={<Nutbar />} />
            </Routes>
        </div>
    );
}

export default App;
