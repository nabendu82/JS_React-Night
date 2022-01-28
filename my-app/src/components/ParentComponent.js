import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parentName: 'Robin hood Sr.'
        }
    }

    greetParent = (child) => {
        alert(`Hello ${this.state.parentName} from ${child}`)
    }
    
    render() {
        return (
            <>
                <h1>Parent Component</h1>
                <ChildComponent greetHandler={this.greetParent} />
            </>
        )
    }
}

export default ParentComponent;
