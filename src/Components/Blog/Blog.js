import React, {Component} from 'react';
import Navigation from '../Navigation/Navigation';
import './Blog.css';

class Blog extends Component {
    constructor(props) {
        super(props)
    }
    render() {
      return (
        <div className="MainBlog">
            <Navigation current={this.props.match.path}/>
          <h1>Hello, Blog</h1>
        </div>
      )
    }
}
export default Blog;