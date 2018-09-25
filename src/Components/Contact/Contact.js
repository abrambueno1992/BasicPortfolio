import React, {Component} from 'react';
import Navigation from '../Navigation/Navigation';

class Contact extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props.match.path)
      return (
        <div>
            <Navigation current={this.props.match.path}/>
            <h1>Hello, Contact</h1>
        </div>
      )
    }
}

export default Contact;