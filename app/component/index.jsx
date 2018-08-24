import React, { Component } from 'react';
import CardList from './cardList'
import AddCard from './addCard'
import '../public/css/base.css'
import 'whatwg-fetch'

class Index extends Component {
    constructor () {
        super()
        this.state = {
            cardList: [],
            showAddCard: false,
            addCardStatus: 'todo'
        }
    }
    componentDidMount () {
        if (localStorage.getItem('todo')) {
            this.setState({
                cardList: JSON.parse(localStorage.getItem('todo'))
            })
        } else {
            fetch('./json/todo.json')
            .then((res) => res.json())
            .then((resData) => {
                this.setState({
                    cardList: resData
                })
                localStorage.setItem('todo', JSON.stringify(resData))
            })
            .catch((error) => {
                console.log('Error fetching')
            })
        }
    }
    updateStorage () {
        localStorage.setItem('todo', JSON.stringify(this.state.cardList))
    }
    addTask (cardId, name) {
        let cards = this.state.cardList.map((card) => {
            if (card.id === cardId) {
                card.tasks.push({
                    id: (new Date()).getTime(),
                    done: false,
                    name: name
                })
            }
            return card
        })
        this.setState({
            cardList: cards
        })
        this.updateStorage()
    }
    deleteTask(cardId, taskId, taskIndex) {
        let cards = this.state.cardList.map((card) => {
            if (card.id === cardId) {
                card.tasks.splice(taskIndex, 1)
            }
            return card
        })
        this.setState({
            cardList: cards
        })
        this.updateStorage()
    }
    toggleTask (cardId, taskId, taskIndex) {
        let cards = this.state.cardList.map((card) => {
            if (card.id === cardId) {
                card.tasks.forEach((task) => {
                    if (task.id === taskId) {
                        task.done = !task.done
                    }
                })
            }
            return card
        })
        this.setState({
            cardList: cards
        })
        this.updateStorage()
    }
    toggleAddCard (status) {
        this.setState({
            addCardStatus: status,
            showAddCard: true
        })
    }
    addCard (card) {
        let newCard = {
            id: (new Date()).getTime(),
            title: card.title,
            desc: card.desc,
            color: this.state.addCardStatus === 'todo' ? 'red' : (this.state.addCardStatus === 'done' ? 'green' : 'orange'),
            status: this.state.addCardStatus,
            tasks: []
        }
        console.log(newCard)
        this.setState({
            cardList: [...this.state.cardList, newCard],
            showAddCard: false
        })
        this.updateStorage()
    }
    deleteCard (id) {
        let cards = this.state.cardList.filter((card) => {
            return card.id !== id
        })
        this.setState({
            cardList: cards
        })
        this.updateStorage()
    }
    render () {
        let addCard
        if (this.state.showAddCard) {
            addCard = <AddCard display="block" addCard={this.addCard.bind(this)}/>
        }
        return (
            <div>
                <CardList cards={this.state.cardList}
                    showAddCard={this.toggleAddCard.bind(this)}
                    taskCallbacks={{
                        toggle: this.toggleTask.bind(this),
                        delete: this.deleteTask.bind(this),
                        add: this.addTask.bind(this)
                    }}
                />
                {addCard}
            </div>
        )
    }
}

export default Index;