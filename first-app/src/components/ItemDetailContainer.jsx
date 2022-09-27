import React, { useEffect, useState } from 'react'
import { getProducts } from "../../mocks/fakeApi"
import Item from './Item'
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
const [productDetail, setProductDetail] = useState ({})
const [cargandous, setCargandous] = useState (false)
            useEffect(() =>{
                setCargandous (true)
                getProducts
                .then ((res) => setProductDetail (res.find((Item) => Item.id === "06")))
                .catch ((error) => console.log (error))
                .finally (() => setCargandous (false))
            }, [])
            return (
                <div>
                    {cargandous ? <p>Cargando...</p> : <ItemDetail productDetail={productDetail}/>}
                </div>
            )
}

export default ItemDetailContainer