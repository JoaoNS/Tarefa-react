import { useState } from "react"

const Formulario = () => {

    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);

    const calcIMC = () => {
        const imc = peso/(altura*altura);

        if (imc <= 18.5) {
            return (<p>Abaixo do peso</p>)
        } else if ( imc >=18.6 && imc <=24.9) {
            return (<p>Peso normal</p>)
        } else if ( imc >=18.6 && imc <=24.9) {
            return (<p>Sobrepeso</p>)
        } else if ( imc >=25 && imc <=29.9) {
            return (<p>Obesidade</p>)
        } else if ( imc >=30 && imc <=39.9) {
            return (<p>Obesidade grave</p>)
        }
    }

    return (
        <form>
            <h1>Preencha o formulário</h1>
            <input id='alt' placeholder="Altura" type="number" onChange={evento => setAltura(evento.target.value)}/>
            <input id='peso' placeholder="Peso" type="number" onChange={evento => setPeso(evento.target.value)}/>
            <p>O seu IMC é: </p>
            {calcIMC()}
        </form>
    )
}

export default Formulario