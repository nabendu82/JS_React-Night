import React, { Component } from 'react';

class EventBind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'Hello World'
        }
        // this.changeMessage = this.changeMessage.bind(this)
    }

    changeMessage = () => {
        this.setState({ message: 'Hello JavaScript'})
        console.log(this)
    }
    
    render() {
        return (
            <>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.changeMessage.bind(this)}>Change Message</button> */}
                <button onClick={this.changeMessage}>Change Message</button>
                {/* <button onClick={() => this.changeMessage()}>Change Message</button> */}
            </>
        )
    }
}

export default EventBind;
