import React from 'react'
import Layout from "../layout/Layout";
import Profile from '../profile/profile';

class ProfileContainer extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <>
                <Layout>
                    <Profile/>
                </Layout>
            </>
            
        )
    }
}

export default ProfileContainer