import './SeasonDisplay.css'
import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {
    state = {lat: null, errorMessage: ''} // initialized to null until lat comes in

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}), // calls render method 2nd time when state is updated
            
            (err) => this.setState({errorMessage: err.message}) // do not have to update ALL setStates at once- only properties specified
        )
    }

    render () { // do not initialize anything in render
        if (this.state.errorMessage && !this.state.lat) {
            return <div> Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            // return <div>Latitude: {this.state.lat}</div>
            return <SeasonDisplay lat={this.state.lat}/> // gives season display access to lat
        }
        return <div>loading!</div>
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)