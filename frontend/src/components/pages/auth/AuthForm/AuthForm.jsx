import FormCard from "./FormCard";
import "./AuthForm.css";

function AuthForm({ data, onSubmit }) {
    return (
        <section className="auth-form">
            <FormCard data={data} onSubmit={onSubmit} />
        </section>
    );
}

export default AuthForm;