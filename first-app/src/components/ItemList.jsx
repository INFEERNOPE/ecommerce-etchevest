import React, { useEffect, useState } from 'react'
import Item from "./Item"

const [cargando, setCargando] = useState (false)

useEffect (() => {
    setCargando (true)
    getProducts
    .then ((res)=> setListaProducts(res))
    .catch ((error)=> console.log (error))
    .finally (()=> setCargando (false))
} , [])
 return (
    <div>
        <h1>{advertencia}</h1>
        {cargando ? <p>Cargando...</p> : <ItemList listaProductos={listaProductos}/>}
    </div>
 )
export default ItemList