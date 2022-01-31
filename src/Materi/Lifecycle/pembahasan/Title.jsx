import React from "react";
import reactDom from "react-dom";

class Title extends reactDom.Components {
    constructor (props) {
        super (props);
        this.state = {
            title : 'lifecycle'
        }
        console.log('CONSTRUCTOR')
    }

    static getDerivedStatefromProps(props, state) {
        console.group (`get derived state from props`);
        console.log ('props: ', props);
        console.log('state: ', state);
        console.groupEnd();
        return null;
    }

    shouldComponentsUpdate(nextprops, nextstate) {
        console.group (`Should update ?`);
        console.log ('nextprops: ', nextprops);
        console.log('nextstate: ', nextstate);
        console.log('this props: ', this.props);
        console.log('this state: ', this.state);
        console.groupEnd();
        return true;
    }

    render() {
        console.log('RENDER');
        return (
            <div>
                {this.state.title}{this.props.name}:{this.props.count}
            </div>
        )
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.group (`get snapshot beforr update ?`);
        console.log ('prevprops: ', prevprops);
        console.log('prevstate: ', prevstate);
        console.log('this props: ', this.props);
        console.log('this state: ', this.state);
        console.groupEnd();
        return null;
    }

    componentDidMount() {
        console.log('DID MOUNT');
    }

    componentDidUpdate() {
        console.log('DID UPDATE');
    }

    componentWillunMount() {
        console.log('WILL UNMOUNT');
    }
} 