//import React from 'react';
import React, {Component} from 'react';

// Xlass component, use when we need to add too logic to the component
class SearchBar  extends Component {

// Always define a render method
  render() {
    return <input onChange={this.onInputChange} />;
  }

  onInputChange(event){
    console.log(event.target.value);
  }

}


export default SearchBar;
