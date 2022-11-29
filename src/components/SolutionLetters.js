import '../styles/layout/letters.scss'

function SolutionLetters(props) {
    const renderSolutionLetters = () => {
        const wordLetters = props.word.split('');
        return wordLetters.map((eachLetter, index) => {
          const exist = props.userLetter.includes(eachLetter.toLocaleLowerCase())
       //Gracias a key podemos ver los guiones sin que se vean las letras.
       // Hemos hecho un ternario para pintar las letras si coinciden con la letra de la Api
          return <li key={index} className="letter">{exist ? eachLetter : ''}</li>
        })
      };

    return(
        <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">
            {renderSolutionLetters()}
            </ul>
      </div>
    )
}  


export default SolutionLetters