const Tabela = () => {
    return (
        <table>
            <tr>
                <th colSpan={3} id="head">Veja a interpretação do IMC</th>
            </tr>
            <tr>
                <td>IMC</td>
                <td>Classificação</td>
                <td>Obesidade <span>(Grau)</span></td>
            </tr>
            <tr>
                <td>Menor que 18,5</td>
                <td>Magreza</td>
                <td>0</td>
            </tr>
            <tr>
                <td>Entre 18,5 e 24,9</td>
                <td>Normal</td>
                <td>0</td>
            </tr>
            <tr>
                <td>Entre 25,0 e 29,9</td>
                <td>Sobrepeso</td>
                <td>I</td>
            </tr>
            <tr>
                <td>Entre 30,0 e 39,9</td>
                <td>Obesidade</td>
                <td>II</td>
            </tr>
            <tr>
                <td>Maior que 40,0</td>
                <td>Obesidade grave</td>
                <td>III</td>
            </tr>
        </table>
    )
}

export default Tabela
