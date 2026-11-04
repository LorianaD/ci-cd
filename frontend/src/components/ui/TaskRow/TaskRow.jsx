import { deleteIcon, editIcon } from "@/assets";

function TaskRow({ task, onToggle, onEdit, onDelete }) {
    const isCompleted = task.status === "done";

    const formattedDate = task.date
        ? new Date(task.date).toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "short",
        })
        : "";

    return (
        <article className="task-row">
            <div className="task-row__checkbox">
                <input
                    type="checkbox"
                    checked={isCompleted}
                    onChange={() => onToggle?.(task)}
                    aria-label={`Marquer ${task.title} comme ${
                        isCompleted ? "à faire" : "terminée"
                    }`}
                />
            </div>

            <div className="task-row__content">
                <h3 className="task-row__title">
                    {task.title}
                </h3>

                {task.description && (
                    <p className="task-row__description">
                        {task.description}
                    </p>
                )}
            </div>

            <div className="task-row__date">
                <CalendarDays size={16} />
                <time>{formattedDate}</time>
            </div>

            <Badge
                type="priority"
                value={task.priority}
            />

            <Badge
                type="status"
                value={task.status}
            />

            <div className="task-row__actions">
                <button
                    type="button"
                    onClick={() => onEdit?.(task)}
                    aria-label={`Modifier ${task.title}`}
                >
                    <img src={editIcon} />
                </button>

                <button
                    type="button"
                    onClick={() => onDelete?.(task)}
                    aria-label={`Supprimer ${task.title}`}
                >
                    <img src={deleteIcon} />
                </button>
            </div>
        </article>
    );
}

export default TaskRow;