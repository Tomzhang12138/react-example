import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from './card'

class List extends Component {
    render () {
        let cards = this.props.cards.map((card) => {
            return (
                <Card id={card.id}
                    taskCallbacks={this.props.taskCallbacks}
                    key={card.id}
                    title = {card.title}
                    desc={card.desc}
                    color={card.color || '#eee'}
                    tasks={card.tasks}
                    deleteCard={this.props.deleteCard}
                />
            )
        })
        return (
            <div className="list">
                <h1>
                    {this.props.title}
                    <a href="#" className="add-card" onClick={this.props.showAddCard.bind(null, this.props.status)}>
                        +
                    </a>
                </h1>
                {cards}
            </div>
        )
    }
}

List.propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.object),
    taskCallbacks: PropTypes.object,
    showAddCard: PropTypes.func,
    deleteCard: PropTypes.func
}
export default List 