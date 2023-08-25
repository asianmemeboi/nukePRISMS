/*
 * the home page background
 */
import "./CoolBackground.css";
import React from "react";
class Application extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            animationClass: 'animating'
        }
    }

    render() {
        return <div className={this.state.animationClass}>
        </div>;
    }
}


export default Application;