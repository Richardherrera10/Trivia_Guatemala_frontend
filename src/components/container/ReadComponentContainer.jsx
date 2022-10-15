import React from 'react'
import Layout from '../layout/Layout'
import { ReadComponent } from '../pcComponents/ReadComponent'

export class ReadComponentContainer extends React.Component {
    constructor (props) {
        super(props)
    }
   
    render () {
        return (
           <Layout>
                <ReadComponent/>
           </Layout>
        )
    }
}
