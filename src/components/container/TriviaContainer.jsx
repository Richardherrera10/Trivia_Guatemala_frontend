import React from 'react'
import Layout from "../layout/Layout";
import Trivia from '../trivia/Trivia';
class TriviaContainer extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <>
                <Layout>
                    <Trivia/>
                </Layout>
            </>
            
        )
    }
}

export default TriviaContainer