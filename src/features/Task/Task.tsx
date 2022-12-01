import React from 'react';
import { Container, Row } from 'reactstrap';
import './index.scss'

function Task() {
    return (
        <Container>
            <Row>
                <div className="list col-6">
                    <p>Todolist</p>
                    <ul>
                        <li>
                            <div className="list-task-element">
                                <span>Task 1</span>
                                <div className="list-task-action">
                                    <div className="list-task-action-delete">
                                        delete
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="list-task-element">
                                <span>Task 2</span>
                                <div className="list-task-action">
                                    <div className="list-task-action-delete">
                                        delete
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="task-action col-6">
                    aafsdfsdfsdf
                </div>
            </Row>
        </Container>
    );
}

export default Task;