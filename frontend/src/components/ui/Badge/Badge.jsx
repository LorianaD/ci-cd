import { statusConfig, priorityConfig } from "@/data";
import "./Badge.css";

function Badge({ type = "status", value }) {
    const config = type === "priority"
        ? priorityConfig
        : statusConfig;

    const badge = config[value];

    if (!badge) return null;

    return (
        <span className={`badge badge--${type}-${value}`}>
            {type === "status" && (
                <span className="badge__dot" aria-hidden="true" />
            )}

            {badge.label}
        </span>
    );
}

export default Badge;