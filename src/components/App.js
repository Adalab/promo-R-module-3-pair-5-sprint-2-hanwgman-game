// import monigota from '../images/monigota.png';
import '../styles/App.scss';
import {useState, useEffect} from 'react';
import React from 'react';
import {Link, Routes, Route } from 'react-router-dom';
import callToApi from '../services/api';
import Header from './Header';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import Form from './Form';
import Dummy from './Dummy';
import Instructions from './Instructions';
import Options from './Options';
import Footer from './Footer';

function App() {
  // Variable estado para almacenar la palabra que se deberá adivinar.
  const [word, setWord] = useState('Katakroker');
  // Variable estado para para almacenar y pintar las letras que introduce la jugadora.
  const [userLetter, setUserLetter] = useState([]);
  const [lastLetter, setLastLetter] = useState('');
// Llamada a al Api 

  useEffect(() => {
    callToApi().then((response) => {
      setWord(response)
      console.log(response);
    });
  },[]);
  const handleChange = (e) => {
    setWord(e.target.value);
    setUserLetter([]);
    setLastLetter('');

}
  return (
    <div className="App">
      <div className="page">
      <Header juego='Juego del ahorcado'></Header>
      <main className="main">
      <Routes>
        <Route path='/' element={
          <>
                <section>
                  <SolutionLetters word={word} userLetter={userLetter}></SolutionLetters>
                  <ErrorLetters word={word} userLetter={userLetter} />
                  <Form setUserLetter={setUserLetter} userLetter={userLetter} setLastLetter={setLastLetter} lastLetter={lastLetter} />
                </section>
        <Dummy userLetter={userLetter} word={word} ></Dummy>
          </>
        }>
        </Route>
        <Route path='/instructions' element={<Instructions />}></Route>
        <Route path='/options' element={<Options handleChange={handleChange}/>} ></Route>
      </Routes>
        
      </main>
      <Footer></Footer>
    </div>
    </div>
  );
}

export default App;
