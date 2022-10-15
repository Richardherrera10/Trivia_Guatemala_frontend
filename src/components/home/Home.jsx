import React from 'react'

class Home extends React.Component {
    render () {
        return (
            <div>
                <h1> Soy homeContainer hola</h1>
                <button type="button" className="btn btn-light">Light</button>
                <button type="button" className="btn btn-dark">Dark</button>
            </div>
            
        )
    }
}

export default Home