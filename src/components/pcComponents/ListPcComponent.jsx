import { CardComponent } from "./CardComponent"
import { useState } from "react"
import { getAllComponents } from "../../service/api"
import { Link, Outlet } from "react-router-dom"
import { ReadComponent } from "./ReadComponent"


export function ListPcComponent () {
    const [component, setComponent] = useState('')
    const [loaded, setLoaded] = useState(false)
    const [searchComponent, setSearchComponent] = useState([])
    
    const setChange = () => {
        componentsData()
        setLoaded(true)
    }

    const componentsData = async () => {
        const componentSearch = await getAllComponents(component)
        console.log(componentSearch)
        setSearchComponent(componentSearch)
    }

    return (
        <>
        
            <div>
                <select 
                    className="custom-select"
                    value={component}
                    onChange={(e)=>setComponent(e.target.value)}
                >
                <option value='none'>--- Seleccione un componente ---</option>
                <option value='keyboard' >Teclado</option>
                <option value='mouse' >Mouse</option>
                <option value='monitor'>Monitor</option>
                <option value='speaker'>Speaker</option>
                <option value='motherboard'>Placa</option>
                <option value='processor'>Procesador</option>
                <option value='all' >Ver todos</option>
                </select>
                <button type="button" className="btn btn-primary w-25 h-75 " onClick={setChange}><Link to={`${component}`}> Encontrar componente </Link></button>
            </div>
            <div className='row'>
           
                {loaded && <ReadComponent data = {searchComponent}/>}
           
            </div>
            
        </>
    )
}