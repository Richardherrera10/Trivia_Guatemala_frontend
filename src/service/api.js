import axios from "axios"

export const postComponent = async (component_type, component) => {
    console.log('componente type', component_type)
    console.log('todo componente', component)
    let response = await axios.post(`http://127.0.0.1:8000/api/v1/${component_type}/`, component)
    console.log(response)
}

export const getAllComponents = async (component_type) => {
    
    let response = await axios.get(`http://127.0.0.1:8000/api/v1/${component_type}/`)
    console.log('getting', response)
    return response.data
}

export const updateComponent = async (component_type, component_id, component) => {
    let response = await axios.put(`http://127.0.0.1:8000/api/v1/${component_type}/${component_id}/`, component)
    console.log('response de updated axios', response)
}

export const deleteComponent = async (component_type, component_id) => {
    let response = await axios.delete(`http://127.0.0.1:8000/api/v1/${component_type}/${component_id}/`)
    console.log('response de delete axios', response)
}

export const getComponentBrand = async (component_type) => {
    
    let response = await axios.get(`http://127.0.0.1:8000/api/v1/${component_type}/`)
    console.log('getting', response)
    let array = []
    response.data.forEach((component) =>{
        array.push(`${component.brand} -- Precio: Q${component.cost}`)
     })
     
    return array
}

export const getEx = async (component_type) => {
    
    let response = await axios.get(`http://127.0.0.1:8000/api/v1/${component_type}/`)
    console.log('getting', response)
    let array = []
    response.data.forEach((component) =>{
        array.push({[component.component_type]:{[component.id]:`${component.brand} -- Precio: Q${component.cost}`}})
        
     })
     
    return array
}

export const postPc = async (pcData) => {
    console.log('pc data to send to api', pcData)
     let response = await axios.post(`http://127.0.0.1:8000/api/v1/computer/`, pcData)
    console.log('response post pc', response)
}