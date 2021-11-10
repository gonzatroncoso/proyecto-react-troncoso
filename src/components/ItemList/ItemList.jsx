import React from 'react'

import  Item  from '../Item/Item'


 const ItemList = ({productos}) => {
    return ( 
    <>
    { //map me devuelve el array de todos los productos
         productos.map( prods =>  <Item prods= {prods}/> ) 
    }

    </>
            )
                                   }

export default ItemList ;