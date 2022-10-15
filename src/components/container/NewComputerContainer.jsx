import React from 'react'
import { NewComputer } from '../computer/NewComputer'
import Layout from '../layout/Layout'

class NewComputerContainer extends React.Component {
    
    constructor (props) {
        super(props)
    }
   
    render () {
        return (
           <Layout>
                <NewComputer/>
           </Layout>
        )
    }
}

export default NewComputerContainer