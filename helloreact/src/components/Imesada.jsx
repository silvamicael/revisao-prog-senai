import { useState } from "react"
import './Imesada.css'

function Imesada() {

    const [saldo, setSaldo] = useState(0);
    const [inputSaldo, setInputSaldo] = useState('');

    function creditarSaldo(){
        let valor = Number(inputSaldo)
        setSaldo (saldo + valor)
    }

    function debitarSaldo(){
        let valor = Number(inputSaldo)
        setSaldo (saldo - valor)
    }

    return (
            <div className="container">
                <h2>iMesada</h2>
                <p>Controlinho Financeiro</p>
                <p>💵💸Saldo: R$ {saldo}</p>
                <input type="text" 
                    value={inputSaldo}
                    onChange={(e) => setInputSaldo(e.target.value)}
                    placeholder="Valor"
                    />
                    <div className="acoes">
                        <button onClick={creditarSaldo} className="btn credito">Crédito</button>
                        <button onClick={debitarSaldo} className="btn debito">Débito</button>
                    </div>
            </div>
    )
}

export default Imesada;