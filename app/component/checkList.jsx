import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class CheckList extends Component {
    checkInputKeyPress (event) {
        if (event.key === 'Enter') {
            this.props.taskCallbacks.add(this.props.cardId, event.target.value)
            event.target.value = ''
        }
    }
    render () {
        let tasks = this.props.tasks.map((task, taskIndex) => {
            return (
                <ReactCSSTransitionGroup transitionName="task"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}
                >
                    <li className="checklist-task" key={task.id}>
                        <input type="checkbox"
                            defaultChecked={task.done}
                            onChange={this.props.taskCallbacks.toggle.bind(null, this.props.cardId, task.id, taskIndex)}
                        />
                        {task.name}
                        <a href="#" className="checklist-task-remove"
                            onClick={
                                this.props.taskCallbacks.delete.bind(null, this.props.cardId, task.id, taskIndex)
                            }
                        > delete
                        </a>
                    </li>
                </ReactCSSTransitionGroup>
            )
        })
        return (
            <div className="checklist">
                <ul>
                    {tasks}
                </ul>
                <input type="text"
                    className="checklist-add-task"
                    placeholde="Type then hit Enter to add a task"
                    onKeyPress={this.checkInputKeyPress.bind(this)}
                />
            </div>
        )
    }
}

CheckList.propTypes = {
    cardId: PropTypes.number,
    tasks: PropTypes.arrayOf(PropTypes.object),
    taskCallbacks: PropTypes.object
}

export default CheckList