import { NavLink } from "react-router";
import { logoutIcon } from "../../../../assets";
import SidebarData from "./SidebarData";
import "./Sidebar.css";

function Sidebar({ tasks = [], projects = [], user = null }) {
    const data = SidebarData;

    const totalTasks = tasks.length;

    const completedTasks = tasks.filter(
        (task) => task.status === "completed"
    ).length;

    const username = user?.username ?? "Loriana";
    const email = user?.email ?? "loriana@example.com";

    const initials = user?.username
        ?.trim()
        .split(/\s+/)
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase() ?? "";

    return (
        <aside className="sidebar">
            <div className="sidebar__content">

                <div className="sidebar__brand">
                    <img
                        className="sidebar__logo"
                        src={data.brand.logo}
                        alt="TaskFlow"
                    />
                </div>

                <nav className="sidebar__navigation">
                    <ul className="sidebar__nav-list">
                        {data.navigation.items.map((item) => (
                            <li
                                key={item.id}
                                className="sidebar__nav-item"
                            >
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "sidebar__link sidebar__link--active"
                                            : "sidebar__link"
                                    }
                                >
                                    <div className="sidebar__link-content">
                                        {item.icon && (
                                            <span
                                                className="sidebar__icon"
                                                style={{ maskImage: `url("${item.icon}")` }}
                                                aria-hidden="true"
                                            />
                                        )}

                                        <span className="sidebar__link-label">
                                            {item.label}
                                        </span>
                                    </div>

                                    {item.id === "tasks" && (
                                        <span className="sidebar__count">
                                            {totalTasks}
                                        </span>
                                    )}

                                    {item.id === "completed" && (
                                        <span className="sidebar__count">
                                            {completedTasks}
                                        </span>
                                    )}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="sidebar__projects">
                    <div className="sidebar__projects-content">

                        <div className="sidebar__projects-header">
                            <span className="sidebar__projects-title">
                                {data.projects.title}
                            </span>

                            <span className="sidebar__projects-soon">
                                Bientôt
                            </span>
                        </div>

                        <ul className="sidebar__projects-list">
                            {projects.map((project) => (
                                <li
                                    key={project.id}
                                    className="sidebar__project-item"
                                >
                                    <div
                                        className="sidebar__project-color"
                                        style={{
                                            backgroundColor: project.color
                                        }}
                                    ></div>

                                    <span className="sidebar__project-name">
                                        {project.name}
                                    </span>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>

            </div>

            <div className="sidebar__footer">
                <div className="sidebar__user">

                    <div className="sidebar__avatar">
                        <span className="sidebar__initials">
                            {initials}
                        </span>
                    </div>

                    <div className="sidebar__user-info">
                        <span className="sidebar__username">
                            {username}
                        </span>

                        <span className="sidebar__email">
                            {email}
                        </span>
                    </div>

                    <div className="sidebar__logout">
                        <img
                            className="sidebar__logout-icon"
                            src={logoutIcon}
                            alt="Déconnexion"
                        />
                    </div>                    
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;