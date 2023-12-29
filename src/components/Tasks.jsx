import Task from "./Task"
const Tasks = ({ tasksProps, onDelete, onToggle }) => {

    return (
        <>
            {tasksProps.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />

            ))}
        </>
    )
}

export default Tasks