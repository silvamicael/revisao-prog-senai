import { useState } from "react"
import './Imesada.css'

function Imesada() {

    const [saldo, setSaldo] = useState(0);
    const [inputSaldo, setInputSaldo] = useState('');
    const [relatorio, setRelatorio] = useState([]);
    const [descricao, setDescricao] = useState('');

    function creditarSaldo(){
        let valor = Number(inputSaldo)
        setSaldo (saldo + valor)
        setInputSaldo ('')

        setRelatorio((prev) => [
      ...prev,
      { tipo: "(crédito)",
      descricao: descricao,
      valor: valor,
      saldo: setSaldo }
    ]);
    }

    function debitarSaldo(){
        let valor = Number(inputSaldo)
        setSaldo (saldo - valor)

        setRelatorio((prev) => [
      ...prev,
      { tipo: "(débito)",
      descricao: descricao,
      valor: valor,
      saldo: setSaldo }
    ]);
    }

    return (
            <div className="container-imeasada">
                <div className="form-imesada">
                    <img src="./imgs/porco.png" alt="" className="imagem-porco"/>
                    <h2>iMesada</h2>
                    <p>Controlinho Financeiro</p>
                    <p>💸Saldo: R$ {saldo}💵</p>
                    
                    <input type="text" 
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        placeholder="Descrição"
                    />

                    <input type="text" 
                        value={inputSaldo}
                        onChange={(e) => setInputSaldo(e.target.value)}
                        placeholder="Valor"
                        />
                        

                    <div className="botoes">
                        <button onClick={creditarSaldo} className="btn credito">Creditar</button>
                        <button onClick={debitarSaldo} className="btn debito">Debitar</button>
                    </div>

                        <h3>🐧Kowalski Relatório🧾</h3>

                    <table>
                        <tbody>
                        {relatorio.map((item, index) => (
                            <tr key={index}>
                            <td> {item.descricao} = </td>
                            <td> R${item.valor}.00  </td>
                            <td> {item.tipo} </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
    )
}

export default Imesada;