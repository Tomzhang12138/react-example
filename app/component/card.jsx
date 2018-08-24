import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CheckList from './checkList'
import marked from 'marked'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

let titlePropType = (props, propName, componentName) => {
    if (props[propName]) {
        let value = props[propName]
        if (typeof value !== 'string' || value.length > 80) {
            return new Error(
                `${propName} in ${componentName} is longer than 80 characters`
            )
        }
    }
}
class Card extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            showDetails: false
        }
    }
    toggleDetails () {
        this.setState({
            showDetails: !this.state.showDetails
        })
    }
    render () {
        let cardDetails
        if (this.state.showDetails) {
            cardDetails = (
                <div className="card-detail">
                    <span dangerouslySetInnerHTML={{__html:marked(this.props.desc)}}></span>
                    <CheckList cardId={this.props.id}
                        tasks={this.props.tasks}
                        taskCallbacks={this.props.taskCallbacks}
                    />
                </div>
            )
        }
        let sideStyle = {
            position: 'absolute',
            zIndex: -1,
            top: 0,
            bottom: 0,
            left: 0,
            width: 7,
            backgroundColor: this.props.color
        }
        return (
            <div className="card">
                <div style={sideStyle}/>
                <div className={this.state.showDetails ? 'card-title is-open' : 'card-title'} onClick={
                   this.toggleDetails.bind(this)
                }>
                    {this.props.title}
                    <a href="#" onClick={this.props.deleteCard.bind(null, this.props.id)}>×</a>
                </div>
                <ReactCSSTransitionGroup transitionName="detail"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}
                >
                    {cardDetails}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

Card.propTypes = {
    id: PropTypes.number,
    title: titlePropType,
    desc: PropTypes.string,
    color: PropTypes.string,
    tasks: PropTypes.arrayOf(PropTypes.object),
    taskCallbacks: PropTypes.object,
    deleteCard: PropTypes.func
}
export default Card