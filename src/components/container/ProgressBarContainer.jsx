import React from 'react'
import Layout from "../layout/Layout";

import ProgressBar from '../progress/ProgressBar';

class ProgressBarContainer extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <>
                <Layout>
                    <ProgressBar/>
                </Layout>
            </>
            
        )
    }
}

export default ProgressBarContainer