import React from 'react';
import PropTypes from 'prop-types';
import Task from './task';

const TaskList = ({tasks, onTaskClick}) => (
    <ul>
        { tasks.map ((task, index) => (
            <Task key={index} {...task} onClick = {(index) => onTaskClick} />
        )) 
        }
    </ul>
)

TaskList.PropTypes = {
    tasks: PropTypes.array.isRequired,
    onTaskClick: PropTypes.func.isRequired,
}
