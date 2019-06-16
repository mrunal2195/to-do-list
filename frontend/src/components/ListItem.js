import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateItem, deleteItem } from '../reducers/actions'


class ListItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      item: this.props.item.item,
      isChecked: this.props.item.isChecked,
      _id: this.props.item._id,
      date: this.props.item.date
    }
  }

  onPropChange = prop => e => {
    this.setState({
      [prop] : e.target.checked
    }, () => this.props.updateItem(this.state, this.state._id) )
  }
  
  deleteItem = () => {
    this.props.deleteItem(this.state._id)
  }

  render() {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={this.onPropChange('isChecked')}
          checked={this.props.item.isChecked}/>
          <label className="form-check-label">{this.props.item.item}</label>
        </div>
        <span><i className="far fa-trash-alt" onClick={this.deleteItem}></i></span>
      </li>
    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  updateItem: (item, id) => dispatch(updateItem(item, id)),
  deleteItem: (id) => dispatch(deleteItem(id))

})

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
