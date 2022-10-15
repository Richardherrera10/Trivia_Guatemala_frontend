import { CardComponent } from "./CardComponent";
import { useState, useEffect } from "react";

import { UpdateComponent } from "./UpdateComponent";

import { getAllComponents } from "../../service/api"
 
import { deleteComponent } from "../../service/api";

import { useParams } from "react-router-dom";

import Modal from "../modal/Modal";
export function ReadComponent ({data}) {
    const [componentData, setComponentData] = useState([])
    const [didSearch, setDidSearch] = useState(false)
    const [indComponent, setIndComponent] = useState('')
    const [deleteComp, setDeleteComp] = useState(false)
    const  {component} = useParams()

    console.log('en readCOmponent', data)
    
    console.log('comoponent in url is', component)


    const searchComponent = async () => {
            const componentSearch = await getAllComponents(component)
            console.log(componentSearch)
            setComponentData(componentSearch)
        }

    const onChange = (e) => {
        setIndComponent(e)
        setDidSearch(true)
    }
    
    const onClickDelete = (e) => {
        setIndComponent(e)
        setDeleteComp(true)
    }
   

    useEffect(()=>{
        searchComponent()
    },[component])

    const handleDelete = async () => {
        const componentToDelete = await deleteComponent(indComponent.component_type, indComponent.id)
        console.log('comp to delete', componentToDelete)
        setDeleteComp(false)
        searchComponent()

    }

    const back = () =>{
        setDidSearch(false)
        searchComponent()
    }
    return (
        <div className=''>
        { didSearch ? <UpdateComponent setDidSearch = {back} finishedSearch = {didSearch} data = {indComponent} /> : componentData.map(indComponent => (
                <CardComponent 
                key = {indComponent.id}
                component_type={indComponent.component_type}
                brand={indComponent.brand}
                quantity={indComponent.quantity}
                cost={indComponent.cost}
                descriptoin={indComponent.descriptoin}
                id={indComponent.id}
                onChange = {onChange}
                onClickDelete = {onClickDelete}
                />))
        
        }
        {deleteComp &&  <Modal data = {indComponent} closeModal={setDeleteComp} handleDelete = {handleDelete}/>  }
        </div>
    )
    
}