import React from 'react';
  class Lifecycle extends React.Component {
      state = {
          name : "Components", 
          view: true,
          count : 0

      }
      render () {
          return(
              <div>
                  {
                  this.state.view && <title name={this.state.name} count={this.state.count} />
                  }

                  <button onClick={() => this.setState({view: false})}>Copot</button>
                  <button onClick={() => this.setState({name: 'Class'})}>Update</button>
                  <button onClick={() => this.setState({count: this.state.count + 1})}>Count</button>
              </div>
          )
      }
  }
  export default Lifecycle;