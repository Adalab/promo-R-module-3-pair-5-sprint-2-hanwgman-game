// import monigota from '../images/monigota.png';
import '../styles/main.scss';
import {useState, useEffect} from 'react';
import React from 'react';
import callToApi from '../services/api';

function App() {
  // VARIABLES ESTADO
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setLastLetter ] = useState('');
  const [word, setWord] = useState('katakroker'); //enlazar API
  const [userLetters, setUserLetters] = useState([]);

  // POR QUE TRES CONSTANTES???
  // const [word, setWord] = useState('');
  // const [userLetters, setUserLetters] = useState([]);
  // const [lastLetter, setLastLetter] = useState('');

  // useEffect(() => {
  //   callToApi().then((response) => {
  //     setWord(response)
  //     console.log(response);
  //   });
  // },[]);


    // FUNCIONES
  const formSubmit =(e)=>{
    e.preventDefault();
  }

  const increment = () => {
    setNumberOfErrors(numberOfErrors+1);
    if(numberOfErrors === 13){
      
    }
  };

//CONTADOR ERRORES
  // const getNumberOfErrors = () => {
  //   const errorLetters = userLetters.filter(
  //     (letter) => word.includes(letter) === false
  //   );
  //   return errorLetters.length;
  // };
  
  const inputLetter = (ev) => {
    
    let regex = new RegExp("^[a-zA-Z ]+$");

    if (regex.test(ev.target.value || ev.target.value === '')) {
    // handleLastLetter(ev.target.value);
    setLastLetter(ev.target.value);
  }
  };

  // funcion handleLastLetter por que la creamos.

//   const handleLastLetter = (value) => {
//     value = value.toLocaleLowerCase();
//     setLastLetter(value);
    
//   if (!userLetters.includes(value)) {
//     userLetters.push(value);
//     setUserLetters([...userLetters]);
//   }
// }


// RENDER DE ERRORES
// const renderErrorLetters = () => {
//   const errorLetters = userLetters.filter(
//     (letter) =>
//       word.toLocaleLowerCase().includes(letter.toLocaleLowerCase()) === false
//   );
//   return errorLetters.map((letter, index) => {
//     return (
//       <li key={index} className='letter'>
//         {letter}
//       </li>
//     );
//   });
// };



  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    return wordLetters.map((letter, index) => {
      const exist = userLetters.includes(letter.toLocaleLowerCase())
      return( 
      <React.Fragment key={index}>
      <li  className="letter">
      {exist ? letter : ''}
      </li>
      </React.Fragment>);
    });
  };

  return (
    <div className="App">
      <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">
              {renderSolutionLetters()}
            </ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              <li className="letter">f</li>
              <li className="letter">q</li>
              <li className="letter">h</li>
              <li className="letter">p</li>
              <li className="letter">x</li>
            </ul>
          </div>
          <form className="form" onSubmit={formSubmit}>
            <label className="title" htmlFor="last-letter">Escribe una letra:</label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              onInput={inputLetter}
              value = {lastLetter}
            />
             <button onClick={increment}>Incrementar</button>
          </form>

         

        </section>
        <section className={`dummy error-${numberOfErrors}`}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
      </main>
    </div>
    </div>
  );
}

export default App;
