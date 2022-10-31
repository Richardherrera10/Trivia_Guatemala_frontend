import React from 'react'
import Layout from "../layout/Layout";
import Admin from '../admin/admin';

class AdminContainer extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <>
                <Layout>
                    <Admin/>
                </Layout>
            </>
            
        )
    }
}

export default AdminContainer