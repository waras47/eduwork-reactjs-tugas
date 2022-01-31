import React from "react";

export default class List extends React.Component {
    //map
    state = {
        users : ['edi', 'aldo', 'wahyu']
    }
    render() {
        return (
            <div>
                <ul>
                {
                this.state.users.map((user, i) => <li key={i}><h1>{user}</h1></li> )
                }
                </ul>
            </div>
        )
    }
}