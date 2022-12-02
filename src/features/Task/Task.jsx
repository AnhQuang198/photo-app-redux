import React from 'react';
import { Container, Row } from 'reactstrap';
import './index.scss'

function Task() {
    var todoTasks = [
        { id: 1, title: "Task 1", isCompleted: false },
        { id: 2, title: "Task 2", isCompleted: false },
        { id: 3, title: "Task 3", isCompleted: false },
        { id: 4, title: "Task 4", isCompleted: true },
    ]

    return (
        <Container>
            <Row>
                <div className="list col-6">
                    <p>Todolist</p>
                    <ul>
                        {todoTasks.map(item => {
                            return <li>
                                <div className="list-task-element">
                                    <span>{item.title}</span>
                                    <div className="list-task-element-action">
                                        <div className="list-task-element-action-button">
                                            Done
                                        </div>
                                        <div className="list-task-element-action-button">
                                            Delete
                                        </div>
                                    </div>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
                <div className="form-add col-6">
                    <p>Add Task</p>
                    <input type="text" placeholder='Enter task here...' class='form-add-input-task'/>
                    <button class='form-add-btn-add'>Add</button>
                </div>
            </Row>
        </Container>
    );
}

export default Task;