import { useState } from "react"

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
            <div>
                <h2>iMesada</h2>
                <p>Controlinho Financeiro</p>
                <p>💵💸Saldo: R$ {saldo}</p>
                <input type="text" 
                    value={inputSaldo}
                    onChange={(e) => setInputSaldo(e.target.value)}
                    />
                    <br />
                <button onClick={creditarSaldo}>Crédito</button>
                <button onClick={debitarSaldo}>Débito</button>
            </div>
    )
}

export default Imesada