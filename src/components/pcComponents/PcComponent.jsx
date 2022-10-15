import { useState, useEffect } from "react"
import { postComponent } from "../../service/api"
import { FormComponent } from "./FormComponent"
import { Button } from "./Button"

export function PcComponents () {
    const [brand, setBrand] = useState('')
    const [component_type, setComponent_type] = useState('')
    const [quantity, setQuantity] = useState('')
    const [cost, setCost] = useState('')
    const [descriptoin, setDescriptoin] = useState('')
    const [post, setPost] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const componente = {
            component_type,
            brand,
            quantity,
            cost,
            descriptoin
        }
        console.log('componente es', componente)
        postComponent(component_type, componente)
        clearInput()
        setPost(true)
        setTimeout(() => setPost(false), 1500)
    }
    const clearInput = () => {
        setBrand("")
        setComponent_type("none")
        setQuantity('')
        setCost('')
        setDescriptoin('')
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
            {post && <div className="alert alert-success">
                        <strong>¡Componente creado exitosamente!</strong>
                    </div>}
                    
           
                <h2 className="header">Crear un componente</h2>
                <div>
                <FormComponent 
                        // form
                        handleSubmit = {handleSubmit} 
                        //select 
                        selectValue = {component_type} 
                        selectOnChange = {handleSelectOnChange} 
                        // Marca
                        brandValue = {brand}
                        brandOnChange = {handleBrandOnChange}
                        // cantidad
                        quantityValue = {quantity}
                        quantityOnChange = {handleQuantityOnChange}
                        //costo
                        costValue = {cost}
                        costOnChange = {handleCostOnChange}
                        //descripcion
                        descriptoinValue = {descriptoin}
                        descriptoinOnChange = {handleDescriptoinOnChange}
                        name = 'Crear'
                        type = 'Submit'
                       
                    />   
                  
                </div>
               
            
      </>
    )
}



{/* <form onSubmit={handleSubmit}>
                        <div>
                            <select 
                                value={component_type}
                                onChange={(e)=>setComponent_type(e.target.value)}
                                className="custom-select">
                            <option value='none'>--- Seleccione un componente ---</option>
                            <option value='keyboard' >Teclado</option>
                            <option value='mouse' >Mouse</option>
                            <option value='monitor'>Monitor</option>
                            <option value='speaker'>Speaker</option>
                            <option value='motherboard'>Placa</option>
                            <option value='processor'>Procesador</option>
                            </select>
                        </div>

                        
                        <input 
                            type="text" name="Marca" 
                            placeholder="Escriba Marca" 
                            value={brand}
                            onChange={(e)=>setBrand(e.target.value)}
                        />
                        <label htmlFor="cantidad">Cantidad:</label>
                        <input 
                            type="number"  
                            name="cantidad" 
                            min="0" 
                            max="100"
                            value={quantity}
                            onChange={(e)=>setQuantity(e.target.value)}
                        />
                        <label htmlFor="cantidad">Costo:</label>
                        <input 
                            type="number"  
                            name="costo" 
                            min="0" 
                            max="6000" 
                            step="0.01"
                            value={cost}
                            onChange={(e)=>setCost(e.target.value)}
                        />

                        
                        <textarea 
                            placeholder="Escriba Descripción"
                            value={descriptoin}
                            onChange={(e)=>setDescriptoin(e.target.value)}
                        ></textarea>
                        <button type="submit">Crear</button>
                    </form> */}