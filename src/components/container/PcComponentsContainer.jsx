import React from 'react'
import { PcComponents } from '../pcComponents/PcComponent'
import Layout from '../layout/Layout'

class PcComponentsContainer extends React.Component {
    
    constructor (props) {
        super(props)
    }
   
    render () {
        return (
           <Layout>
                <PcComponents/>
           </Layout>
        )
    }
}

export default PcComponentsContainer