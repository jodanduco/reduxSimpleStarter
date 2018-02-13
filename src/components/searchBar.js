//import React from 'react';
import React, {Component} from 'react';

// {Component} = const Component = React.Component 
// Class component, use when we need to add too logic to the component
// Class component
class SearchBar  extends Component {

  constructor(props){
    super(props);
    this.state = {term: ''}; //Only class components have state obj
  }

// Always define a render method
  render() {
    return (
      <div className="search-bar">
        <input 
          value={this.state.term}
          onChange={ event => this.onInputChange(event.target.value) } />
      </div>
    );
  }


  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;
