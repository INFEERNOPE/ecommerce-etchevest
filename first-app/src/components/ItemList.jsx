import React from 'react'
import Item from "./Item"

const ItemList = ({card}) => {
    const productos = [
        {id: "01", name:"Jujutsu-Kaisen 01"  , description: "", img: "image.png" },
        {id: "02", name:"Evangelion 05"  , description: "", img: "image.png" },
        {id: "03", name:"Jojo's Bizzarre Adventure Part3 06"  , description: "", img: "image.png" },
        {id: "04", name:"Bleach 069"  , description: "", img: "image.png" },
        {id: "05", name:"Dragon Ball Super 01"  , description: "", img: "image.png" },
    ]
    return (
        <div>
            <h2>Lista de productos</h2>
            <Item card={card}/>
        </div>
    )
}

export default ItemList