// import monigota from '../images/monigota.png';
import '../styles/App.scss';
import {useState, useEffect} from 'react';
import React from 'react';
import callToApi from '../services/api';
import Header from './Header';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import Form from './Form';
import Dummy from './Dummy';

function App() {
  // Variable estado para almacenar la palabra que se deberá adivinar.
  const [word, setWord] = useState('Katakroker');
  // Variable estado para para almacenar y pintar las letras que introduce la jugadora.
  const [userLetter, setUserLetter] = useState([]);

// Llamada a al Api 

  useEffect(() => {
    callToApi().then((response) => {
      setWord(response)
      console.log(response);
    });
  },[]);

  return (
    <div className="App">
      <div className="page">
      <Header juego='Juego del ahorcado'></Header>
      <main className="main">
        <section>
          <SolutionLetters word={word} userLetter={userLetter}></SolutionLetters>
          <ErrorLetters word={word} userLetter={userLetter} />
          <Form setUserLetter={setUserLetter} userLetter={userLetter} />
        </section>
        <Dummy userLetter={userLetter} word={word} ></Dummy>
      </main>
    </div>
    </div>
  );
}

export default App;
