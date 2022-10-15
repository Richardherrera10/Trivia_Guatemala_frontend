import { FormComponent } from "./FormComponent"
import { useState} from "react"

import { updateComponent } from "../../service/api"

import { deleteComponent } from "../../service/api"
 import { Link, useNavigate } from "react-router-dom"

export function UpdateComponent ({data, finishedSearch, setDidSearch}) {
    console.log('data para updatear', data)
    console.log('finished search', finishedSearch)
    const [brand, setBrand] = useState(data.brand)
    const [component_type, setComponent_type] = useState(data.component_type)
    const [quantity, setQuantity] = useState(data.quantity)
    const [cost, setCost] = useState(data.cost)
    const [descriptoin, setDescriptoin] = useState(data.descriptoin)
    const [id, setId] = useState(data.id)

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('al enviar')
        console.log(brand, component_type, quantity, cost, descriptoin)
        const updatedComponent = {
            brand, component_type, quantity, cost, descriptoin, id
        }
        updateComponent(component_type, id, updatedComponent)
        finishedSearch = false
    }
    
    const handleSelectOnChange = (e) => {
        setComponent_type(e.target.value)
    }

    const handleBrandOnChange = (e) => {
        setBrand(e.target.value)
    }

    const  handleQuantityOnChange = (e) => {
        setQuantity(e.target.value)
    }

    const handleCostOnChange = (e) => {
        setCost(e.target.value)
    }

    const handleDescriptoinOnChange = (e) => {
        setDescriptoin(e.target.value)
    }

    return (
        <>
                <FormComponent 
                    selectValue = {component_type} 
                    brandValue = {brand}  
                    quantityValue = {quantity} 
                    cost = {cost}
                    descriptoinValue = {descriptoin}

                    handleSubmit = {handleSubmit} 
    
                    selectOnChange = {handleSelectOnChange} 
              
                    brandOnChange = {handleBrandOnChange}
                 
                    quantityOnChange = {handleQuantityOnChange}
                       
                    costOnChange = {handleCostOnChange}
                      
                    descriptoinOnChange = {handleDescriptoinOnChange}
                      
                    name = 'Actualizar'
                    type = 'Submit'

                    
                    />
                 <button onClick={()=> {
                    setDidSearch()
                    navigate(`/${component_type}`)
                    }}> Regresar</button>
        </>
        
    )
}