import { TaskRow } from "@/components/ui";
import "./TaskList.css";

function TaskList({ tasks = [], onToggle, onEdit, onDelete }) {
    return (
        <section className="task-list" aria-label="Liste des tâches">
            {tasks.map((task) => (
                <TaskRow
                    key={task.id}
                    task={task}
                    onToggle={onToggle}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </section>
    );
}

export default TaskList;