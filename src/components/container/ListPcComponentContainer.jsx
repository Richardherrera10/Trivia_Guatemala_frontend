import React from 'react'
import { ListPcComponent } from '../pcComponents/ListPcComponent'
import Layout from '../layout/Layout'

class ListPcComponentsContainer extends React.Component {
    
    constructor (props) {
        super(props)
    }
   
    render () {
        return (
           <Layout>
                <ListPcComponent/>
           </Layout>
        )
    }
}

export default ListPcComponentsContainer