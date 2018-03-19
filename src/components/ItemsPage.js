import React from 'react'
import Item from './Item'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function ItemsPage(props){
  return <div>
    <Link className="addIcon" to="/AddItem"></Link>
    { /*<button className="addIcon" onClick={props.onNavigate}></button>*/}
    <div className='itemGrid'>
      {props.items
        .sort(function(x,y) {
          return(y.id - x.id)
        })
        .map((item, index) => <Item key={index} item={item} {...props} index={index}/>)}
    </div>
  </div>

}

ItemsPage.propTypes = {
  items: PropTypes.array.isRequired
}

export default ItemsPage
