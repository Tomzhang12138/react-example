import React, { Component } from 'react'
import List from './lisr'

class CardBoard extends Component {
    render () {
        return (
            <div className="app">
                <List id="todo" title="To Do" cards= {
                    this.props.cards.filter((crad) => {
                        cards.status === "todo"
                    })
                }
                />
                <List id="in-progress" title="in progress" cards= {
                    this.props.cards.filter((card) => {
                        card.status === 'in-progress'
                    })
                }
                />
                 <List id="done" title="Done" cards= {
                    this.props.cards.filter((card) => {
                        card.status === 'done'
                    })
                }
                />
            </div>
        )
    }
}