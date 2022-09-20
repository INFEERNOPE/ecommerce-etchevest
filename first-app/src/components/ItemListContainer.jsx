import React from 'react'
import { useState } from 'react'
import ItemCounter from './ItemCounter'
const ItemListContainer = (props) => {
    const {greeting, titulo, counter} = props
    const [mostrar, setMostrar] = useState (false)
    const verMas = () =>{
        setMostrar(!mostrar)
    }
  return (
    <div>
        <h1>{greeting}</h1>
        <h2>{titulo}</h2>
        {mostrar ? <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores fuga optio blanditiis necessitatibus itaque earum asperiores qui, iusto provident quia natus rem suscipit, nam hic corporis mollitia, voluptas sint dolorum!</span> : ""}
        <button onClick={verMas}>{mostrar ? "Ver menos" : "Ver más"}</button>
        <ItemCounter counter={counter} valorInicial= {1} stock={6}/>
    </div>
  )
}

export default ItemListContainer