import { Link } from "react-router";
import { Button } from "@/components/ui";
import FormField from "./FormField";

function FormCard({ data, onSubmit }) {
    const { header, fields, actions } = data;

    return (
        <div className="form-card">
            <header className="form-card__header">
                <h1>{header.title}</h1>
                {header.description && (
                    <p>{header.description}</p>
                )}
            </header>

            <form onSubmit={onSubmit}>
                <FormField fields={fields} />

                {actions.forgotPassword && (
                    <Link
                        to={actions.forgotPassword.url}
                        className="form-card__forgot"
                    >
                        {actions.forgotPassword.label}
                    </Link>
                )}

                {actions.checkConnect && (
                    <label className="form-card__checkbox">
                        <input
                            type="checkbox"
                            name={actions.checkConnect.name}
                        />
                        {actions.checkConnect.label}
                    </label>
                )}

                {actions.acceptTerms && (
                    <div className="form-card__checkbox">
                        <input
                            type="checkbox"
                            id={actions.acceptTerms.name}
                            name={actions.acceptTerms.name}
                            required={actions.acceptTerms.required}
                        />
                        <label htmlFor={actions.acceptTerms.name}>
                            {actions.acceptTerms.label}{" "}
                            <Link to={actions.acceptTerms.link.url}>
                                {actions.acceptTerms.link.label}
                            </Link>
                        </label>
                    </div>
                )}

                <Button
                    type="submit"
                    variant={actions.btn.variant}
                    label={actions.btn.label}
                />
            </form>

            {header.redirection && (
                <p className="form-card__redirection">
                    {header.redirection.question}{" "}
                    <Link to={header.redirection.link.url}>
                        {header.redirection.link.label}
                    </Link>
                </p>
            )}

            {actions.registerRedirection && (
                <p className="form-card__redirection">
                    {actions.registerRedirection.question}{" "}
                    <Link to={actions.registerRedirection.link.url}>
                        {actions.registerRedirection.link.label}
                    </Link>
                </p>
            )}
        </div>
    );
}

export default FormCard;