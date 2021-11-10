//import React from 'react'
import {useState, useEffect} from 'react'
import { getFetch } from '../../services/getFetch';
import Item from '../Item/Item'

import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ()  => {

    const [productosN, setProductos]  =  useState([])

    useEffect (() =>  {
        getFetch.then((res) => {
            setProductos(res); //aca nos devuelve un array del stock de productos
          })
            .catch((err) => console.log(err))
    }, []   )


    return (
        <>
            <ItemDetail  productosN={productosN} />

        </>
    )

}

export default ItemDetailContainer;