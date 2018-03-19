import React, {Component} from 'react';
import ItemsPage from './ItemsPage'
import AddItem from './AddItem'
import {Route, Link} from 'react-router-dom'
import {removeItem} from '../redux/actions'

class Main extends Component{

  constructor() {
    super()
  }

  render() {
    console.log(this.props)
    return (<div>
      <h1>
        <Link to="/">Technologies</Link>
      </h1>
        <Route exact path="/" render={() => (
          <div>
            <ItemsPage {...this.props}/>
          </div>
        )}/>
        <Route path="/addItem" render={({history}) => (
          <AddItem {...this.props}/>
        )}/>
      </div>
  )}
}

export default Main
