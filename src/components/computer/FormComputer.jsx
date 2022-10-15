import React from 'react'
import {getComponentBrand} from '../../service/api'
import { postPc } from '../../service/api'
import { useState } from 'react'
import { useEffect } from 'react'
import { getEx } from '../../service/api'
export default function FormComputer() {

    const [components, setComponents] =useState(['mouse', 'keyboard', 'monitor', 'speaker', 'motherboard', 'processor'])
    const [allComponent, setAllComponent] = useState([])
    
    const [pcPart, setPcPart] = useState({
        mouse: '',
        monitor: '',
        keyboard: '',
        motherboard: '',
        speaker: '',
        processor: ''
    })
    const [pcName, setPcName] = useState('')
    const [quantity, setQuantity] = useState('')

    const getAComponent = async (allComps)=> {
        const componentData = await getComponentBrand('mouse')
        
        let allBrands = []
      
        allComps.forEach((comp) => {
            let res = getEx(comp)
            console.log('resultado', res)
            res.then(e =>{
                console.log('e es', e)
                allBrands.push(e)
                setAllComponent([...allBrands])
            })
        })
        console.log('allbrands', (allBrands))
    }
    const handleOnSubmit = async (e) => {
        e.preventDefault()
        pcPart['quantity'] = quantity
        pcPart['name'] = pcName
   
        postPc(pcPart)
    }

    const handleChange =  (e) => {
       
        let array = e.split(',')
       
        for (let [key, value] of Object.entries(pcPart)) {    
            if (array[0] === key) {
                pcPart[key] = array[1]
            } 
        }
         
       setPcPart(pcPart)
    }

    useEffect(()=>{getAComponent(components)},[])

    return (
        <div id="feedback-form">
            <form onSubmit={handleOnSubmit}>
                <h1>  NUEVA COMPUTADORA</h1>
            <input type="text" name="Name" placeholder="Escriba nombre de Computadora" value= {pcName} onChange={(e) => setPcName(e.target.value)}  />

            <label >Seleccione los componentes que desee añadir:</label>

                {allComponent.map((compType, index) => 
                    (
                        <select className="custom-select" 
                                key={index}
                                onChange={(e)=>handleChange(e.target.value)}
                                > 
                            <option value= {Object.keys(compType[0])}>--- {`${Object.keys(compType[0])}`} ---</option>
                            {
                                compType.map((details, index)=>{
                                    // console.log('detalles', Object.values(details)[0])
                                    // let id = Object.keys(Object.values(details)[0])
                                    // let valor = Object.values(Object.values(details)[0])
                                    // console.log('id del componente', Object.keys(Object.values(details)[0]))
                                    // console.log('info del componente', Object.values(Object.values(details)[0]))
                                    
                                    let realVal = [Object.keys(compType[0]), 
                                                    Object.keys(Object.values(details)[0])]
                                     return (
                                        <option
                                            key={index}
                                            value= {realVal}
                                         
                                            >
                                                {Object.values(Object.values(details)[0])} </option>
                                    )}
                                )
                            }
                        </select>
                    )
                    
                )}
            <label htmlFor="cantidad">Cantidad:</label>
                        <input 
                            type="number"  
                            name="cantidad" 
                            min="0" 
                            max="100"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        />
            <button type='submit'> Crear </button>
            </form>
                        
        </div>
  )
}