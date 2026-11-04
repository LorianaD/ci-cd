import Badge from "../Badge";

function TaskCard({ task }) {
    return (
        <article className="task-card">
            <div className="task-card__header">
                <Badge
                    type="priority"
                    value={task.priority}
                />
            </div>

            <div className="task-card__content">
                <h3 className="task-card__title">
                    {task.title}
                </h3>

                {task.description && (
                    <p className="task-card__description">
                        {task.description}
                    </p>
                )}
            </div>

            <div className="task-card__footer">
                <time className="task-card__date">
                    {task.date}
                </time>

                <Badge
                    type="status"
                    value={task.status}
                />
            </div>
        </article>
    );
}

export default TaskCard;