import React, { Component } from 'react'
import PropTypes from 'prop-types'
import List from './list'

class CardBoard extends Component {
    render () {
        return (
            <div className="app">
                <List id="todo" title="To Do" status="todo"
                    showAddCard={this.props.showAddCard}
                    deleteCard={this.props.deleteCard}
                    cards= {
                        this.props.cards.filter((card) => {
                            return card.status === "todo"
                        })
                    }
                    taskCallbacks={this.props.taskCallbacks}
                />
                <List id="in-progress" title="in progress" status="in-progress"
                    showAddCard={this.props.showAddCard}
                    deleteCard={this.props.deleteCard}
                    cards= {
                        this.props.cards.filter((card) => {
                            return card.status === 'in-progress'
                        })
                    }
                    taskCallbacks={this.props.taskCallbacks}
                />
                <List id="done" title="Done" status="done"
                    showAddCard={this.props.showAddCard}
                    deleteCard={this.props.deleteCard}
                    cards= {
                        this.props.cards.filter((card) => {
                            return card.status === 'done'
                        })
                    }
                    taskCallbacks={this.props.taskCallbacks}
                />
            </div>
        )
    }
}

CardBoard.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object),
    taskCallbacks: PropTypes.object,
    showAddCard: PropTypes.func,
    deleteCard: PropTypes.deleteCard
}

export default CardBoard