import {useState} from 'react';

function Form (props) {
  const [lastLetter, setLastLetter] = useState('');

  const formSubmit =(e)=>{
    e.preventDefault();
  };

  const handleInputLetter = (ev) => {
    // Hemos creado una constante regex para definir los caracteres válidos
    const regex = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü]+$/;
    // Vamos a hacer una condicional mediante el método .test, para testear un match en un string. Si lo encuentra devuelve true, sino false.
    if (regex.test(ev.target.value)){
      setLastLetter(ev.target.value);
      // ponemos entre corchetes por que es un array sino no lo identificaría como un string lo que cambia en el valor de la constante
      props.setUserLetter([...props.userLetter, ev.target.value]);
    }
    else{
      setLastLetter('');
    }
  };

  return (<form className="form" onSubmit={formSubmit}>
            <label className="title" htmlFor="last-letter">Escribe una letra:</label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              onChange= {handleInputLetter}
              value= {lastLetter}
            />
             {/* Buton de prueba para incrementar los errores en en el ahorcado */}
             {/* <button onClick={increment}>Incrementar</button> */}
          </form>
)
}

export default Form;