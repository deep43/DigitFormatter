import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import DigitFormatter from './Components/DigitFomatter/DigitFormatter';

function App() {
    return (
        <div className="App">
            <Header/>
            <DigitFormatter/>
            <Footer/>
        </div>
    );
}

export default App;
