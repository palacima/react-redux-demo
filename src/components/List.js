import React, {Component} from 'react';

class List extends Component {
  render() {
    return(
      <ol>
        { this.props.techs.map((tech, index) => <li key = {index}> {tech} </li>)}
      </ol>
    )
  }
}

export default List
