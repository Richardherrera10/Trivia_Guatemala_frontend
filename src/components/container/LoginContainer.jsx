import React from 'react'
import { ListPcComponent } from '../pcComponents/ListPcComponent'
import Layout from '../layout/Layout'
import Login from '../login/Login'

class LoginContainer extends React.Component {
    
    constructor (props) {
        super(props)
    }
   
    render () {
        return (
           <Layout>
                <Login/> 
           </Layout>
        )
    }
}

export default LoginContainer