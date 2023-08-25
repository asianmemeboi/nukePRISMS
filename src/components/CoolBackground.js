/*
 * A simple React component
 */
class Application extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            animationClass: 'animating'
        }
        this.changeState = this.changeState.bind(this);
    }

    // changeState(){
    //     if (this.state.animationClass === 'animating'){
    //         this.setState({
    //             animationClass: 'animating paused'
    //         });
    //     } else {
    //         this.setState({
    //             animationClass: 'animating'
    //         });
    //     }
    // }
    render() {
        return <div className={this.state.animationClass}>
        {/* <h1>Pure CSS3 Animated Gradient Background</h1>
        <button onClick={this.changeState}>Stop / Start</button> */}
        </div>;
    }
}


export default Application;