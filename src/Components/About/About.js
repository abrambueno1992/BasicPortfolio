import React, {Component} from 'react'
import Navigation from '../Navigation/Navigation';

class About extends Component {
    constructor(props) {
        super(props)
    }
    render() {
      return (
        <div>
          <Navigation current={this.props.match.path}/>
          <h1>Hello, ABOUT</h1>
        </div>
      )
    }
}

export default About;