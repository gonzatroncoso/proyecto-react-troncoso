

const productos = [

    {id: 1  , modelo: "samsung galaxy a70"  ,    memoria:"128gb" ,    precio:  60000  , imagen:""  },
    {id: 2  , modelo: "samsung galaxy s20 fe"  , memoria:"64gb" ,     precio: 65000   , imagen: "" },
    {id: 3  , modelo: "samsung galaxy a51" ,     memoria:"64gb" ,     precio: 46000   , imagen: "" },
    {id: 4  , modelo: "iphone xr"   ,            memoria:"256gb" ,    precio:  105000  , imagen: "" },
    {id: 5  , modelo: "iphone 11 pro max" ,      memoria:"128gb" ,    precio:  128000  , imagen: "" },
    {id: 6  , modelo: "iphone 8 plus" ,          memoria:"128gb" ,    precio: 92000   , imagen: "" },
    {id: 7  , modelo: "motorola g8 plus"  ,      memoria:"64gb" ,     precio: 50000   , imagen: "" },
    {id: 8  , modelo: "motorola g20"  ,          memoria:"128gb" ,    precio: 54000   , imagen: "" },
    {id: 9  , modelo: "motorola x play"  ,       memoria:"256gb" ,    precio:  43000  , imagen: "" }
    
    
    ];

    
    
export const getFetch = new Promise ((aceptar, rechazar)  => {
    const condition=true
    if (condition) {{
      //aca simulo un retraso de la red
      setTimeout(() => {
        aceptar(productos)
        
      }, 2000);
    }
  
    } else {{       
        setTimeout(() => {      
            rechazar("404 not found") 
          
        }, 2000);
      }
    } 
  })
  console.log(getFetch)
  
  
