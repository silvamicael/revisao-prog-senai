import { useState } from "react"
import './Imesada.css'

function Imesada() {

    const [saldo, setSaldo] = useState(0);
    const [inputValor, setInputValor] = useState('');
    const [relatorio, setRelatorio] = useState([]);
    const [inputDescricao, setInputDescricao] = useState('');

    function creditarSaldo(){

        if (!inputDescricao.trim() || !inputValor || Number(inputValor) <= 0) {
        alert("Preencha a descrição e um valor válido!");
        return;
    }
        setSaldo (saldo + Number(inputValor))
        setInputValor ('')
        setInputDescricao('')

        setRelatorio((prev) => [
      ...prev,
      { tipo: "crédito",
      descricao: inputDescricao,
      valor: inputValor,
      saldo: setSaldo,
      id: Date.now()  
        }
    ]);
    }

    function debitarSaldo(){

        if (!inputDescricao.trim() || !inputValor || Number(inputValor) <= 0) {
        alert("Preencha a descrição e um valor válido!");
        return;
    }
        setSaldo (saldo - Number(inputValor))
        setInputValor ('')
        setInputDescricao('')

        setRelatorio((prev) => [
      ...prev,
      { tipo: "débito",
      descricao: inputDescricao,
      valor: inputValor,
      saldo: setSaldo,
      id: Date.now()    
        }
    ]);
    }

    return (
            <div className="container-imeasada">
                <div className="form-imesada">
                    <img src="./imgs/porco.png" alt="" className="imagem-porco"/>
                    <h2>iMesada</h2>
                    <p>Controlinho Financeiro</p>
                    <p>💸Saldo: R$ {saldo}</p>
                    
                    <input type="text" 
                        value={inputDescricao}
                        onChange={(e) => setInputDescricao(e.target.value)}
                        placeholder="Descrição"
                    />

                    <input type="number" 
                        value={inputValor}
                        onChange={(e) => setInputValor(e.target.value)}
                        placeholder="Valor"
                        min="0"
                        step="0.01"
                        />
                        

                    <div className="botoes">
                        <button onClick={creditarSaldo} className="btncredito">Creditar</button>
                        <button onClick={debitarSaldo} className="btndebito">Debitar</button>
                    </div>

                        <h3>🐧Kowalski Relatório🧾</h3>

                    <div className={"render-cards"}>
                        {relatorio.map((r) => (
                            <div key={r.id} className={r.tipo}>
                                <label> {r.descricao} </label>
                                <label> || R${r.valor} || </label>
                                <label> {r.tipo} </label>
                            </div>
                        ))}
                    </div>  
                </div>
            </div>
    )
}

export default Imesada;