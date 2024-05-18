import { useState } from "react"

const Formulario = () => {

    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);

    const calcIMC = () => {
        const imc = peso/(altura*altura);
        return parseFloat(imc).toFixed(2);
    }

    return (
        <form>
            <h1>Preencha o formulário</h1>
            <input id='alt' placeholder="Altura (1,70)" type="number" onChange={evento => setAltura(evento.target.value)}/>
            <input id='peso' placeholder="Peso (75)" type="number" onChange={evento => setPeso(evento.target.value)}/>
            <p>O seu IMC é: </p>
            {calcIMC()}
        </form>
    )
}

export default Formulario