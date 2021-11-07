import {useState, useEffect} from 'react'
import ItemCount from '../ItemCount/ItemCount'

import { getFetch } from '../../services/getFetch'
import  ItemList  from '../ItemList/ItemList'


//componente
const  ItemListContainer = ({saludo}) => {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    //hago de cuenta que llamo a una api
    getFetch.then (aceptar => { setProductos(aceptar)
    } ) 
      .catch(err => console.log(err)) 
    },[])
    
    console.log(productos)


    return (
       <>
        <h1>{saludo}</h1>
        
        <ItemList productos={productos}/>
        
         <ItemCount  initial = {0} stock={10} />
       </>
   );
  }


export default ItemListContainer;

