import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const ItemListContainer = () => {

    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const {idCategoria} = useParams()
    let categoria = "";
    
    useEffect(() => {
        
        fetch('https://fakestoreapi.com/products/') 
        .then((response)=>{
            return response.json()
        })
        .then((resultado)=>{

            if(idCategoria==undefined){
                setProductos(resultado)
            }else{
                if(idCategoria=="hombre"){categoria="men's clothing"}
                if(idCategoria=="mujer"){categoria="women's clothing"}
                if(idCategoria=="joyas"){categoria="jewelery"}
                if(idCategoria=="electronica"){categoria="electronics"}
                const filtered = resultado.filter(function(element){
                    return element.category==categoria; 
                });
                setProductos(filtered)
            }
            
        })
        .catch(()=>{
           console.log("Error al cargar los productos");
        })
        .finally(()=>{
            setLoading(false)
        })
        
    },[idCategoria])

    if(loading){
        return <h1>Cargando...</h1>
    }else{
        return <div className='container-xl mt-3 grillaProductos'><ItemList productos={productos}/></div>
    }
}

export default ItemListContainer