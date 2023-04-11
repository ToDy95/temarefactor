import React from "react";
import styles from '../styles/TaskViewer.module.css'

const TaskViewer = (props) => {
    return (
        <div className={styles.container}>
            {props.data.map((elem, index) => {
                return (
                    <div key={index} className={styles.card} >
                        <div className={styles.firstLine}>
                            <span className={styles.idTask}>{elem.id}</span>
                            <span className={styles.progress}>{elem.status}</span>
                        </div>
                        <div className={styles.secondLine}>
                            <span className={styles.bold}>{elem.message}</span>
                        </div>
                        <div className={styles.lastLine}>
                            <span className={styles.dueDate}>
                                Due Date
                            </span>
                            <span className={styles.bold}>{elem.dueDate.toLocaleDateString()}</span>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default TaskViewer;