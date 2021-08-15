import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props){
        super(props);
        // initialize the state of the component
        this.state = {lat: null,
                    errorMessage: ""};
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
            return<div>Lattitude: {this.state.lat}</div>
        }
        return <div>Loading ...</div>
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);