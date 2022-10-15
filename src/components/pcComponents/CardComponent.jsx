import {Link} from 'react-router-dom';

export function CardComponent (props) {
    console.log('props recibidas', props)

    const objectToSearch = {
        brand: props.brand,
        component_type: props.component_type,
        quantity: props.quantity,
        cost: props.cost,
        descriptoin: props.descriptoin,
        id: props.id
    }

    return (

        <div class="pricing_table_wdg">
                <ul>
                    <li>{props.brand}</li>
                    <li>Precio: {props.cost}</li>
                    <li>Cantidad: {props.quantity} </li>
                    <li>Descripción: {props.descriptoin}</li>
                    <li>
                        <div className="buttons">
                                 <button 
                                     type="button"  
                                     className="btn btn-primary"
                                     onClick={()=>{props.onChange(objectToSearch)}}
                                     ><Link to={`/${objectToSearch.component_type}/${objectToSearch.id}`}>Actualizar</Link></button>
                                
                                <button 
                                    type="button" 
                                    class="btn btn-danger"
                                    onClick={()=>{props.onClickDelete(objectToSearch)}}
                                    > Eliminar</button>
                        </div>
                    </li>
                </ul>
        </div>        
    


    )
}

<div class="container">
    <ul class="responsive-table">
        <li class="table-header">
        <div class="col col-1">Job Id</div>
        <div class="col col-2">Customer Name</div>
        <div class="col col-3">Amount Due</div>
        <div class="col col-4">Payment Status</div>
        </li>
        <li class="table-row">
        <div class="col col-1" data-label="Job Id">42235</div>
        <div class="col col-2" data-label="Customer Name">John Doe</div>
        <div class="col col-3" data-label="Amount">$350</div>
        <div class="col col-4" data-label="Payment Status">Pending</div>
        </li>
    </ul>
</div>