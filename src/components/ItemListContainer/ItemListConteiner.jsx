import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const  ItemListContainer = ({saludo}) => {
    return (
       <>
        <h1>{saludo}</h1>
        <ItemCount  initial = {0} stock={10} />
       </>
   );
  }

export default ItemListContainer;

