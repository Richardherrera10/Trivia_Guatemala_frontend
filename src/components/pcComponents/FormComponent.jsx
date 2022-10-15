import { Button } from "./Button"
import { useState } from "react"

export function FormComponent (props) {
    
    return (
        <div id="feedback-form">
        <form onSubmit={props.handleSubmit}>
                        <div>
                            <select 
                                value={props.selectValue}
                                onChange={(e)=>props.selectOnChange(e)}
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
                            value={props.brandValue}
                            onChange={(e)=>props.brandOnChange(e)}
                        />
                        <label htmlFor="cantidad">Cantidad:</label>
                        <input 
                            type="number"  
                            name="cantidad" 
                            min="0" 
                            max="100"
                            value={props.quantityValue}
                            onChange={(e)=>props.quantityOnChange(e)}
                        />
                        <label htmlFor="cantidad">Costo:</label>
                        <input 
                            type="number"  
                            name="costo" 
                            min="0" 
                            max="6000" 
                            step="0.01"
                            value={props.cost}
                            onChange={(e)=>props.costOnChange(e)}
                        />

                        
                        <textarea 
                            placeholder="Escriba Descripción"
                            value={props.descriptoinValue}
                            onChange={(e)=>props.descriptoinOnChange(e)}
                        ></textarea>
                        <button type={props.type}>{props.name} </button>
                        
                    </form>
        </div>
    )
}