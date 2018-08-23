import React, { Component } from 'react';
let cardsList = [
    {
        id: 1,
        title: 'read a book',
        desc: 'i should read the book.',
        status: 'in-progress',
        tasks: []
    },
    {
        id: 1,
        title: 'read a book',
        desc: 'i should read the book.',
        status: 'in-progress',
        tasks: []
    },
    {
        id: 1,
        title: 'read a book',
        desc: 'i should read the book.',
        status: 'in-progress',
        tasks: []
    },
    {
        id: 1,
        title: 'read a book',
        desc: 'i should read the book.',
        status: 'in-progress',
        tasks: []
    },
    {
        id: 1,
        title: 'read a book',
        desc: 'i should read the book.',
        status: 'in-progress',
        tasks: []
    },
    {
        id: 1,
        title: 'read a book',
        desc: 'i should read the book.',
        status: 'in-progress',
        tasks: []
    }
]

class Index extends Component { 
    render () {
        let message = 'hello React'
        return (
            <div>
                <div>{message}</div>
                <GroceryList/>
            </div>
        )
    }
}

class GroceryList extends Component {
    render () {
        return (
            <ul>
                <ListItem quantity="1" name="Bread"> - children</ListItem>
                <ListItem quantity="6" name="Eggs"> - children</ListItem>
                <ListItem quantity="2" name="Milk"> - children</ListItem>
            </ul>
        )
    }
}

class ListItem extends Component {
    render () {
        return (
            <li>
                {this.props.quantity} - {this.props.name} {this.props.children}
            </li>
        )
    }
}

export default Index;