import React from "react";
import { Container, Row } from "reactstrap";
import "./index.scss";
import { Formik } from 'formik';
import { TaskSchema } from "./TaskValidate";
import { useSelector, useDispatch } from "react-redux";
import {addTask, deleteTask} from '../Task/taskSlice';


function Task() {
    const todoTasks = useSelector((state) => state.task.dataResponse);
    const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <div className="list col-6">
          <p>Todolist</p>
          <ul>
            {todoTasks.length > 0 ? todoTasks.map((item) => {
              return (
                <li key={item.id}>
                  <div className="list-task-element">
                    <span>{item.title}</span>
                    <div className="list-task-element-action">
                      <div className="list-task-element-action-button">
                        Done
                      </div>
                      <div className="list-task-element-action-button" onClick={() => dispatch(deleteTask(item))}>
                        Delete
                      </div>
                    </div>
                  </div>
                </li>
              );
            }) : <p>Nothing...!</p>}
          </ul>
        </div>
        <div className="form-add col-6">
          <p>Add Task</p>
          <Formik
            initialValues={{ title: "" }}
            validationSchema={TaskSchema}
            onSubmit={(values) => {
              //submit form
              console.log(values);
              dispatch(addTask(values));
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                  placeholder="Enter task here..."
                  className="form-add-input-task"
                />
                {errors.title && touched.title && <p className="form-add-error-msg">{errors.title}</p>}
                <button type="submit" className="form-add-btn-add">
                  Add
                </button>
              </form>
            )}
          </Formik>
        </div>
      </Row>
    </Container>
  );
}

export default Task;
