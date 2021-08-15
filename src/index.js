import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component{

    state = {lat: null, errorMessage: ""}

    componentDidMount(){
        //request for geolocation from the user
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //when we get the position, then update the state of the component.
                this.setState({ lat: position.coords.latitude })
            },
            (err) => {
                this.setState({errorMessage: err.message})
            });   
    }

    render(){
        if(this.state.errorMessage && !this.state.lat){
            return <div> Error: {this.state.errorMessage} </div>
        }
        if(!this.state.errorMessage && this.state.lat){
            return(
                <SeasonDisplay lat={this.state.lat} />
            )
        }
        return <div>Loading ...</div>
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);