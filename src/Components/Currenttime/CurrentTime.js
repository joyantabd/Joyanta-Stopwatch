import React, { Component } from 'react';


class CurrentTime extends Component {

    constructor(props) {
        super(props)

        this.state = {
          currentDateTime: Date().toLocaleString()
        }
      }
    

    render() {
        return (
           <div> 
           <h4 style={{color:"Lime"}}>{ this.state.currentDateTime }</h4>
          </div>
        );
    }
}

export default CurrentTime;