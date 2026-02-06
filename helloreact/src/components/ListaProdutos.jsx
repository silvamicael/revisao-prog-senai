import React, {useState} from 'react'
import Produto from './Produto'
import "./ListaProdutos.css"

function ListaProdutos() {
    const [produtos, setProdutos] = useState([
        {id: Date.now(), nome: "Garrafa", preco: 50, descricao: "Garrafa de água 1,2L",},
        {id: Date.now()+1, nome: "Teclado", preco: 350, descricao: "Teclado Topzera",},   
    ])

    function cadastrarProduto(){
        const produto = {
            id: Date.now(),
            nome: prompt("Digite o nome do produto: "),
            preco: prompt("Preço: "),
            descricao: prompt("Descrição: ")
        }
        setProdutos([...produtos, produto])
    }

    

  return (
    <div className={"lista"}>
      <p>Lista de Produtos</p>
      <button onClick={cadastrarProduto}><img src="./icons/carbon--add-filled.svg" alt=""/></button>
      <div className={"render-cards"}>
            {produtos.map( (prod) => (
                <Produto p={prod} key={prod.id}/>
            ) )}
      </div>
    </div>
  )
}

export default ListaProdutos
