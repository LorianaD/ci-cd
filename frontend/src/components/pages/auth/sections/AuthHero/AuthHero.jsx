import { Badge } from "@/components/ui";
import "./AuthHero.css";

function AuthHero({ data }) {
    const {
        logo,
        slogan,
        description,
        tasks,
        benefits
    } = data;

    return (
        <section className="auth-hero">
            <div className="auth-hero__logo">
                <img src={logo} alt="TaskFlow" />
            </div>

            <div className="auth-hero__header">
                <h2 className="auth-hero__header-title">
                    {slogan.map((line, index) => (
                        <span key={index}>
                            {line}
                            {index < slogan.length - 1 && <br />}
                        </span>
                    ))}
                </h2>

                {description && (
                    <p className="auth-hero__header-description">
                        {description}
                    </p>
                )}
            </div>

            <div className="auth-hero__exemple">
                {tasks && (
                    <div className="auth-hero__tasks">
                        {tasks.map((task) => (
                            <div
                                className="auth-hero__task"
                                key={task.id}
                            >
                                <span>{task.title}</span>

                                <Badge
                                    type="status"
                                    value={task.status}
                                />
                            </div>
                        ))}
                    </div>
                )}

                {benefits && (
                    <ul className="auth-hero__benefits">
                        {benefits.map((benefit) => (
                            <li key={benefit.id}>
                                <span
                                    className="auth-hero__check"
                                    aria-hidden="true"
                                >
                                    ✓
                                </span>
                                {benefit.text}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
}

export default AuthHero;