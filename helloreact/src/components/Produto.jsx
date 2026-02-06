import React from 'react'

function Produto(props) {
    return (
        <div >
            <p>Produto: {props.p.nome}</p>
            <p>Preço: {props.p.preco}</p>
            <p>Descrição: {props.p.descricao}</p>
        </div>
    )
}

export default Produto
