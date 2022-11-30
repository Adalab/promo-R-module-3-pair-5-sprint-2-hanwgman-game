function ErrorLetters (props) {
  const renderErrorLetters = () => {
    const errorLetter = 
    props.userLetter.filter((eachUserLetter) => !props.word.toLocaleLowerCase().includes(eachUserLetter.toLocaleLowerCase()) )
        return errorLetter.map((letter, index) => {
          return <li key={index} className="letter">{letter}</li>
        })
      };
  return (<div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              {renderErrorLetters()}
            </ul>
          </div>)
}

export default ErrorLetters;