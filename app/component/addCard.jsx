import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddCard extends Component {
    constructor (props) {
        super()
        this.state = {
            title: '',
            desc: '',
            style: {
                display: props.display
            }
        }
    }
    handleTitle (event) {
        this.setState({
            title: event.target.value
        })
    }
    handleDesc (event) {
        this.setState({
            desc: event.target.value
        })
    }
    render () {
        return (
            <div className='add-card-container' style={this.state.style}>
                <div className="form">
                    <div className="line-one">
                        <label htmlFor="card-title">标题</label>
                        <input type="text" id="card-title" placeholder="输入标题"
                            onChange={this.handleTitle.bind(this)}    
                        />
                    </div>
                    <div className="line-one">
                        <label htmlFor="card-title">简介</label>
                        <textarea type="text" id="card-title" placeholder="输入简介"
                            onChange={this.handleDesc.bind(this)} 
                        />
                    </div>
                    <div className="line-one center">
                        <button type="button" onClick={this.props.addCard.bind(null, this.state)}>添加</button>
                    </div>
                </div>
            </div>
        )
    }
}

AddCard.propTypes = {
    addCard: PropTypes.func,
    display: PropTypes.string
}

export default AddCard