function Options(prop) {
    const handleForm = (e) => {
        e.preventDefault();
    } 
    
    return(
        <section>
          <h3>Estas son las opciones de juego.</h3> 
          <form onSubmit={handleForm}>
                <label class="title" for="word">
                    Escribe aquí la palabra que hay que adivinar:
                </label>
                <input
                    autofocus
                    autocomplete="off"
                    class="form__input"
                    maxlength="15"
                    type="text"
                    id="word"
                    name="word"
                    onChange={prop.handleChange}
                />
            </form> 
        </section>
        
    )
}

export default Options