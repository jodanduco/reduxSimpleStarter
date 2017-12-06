//import React from 'react';
import React, {Component} from 'react';

// {Component} = const Component = React.Component 
// Xlass component, use when we need to add too logic to the component
class SearchBar  extends Component {

  constructor(props){
    super(props);
    this.state = {term: ''}; //Only class components have state obj
  }

// Always define a render method
  render() {
    return <div>
            <input onChange={event =>  this.setState({ term: event.target.value }) } />
            Value: {this.state.term}
          </div>
  }

  onInputChange(event) {
    this.setState({ term: vent.target.value });
    console.log(this.state.term);
  }

}


export default SearchBar;
