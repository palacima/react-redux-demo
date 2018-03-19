import React from 'react'
import PropTypes from 'prop-types'

function Item(props){
  const item = props.item
  return <figure className="figure">
    <img className="item" src={item.imageLink} alt={item.description}/>
    <figcaption><p> {item.description} </p></figcaption>
    <div className="button-container">
      <button className="remove-button" onClick= {() => {
        props.removeItem(props.index)
      }}>Remove</button>
    </div>
  </figure>
}

Item.propTypes = {
  item: PropTypes.object.isRequired
}


export default Item
