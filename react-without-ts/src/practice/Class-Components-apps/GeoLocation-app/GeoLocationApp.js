import React,{Component} from "react";


class GeoLocationApp extends Compnenent{

    constructor(props){
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            error: null
        };
    }
    
    render (){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                })
            },
        
        );
        return (
            <div>
            <h1>Latitude:{this.state.latitude}</h1>
            </div>
        );
    }
}