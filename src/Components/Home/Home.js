import React, {Component} from 'react'
import './Home.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Navigation from '../Navigation/Navigation';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {items: ['hello', 'world', 'click', 'me']};
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    const newItems = this.state.items.concat([
      prompt('Enter some text')
    ]);
    this.setState({items: newItems});
  }

  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }

  render() {
    // const items = this.state.items.map((item, i) => (
    //   <div key={item} onClick={() => this.handleRemove(i)}>
    //     {item}
    //   </div>
    // ));

    return (
      <div className="Home" >
       {/* <button onClick={this.handleAdd}>Add Item</button>
        
        <ReactCSSTransitionGroup
                  transitionName="example"
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={300}>
        
                  
        {items}
                
        </ReactCSSTransitionGroup> */}
        <Navigation current={this.props.match.path}/>
        <div animationName="example" className="Intro">
          <h1 className="Text">Hello, my name is Abraham Bueno, and I'm a FULL STACK web developer</h1>
          <h2 className="Text">The Stack I use is Mongo DB, Express, React, Redux, and Node.</h2>

        </div>
        <div className="One">
        </div>
        <div className="Two">
        </div>
        {/*<div className="One">*/}
        {/*</div>*/}
        {/*<div className="Two">*/}
        {/*</div>*/}
      </div>
    );
  }
}

export default Home
