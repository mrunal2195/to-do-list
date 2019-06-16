import React, { Component } from 'react';
import '../styles/list.css';
import ListItem from './ListItem';
import { connect } from 'react-redux';
import { getList, createItem  } from '../reducers/actions';

class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            item: ""
        }
    }

    componentDidMount(){
        this.props.getList()
    }

    onpropChange = prop => e =>{
        this.setState({
            [prop]: e.target.value
        })
    }

    addTodo = () => {
       this.props.createItem(this.state);
    }

    renderItems = () => {
        const items = this.props.list || []
        const itemComponents = items.map(item => <ListItem key={item.item} item={item}/>)
        return itemComponents;
    }

    render() {
        return (
            <div className="container">
               <ul className="list-group to-do-list mt-5">
                    <li className="list-group-item active">TO DO LIST</li>
                </ul>
                <div className="input-group mb-3 mt-3">
                    <input type="text" className="form-control" placeholder="add to-do" onChange={this.onpropChange('item')} />
                    <div className="input-group-append">
                        <button className="btn btn-secondary" type="button" onClick={this.addTodo}>+</button>
                    </div>
                </div>
                <ul className="list-group to-do-list mt-1">
                   {this.renderItems()}
                </ul>
            </div>
        )
    }
}

const mapStateToprops = state => ({
    list : state.list
})

const mapDispatchToProps = (dispatch) => ({
    getList: () => dispatch(getList()),
    createItem: (item) => dispatch(createItem(item))
})

export default connect(mapStateToprops, mapDispatchToProps)(List)
